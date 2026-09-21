import { site } from "./site";

// Program facts. Source of truth: docs/CURRICULUM-SOURCE.md.

// What we sell. Used in the home hero, founder section, /program, /parents.
export const positioning =
  "Execution and accountability, from someone who just went through the two most recent recruiting cycles.";

export const phases = [
  {
    weeks: "Weeks 1–3",
    name: "Foundation",
    body: "A resume that passes our rubric, a recorded 60-second intro, a target list of 50 companies with named contacts, an AI-assisted email system, and the first 50 sequenced emails sent.",
  },
  {
    weeks: "Weeks 4–8",
    name: "Outreach & network",
    body: "50 new sequenced emails a week, calls with working professionals, referrals and intros earned, 8 behavioral stories recorded, and the first externship completed.",
  },
  {
    weeks: "Weeks 9–10",
    name: "Your track",
    body: "Split into Finance, Consulting, Marketing, or Tech for track-specific technical prep and the first graded mock interview.",
  },
  {
    weeks: "Weeks 11–12",
    name: "Interview-ready",
    body: "500+ emails sent, graded mock interviews (the last run by strangers), a family results meeting, and a 6-month game plan.",
  },
];

export { tracks } from "./tracks";

// The Standard. Gates are all-required and graded on evidence in the tracker.
export const levels = [
  { n: 1, name: "Foundation", week: "Week 2", gate: "Top-tier resume passes the rubric · 60-second intro recorded · target list of 50 companies with named contacts built." },
  { n: 2, name: "Launched", week: "Week 3", gate: "AI email automation set up · first 50 sequenced emails sent and logged." },
  { n: 3, name: "In Motion", week: "Week 5", gate: "150 sent · 3 calls completed · a thank-you within 2 hours of each." },
  { n: 4, name: "Networked", week: "Week 8", gate: "300 sent · 5+ calls · 2 referrals or intros · 8 behavioral stories recorded · externship 1 completed." },
  { n: 5, name: "Interviewing", week: "Week 11", gate: "500+ sent · 2 graded mocks passed · externship 2 completed · 1+ real first round (when available)." },
  { n: 6, name: "Offer", week: "Week 12+ (not promised)", gate: "A signed offer." },
];

export const weeklyMinimum = {
  title: "The weekly minimum, from Week 3",
  items: [
    "50 new sequenced emails",
    "Every follow-up due that week",
    "Tracker updated by Sunday night",
  ],
  note: "10 weeks × 50 = 500+ emails. Two missed weekly minimums in a row triggers a call with the student and a parent.",
};

// Externship wording depends on whether Tyler has confirmed the provider
// (content/site.ts → externships.provider). Never say "Fortune 500" until then.
export const externshipLine = () =>
  site.externships.provider
    ? `2 externships completed: virtual projects with Fortune 500 companies, through ${site.externships.provider}`
    : "2 virtual externship projects completed";

// What every student leaves with. Program requirements, not outcomes.
export const leavesWith = {
  title: "What every student leaves with",
  note: "These are program requirements every student works to, not promised outcomes. Hiring decisions belong to employers.",
  items: [
    "A top-tier resume that passes our rubric",
    "A target list of 50 companies, with named contacts at each",
    "An AI-assisted email automation system (their own sequencing setup)",
    "500+ personalized emails sequenced, sent, and logged",
    "5+ calls with working professionals",
    "8 behavioral stories, written and recorded",
    "Graded mock interviews (the last ones run by strangers, on a written scorecard)",
    externshipLine(),
    "A 6-month game plan for after the program",
  ],
};

export const included = [
  "12 weekly 90-minute group sessions",
  "Twelve 60-minute 1:1s with your coach",
  "An accountability pod of three",
  "Resume, outreach, and interview toolkit",
  "Graded mock interviews",
  "Parent progress report every two weeks",
];

export const weekly = [
  { name: "90-minute session", body: "Scoreboard, one skill taught, live reps, and a clear commitment for the week." },
  { name: "Weekly 60-minute 1:1", body: "Tracker review, the single biggest bottleneck fixed, live edits on the work, and exact commitments for the next 7 days." },
  { name: "Pod of three", body: "Two classmates matched to your schedule who see your numbers every Sunday." },
];

export type FormatRow = { block: string; time: string; what: string };

export const sessionFormat: FormatRow[] = [
  { block: "Scoreboard", time: "0–15 min", what: "Each student reads their numbers aloud: sent, replies, calls, level. No excuses, just numbers." },
  { block: "Teach", time: "15–40 min", what: "One skill, taught from the week's module." },
  { block: "Live reps", time: "40–80 min", what: "Drills in pairs or hot seat: emails rewritten live, mock calls, mock interviews." },
  { block: "Commit", time: "80–90 min", what: "Each student states their exact deliverable and deadline for the week." },
];

export const oneOnOneFormat: FormatRow[] = [
  { block: "Tracker review", time: "0–15 min", what: "Line by line: sends, replies, follow-ups due, calls booked." },
  { block: "Biggest bottleneck", time: "15–40 min", what: "Fix the one thing slowing them down most (reply rate, call quality, stories, technicals)." },
  { block: "Work on the work", time: "40–55 min", what: "Edit live: resume bullets, emails, stories, \"why\" answers, or a mini-mock." },
  { block: "Next 7 days", time: "55–60 min", what: "Exact commitments written into the tracker." },
];

// Comparison table. true = yes, false = no, "some" = partially.
export type Cell = true | false | "some";
export const comparison: { row: string; us: Cell; center: Cell; clubs: Cell; alone: Cell }[] = [
  { row: "Weekly 1:1 coaching", us: true, center: "some", clubs: false, alone: false },
  { row: "Someone reviews your outreach emails", us: true, center: "some", clubs: "some", alone: false },
  { row: "Graded mock interviews", us: true, center: "some", clubs: "some", alone: false },
  { row: "Open to every student", us: true, center: true, clubs: false, alone: true },
  { row: "Accountable to a weekly number", us: true, center: false, clubs: false, alone: false },
  { row: "Parent progress reports", us: true, center: false, clubs: false, alone: false },
  { row: "Track-specific prep", us: true, center: "some", clubs: "some", alone: false },
];
