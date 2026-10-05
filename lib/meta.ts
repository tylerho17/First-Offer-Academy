import type { Metadata } from "next";

export const SITE_NAME = "First Offer Academy";

// The site-wide preview image (app/opengraph-image.tsx). Listed explicitly:
// a page that sets its own openGraph would otherwise drop the inherited one.
const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME}: Coached until your first offer.` };

// A page's title and description, also used for its link preview (Open Graph
// and Twitter), always with the branded preview image.
export function pageMeta({ title, description }: { title: string; description: string }): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US", title: full, description, images: [image] },
    twitter: { card: "summary_large_image", title: full, description, images: [image.url] },
  };
}
