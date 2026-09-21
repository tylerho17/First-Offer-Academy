import type { Block } from "./blocks";

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

// Word count of one block, including list items, templates, and table cells.
export function blockWords(b: Block): number {
  switch (b.type) {
    case "p": case "h2": case "h3": return words(b.text);
    case "ul": case "ol": return b.items.reduce((a, i) => a + words(i), 0);
    case "checklist": return words(b.title ?? "") + b.items.reduce((a, i) => a + words(i), 0);
    case "template": return words(b.title) + words(b.text);
    case "callout": return words(b.title ?? "") + words(b.text);
    case "resume": return words(b.label) + words(b.note ?? "") + b.doc.sections.flatMap((x) => x.entries).reduce((a, e) => a + words([e.org, e.role, e.line, ...(e.bullets ?? [])].join(" ")), 0);
    case "links": return words(b.title ?? "") + b.items.reduce((a, i) => a + words(i.label) + words(i.note ?? ""), 0);
    case "table": return words(b.caption ?? "") + [b.head, ...b.rows].flat().reduce((a, c) => a + words(c), 0);
  }
}

export const readMinutes = (blocks: Block[]) => Math.max(1, Math.round(blocks.reduce((a, b) => a + blockWords(b), 0) / 230));
