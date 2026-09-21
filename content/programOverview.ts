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

  // Drawn from the level gates in content/program.ts. These are what the
  // program requires every student to do, not promised outcomes.
  week12: {
    title: "By Week 12, your student will have:",
    note: "These are the requirements every student works to in the program. They describe the work, not an outcome: hiring decisions belong to employers.",
    items: [
      "A resume that passes our rubric",
      "A target list of 50 companies",
      "100+ personalized emails sent and logged",
      "5+ calls with working professionals",
      "6 behavioral stories recorded",
      "Graded mock interviews completed",
      "A documented search to show you, step by step",
    ],
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
    detail: "A target list of 50, personalized emails every week, and a follow-up rule for every call.",
    body: [
      "Every student builds a target list of 50 companies in their field, including small and local firms, not only the famous names. The first 25 personalized emails go out by the end of Week 3, then 25 new emails a week through Week 8.",
      "Emails follow a short structure: who you are, why this person, one specific ask, and thanks. No reply is normal, so each email gets one follow-up after five business days. Your student's coach reviews the emails before they go out.",
      "Every call is logged in the tracker and gets a thank-you note within two hours that mentions one specific thing the person said. Referrals are asked for only once there's a real relationship.",
    ],
    components: ["Target list of 50", "Personalized emails with a follow-up cadence", "Every call logged and thanked within 2 hours"],
    videos: { tyler: "", student: "" },
    proof: { kind: "image", label: "Sneak peek: a student's outreach tracker", ratio: "16 / 10", src: "", note: "Screenshot with names removed" },
  },
  {
    slug: "story-bank",
    title: "Story Bank",
    icon: "book",
    positioning: "The point isn't to have the perfect answer. It's to have a better-prepared one.",
    detail: "Six core behavioral stories, built on a structure and edited line by line.",
    body: [
      "Most interviews come back to the same handful of questions. Students prepare six core stories: leadership, teamwork, failure, conflict, initiative, and why this field.",
      "Each story is built on a structured framework, written once, and then practiced out loud until it sounds natural rather than memorized. In the weekly 1:1, your student's coach gives line-by-line edits.",
      "All six stories are recorded by the Networked level of the Standard, so they're ready well before the first real interview.",
    ],
    components: ["Six core stories", "Structured frameworks", "Line-by-line edits from your coach"],
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
      "In Weeks 9–10 the cohort splits into four tracks for track-specific technical prep. Finance covers the three statements and valuation basics. Consulting covers case structure and mental math. Marketing builds a starter portfolio and the metrics that matter. Tech focuses on one strong project and technical interview reps.",
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
    detail: "Weekly 1:1 feedback, live reps in every session, and graded mocks in Weeks 11–12.",
    body: [
      "Every week, a 15-minute 1:1 with your student's coach reviews the tracker and fixes the single biggest bottleneck. Every 90-minute session includes live reps, not only instruction.",
      "Weeks 11–12 are graded mock interviews. The last ones are run by guest professionals your student has never met, because a real interviewer is a stranger too.",
      "To reach the Interviewing level of the Standard, a student completes a first-round interview and passes two graded mocks.",
    ],
    components: ["Weekly 1:1 feedback", "Live reps in session", "Graded mocks, the last run by strangers"],
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
