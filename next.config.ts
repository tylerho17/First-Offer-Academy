import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/results/by-type", destination: "/results", permanent: true },
    ];
  },
};

export default nextConfig;
