import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
    }
    return config;
  },
};

export default nextConfig;
