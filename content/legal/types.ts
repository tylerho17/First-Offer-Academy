// Legal pages use the same block format as content/articles.ts.
// Inside "p" and "ul" text, [label](/path) renders as a link and a bare email
// address renders as a mailto link.

import type { Block } from "../articles";
import { site } from "../site";

export type { Block };

export type LegalDoc = {
  slug: string; // route: /<slug>
  title: string;
  description: string; // meta description
  lastUpdated: string; // ISO date
  contactEmail: string;
  intro?: string;
  body: Block[];
};

export const legalContact = site.email;

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
