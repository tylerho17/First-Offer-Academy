export const phases = [
  {
    weeks: "Weeks 1–3",
    name: "Foundation",
    body: "A resume that passes our rubric, a recorded 60-second intro, a target list of 50 companies, and the first 25 personalized emails sent.",
  },
  {
    weeks: "Weeks 4–8",
    name: "Outreach & network",
    body: "25 new emails a week, calls with working professionals, referrals earned, and six behavioral stories recorded.",
  },
  {
    weeks: "Weeks 9–10",
    name: "Your track",
    body: "Split into Finance, Consulting, Marketing, or Tech for track-specific technical prep.",
  },
  {
    weeks: "Weeks 11–12",
    name: "Interview-ready",
    body: "Graded mock interviews, the last ones run by strangers, then a family results meeting.",
  },
];

export { tracks } from "./tracks";

export const levels = [
  { n: 1, name: "Foundation", gate: "Resume passes the rubric, 60-second intro recorded, target list of 50 built." },
  { n: 2, name: "Launched", gate: "25 personalized emails sent and logged." },
  { n: 3, name: "In Motion", gate: "100 sent, 3 calls completed, a thank-you sent within 2 hours of each." },
  { n: 4, name: "Networked", gate: "5+ calls, 2 referrals or intros earned, 6 behavioral stories recorded." },
  { n: 5, name: "Interviewing", gate: "A first-round interview completed and 2 graded mocks passed." },
  { n: 6, name: "Offer", gate: "A signed offer." },
];

export const included = [
  "12 weekly 90-minute group sessions",
  "12 weekly 1:1s with your coach",
  "An accountability pod of three",
  "Resume, outreach, and interview toolkit",
  "Graded mock interviews",
  "Parent progress report every two weeks",
];

export const weekly = [
  { name: "90-minute session", body: "Scoreboard, one skill taught, live reps, and a clear commitment for the week." },
  { name: "15-minute 1:1", body: "Your coach reviews your tracker and fixes your single biggest bottleneck." },
  { name: "Pod of three", body: "Two classmates matched to your schedule who see your numbers every Sunday." },
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
