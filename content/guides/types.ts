import type { Block } from "../blocks";
import type { AssetSlug } from "../curriculum";

export const categories = ["Getting started", "Resume", "Networking", "Interviews", "Technicals", "For parents"] as const;
export type Category = (typeof categories)[number];

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  track?: "finance" | "consulting" | "marketing" | "tech";
  date: string; // ISO date
  author: string;
  downloads: AssetSlug[]; // "Download the template" links (content/downloads.ts)
  related: string[]; // slugs for "Related guides"
  reviewedByTyler: boolean; // false = "Draft" chip on the page
  body: Block[];
};
