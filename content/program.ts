import { modules } from "./programOverview";
import { site } from "./site";

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
  maintenance: "100 emails, 6–8 networking calls, and 25 applications a week",
  short: "After Week 12: a 20-minute weekly check-in and a mock interview every other week, until an internship offer or May 31, 2027.",
  full: "After Week 12, until your student receives an internship offer (paid or unpaid) or May 31, 2027, whichever comes first: a 20-minute weekly check-in and a mock interview every other week. To keep this support, the student keeps up the weekly minimum of 100 emails, 6–8 networking calls, and 25 applications.",
};

// Weeks 9–12.
export const offerSprint = {
  weeks: "Weeks 9–12",
  name: "Offer Sprint",
  summary: "Technical and behavioral mocks, plus prep and debriefs for every networking call you land.",
};

// What the student commits to each week. The FAQ (#weekly-minimums),
// /refunds and the curriculum week pages read these.
export const commitment = {
  foundation: "Weeks 1–3 build the foundation (resume, target list, story bank) with no outreach minimums. Outreach starts in Week 4 and ramps up.",
  hours: "About 8–12 hours a week from Week 7: about 3 hours with us (the 90-minute group session, the 60-minute 1:1, and the Sunday pod check-in), and the rest on their own.",
  // "—" = no minimum that week.
  minimums: [
    { weeks: "Weeks 1–3", emails: "—", calls: "—", applications: "—" },
    { weeks: "Week 4", emails: "25", calls: "1", applications: "25" },
    { weeks: "Week 5", emails: "50", calls: "2", applications: "25" },
    { weeks: "Week 6", emails: "75", calls: "3", applications: "25" },
    { weeks: "Weeks 7–12", emails: "100", calls: "4–5", applications: "25" },
    { weeks: `After Week 12 to ${afterProgram.until}`, emails: "100", calls: "6–8", applications: "25" },
  ],
  also: "Plus every week: attend every session, 1:1, and scheduled mock; turn in assignments by Sunday 11:59 pm Pacific; and attend every interview an employer schedules.",
};

// "Week 4: 25 outreach emails, 1 networking call, 25 applications", one line
// per row.
export const minimumLines = () =>
  commitment.minimums.map((m) =>
    m.emails === "—"
      ? `${m.weeks}: no outreach minimums (the foundation: resume, target list, story bank)`
      : `${m.weeks}: ${m.emails} outreach emails, ${m.calls} networking ${m.calls === "1" ? "call" : "calls"}, ${m.applications} applications`,
  );

// How each minimum is counted. The FAQ (#how-work-is-counted) and /refunds.
export const howCounted = [
  "Outreach emails: BCC log@firstofferacademy.com, sent from the student's registered email, one recipient per email, to a contact who meets the target-list criteria set in Week 0. Each person counts once per week.",
  "Networking calls: log@firstofferacademy.com added as a guest on the calendar invite.",
  "Applications: submitted through Simplify from the registered email, with confirmation emails auto-forwarded to log@firstofferacademy.com (set up together in Week 0).",
  "Attendance: Zoom records. Assignments: the submission timestamp.",
  "The week runs Monday 12:00 am to Sunday 11:59 pm Pacific.",
];

// Offer-or-refund: the only refund-on-outcome language on the site (never
// describe it any other way). The FAQ, /refunds, and /pricing read these.
export const offerOrRefund = {
  title: "Offer-or-refund",
  body: `If your student meets every weekly minimum through ${afterProgram.until} and receives no internship offer, we refund the full ${site.tuition.total}.`,
  terms: [
    "An offer is any internship, paid or unpaid, offered in writing (email or letter), including one the student declines.",
    "One makeup week: the student may miss one week's minimums once and make them up the following week.",
    "Banking: work above a week's minimum carries forward to the next week only. Example: 140 emails in Week 8 covers 40 of Week 9's 100.",
    "Eligibility ends if the student misses minimums a second time, misses a makeup week, skips a scheduled employer interview, pauses or leaves the program, or a payment is 14 or more days late. Coaching continues; only the refund ends. We schedule a reset call with the student and parent.",
    "Every Monday, the parent and student receive the student's numbers and status: On track, Makeup week used, or Not eligible. A status not disputed within 7 days is final.",
    "Refund requests are due by June 15, 2027, to tyler@firstofferacademy.com. Approved refunds are paid within 30 days.",
  ],
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


// What tuition buys, in plain terms. Shown on /pricing.
export const pricingIncludes = [
  "Week 0: prep materials and pre-work, sent January 1",
  "Weeks 1–8: weekly 90-minute group session, weekly 60-minute 1:1, pod of three",
  "Weeks 9–12: technical and behavioral mock interviews, networking prep and debriefs",
  `After Week 12 until an offer or ${afterProgram.until}: 20-minute weekly check-in and a mock interview every other week`,
  "Coached Extern externship applications, fee covered (admission is Extern's decision)",
  "Status email to parent and student every Monday, and the Week 8 family meeting",
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
