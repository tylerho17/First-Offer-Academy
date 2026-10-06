import { articles } from "./articles";
import { eventColumns } from "./events";
import { leadMagnet } from "./leadMagnet";

// The free resources: /resources and the blocks on /program and /parents.
// Every item links to a page that already exists; the copy is that page's own
// wording, shortened to fit two lines. Nothing here duplicates their content.

export type Resource = { href: string; title: string; body: string; tag: string };

const note = (a: "Parents" | "Students") => eventColumns.find((c) => c.audience === a)?.note ?? "";
const parentGuide = articles.find((a) => a.slug === "parents-support-without-taking-over");

export const playbookPdf: Resource = { href: "/playbook", title: leadMagnet.title, body: leadMagnet.subtitle, tag: "Free PDF" };
const guides: Resource = { href: "/blog", title: "Playbook guides", body: `${articles.length} free guides: timelines, resumes, outreach, interviews, technicals.`, tag: "Guides" };
const templates: Resource = { href: "/free-resources", title: "Templates", body: "The same templates students use in the program, week by week.", tag: "Templates" };
const parentSessions: Resource = { href: "/events", title: "Thursday parent sessions", body: note("Parents"), tag: "Live" };
const guideForParents: Resource[] = parentGuide
  ? [{ href: `/blog/${parentGuide.slug}`, title: "How to support your student's search without taking it over", body: parentGuide.oneLine, tag: "Guide" }]
  : [];

// /resources lists (the Playbook PDF is the featured banner, so it's not repeated here).
export const resourceLists = { students: [guides, templates], parents: guideForParents };

// The embedded blocks (max 3 each).
export const resourceBlocks = {
  students: [guides, templates, playbookPdf],
  parents: [playbookPdf, parentSessions, ...guideForParents],
};
