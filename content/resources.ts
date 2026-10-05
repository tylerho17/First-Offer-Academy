import { articles } from "./articles";
import { eventColumns } from "./events";
import { leadMagnet } from "./leadMagnet";

// The free resources, grouped for /resources and the blocks on /program and
// /parents. Every item links to a page that already exists; the copy is the
// wording those pages already use. Nothing here duplicates their content.

export type Resource = { href: string; title: string; body: string; tag: string };

const note = (a: "Parents" | "Students") => eventColumns.find((c) => c.audience === a)?.note ?? "";
const parentGuide = articles.find((a) => a.slug === "parents-support-without-taking-over");

const playbookPdf: Resource = { href: "/playbook-pdf", title: leadMagnet.title, body: leadMagnet.subtitle, tag: "Free PDF" };

export const resources: { students: Resource[]; parents: Resource[] } = {
  students: [
    { href: "/blog", title: "Playbook guides", body: `${articles.length} free, in-depth recruiting guides: timelines, resumes, target lists, cold email, networking calls, behavioral interviews, and technicals by track.`, tag: "Guides" },
    { href: "/free-resources", title: "Templates", body: "The same templates students use in the program, week by week.", tag: "Templates" },
    playbookPdf,
    { href: "/events", title: "Tuesday student workshops", body: note("Students"), tag: "Live" },
  ],
  parents: [
    playbookPdf,
    { href: "/events", title: "Thursday parent info sessions", body: note("Parents"), tag: "Live" },
    ...(parentGuide ? [{ href: `/blog/${parentGuide.slug}`, title: parentGuide.title, body: parentGuide.oneLine, tag: "Guide" }] : []),
  ],
};
