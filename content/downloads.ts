// Free downloads on /free-resources. Files are generated into
// public/downloads/ by `npm run downloads` (scripts/build-downloads.mjs):
// CSVs for sheets, branded single-page PDFs for documents. Only the Playbook
// PDF (content/playbook.ts) is email-gated; everything here is free.
//
// Content comes from content/toolkit.ts. Written from docs/CURRICULUM-SOURCE.md
// and not yet reviewed by Tyler (reviewedByTyler below).

import type { Block } from "./blocks";
import type { AssetSlug } from "./curriculum";
import { tb } from "./toolkitBlocks";
import * as t from "./toolkit";

export const downloadsReviewedByTyler = false;

export type Stage = "Resume & story" | "Target list & outreach" | "Calls & referrals" | "Stories & the why" | "Technicals & interviews" | "After the program";
export const stages: Stage[] = ["Resume & story", "Target list & outreach", "Calls & referrals", "Stories & the why", "Technicals & interviews", "After the program"];

type Base = { slug: AssetSlug; title: string; what: string; stage: Stage; week: number };
export type CsvDownload = Base & { format: "CSV"; head: string[]; rows: string[][] };
export type PdfDownload = Base & { format: "PDF"; subtitle: string; blocks: Block[]; layout?: "resume" };
export type Download = CsvDownload | PdfDownload;

export const downloadFile = (d: Download) => `/downloads/${d.slug}.${d.format.toLowerCase()}`;

const EX = "EXAMPLE (delete this row)";

