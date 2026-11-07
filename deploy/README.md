# Triển khai Nimbo lên VPS — `chat.kun.io.vn`

VPS: Ubuntu 24.04 · 2 CPU · 4 GB RAM · 30 GB disk · **Nginx trên host** (dùng chung với portfolio).
Image được build trên **GitHub Actions**; VPS chỉ kéo image về và chạy.

```
Trình duyệt ──HTTPS──► Cloudflare (proxy, SSL Full strict)
                            │ 443 (chỉ IP Cloudflare được vào)
                       ┌────▼──────────────┐  Nginx trên host — dùng chung mọi subdomain
                       │ nginx             │  kun.io.vn → portfolio (giữ nguyên)
                       └────┬──────────────┘  chat.kun.io.vn ↓
          /api/, /socket.io/ │                      │ còn lại
                 127.0.0.1:5100 ▼                      ▼ 127.0.0.1:3100
             ┌──────────┐   ┌──────────┐          ┌──────────┐
             │ nimbo-api│──►│  redis   │          │ nimbo-web│     (stack Docker /opt/nimbo)
             └────┬─────┘   └──────────┘          └──────────┘
                  └──► MongoDB Atlas (giữ nguyên)
```

| Thành phần | Chạy ở đâu | Ghi chú |
|---|---|---|
| Web (Next.js standalone) | container `web` | giới hạn 512 MB RAM |
| API (Express + Socket.IO) | container `api` | giới hạn 768 MB RAM |
| Redis | container `redis` | chỉ mạng nội bộ Docker, có mật khẩu, không lưu xuống đĩa |
| MongoDB | **Atlas** | sao lưu do Atlas lo |
| HTTPS, chia đường dẫn | **Nginx trên host** | thêm 1 file site, không đụng site portfolio |

File trong thư mục này:

| File | Đặt ở đâu trên VPS |
|---|---|
| `docker-compose.yml` | `/opt/nimbo/docker-compose.yml` (CI tự copy mỗi lần deploy) |
| `.env.example` | điền rồi lưu thành `/opt/nimbo/.env` (chỉ một lần, **không** commit) |
| `nginx/chat.kun.io.vn.conf` | `/etc/nginx/sites-available/chat.kun.io.vn` (+ symlink vào `sites-enabled`) |
| `nginx/cloudflare-realip.conf` | `/etc/nginx/conf.d/cloudflare-realip.conf` |

---

## 0. Kiểm tra Nginx hiện có (trước khi thêm gì)

```bash
nginx -v                                   # Ubuntu 24.04: 1.24.x
sudo nginx -T 2>/dev/null | grep -nE "server_name|listen|ssl_certificate |real_ip_header|connection_upgrade"
ls -l /etc/nginx/sites-enabled/ /etc/nginx/conf.d/
sudo ss -tlnp | grep -E ':(80|443|3100|5100)\b'
ls /etc/letsencrypt/live/ 2>/dev/null     # nếu portfolio đang dùng certbot
```
Cần chắc chắn: cổng **3100** và **5100** chưa ai dùng; chưa có file nào khác đặt `real_ip_header`.

## 1. Chuẩn bị VPS (làm một lần)

### 1.1 Docker
```bash
curl -fsSL https://get.docker.com | sudo sh
docker compose version
```

### 1.2 Tài khoản deploy cho GitHub Actions
```bash
sudo adduser --disabled-password --gecos "" deploy
sudo usermod -aG docker deploy
sudo mkdir -p /opt/nimbo && sudo chown deploy:deploy /opt/nimbo

# Tạo cặp khoá RIÊNG cho CI (trên máy bạn):  ssh-keygen -t ed25519 -f nimbo_deploy -C "github-actions"
sudo -u deploy mkdir -p /home/deploy/.ssh
sudo -u deploy nano /home/deploy/.ssh/authorized_keys   # dán nội dung nimbo_deploy.pub
sudo chmod 600 /home/deploy/.ssh/authorized_keys
```
Nội dung file `nimbo_deploy` (private key) đưa vào GitHub secret ở bước 3.

### 1.3 File bí mật `/opt/nimbo/.env`
```bash
sudo -u deploy nano /opt/nimbo/.env     # dán nội dung .env.example rồi điền
sudo chmod 600 /opt/nimbo/.env
openssl rand -hex 32                    # dùng cho REDIS_PASSWORD, JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN
```
`IMAGE_PREFIX` = `ghcr.io/<tên GitHub viết thường>` (ví dụ `ghcr.io/kinghatrung`).

