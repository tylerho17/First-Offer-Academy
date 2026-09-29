import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/results/by-type", destination: "/results", permanent: true },
      { source: "/timeline", destination: "/playbook-pdf", permanent: true },
      { source: "/tracks/tech", destination: "/tracks", permanent: true },
      { source: "/curriculum", destination: "/program#curriculum", permanent: true },
      { source: "/our-promise", destination: "/program#promise", permanent: true },
      { source: "/results/parents", destination: "/results#parents", permanent: true },
      { source: "/downloads/freshman-recruiting-timeline.pdf", destination: "/downloads/first-offer-playbook.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
