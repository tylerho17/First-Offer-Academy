// The Playbook: free, in-depth recruiting guides. Each guide lives in its own
// file under content/guides/ and is written in Tyler's voice from
// docs/CURRICULUM-SOURCE.md. While a guide's reviewedByTyler is false, its
// page shows a "Draft" chip. Body blocks are defined in content/blocks.ts.

import type { Block } from "./blocks";
import { categories, type Category, type Guide } from "./guides/types";
import { readMinutes } from "./wordCount";
import { guide as timeline } from "./guides/freshman-internship-timeline";
import { guide as resume } from "./guides/resume-with-zero-experience";
import { guide as targetList } from "./guides/target-list-of-50";
import { guide as aiEmail } from "./guides/ai-cold-email-system";
import { guide as coldEmail } from "./guides/cold-email-template";
import { guide as call } from "./guides/networking-call-framework";
import { guide as referral } from "./guides/call-to-referral";
import { guide as stories } from "./guides/behavioral-stories";
import { guide as intro } from "./guides/tell-me-about-yourself";
import { guide as why } from "./guides/why-this-industry-why-this-firm";
import { guide as finance } from "./guides/finance-technicals-for-beginners";
import { guide as consulting } from "./guides/consulting-case-interviews-from-zero";
import { guide as mktTech } from "./guides/marketing-and-tech-internships-freshman";
import { guide as externships } from "./guides/externships";
import { guide as parents } from "./guides/parents-support-without-taking-over";

export type { Block, Category };
export { categories };
export type Article = Guide & { readMinutes: number };

const guides: Guide[] = [timeline, resume, targetList, aiEmail, coldEmail, call, referral, stories, intro, why, finance, consulting, mktTech, externships, parents];

export const articles: Article[] = guides.map((g) => ({ ...g, readMinutes: readMinutes(g.body) }));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

// "Related guides": the guide's own picks first, then others in its category.
export function relatedArticles(a: Article, n = 3): Article[] {
  const picked = a.related.map(getArticle).filter((x): x is Article => !!x && x.slug !== a.slug);
  const fill = articles.filter((x) => x.slug !== a.slug && x.category === a.category && !picked.includes(x));
  return [...picked, ...fill].slice(0, n);
}

// Anchor id for an h2, used by the table of contents.
export const headingId = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
