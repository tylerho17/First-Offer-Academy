// Copy for /program, the long-form program overview.
// Every statement here is built from content/program.ts, content/tracks.ts,
// docs/site-brief.md, or the Playbook articles. No outcome claims, no stats
// that aren't in content/stats.ts.
//
// Video and proof fields are empty until real, permitted media exists. Empty
// fields render as labeled placeholders while site.showPlaceholders is true
// and disappear when it's false.

export type ProofAsset =
  | { kind: "images"; label: string; ratio: string; count: number; srcs: string[]; note?: string }
  | { kind: "image"; label: string; ratio: string; src: string; note?: string }
  | { kind: "videoPair"; label: string; items: { label: string; url: string }[] }
  | { kind: "video"; label: string; url: string; note?: string }
  | { kind: "media"; label: string; ratio: string; src: string; note?: string };

export type ModuleIcon = "id" | "mail" | "book" | "chart" | "mic" | "users";

export type Module = {
  slug: string; // anchor id: /program#<slug>
  title: string;
  icon: ModuleIcon;
  positioning: string; // one line, large display type
  detail: string; // one line revealed on the tile
  body: string[];
  components: [string, string, string];
  videos: { tyler: string; student: string }; // YouTube or Vimeo URLs
  proof: ProofAsset;
};

export const programOverview = {
  hero: {
    eyebrow: "The program",
    title: "A 12-week system that turns a first-year student into a real candidate.",
    sub: "Membership is by application. The founding cohort has 24 seats in three sections of 8.",
    videoLabel: "Program overview from Tyler",
    videoUrl: "", // TODO(Tyler): YouTube or Vimeo link
  },

  whoFor: {
    title: "First Offer Academy is for first- and second-year students who are…",
    pains: [
      { title: "Didn't get into the club", body: "The recruiting help on campus sits inside selective clubs, and most freshmen don't get in." },
      { title: "Don't know where to start", body: "They know internships matter. Nobody has shown them what to do first, or in what order." },
      { title: "Have no network in the field", body: "No family contacts in finance, consulting, marketing, or tech, and no idea how to meet anyone who is." },
      { title: "Sending applications and hearing nothing", body: "Online applications go out. Nothing comes back, and there's no way to tell why." },
    ],
    callout: "This does not require a target school, a 4.0, a finance background, or club membership.",
  },

  booking: {
    title: "Book a free call to ask questions or apply.",
    sub: "Twenty minutes with Tyler to talk through your student's situation and whether the program fits.",
  },

  helps: {
    eyebrow: "How First Offer helps",
    title: "Six parts, one system.",
    hint: "Tap a tile for details",
  },

  whyNow: {
    title: "Recruiting starts earlier than anyone tells you.",
    sub: "Freshman year is the head start.",
    paragraphs: [
      "For finance, consulting, and a growing share of tech and marketing roles, the students who land internships in sophomore and junior summer usually started building toward them in freshman year. Many find out how early it starts only after the first deadlines have passed.",
      "The most structured recruiting help on many campuses sits inside selective clubs. Students who don't get in are left to figure it out alone, at the same time as everyone else who didn't get in.",
      "Online advice is generic by design. It can't look at your student's resume, read their emails before they go out, or tell them what to fix after a mock interview. Feedback on real work, every week, is what changes the result of a search.",
    ],
  },

  together: {
    title: "Put it all together: a real search, fully executed, in 12 weeks.",
    note: "No target school, 4.0, finance background, or club membership required.",
  },

  stories: {
    title: "See what students are saying.",
  },
};

