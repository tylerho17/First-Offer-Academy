// The gated lead magnet on /playbook-pdf: "The First Offer Playbook" PDF.
// The PDF itself is built from content/playbook.ts with `npm run pdf`, which
// also writes the real page count to content/playbook-meta.json.

import { chapters, playbook } from "./playbook";
import meta from "./playbook-meta.json";

export const leadMagnet = {
  file: playbook.file,
  eyebrow: "Free download",
  title: playbook.title,
  subtitle: playbook.subtitle,
  pages: meta.pages,
  reviewedByTyler: playbook.reviewedByTyler,
  lede: `A ${meta.pages}-page guide to landing your first internship before junior year: the resume rubric, the target list, the AI outreach system, cold email templates, the call, the referral close, behavioral stories, technicals by track, and a 12-week calendar to 500 emails.`,
  chapters: chapters.map((c) => ({ n: c.n, title: c.title, summary: c.summary })),
  note: "Enter your email and the download link appears right away. We'll also send the First Offer newsletter every other week; unsubscribe anytime.",
};
