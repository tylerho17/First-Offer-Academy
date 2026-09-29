import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The gated Playbook PDF is read from disk by /api/playbook.
  outputFileTracingIncludes: { "/api/playbook": ["./private/**"] },
  async redirects() {
    return [
      { source: "/our-promise", destination: "/program", statusCode: 301 },
      { source: "/curriculum", destination: "/program", statusCode: 301 },
      { source: "/results/parents", destination: "/results", statusCode: 301 },
      { source: "/tracks", destination: "/program#tracks", statusCode: 301 },
      { source: "/tracks/tech", destination: "/program#tracks", statusCode: 301 },
      { source: "/tracks/consulting", destination: "/tracks/accounting", statusCode: 301 },
      { source: "/results/by-type", destination: "/results", statusCode: 301 },
      { source: "/timeline", destination: "/playbook-pdf", statusCode: 301 },
      // The Playbook PDF is only served behind the email gate (/api/playbook).
      { source: "/downloads/first-offer-playbook.pdf", destination: "/playbook-pdf", statusCode: 301 },
      { source: "/downloads/freshman-recruiting-timeline.pdf", destination: "/playbook-pdf", statusCode: 301 },
    ];
  },
};

export default nextConfig;
