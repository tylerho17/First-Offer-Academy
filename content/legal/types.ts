// Legal pages use a small block format (a subset of content/blocks.ts).
// Inside "p" and "ul" text, [label](/path) renders as a link and a bare email
// address renders as a mailto link.

import { site } from "../site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "template"; title: string; text: string };

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