export const modules: Module[] = [
  {
    slug: "candidate-brand",
    title: "Candidate Brand",
    icon: "id",
    positioning: "Every email and interview starts from the same place: a resume and an introduction you're ready to stand behind.",
    detail: "An honest gap check, a resume graded against our rubric, and a recorded 60-second intro.",
    body: [
      "Weeks 1–3 start with an honest gap check: where your student is today, what's already on the resume, and what's missing for the field they want. Nothing is assumed. High school leadership, jobs, and projects count at this stage.",
      "The resume is rebuilt until it passes our rubric. Then every student records a 60-second answer to \"tell me about yourself\" using a simple past, present, future structure.",
      "That Week 1 recording is kept. At the Week 12 family meeting, it plays side by side with the Week 12 version.",
    ],
    components: ["Honest gap check", "Resume rubric pass", "60-second intro recorded"],
    videos: { tyler: "", student: "" },
    proof: { kind: "images", label: "Resume before and after", ratio: "3 / 4", count: 3, srcs: [], note: "Shared with the student's written permission" },
  },
  {
    slug: "outreach-system",
    title: "Outreach System",
    icon: "mail",
    positioning: "Recruiting doesn't reward the smartest student. It rewards the one who sent the 40th email.",
    detail: "A target list of 50 with named contacts, 50 sequenced emails a week, and a thank-you after every call.",
    body: [
      "Every student builds a target list of 50 companies in their field, including small and local firms, not only the famous names. Each contact is named, not a generic inbox. In Week 3 every student sets up their own AI-assisted email automation and sends the first 50 sequenced emails before leaving the session. From then on the minimum is 50 new sequenced emails a week, 500+ by the end of the program.",
      "Emails follow the Two C's: a genuine compliment and a real connection, then one specific ask. AI drafts; your student personalizes and reads every email before it goes. No reply is normal, so each sequence carries up to four follow-ups. Your student's coach reviews the emails in the weekly 1:1.",
      "Every call is logged in the tracker and gets a thank-you note within two hours that mentions one specific thing the person said. Nobody asks for a referral directly; students learn the close that earns an introduction instead.",
    ],
    components: ["Target list of 50 with named contacts", "AI-assisted sequencing, 50 emails a week", "Every call logged and thanked within 2 hours"],
    videos: { tyler: "", student: "" },
    proof: { kind: "image", label: "Sneak peek: a student's outreach tracker", ratio: "16 / 10", src: "", note: "Screenshot with names removed" },
  },
  {
    slug: "story-bank",
    title: "Story Bank",
    icon: "book",
    positioning: "The point isn't to have the perfect answer. It's to have a better-prepared one.",
    detail: "8 behavioral stories, chosen for uniqueness and edited line by line.",
    body: [
      "Most interviews come back to the same handful of questions. Students mine 8 stories from 25 self-questions, chosen for uniqueness, not impressiveness, and map each one to leadership, failure, conflict, teamwork, initiative, and why this field.",
      "Each story is built on a structured framework, written once, and then practiced out loud until it sounds natural rather than memorized. In the weekly 1:1, your student's coach gives line-by-line edits.",
      "All 8 stories are recorded by the Networked level of the Standard (Week 8), so they're ready well before the first real interview.",
    ],
    components: ["8 stories, mapped to every common question", "Structured frameworks", "Line-by-line edits from your coach"],
    videos: { tyler: "", student: "" },
    proof: {
      kind: "videoPair",
      label: "Before vs after: \"Tell me about yourself\"",
      items: [
        { label: "Week 1 recording", url: "" },
        { label: "Week 12 recording", url: "" },
      ],
    },
  },
  {
    slug: "track-technicals",
    title: "Track Technicals",
    icon: "chart",
    positioning: "Understand the concept first. The answer comes easier after that.",
    detail: "Weeks 9–10 split by track: Finance, Consulting, Marketing, or Tech.",
    body: [
      "In Weeks 9–10 the cohort splits into four tracks for track-specific technical prep. Finance follows a set study order: accounting, valuation, enterprise vs. equity value, M&A, then LBOs. Consulting covers case structure and mental math. Marketing builds a starter portfolio and the metrics that matter. Tech focuses on one strong project and technical interview reps.",
      "Concepts come before memorization: students learn why an answer is right, so they can handle the version of the question they haven't seen.",
      "Practice questions come with answer walk-throughs, so students can check their reasoning, not only their final answer.",
    ],
    components: ["Track split in Weeks 9–10", "Concepts before memorization", "Practice with answer walk-throughs"],
    videos: { tyler: "", student: "" },
    proof: { kind: "video", label: "Sample technical session", url: "" },
  },
  {
    slug: "interview-reps",
    title: "Interview Reps",
    icon: "mic",
    positioning: "Confidence in an interview comes from reps, not from reading about interviews.",
    detail: "A weekly 60-minute 1:1, live reps in every session, and graded mocks in Weeks 10–11.",
    body: [
      "Every week, a 60-minute 1:1 with your student's coach reviews the tracker line by line, fixes the single biggest bottleneck, and edits real work live, often a mini-mock. Every 90-minute session includes live reps, not only instruction.",
      "Weeks 10 and 11 each include a full 30-minute graded mock on a written scorecard. The last one is run by a guest professional your student has never met, because a real interviewer is a stranger too.",
      "To reach the Interviewing level of the Standard, a student has sent 500+ emails, passed two graded mocks, completed their second externship, and done a real first round where one is available.",
    ],
    components: ["Weekly 60-minute 1:1", "Live reps in session", "Graded mocks, the last run by strangers"],
    videos: { tyler: "", student: "" },
    proof: { kind: "media", label: "Mock interview recording", ratio: "16 / 9", src: "", note: "Audio or video, shared with permission" },
  },
  {
    slug: "accountability-pods",
    title: "Accountability & Pods",
    icon: "users",
    positioning: "Good intentions fade by Week 3. A weekly number doesn't.",
    detail: "A pod of three, a Sunday scoreboard, and progress reports for parents.",
    body: [
      "Every student joins a pod of three: two classmates matched to their schedule who see their numbers every Sunday. Each session opens with the scoreboard.",
      "Students commit to weekly minimums. Two missed weeks in a row triggers a call with the student and a parent.",
      "Parents get a one-page progress report every two weeks. At the Week 12 family meeting, your student presents their results: every email, call, and interview on record.",
    ],
    components: ["A pod of three", "Weekly minimums and Sunday scoreboard", "Biweekly parent reports and the Week 12 family meeting"],
    videos: { tyler: "", student: "" },
    proof: { kind: "image", label: "Inside a pod", ratio: "16 / 10", src: "", note: "Real photo of a pod session" },
  },
];
