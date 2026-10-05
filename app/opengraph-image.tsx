import { siteCard, ogSize } from "@/lib/og";
import { PILOT_LANDED, PILOT_STUDENTS } from "@/content/site";

// The site-wide link preview. The headline is the homepage H1, word for word.
const HEADLINE = "Coached until your first offer.";
const PROOF = `${PILOT_STUDENTS} pilot students · ${Math.round((PILOT_LANDED / PILOT_STUDENTS) * 100)}% landed an internship or offer`;

export const alt = `First Offer Academy: ${HEADLINE} ${PROOF}.`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return siteCard({ headline: HEADLINE, proof: PROOF });
}
