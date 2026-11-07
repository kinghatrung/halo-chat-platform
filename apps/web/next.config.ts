import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Self-contained server for the Docker image (only the files it needs, no full node_modules).
  output: 'standalone',
  // Monorepo: dependencies are hoisted to the repo-root node_modules, so trace from there.
  outputFileTracingRoot: path.join(__dirname, '../..'),
  poweredByHeader: false,

  // Development only: in production Caddy sends /api and /socket.io straight to the API container.
  async rewrites() {
    const apiPort = process.env.API_PORT || '5000';
    return [
      {
        source: '/api/:path*',
        destination: `http://127.0.0.1:${apiPort}/api/:path*`,
      },
      {
        source: '/socket.io/:path*',
        destination: `http://127.0.0.1:${apiPort}/socket.io/`,
      },
    ];
  },
};

export default nextConfig;
