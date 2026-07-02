import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages では Next.js の Image Optimization サーバーが動かないため、
  // 静的エクスポート (output: "export") + unoptimized images で対応する。
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