export const downloads: Download[] = [
  {
    slug: "resume-rubric",
    format: "PDF",
    title: "Resume rubric",
    what: "The checklist every First Offer resume is graded against. Passes when every box is checked.",
    subtitle: "A resume passes when every box is checked.",
    stage: "Resume & story",
    week: 2,
    blocks: [...tb.rubric()],
  },
  {
    slug: "resume-template",
    format: "PDF",
    title: "Resume template",
    what: "The one-page structure, section by section, with the bullet formula on every line.",
    subtitle: "One page. Verb + what you did + result (with a number).",
    stage: "Resume & story",
    week: 1,
    layout: "resume",
    blocks: [],
  },
  {
    slug: "self-questions",
    format: "PDF",
    title: "25 self-questions + story template",
    what: "The raw material for every behavioral story, plus the four-part template to write them.",
    subtitle: "Answer these honestly, in bullets. Then pick 8 and write them up.",
    stage: "Stories & the why",
    week: 1,
    blocks: [tb.selfQuestions(), tb.storyTemplate()],
  },
  {
    slug: "target-list",
    format: "CSV",
    title: "Target list template (A/B/C tiers)",
    what: "50 companies, tiered A/B/C, with a named contact and a first-line detail for each.",
    stage: "Target list & outreach",
    week: 2,
    head: t.targetListColumns,
    rows: [
      ["A", `${EX} Example Capital Partners`, "Boutique advisory", "[City, ST]", "Alex Example", "Analyst", "alex@example.com", "linkedin.com/in/example", "Same school", "Wrote a post on consumer deals", "Alumni search", "2027-01-12"],
      ["B", `${EX} Example Growth Co.`, "Startup", "Remote", "Sam Example", "Founder", "sam@example.com", "linkedin.com/in/example2", "Same hometown", "Launched a new product in March", "Apollo", "2027-01-12"],
      ["C", `${EX} Example Family Office`, "Local firm", "[City, ST]", "Jordan Example", "Associate", "jordan@example.com", "linkedin.com/in/example3", "—", "Spoke at a campus event", "Referral", "2027-01-13"],
      ...Array.from({ length: 47 }, (_, i) => [i < 9 ? "A" : i < 39 ? "B" : "C", "", "", "", "", "", "", "", "", "", "", ""]),
    ],
  },
  {
    slug: "outreach-tracker",
    format: "CSV",
    title: "Outreach tracker",
    what: "Log everyone who replies: calls, thank-yous, the close, intros, and the next follow-up date.",
    stage: "Target list & outreach",
    week: 3,
    head: t.trackerColumns,
    rows: [
      [`${EX} Alex Example`, "Example Capital Partners", "Analyst", "A", "alex@example.com", "2027-01-20", "Follow-up 1", "2027-01-27", "2027-02-03", "2027-02-03 4:10pm", "Yes", "Taylor Example", "2027-03-17", "Said the team hires one sophomore intern each summer"],
      [`${EX} Sam Example`, "Example Growth Co.", "Founder", "B", "sam@example.com", "2027-01-20", "Initial", "2027-01-22", "2027-01-29", "2027-01-29 1:45pm", "Yes", "", "2027-02-26", "Offered a small research project"],
    ],
  },
  {
    slug: "ai-prompt-pack",
    format: "PDF",
    title: "AI personalization prompt pack",
    what: "Seven prompts for research, first lines, tightening, subject lines, mail merge, call prep, and thank-yous.",
    subtitle: "AI drafts; you personalize. Never send an email you haven't read.",
    stage: "Target list & outreach",
    week: 3,
    blocks: [...tb.aiPrompts(), tb.aiGuardrails()],
  },
  {
    slug: "cold-email-pack",
    format: "PDF",
    title: "Cold email template pack",
    what: "5 templates for different situations plus the 4-step follow-up sequence.",
    subtitle: "The Two C's: a compliment and a connection. One ask. Under 120 words.",
    stage: "Target list & outreach",
    week: 4,
    blocks: [...tb.emailTemplates(), ...tb.followUps()],
  },
  {
    slug: "call-framework",
    format: "PDF",
    title: "Call framework + referral close script",
    what: "The 20-minute call, the questions that prove you listened, the close, and the thank-you.",
    subtitle: "Open warm, listen 80%, close without asking for a referral, thank them within 2 hours.",
    stage: "Calls & referrals",
    week: 5,
    blocks: [
      tb.callFramework(),
      { type: "checklist", title: "The close (never ask for a referral directly)", items: t.referralClose.lines.map((l) => `"${l}"`).concat([`If no: ${t.referralClose.ifNo}`]) },
      tb.thankYou(),
      tb.stayWarm(),
    ],
  },
  {
    slug: "why-worksheet",
    format: "PDF",
    title: "\"Why\" worksheet",
    what: "Build \"why this industry, why this firm\" from the 3 buckets and your own calls.",
    subtitle: "Mentality, the work, the people. Under 90 seconds.",
    stage: "Stories & the why",
    week: 8,
    blocks: [tb.whyBuckets(), tb.whyWorksheet(), tb.whyExample()],
  },
  ...(["finance", "consulting", "marketing", "tech"] as const).map((k): PdfDownload => ({
    slug: `technicals-${k}` as AssetSlug,
    format: "PDF",
    title: `${t.technicals[k].name.split(" (")[0]} technical question bank`,
    what: `The study order and ${t.technicals[k].questions.length} practice questions for the ${t.technicals[k].name} track.`,
    subtitle: `Study order: ${t.technicals[k].studyOrder.join(" → ")}`,
    stage: "Technicals & interviews",
    week: 9,
    blocks: [
      { type: "p", text: t.technicals[k].method },
      { type: "checklist", title: "Practice questions (say every answer out loud)", items: t.technicals[k].questions },
    ],
  })),
  {
    slug: "interview-scorecard",
    format: "PDF",
    title: "Interview scorecard",
    what: "The written scorecard for graded mocks: 10 areas, scored 1–5.",
    subtitle: "Use it for every mock. Have the interviewer fill it in, not you.",
    stage: "Technicals & interviews",
    week: 10,
    blocks: [...tb.scorecard(), { type: "table", caption: "Notes", head: ["Two things to fix before the next mock"], rows: [["1."], ["2."]] }],
  },
  {
    slug: "game-plan",
    format: "PDF",
    title: "6-month game plan template",
    what: "Monthly targets, contacts to keep warm, deadlines, and skills for the six months after the program.",
    subtitle: "Fill it in before your last session. Review it on the first of every month.",
    stage: "After the program",
    week: 12,
    blocks: [...tb.gamePlan()],
  },
];

export const getDownload = (slug: AssetSlug) => downloads.find((d) => d.slug === slug);
