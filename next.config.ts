import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ matikan error ESLint saat build di Vercel
  },
};

export default nextConfig;
