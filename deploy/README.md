# Triển khai Nimbo lên VPS — `chat.kun.io.vn`

Cùng VPS và cùng cách làm với portfolio (`kun.io.vn`): Nginx trên host, chứng chỉ bằng **certbot**,
user `deploy`, GitHub Actions đăng nhập bằng SSH key riêng. Khác biệt duy nhất: Nimbo có backend nên chạy
trong **Docker** — image build trên GitHub Actions, VPS chỉ kéo về và chạy.

```text
Push lên main → GitHub Actions: kiểm tra + build image → GHCR → VPS kéo image → Docker → Nginx → Cloudflare → người dùng
```

```
Trình duyệt ──HTTPS──► Cloudflare (Proxied, SSL Full strict)
                            │
                       ┌────▼──────────────┐  Nginx trên host — dùng chung mọi site
                       │ nginx             │  kun.io.vn, test.kun.io.vn → giữ nguyên
                       └────┬──────────────┘  chat.kun.io.vn ↓
          /api/, /socket.io/ │                      │ còn lại
                 127.0.0.1:5100 ▼                      ▼ 127.0.0.1:3100
             ┌──────────┐   ┌──────────┐          ┌──────────┐
             │ nimbo-api│──►│  redis   │          │ nimbo-web│     (stack Docker /opt/nimbo)
             └────┬─────┘   └──────────┘          └──────────┘
                  └──► MongoDB Atlas
```

| File trong thư mục này | Đặt ở đâu trên VPS |
|---|---|
| `docker-compose.yml` | `/opt/nimbo/docker-compose.yml` (CI tự copy mỗi lần deploy) |
| `.env.example` | điền rồi lưu thành `/opt/nimbo/.env` (một lần, **không** commit) |
| `nginx/chat.kun.io.vn.conf` | `/etc/nginx/sites-available/chat.kun.io.vn` |
| `nginx/cloudflare-realip.conf` | `/etc/nginx/conf.d/cloudflare-realip.conf` |

Mọi lệnh "(VPS)" chạy với `root` (`ssh root@<IP VPS>`).

---

## 1. Cài Docker và cho user `deploy` dùng Docker (VPS)

User `deploy` đã có từ lúc làm portfolio, chỉ cần thêm vào nhóm `docker`.

```bash
curl -fsSL https://get.docker.com | sh
docker compose version
usermod -aG docker deploy
mkdir -p /opt/nimbo && chown deploy:deploy /opt/nimbo
```

> Nhóm `docker` có quyền tương đương root, nên key SSH của `deploy` phải giữ kín như mật khẩu root.

## 2. File bí mật `/opt/nimbo/.env` (VPS)

```bash
openssl rand -hex 32        # chạy 3 lần: REDIS_PASSWORD, JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN
nano /opt/nimbo/.env        # dán nội dung deploy/.env.example rồi điền
chown deploy:deploy /opt/nimbo/.env && chmod 600 /opt/nimbo/.env
```

`IMAGE_PREFIX=ghcr.io/kinghatrung`.

## 3. Nginx + HTTPS (máy của bạn → VPS)

Từ thư mục repo trên máy bạn:

```powershell
scp deploy/nginx/chat.kun.io.vn.conf deploy/nginx/cloudflare-realip.conf root@<IP VPS>:/tmp/
```

Trước đó thêm bản ghi DNS ở Cloudflare: **A**, tên `chat`, giá trị IP VPS, **Proxied** (giống `test`).

Trên VPS:

```bash
cp /tmp/cloudflare-realip.conf /etc/nginx/conf.d/
cp /tmp/chat.kun.io.vn.conf /etc/nginx/sites-available/chat.kun.io.vn
ln -sf /etc/nginx/sites-available/chat.kun.io.vn /etc/nginx/sites-enabled/chat.kun.io.vn
nginx -t && systemctl reload nginx
certbot --nginx -d chat.kun.io.vn          # certbot tự thêm 443 + chứng chỉ + chuyển hướng 80 → 443
nginx -t && systemctl reload nginx
```

- `cloudflare-realip.conf` áp dụng cho **mọi** site (kể cả portfolio): log nginx và giới hạn tốc độ của app
  thấy IP thật của người dùng thay vì IP của Cloudflare. Không ảnh hưởng gì khác.
- Từ lúc này tới khi deploy lần đầu, `https://chat.kun.io.vn` báo **502** — bình thường, container chưa chạy.

