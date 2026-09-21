import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/results/by-type", destination: "/results", permanent: true },
      { source: "/timeline", destination: "/playbook-pdf", permanent: true },
      { source: "/downloads/freshman-recruiting-timeline.pdf", destination: "/downloads/first-offer-playbook.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
