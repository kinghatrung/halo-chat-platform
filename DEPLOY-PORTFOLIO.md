# Hướng dẫn deploy portfolio lên VPS

Toàn bộ lệnh đã dùng để đưa portfolio lên VPS với CI/CD (GitHub Actions), domain, HTTPS và Cloudflare.
Chạy lại theo đúng thứ tự là dựng được từ đầu.

| Thông số | Giá trị |
|---|---|
| VPS | Ubuntu Server 24.04, IP `180.93.196.248` |
| Domain | `kun.io.vn` (đăng ký ở Tenten, DNS ở Cloudflare) |
| Repo | `kinghatrung/portfolio`, nhánh `main` |
| Thư mục web trên VPS | `/var/www/portfolio` |

Luồng hoạt động:

```text
Push code / bấm Lưu ở /admin → commit lên main → GitHub Actions: lint + test + build → rsync lên VPS → Nginx → Cloudflare → người xem
```

---

## 1. Đăng nhập VPS (máy của bạn)

```powershell
ssh root@180.93.196.248
```

Nếu gặp `REMOTE HOST IDENTIFICATION HAS CHANGED`: **dừng lại, không nhập mật khẩu**. Chỉ khi đã xác minh khóa
(nhờ nhà cung cấp chạy `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub` và so sánh) mới xóa khóa cũ:

```bash
ssh-keygen -R 180.93.196.248
```

## 2. Cài phần mềm và tạo user deploy (VPS)

```bash
apt update && apt upgrade -y          # hỏi về sshd_config → chọn "keep the local version"
apt install -y nginx rsync certbot python3-certbot-nginx
adduser --disabled-password --gecos "" deploy
mkdir -p /var/www/portfolio
chown deploy:deploy /var/www/portfolio
reboot
```

Kiểm tra: mở `http://180.93.196.248` thấy trang **Welcome to nginx!**.

## 3. Cấu hình Nginx cho portfolio (VPS)

```bash
DOMAIN=kun.io.vn
cat > /etc/nginx/sites-available/portfolio <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
nginx -t && systemctl reload nginx
```

`try_files ... /index.html` là bắt buộc, thiếu nó thì `/admin-login` báo 404.

## 4. Tạo SSH key cho GitHub Actions (VPS)

```bash
su - deploy -c 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && ssh-keygen -t ed25519 -f ~/.ssh/github_actions -N "" -C github-actions && cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'

# Thử đăng nhập bằng key (kết quả đúng: KEY_LOGIN_OK / deploy)
su - deploy -c 'ssh -i ~/.ssh/github_actions -o BatchMode=yes -o StrictHostKeyChecking=accept-new deploy@127.0.0.1 "echo KEY_LOGIN_OK; whoami"'

# Lấy giá trị cho secrets (KHÔNG gửi private key cho ai)
base64 -w0 /home/deploy/.ssh/github_actions; echo     # → VPS_SSH_KEY
ssh-keyscan -t ed25519 180.93.196.248 2>/dev/null      # → VPS_KNOWN_HOSTS
```

## 5. Thêm secrets trên GitHub

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Tên | Giá trị |
|---|---|
| `VPS_HOST` | `180.93.196.248` |
| `VPS_SSH_KEY` | Chuỗi base64 ở bước 4 (một dòng, không có `BEGIN`/`END`) |
| `VPS_KNOWN_HOSTS` | Dòng `180.93.196.248 ssh-ed25519 ...` ở bước 4 |

GitHub không cho xem lại secret. Cần lại thì lấy từ VPS và bấm bút chì để cập nhật.

## 6. Workflow CI/CD và deploy lần đầu (máy của bạn)

File `.github/workflows/deploy.yml` (đã có trong repo):

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:

concurrency:
  group: deploy-${{ github.ref }}

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v5
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build

      - name: Deploy to VPS
        if: github.event_name == 'push'
        env:
          VPS_HOST: ${{ secrets.VPS_HOST }}
          VPS_SSH_KEY: ${{ secrets.VPS_SSH_KEY }}
          VPS_KNOWN_HOSTS: ${{ secrets.VPS_KNOWN_HOSTS }}
        run: |
          install -m 700 -d ~/.ssh
          echo "$VPS_KNOWN_HOSTS" > ~/.ssh/known_hosts
          echo "$VPS_SSH_KEY" | base64 -di > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          rsync -az --delete dist/ "deploy@$VPS_HOST:/var/www/portfolio/"
