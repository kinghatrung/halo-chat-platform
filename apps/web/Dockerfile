# syntax=docker/dockerfile:1
# Build from the repo root:  docker build -f apps/web/Dockerfile .
# (the npm workspace lockfile lives at the root; only the web workspace is installed)

# ── 1. Build Next.js (standalone output) ───────────────────────────────────────
FROM node:22-bookworm-slim AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/
RUN npm ci -w web --no-audit --no-fund
COPY apps/web apps/web

# NEXT_PUBLIC_* values are baked into the browser bundle at build time.
ARG NEXT_PUBLIC_VAPID_PUBLIC_KEY=""
ENV NEXT_PUBLIC_VAPID_PUBLIC_KEY=$NEXT_PUBLIC_VAPID_PUBLIC_KEY
RUN npm run build -w web

# ── 2. Runtime: only the traced server files (~30 MB) ──────────────────────────
FROM node:22-bookworm-slim
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app
# standalone keeps the monorepo layout: the server lives at apps/web/server.js
COPY --from=build --chown=node:node /app/apps/web/.next/standalone ./
COPY --from=build --chown=node:node /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=build --chown=node:node /app/apps/web/public ./apps/web/public
USER node
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
