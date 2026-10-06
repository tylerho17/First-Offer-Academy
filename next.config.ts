import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The gated Playbook PDF and templates are read from disk by their routes.
  outputFileTracingIncludes: { "/api/playbook": ["./private/*.pdf"], "/api/templates/[slug]": ["./private/templates/**"] },
  async redirects() {
    return [
      { source: "/our-promise", destination: "/program", statusCode: 301 },
      // The v2 video library was removed; its clips now sit beside the copy they prove.
      { source: "/stories", destination: "/results", statusCode: 301 },
      { source: "/curriculum", destination: "/program", statusCode: 301 },
      { source: "/results/parents", destination: "/results", statusCode: 301 },
      { source: "/tracks", destination: "/program#tracks", statusCode: 301 },
      { source: "/tracks/tech", destination: "/program#tracks", statusCode: 301 },
      { source: "/tracks/consulting", destination: "/tracks/accounting", statusCode: 301 },
      // Marketing is no longer a track (2026-10-05).
      { source: "/tracks/marketing", destination: "/program", statusCode: 301 },
      { source: "/results/by-type", destination: "/results", statusCode: 301 },
      { source: "/contact", destination: "/parents#call", statusCode: 301 },
      // The Playbook page moved from /playbook-pdf (2026-10-05).
      { source: "/playbook-pdf", destination: "/playbook", statusCode: 301 },
      { source: "/timeline", destination: "/playbook", statusCode: 301 },
      // The Playbook PDF is only served behind the email gate (/api/playbook).
      { source: "/downloads/first-offer-playbook.pdf", destination: "/playbook", statusCode: 301 },
      { source: "/downloads/freshman-recruiting-timeline.pdf", destination: "/playbook", statusCode: 301 },
      // Templates are gated too (/api/templates/<slug>); old file paths land on their card.
      { source: "/downloads/:slug([a-z0-9-]+).:ext(pdf|csv)", destination: "/free-resources#:slug", statusCode: 301 },
    ];
  },
};

export default nextConfig;