## 4. SSH key cho GitHub Actions của repo này (VPS)

Key riêng cho repo Nimbo (giống bước 4 của portfolio, khác tên file):

```bash
su - deploy -c 'ssh-keygen -t ed25519 -f ~/.ssh/nimbo_actions -N "" -C nimbo-actions && cat ~/.ssh/nimbo_actions.pub >> ~/.ssh/authorized_keys'

# Thử (đúng: KEY_LOGIN_OK / deploy / có "docker" trong danh sách nhóm)
su - deploy -c 'ssh -i ~/.ssh/nimbo_actions -o BatchMode=yes deploy@127.0.0.1 "echo KEY_LOGIN_OK; whoami; id -nG"'

base64 -w0 /home/deploy/.ssh/nimbo_actions; echo     # → VPS_SSH_KEY
ssh-keyscan -t ed25519 <IP VPS> 2>/dev/null          # → VPS_KNOWN_HOSTS
```

## 5. GitHub (repo `kinghatrung/halo-chat-platform`)

**Settings → Secrets and variables → Actions**

| Loại | Tên | Giá trị |
|---|---|---|
| Secret | `VPS_HOST` | IP VPS (không dùng domain — Cloudflare không chuyển SSH) |
| Secret | `VPS_SSH_KEY` | chuỗi base64 ở bước 4 |
| Secret | `VPS_KNOWN_HOSTS` | dòng `<IP> ssh-ed25519 ...` ở bước 4 |
| Variable | `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | trùng `VAPID_PUBLIC_KEY` trong `.env` |
| Variable | `DEPLOY_ENABLED` | `true` — đặt sau khi xong bước 1–4 |

Image trên GHCR ở chế độ private; job deploy dùng token tạm của chính lần chạy để kéo image, nên
**không cần** Personal Access Token.

Chạy lần đầu: **Actions → CI/CD → Run workflow**, tick `deploy_all`. Khi đã xanh, xoá private key khỏi VPS:

```bash
rm -f /home/deploy/.ssh/nimbo_actions
```

## 6. MongoDB Atlas

- **Network Access**: thêm IP VPS; xoá `0.0.0.0/0` nếu đang có.
- **Database Access**: user của app chỉ cần quyền *readWrite* trên database của Nimbo.

## 7. Kiểm tra (VPS)

```bash
cd /opt/nimbo && docker compose ps        # cả 3 container "healthy"
curl -s http://127.0.0.1:5100/api/health
curl -sI https://chat.kun.io.vn | head -1   # HTTP/2 200
```

---

## Deploy hằng ngày

Push lên `main`. Chỉ app có thay đổi được kiểm tra / build / deploy
(`apps/api/**` → api, `apps/web/**` → web, `package-lock.json` → cả hai; `apps/mobile` → không làm gì).

## Vận hành (VPS)

```bash
cd /opt/nimbo
docker compose logs -f api             # log (mỗi container giữ tối đa 3×10 MB)
docker compose restart api
```

**Rollback** về commit cũ (mỗi image có tag `:<commit sha>`):

```bash
# sửa /opt/nimbo/.env:  API_TAG=<sha cũ>   (hoặc WEB_TAG)
docker compose pull api && docker compose up -d api
# xong việc thì đặt lại API_TAG=latest
```

> Kéo image bằng tay cần đăng nhập GHCR một lần: `docker login ghcr.io -u kinghatrung`
> (mật khẩu = Personal Access Token quyền `read:packages`), xong thì `docker logout ghcr.io`.

## Tường lửa (tuỳ chọn, nên làm)

Cloudflare giấu IP VPS, nhưng ai biết IP vẫn gọi thẳng vào 80/443 được. Chỉ cho Cloudflare vào:

```bash
ufw allow OpenSSH
for ip in $(curl -s https://www.cloudflare.com/ips-v4) $(curl -s https://www.cloudflare.com/ips-v6); do
  ufw allow proto tcp from "$ip" to any port 80,443
done
ufw enable
```

certbot vẫn gia hạn được vì Let's Encrypt đi qua Cloudflare. Container chỉ mở cổng trên `127.0.0.1`
nên không lọt ra ngoài dù Docker đi vòng qua ufw.

Cổng đang dùng trên host: `3100` (nimbo-web), `5100` (nimbo-api).
