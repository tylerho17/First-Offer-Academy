import { modules } from "./programOverview";

// Program facts. Source of truth: docs/CURRICULUM-SOURCE.md.

// The offer: Week 0 pre-work, then a 12-week program (Weeks 1–8 core
// teaching, Weeks 9–12 Offer Sprint of mocks and networking), then weekly
// check-ins and mocks every other week until an offer.

// The program length for page metadata (title-bar descriptions, JSON-LD).
export const programLength = {
  meta: "Week 0 pre-work, a 12-week program (Weeks 1–8 core teaching, Weeks 9–12 mocks and networking), then weekly check-ins and mocks every other week until an offer.",
};

// After Week 12: support until an offer or the end date, while the student
// keeps up the maintenance minimum. Used on the homepage, /program, /parents,
// /pricing, the FAQ, and the offer-or-refund terms.
export const afterProgram = {
  until: "May 31, 2027",
  maintenance: "100 outreach emails and 6–8 networking calls a week",
  short: "After Week 12: a 20-minute weekly check-in and a mock interview every other week, until an internship offer or May 31, 2027.",
  full: "After Week 12, until your student receives an internship offer (paid or unpaid) or May 31, 2027, whichever comes first: a 20-minute weekly check-in and a mock interview every other week. To keep this support, the student keeps up the maintenance minimum of 100 outreach emails and 6–8 networking calls a week.",
};

// Weeks 9–12.
export const offerSprint = {
  weeks: "Weeks 9–12",
  name: "Offer Sprint",
  summary: "Technical and behavioral mocks, plus prep and debriefs for every networking call you land.",
};

// Offer-or-refund: the only refund-on-outcome language on the site (never
// describe it any other way). The FAQ, /refunds, and /terms read these.
export const offerOrRefund = {
  title: "Offer-or-refund",
  body: "Do the work and we stand behind it. If your student hits every weekly minimum through May 31, 2027 and doesn't receive an internship offer, paid or unpaid, we refund the full $5,000.",
  terms:
    "Any internship offer, paid or unpaid, counts, including one that's declined. Minimums must be met and logged every week (one makeup week allowed). Dropping, pausing, or missing minimums past the makeup week ends eligibility. Refund requests are due by June 15, 2027 and paid within 30 days.",
  minimums: {
    training: "Weeks 1–8: 50 outreach emails, follow-ups on schedule, 3 networking calls, every session and 1:1 attended, assignments in by Sunday 11:59 pm, scheduled mocks completed.",
    sprint: "Weeks 9–12: 25 outreach emails, follow-ups on schedule, 2 networking calls, weekly mock completed, applications logged.",
    // TODO(Tyler): confirm the post-Week-12 maintenance minimum also governs
    // offer-or-refund eligibility (it replaced the old "Weeks 9–12 and after" line).
    after: "After Week 12: 100 outreach emails, follow-ups on schedule, 6–8 networking calls, a mock interview every other week, applications logged.",
    makeup: "One makeup week allowed.",
  },
};

export { tracks } from "./tracks";

// The Standard. Gates are all-required and graded on evidence in the tracker.
export const levels = [
  { n: 1, name: "Foundation", week: "Week 1", gate: "Top-tier resume passes the rubric · 60-second intro recorded · target list of 50 companies with named contacts built." },
  { n: 2, name: "Launched", week: "Week 2", gate: "AI email automation set up · first 50 sequenced emails sent and logged." },
  { n: 3, name: "In Motion", week: "Week 3", gate: "150 sent · 3 calls completed · a thank-you within 2 hours of each." },
  { n: 4, name: "Networked", week: "Week 5", gate: "300 sent · 5+ calls · 2 referrals or intros · 8 behavioral stories recorded · externship applications submitted." },
  { n: 5, name: "Interviewing", week: "Week 7", gate: "350+ sent · 2 graded mocks passed · 1+ real first round (when available)." },
  { n: 6, name: "Offer", week: "Week 8+ (not promised)", gate: "A signed offer." },
];

// What the student leaves with: the six parts (content/programOverview.ts).
// Program requirements, not outcomes.
export const leavesWith = {
  title: "What the student leaves with",
  note: "These are the six parts every student works through. They describe the work, not an outcome: hiring decisions belong to employers.",
  items: modules.map((m) => m.title),
};


// What tuition buys, in plain terms. Shown on /pricing under the price.
export const pricingIncludes = [
  "Week 0 pre-work over winter break, starting the day you enroll",
  "Weeks 1–8, core teaching: a 90-minute group session and a 60-minute 1:1 every week, and a pod of three",
  "Weeks 9–12, the Offer Sprint: technical and behavioral mock interviews, networking call prep and debriefs",
  "After Week 12: a 20-minute weekly check-in and a mock interview every other week until your offer or May 31, 2027, while your student keeps up 100 outreach emails and 6–8 networking calls a week",
  "Progress report for parents every two weeks, and the Week 8 family meeting",
  "Coached Extern externship applications, Extern fee covered",
  "Offer-or-refund: hit every weekly minimum and get no offer by May 31, 2027, and we refund the full $5,000",
];

// The externship block. Applications and coaching are what we provide;
// admission is the externship program's decision. Never write this as
// "externship included" or "every student gets an externship".
export const externshipBlock = {
  title: "Extern applications, fee covered.",
  body:
    "Every student applies to Extern externships — remote projects with real companies — with our coaching on the written application, the recorded video, and the live interview. We cover the Extern fee. These are competitive and admission is Extern's decision, but a student who lands one finishes with real company work on their resume before their first internship interview.",
};

export const weekly = [
  { name: "90-minute session", body: "The Accountability & Pods scoreboard, one skill from the week's part, and live Interview Reps." },
  { name: "Weekly 60-minute 1:1", body: "Part of Interview Reps: tracker review, the single biggest bottleneck fixed, and line-by-line edits on the work." },
  { name: "Pod of three", body: "Part of Accountability & Pods: two classmates matched to your schedule who see your numbers every Sunday." },
];

// Shown wherever the weekly format appears.
export const formatNote =
  "Teaching is recorded and watched before each session. Live time is reps, teardowns, and questions — not lecture.";

export type FormatRow = { block: string; time: string; what: string };

export const sessionFormat: FormatRow[] = [
  { block: "Scoreboard", time: "0–15 min", what: "Each student reads their numbers aloud: sent, replies, calls, level. No excuses, just numbers." },
  { block: "Teardown", time: "15–40 min", what: "The recorded module is watched before the session. Live time goes to teardowns of real work and questions on it." },
  { block: "Live reps", time: "40–80 min", what: "Drills in pairs or hot seat: emails rewritten live, mock calls, mock interviews." },
  { block: "Commit", time: "80–90 min", what: "Each student states their exact deliverable and deadline for the week." },
];

export const oneOnOneFormat: FormatRow[] = [
  { block: "Tracker review", time: "0–15 min", what: "Line by line: sends, replies, follow-ups due, calls booked." },
  { block: "Biggest bottleneck", time: "15–40 min", what: "Fix the one thing slowing them down most (reply rate, call quality, stories, technicals)." },
  { block: "Work on the work", time: "40–55 min", what: "Edit live: resume bullets, emails, stories, \"why\" answers, or a mini-mock." },
  { block: "Next 7 days", time: "55–60 min", what: "Exact commitments written into the tracker." },
];