```

Đẩy code:

```bash
git pull --rebase origin main
git add -A
git commit -m "..."
git push origin main
```

Theo dõi ở tab **Actions** của repo. Khi đã xanh, kiểm tra và xóa private key khỏi VPS:

```bash
ls /var/www/portfolio                 # có index.html, assets
rm -f /home/deploy/.ssh/github_actions
ls /home/deploy/.ssh/                 # còn authorized_keys, github_actions.pub, known_hosts
```

## 7. Trỏ domain và bật HTTPS

Thêm 2 bản ghi DNS (lúc đầu ở Tenten, sau bước 8 thì ở Cloudflare):

| Loại | Tên | Giá trị |
|---|---|---|
| A | `@` | `180.93.196.248` |
| A | `www` | `180.93.196.248` |

Khi domain đã trỏ về VPS (VPS):

```bash
certbot --nginx -d kun.io.vn -d www.kun.io.vn
certbot renew --dry-run               # đúng: "all simulated renewals succeeded"
```

Nếu certbot báo lỗi DNS: chờ 30 phút rồi thử lại một lần, không chạy lại liên tục.

## 8. Chuyển DNS sang Cloudflare

1. Thêm `kun.io.vn` vào Cloudflare, gói **Free**.
2. **DNS → Records**: các bản ghi A (`kun.io.vn`, `www`, các subdomain) trỏ `180.93.196.248`, bật **Proxied**.
3. **SSL/TLS** → chọn **Full (Strict)**. Không dùng **Flexible** (gây `ERR_TOO_MANY_REDIRECTS`).
4. Ở Tenten, đổi nameserver thành:
   ```text
   pedro.ns.cloudflare.com
   rosemary.ns.cloudflare.com
   ```
5. Chờ Cloudflare báo **Active** và **SSL/TLS → Edge Certificates** báo Active, rồi trên VPS:
   ```bash
   certbot renew --dry-run
   ```

## 9. Cache cho file build và 404 cho file không tồn tại (VPS)

```bash
nano /etc/nginx/sites-available/portfolio
```

Dán ngay dưới dấu `}` của khối `location / { ... }`:

```nginx
    # Hashed build files never change, so browsers may keep them for a year.
    location ^~ /assets/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # A missing file (e.g. /ai-catalog.json) is a 404, not the app's HTML.
    location ~* \.[a-z0-9]+$ {
        try_files $uri =404;
    }
```

Lưu (**Ctrl+O**, Enter, **Ctrl+X**) rồi:

```bash
nginx -t && systemctl reload nginx
for p in /ai-catalog.json /llms.txt /admin-login /; do printf '%s -> ' $p; curl -s -o /dev/null -w "%{http_code}\n" https://kun.io.vn$p; done
# đúng: /ai-catalog.json -> 404, còn lại 200
```

---

## Thêm một subdomain mới

Ví dụ `test.kun.io.vn`; đổi `SUB` thành tên bạn muốn.

1. Cloudflare → **DNS → Add record**: A, tên `test`, giá trị `180.93.196.248`, **Proxied**.
2. Trên VPS:

```bash
SUB=test
mkdir -p /var/www/$SUB && chown -R deploy:deploy /var/www/$SUB
cat > /etc/nginx/sites-available/$SUB <<EOF
server {
    listen 80;
    server_name $SUB.kun.io.vn;
    root /var/www/$SUB;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF
ln -sf /etc/nginx/sites-available/$SUB /etc/nginx/sites-enabled/$SUB
nginx -t && systemctl reload nginx
certbot --nginx -d $SUB.kun.io.vn
```

- Web có backend: thay `root`/`index`/`location` bằng
  ```nginx
  location / {
      proxy_pass http://127.0.0.1:3001;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-Proto $scheme;
  }
  ```
- Deploy tự động: workflow riêng trong repo của web đó, rsync tới `/var/www/<tên>/`, kèm SSH key mới (làm lại bước 4–5).

Xóa subdomain:

```bash
rm /etc/nginx/sites-enabled/test /etc/nginx/sites-available/test
rm -rf /var/www/test
nginx -t && systemctl reload nginx
certbot delete --cert-name test.kun.io.vn
```

## Bảo trì định kỳ (VPS)

```bash
apt update && apt upgrade -y          # sshd_config → vẫn chọn "keep the local version"
certbot renew --dry-run
```

## Lưu ý

- Cloudflare **SSL/TLS** luôn để **Full (Strict)**.
- Secret `VPS_HOST` giữ là **IP**, không đổi sang domain (proxy Cloudflare không chuyển SSH).
- Không bật quy tắc "bắt buộc qua PR / bắt buộc CI đạt" cho `main`: trang quản trị commit thẳng lên `main`.
- Thay ảnh mà giữ tên file cũ: Cloudflare → **Caching → Purge Cache** nếu vẫn thấy ảnh cũ.
- Khóa SSH của VPS: `SHA256:gFUsoYNwPzZvVJWKx5Rnmqabw98VznpcXgVm3JfS5yA`. Máy báo khóa khác mà bạn không cài lại VPS thì dừng lại kiểm tra.
