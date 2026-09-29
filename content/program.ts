import { modules } from "./programOverview";

// Program facts. Source of truth: docs/CURRICULUM-SOURCE.md.

// After Week 8: weekly check-ins until an offer or the end date. Used on the
// homepage price band, /parents, /pricing, and the FAQ.
export const afterProgram = {
  until: "May 31, 2027",
  short: "After Week 8: weekly check-ins until an offer or May 31, 2027.",
  full: "After Week 8, every student gets a free weekly 30-minute check-in call and progress update until they receive an internship offer (paid or unpaid) or May 31, 2027, whichever comes first. Students stay on the weekly maintenance minimum to keep the calls.",
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
  "90-minute group session every week",
  "60-minute 1:1 every week",
  "A pod of three, with weekly minimums and a Sunday scoreboard",
  "Progress report for parents every two weeks",
  "Week 8 family meeting",
  "Winter break pre-work, starting the day you enroll",
  "Externship applications, coached and paid for",
];

// The externship block. Applications and coaching are what we provide;
// admission is the externship program's decision. Never write this as
// "externship included" or "every student gets an externship".
export const externshipBlock = {
  title: "Externship applications, covered.",
  body:
    "Every student applies to real externship programs — remote projects with actual companies — with our coaching on the written application, the recorded video, and the live interview. We cover the cost. These are competitive and admission isn't guaranteed, but a student who lands one finishes the program with real company work on their resume before their first internship interview.",
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

// Comparison table. true = yes, false = no, "some" = partially.
export type Cell = true | false | "some";
export const comparison: { row: string; us: Cell; center: Cell; clubs: Cell; alone: Cell }[] = [
  { row: "Candidate Brand: a resume graded on a rubric", us: true, center: "some", clubs: "some", alone: false },
  { row: "Outreach System: emails reviewed every week", us: true, center: "some", clubs: "some", alone: false },
  { row: "Story Bank: stories edited line by line", us: true, center: "some", clubs: "some", alone: false },
  { row: "Track Technicals for your field", us: true, center: "some", clubs: "some", alone: false },
  { row: "Externship applications, coached and paid for", us: true, center: false, clubs: false, alone: false },
  { row: "Interview Reps: a weekly 1:1 and graded mocks", us: true, center: "some", clubs: "some", alone: false },
  { row: "Accountability & Pods: a weekly number and parent reports", us: true, center: false, clubs: false, alone: false },
  { row: "Open to every student", us: true, center: true, clubs: false, alone: true },
];
