# syntax=docker/dockerfile:1
# Build from the repo root:  docker build -f apps/api/Dockerfile .
# (the npm workspace lockfile lives at the root; only the api workspace is installed)

# ── 1. Compile TypeScript ──────────────────────────────────────────────────────
FROM node:22-bookworm-slim AS build
WORKDIR /app
# mongodb-memory-server (tests only) would otherwise download ~780 MB of MongoDB on install.
ENV MONGOMS_DISABLE_POSTINSTALL=1
COPY package.json package-lock.json ./
COPY apps/api/package.json apps/api/
RUN npm ci -w api --no-audit --no-fund
COPY apps/api apps/api
RUN npm run build -w api

# ── 2. Production dependencies only ────────────────────────────────────────────
FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/api/package.json apps/api/
RUN npm ci -w api --omit=dev --no-audit --no-fund && npm cache clean --force

# ── 3. Runtime ─────────────────────────────────────────────────────────────────
FROM node:22-bookworm-slim
ENV NODE_ENV=production \
    PORT=5000
WORKDIR /app
COPY --from=deps --chown=node:node /app ./
COPY --from=build --chown=node:node /app/apps/api/dist ./apps/api/dist
WORKDIR /app/apps/api
USER node
EXPOSE 5000
CMD ["node", "dist/index.js"]
