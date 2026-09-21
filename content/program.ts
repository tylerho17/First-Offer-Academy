import { modules } from "./programOverview";

// Program facts. Source of truth: docs/CURRICULUM-SOURCE.md.

// What we sell. Used in the home hero, founder section, /program, /parents.
export const positioning =
  "Execution and accountability, from someone who just went through the two most recent recruiting cycles.";

// The 12 weeks, phase by phase, named by which of the six parts each one
// builds (content/programOverview.ts → modules). Accountability & Pods runs
// the whole way through.
export const phases = [
  {
    weeks: "Weeks 1–3",
    name: "Candidate Brand + Outreach System",
    body: "Candidate Brand: an honest gap check, a resume that passes our rubric, and a recorded 60-second intro. Outreach System: a target list of 50 with named contacts and the first AI-assisted email sequences.",
  },
  {
    weeks: "Weeks 4–8",
    name: "Story Bank + Interview Reps",
    body: "Story Bank: 8 stories, mapped to every common question and edited line by line. Interview Reps: live reps in every session and the weekly 60-minute 1:1. The Outreach System keeps running at 50 emails a week.",
  },
  {
    weeks: "Weeks 9–10",
    name: "Track Technicals",
    body: "The cohort splits into Finance, Consulting, Marketing, or Tech. Concepts before memorization, practice with answer walk-throughs. Interview Reps adds the first graded mock in Week 10.",
  },
  {
    weeks: "Weeks 11–12",
    name: "Interview Reps",
    body: "The final graded mock in Week 11, run by a stranger. Accountability & Pods closes with the Week 12 family meeting.",
  },
];

// Runs through all 12 weeks.
export const throughout = {
  weeks: "Weeks 1–12",
  name: "Accountability & Pods",
  body: "A pod of three, weekly minimums and a Sunday scoreboard, and biweekly parent reports.",
};

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

// What the student leaves with: the six parts (content/programOverview.ts).
// Program requirements, not outcomes.
export const leavesWith = {
  title: "What the student leaves with",
  note: "These are the six parts every student works through. They describe the work, not an outcome: hiring decisions belong to employers.",
  items: modules.map((m) => m.title),
};

// "$5,000 includes": the same six parts, by the same names.
export const included = modules.map((m) => m.title);

export const weekly = [
  { name: "90-minute session", body: "The Accountability & Pods scoreboard, one skill from the week's part, and live Interview Reps." },
  { name: "Weekly 60-minute 1:1", body: "Part of Interview Reps: tracker review, the single biggest bottleneck fixed, and line-by-line edits on the work." },
  { name: "Pod of three", body: "Part of Accountability & Pods: two classmates matched to your schedule who see your numbers every Sunday." },
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
  { row: "Candidate Brand: a resume graded on a rubric", us: true, center: "some", clubs: "some", alone: false },
  { row: "Outreach System: emails reviewed every week", us: true, center: "some", clubs: "some", alone: false },
  { row: "Story Bank: stories edited line by line", us: true, center: "some", clubs: "some", alone: false },
  { row: "Track Technicals for your field", us: true, center: "some", clubs: "some", alone: false },
  { row: "Interview Reps: a weekly 1:1 and graded mocks", us: true, center: "some", clubs: "some", alone: false },
  { row: "Accountability & Pods: a weekly number and parent reports", us: true, center: false, clubs: false, alone: false },
  { row: "Open to every student", us: true, center: true, clubs: false, alone: true },
];