### 1.4 Chứng chỉ
**Cloudflare Origin Certificate** (Cloudflare → SSL/TLS → Origin Server → *Create Certificate*,
hostnames `kun.io.vn, *.kun.io.vn`, hạn 15 năm). Một chứng chỉ dùng được cho mọi subdomain:
```bash
sudo mkdir -p /etc/ssl/cloudflare
sudo nano /etc/ssl/cloudflare/kun.io.vn.pem   # dán "Origin Certificate"
sudo nano /etc/ssl/cloudflare/kun.io.vn.key   # dán "Private Key"
sudo chmod 600 /etc/ssl/cloudflare/kun.io.vn.key
```
> Nếu portfolio đang dùng **certbot** và bạn muốn giữ cách đó: bỏ 2 dòng `ssl_certificate*`
> trong `chat.kun.io.vn.conf`, rồi chạy `sudo certbot --nginx -d chat.kun.io.vn`.

### 1.5 Nginx
```bash
sudo cp cloudflare-realip.conf /etc/nginx/conf.d/
sudo cp chat.kun.io.vn.conf /etc/nginx/sites-available/chat.kun.io.vn
sudo ln -s /etc/nginx/sites-available/chat.kun.io.vn /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```
`cloudflare-realip.conf` áp dụng cho **mọi** site (kể cả portfolio): log và giới hạn tốc độ sẽ thấy IP thật
của người dùng thay vì IP của Cloudflare.

### 1.6 Tường lửa — chỉ Cloudflare được vào 80/443
```bash
sudo ufw default deny incoming
sudo ufw allow OpenSSH
for ip in $(curl -s https://www.cloudflare.com/ips-v4) $(curl -s https://www.cloudflare.com/ips-v6); do
  sudo ufw allow proto tcp from "$ip" to any port 80,443
done
sudo ufw enable
```
Các container chỉ mở cổng trên `127.0.0.1` nên không lọt ra internet dù Docker đi vòng qua ufw.

---

## 2. Cloudflare

1. **DNS**: bản ghi `A` tên `chat` → IP VPS, **Proxied** (đám mây cam).
2. **SSL/TLS → Overview**: **Full (strict)**.
3. **SSL/TLS → Edge Certificates**: bật *Always Use HTTPS*.
4. **Network**: *WebSockets* bật (mặc định đã bật) — cần cho chat realtime.
5. Gói Free giới hạn 100 MB/request — app giới hạn 20 MB/tệp nên đủ.

## 3. GitHub

**Settings → Secrets and variables → Actions**

| Loại | Tên | Giá trị |
|---|---|---|
| Secret | `VPS_HOST` | IP VPS |
| Secret | `VPS_USER` | `deploy` |
| Secret | `VPS_SSH_KEY` | nội dung private key `nimbo_deploy` |
| Secret | `VPS_PORT` | *(tuỳ chọn)* cổng SSH nếu không phải 22 |
| Variable | `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | trùng `VAPID_PUBLIC_KEY` trong `.env` |
| Variable | `DEPLOY_ENABLED` | `true` — **chỉ đặt khi VPS đã xong bước 1–2** |

Khi chưa có `DEPLOY_ENABLED`, mỗi lần push lên `main` CI vẫn kiểm tra code và build/đẩy image lên GHCR,
chỉ bỏ qua bước deploy. Image ở chế độ private; job deploy dùng token tạm của chính lần chạy để kéo image,
nên **không cần** Personal Access Token.

## 4. MongoDB Atlas (giữ nguyên)

- **Network Access**: chỉ cho phép IP của VPS (xoá `0.0.0.0/0` nếu đang có).
- **Database Access**: user của app chỉ cần quyền *readWrite* trên database của Nimbo.

---

## 5. Deploy

- **Tự động**: push lên `main`. Chỉ app có thay đổi được kiểm tra / build / deploy
  (`apps/api/**` → api, `apps/web/**` → web, `package-lock.json` → cả hai; `apps/mobile` → không làm gì).
- **Lần đầu / ép deploy cả hai**: *Actions → CI/CD → Run workflow*, tick `deploy_all`.

## 6. Vận hành trên VPS

```bash
cd /opt/nimbo
docker compose ps                      # trạng thái + healthcheck
docker compose logs -f api             # log (mỗi container giữ tối đa 3×10 MB)
docker compose restart api
curl -s http://127.0.0.1:5100/api/health
```

**Rollback** một service về commit cũ (mỗi image có tag `:<commit sha>`):
```bash
# sửa /opt/nimbo/.env:  API_TAG=<sha cũ>   (hoặc WEB_TAG)
docker compose pull api && docker compose up -d api
# xong việc thì đặt lại API_TAG=latest
```

## 7. Thêm dự án mới (subdomain)

1. Dự án chạy trong stack Docker riêng ở `/opt/<tên>`, mở cổng `127.0.0.1:<cổng chưa dùng>`.
2. Copy `chat.kun.io.vn.conf` thành `<tên>.kun.io.vn`, đổi `server_name`, cổng upstream và tên `map`/`upstream`
   (phải khác `nimbo_*`), `nginx -t && systemctl reload nginx`.
3. Thêm bản ghi DNS `<tên>` (Proxied). Chứng chỉ Origin `*.kun.io.vn` đã bao mọi subdomain.

Cổng đang dùng: `3100` (nimbo-web), `5100` (nimbo-api).
