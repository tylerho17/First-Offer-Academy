// The core-teaching curriculum (Weeks 1–8), plus Week 0 winter-break pre-work. Generated from
// docs/CURRICULUM-SOURCE.md. Every number here must match the Standard in
// content/program.ts.
//
// Used by /curriculum, /curriculum/week-[n], and the /program syllabus.

export type Phase = "Build the Candidate" | "Run the Search" | "Track Technicals" | "Interview Reps";
export type TrackName = "Finance" | "Accounting";

// Download slugs from content/downloads.ts. Week pages link each one to its file.
export type AssetSlug =
  | "outreach-tracker"
  | "target-list"
  | "cold-email-pack"
  | "ai-prompt-pack"
  | "call-framework"
  | "self-questions"
  | "why-worksheet"
  | "technicals-finance"
  | "technicals-accounting"
  | "technicals-marketing"
  | "technicals-tech"
  | "interview-scorecard"
  | "game-plan";

export type WeekNumbers = {
  emails: string; // cumulative sequenced emails sent by the end of the week
  calls: string; // cumulative calls completed
  stories: string; // behavioral stories written and recorded
  externship: string; // externship application status (applications, never placement)
};

export type Week = {
  n: number;
  title: string;
  phase: Phase;
  split?: boolean; // Weeks 5–6: the cohort splits by track
  objective: string;
  teach: string[]; // "What we teach"
  trackTeach?: Record<TrackName, string[]>; // track-split weeks only
  liveReps: string;
  oneOnOne: string; // the 60-minute 1:1 focus this week
  minimum: string; // the weekly minimum
  deliverables: string[];
  level?: number; // Standard level gate reached this week
  coachQuestions: string[];
  assets: AssetSlug[];
  parents: string; // "What parents will see this week"
  numbers: WeekNumbers;
};

export const preWork = {
  label: "Week 0",
  name: "Winter Break Pre-Work",
  summary:
    "Starts the day you enroll, not in January. Students arrive at Week 1 with a resume draft, their first 20 named contacts, and the Candidate Brand module already watched.",
};

// Four phases, two weeks each; no week belongs to two phases. Outreach keeps
// running as a weekly minimum after its phase, and Accountability & Pods runs
// underneath all eight weeks.
export const phaseInfo: { name: Phase; weeks: string; from: number; to: number; summary: string; points: string[] }[] = [
  {
    name: "Build the Candidate",
    weeks: "Weeks 1–2",
    from: 1,
    to: 2,
    summary: "Candidate Brand + Outreach System begins.",
    points: [
      "Resume rebuilt until it passes the rubric",
      "Honest gap check: what's missing and what to do about it",
      "Recorded 60-second intro",
      "Target list of 50 named contacts at real companies",
      "First outreach sequences written and sent",
    ],
  },
  {
    name: "Run the Search",
    weeks: "Weeks 3–4",
    from: 3,
    to: 4,
    summary: "Outreach System at full volume + Story Bank + externship applications.",
    points: [
      "50 emails a week, with a follow-up system",
      "Networking calls, and the one question that turns a call into a referral",
      "8 stories mapped to every common interview question",
      "Externship applications: most freshmen don't know these programs exist. We find the ones that are open, coach the application end to end, and cover the fee. Same skill set as the internship search, on a much shorter timeline.",
    ],
  },
  {
    name: "Track Technicals",
    weeks: "Weeks 5–6",
    from: 5,
    to: 6,
    summary: "The cohort splits by track. First graded mock in Week 6.",
    points: [
      "Finance or Accounting — what each actually tests",
      "Where to start and how deep a freshman needs to go",
      "The first graded mock interview, Week 6",
    ],
  },
  {
    name: "Interview Reps",
    weeks: "Weeks 7–8",
    from: 7,
    to: 8,
    summary: "Second graded mock in Week 7, then the family meeting in Week 8.",
    points: ["Live reps every week", "The second graded mock, Week 7, run by a stranger", "Week 8 family meeting"],
  },
];

// Runs underneath all four phases, not a fifth phase.
export const runningThroughout = {
  name: "Accountability & Pods",
  label: "Running the whole way",
  summary: "Pod of three, weekly minimums, Sunday scoreboard, parent report every two weeks.",
};

const MIN = "50 new sequenced emails · every follow-up due this week · tracker updated by Sunday night";

export const weeks: Week[] = [
  {
    n: 1,
    title: "The Game, the Resume, and the Story",
    phase: "Build the Candidate",
    objective: "Kill the idea that recruiting rewards intelligence, and turn the pre-work resume draft into one that passes the rubric.",
    teach: [
      "The 5 things that matter, ranked: networking, resume, enthusiasm, behaviorals, technicals. Most students study them in reverse order.",
      "Why clubs matter less than people think. A club is one way to get reps and contacts; it is not a gate you have to pass.",
      "How the freshman and sophomore market actually works: boutiques, middle-market firms, local firms, startups, and early-insight programs.",
      "The resume rubric, line by line: format, order, what gets cut, and what a reader sees in the first six seconds.",
      "Bullets as outcomes, not duties. \"Responsible for social media\" becomes what changed because you were there.",
      "The intro structure: where you're from, what pulled you in, what you've done, and why you're talking to them.",
    ],
    liveReps: "Each student answers \"tell me about yourself\" cold, on camera. No prep. This recording is the Week 8 baseline. Then peers swap resumes and grade them against the rubric.",
    oneOnOne: "Honest gap check against the pre-work: what the student has already done that counts, what's missing, and a live resume edit until it passes the rubric.",
    minimum: "Resume passes the rubric, intro recorded, and the target list of 50 with named contacts built.",
    deliverables: ["Resume passes the rubric", "60-second intro recorded", "Answers to the 25 self-questions (raw material for stories)", "Target list of 50 companies with named contacts"],
    level: 1,
    coachQuestions: [
      "What would have to be true in 8 weeks for you to call this a win?",
      "Which line on your resume would you least like to be asked about? Why is it still there?",
      "Which ten companies on your list would you most regret never contacting?",
    ],
    assets: ["self-questions", "target-list"],
    parents: "Your student records their cold Week 1 intro. You'll see it again at the Week 8 family meeting, next to the new one.",
    numbers: { emails: "0", calls: "0", stories: "25 self-questions answered · intro recorded", externship: "Not started" },
  },
  {
    n: 2,
    title: "Target List & the AI Outreach System",
    phase: "Build the Candidate",
    objective: "A working outreach machine, and the first 50 sequenced emails out the door.",
    teach: [
      "The tiered target list: A (dream firms, for relationships), B (realistic: boutiques, middle market, local firms, startups), and C (safe).",
      "Sourcing contacts with tools like Apollo or RecruitEm, and checking that the person actually does the job you want to hear about.",
      "Building the AI email automation: personalization prompts, mail merge and sequencing, and the follow-up steps loaded from day one.",
      "The tracker. Only track people who reply. Everyone else lives in the sequence until they do.",
      "The weekly minimum starts now: 50 new sequenced emails, every follow-up due, and the tracker updated by Sunday night.",
    ],
    liveReps: "Every student builds their sequence live in the session and sends before leaving.",
    oneOnOne: "Check the automation end to end: the personalization prompt, the first five emails line by line, and the follow-up steps.",
    minimum: MIN,
    deliverables: ["AI email automation live", "50 sequenced emails sent and logged"],
    level: 2,
    coachQuestions: [
      "Read me your best personalized first line. Would you reply to it?",
      "Which tier is most of your list in? Is that on purpose?",
      "What will stop you from sending 50 next week, and what's the plan for that?",
    ],
    assets: ["target-list", "outreach-tracker", "ai-prompt-pack"],
    parents: "The first biweekly progress report: your student's level, the resume status, and the target list count. The tracker starts counting this week.",
    numbers: { emails: "50", calls: "0", stories: "—", externship: "Open programs identified" },
  },
  {
    n: 3,
    title: "Cold Email That Gets Answered, and the Call",
    phase: "Run the Search",
    objective: "Move the reply rate toward 10%, and turn replies into calls people remember.",
    teach: [
      "The Two C's: a compliment and a connection. People help people who remind them of themselves.",
      "Subject lines, length, and the one ask. If the email takes more than 30 seconds to read, it's too long.",
      "Follow-up cadence: at most 4 follow-ups. Weekly in November and December; biweekly to monthly off-peak.",
      "The call framework: open warm, listen 80% of the time, and ask questions that prove you were listening.",
      "The thank-you, sent 1–2 hours after the call, naming one specific thing they said.",
      "Externship applications: which programs are open now, what each one asks for, and how the written application is scored.",
    ],
    liveReps: "The worst email of the week is rewritten live on screen. Then mock calls in pairs, with the coach playing a distracted associate.",
    oneOnOne: "Reply-rate diagnosis on ten sent emails, then a recorded mini-mock call played back: where the energy dropped and what to ask instead.",
    minimum: MIN,
    deliverables: ["150 total sent", "3 calls completed", "A thank-you within 2 hours of each call", "First externship application started"],
    level: 3,
    coachQuestions: [
      "What's your reply rate this week, and what changed from last week?",
      "What's one thing your last call taught you that you couldn't have Googled?",
      "When did you send the thank-you? What did it say?",
    ],
    assets: ["cold-email-pack", "ai-prompt-pack", "call-framework", "outreach-tracker"],
    parents: "The second progress report: emails sent (target: 150), reply rate, calls completed, and the first externship application underway.",
    numbers: { emails: "150", calls: "3", stories: "—", externship: "First application started" },
  },
  {
    n: 4,
    title: "Referrals & Behavioral Stories",
    phase: "Run the Search",
    objective: "Calls that lead to the next door, and 8 stories chosen for uniqueness, not impressiveness.",
    teach: [
      "The referral close. Never ask for a referral directly: ask who else would be good to hear from.",
      "Staying warm for months: the check-in note, the update when you act on their advice, and handling a \"no\" gracefully.",
      "Mining stories from the Week 1 self-questions. The best stories are usually the ones students think are too small.",
      "The structure: situation, what you did, what changed, what you learned. One story, many questions.",
      "Recording stories out loud. A story you've only written isn't ready yet.",
      "Externship applications: the recorded video and the live interview, rehearsed the same way we rehearse internship interviews.",
    ],
    liveReps: "Practice the close until it sounds natural, then role-play the awkward \"no.\" Each student tells two stories; peers guess which question each one answers.",
    oneOnOne: "Walk through every call so far (did the close happen, who's owed a follow-up), then line-by-line edits on the weakest two stories.",
    minimum: MIN,
    deliverables: ["250 total sent", "5 calls completed", "First intro earned", "8 stories written, recorded, and mapped", "Externship applications submitted"],
    coachQuestions: [
      "Did you use the close on every call? Which one did you skip, and why?",
      "Which of your 8 stories could only have happened to you?",
      "Which question on the map has no story yet?",
    ],
    assets: ["call-framework", "self-questions", "outreach-tracker"],
    parents: "Your student has 8 recorded stories ready for interviews, the first introduction in the tracker, and externship applications submitted.",
    numbers: { emails: "250", calls: "5", stories: "8 recorded", externship: "Applications submitted" },
  },
  {
    n: 5,
    title: "Why This Industry, Why This Firm — and Technicals Begin",
    phase: "Track Technicals",
    split: true,
    objective: "Enthusiasm that reads as real, and a technical baseline that holds up in a first round.",
    teach: [
      "The 3-bucket \"why\": (1) mentality, (2) 2–3 specific things about the work, and (3) the people and their standards.",
      "Building firm-specific answers from calls you've already had. The best \"why us\" quotes someone who works there.",
      "Why generic enthusiasm fails: \"I'm passionate about finance\" tells the interviewer nothing.",
      "The cohort splits into Finance and Accounting for Weeks 5–6.",
      "Understand the concept first. The answer comes easier after that, and so does the version of the question you haven't seen.",
    ],
    trackTeach: {
      Finance: [
        "Study order: accounting → valuation → enterprise vs. equity value → M&A → LBO.",
        "Walking the three statements, and what happens to each when one line changes.",
        "Valuation methods and when each one is used.",
      ],
      Accounting: [
        "Debits and credits, and how one transaction moves through the three statements.",
        "Accruals and revenue recognition, with worked examples.",
        "Audit vs. tax vs. advisory: what each does, so the \"why accounting\" answer is specific.",
      ],
    },
    liveReps: "Rapid-fire \"why us\" drills across firms on each student's own target list, then timed technical drills where students grade each other.",
    oneOnOne: "Record the \"why\" pitch and rebuild it for the three firms the student cares about most, then work the weakest technical area out loud.",
    minimum: MIN,
    deliverables: ["300 total sent", "\"Why\" pitch recorded", "2 referrals or intros", "Technical baseline quiz passed at the track threshold"],
    level: 4,
    coachQuestions: [
      "What's one thing about this work you'd actually enjoy on a bad day?",
      "If a firm asked \"why us\" right now, which call would you quote?",
      "Which question did you get right without being able to explain why?",
    ],
    assets: ["why-worksheet", "technicals-finance", "technicals-accounting"],
    parents: "The third progress report: whether your student has reached Level 4 (Networked), and their track group for technical prep.",
    numbers: { emails: "300", calls: "5+", stories: "8 recorded", externship: "Interviews where invited" },
  },
  {
    n: 6,
    title: "Technicals & the First Graded Mock",
    phase: "Track Technicals",
    split: true,
    objective: "A full interview under pressure, recorded and graded.",
    teach: [
      "Interview flow: the intro, behaviorals, the why, technicals or the case, and your questions.",
      "Pacing: how long each answer should run, and how to tell when you've lost the room.",
      "Recovering from a blank: say what you know, reason out loud, and come back to it.",
      "How deep a first- or second-year student actually needs to go in their track, and what to skip for now.",
      "Applying to every open role on the target list, and keeping the outreach running while you do.",
    ],
    trackTeach: {
      Finance: [
        "Walk-throughs of the questions first rounds actually ask, out loud and on paper.",
        "One deal and one market story, explained in plain English.",
        "Where the line is: what a freshman is expected to know, and what they aren't.",
      ],
      Accounting: [
        "Walk-throughs of the questions first rounds ask, out loud and on paper.",
        "A \"why this firm\" answer built from a recruiting event or office visit.",
        "Where the line is: clean fundamentals beat memorized standards.",
      ],
    },
    liveReps: "A full 30-minute mock per student (behavioral, why, technical or case), graded on a written scorecard.",
    oneOnOne: "Watch the mock recording together, line by line against the scorecard, and pick the two fixes for next week.",
    minimum: MIN,
    deliverables: ["350 total sent", "1 graded mock passed", "Applications submitted to every open role on the target list"],
    coachQuestions: [
      "Where on the scorecard did you lose the most points?",
      "What did you say when you blanked? What would you say now?",
      "Which open roles on your list haven't you applied to yet?",
    ],
    assets: ["interview-scorecard", "technicals-finance", "technicals-accounting"],
    parents: "The fourth progress report: the graded mock score, applications submitted, and emails sent (target: 350).",
    numbers: { emails: "350", calls: "5+", stories: "8 recorded", externship: "Outcome depends on the program" },
  },
  {
    n: 7,
    title: "Interview Execution",
    phase: "Interview Reps",
    objective: "Real interviews, handled like a pro.",
    teach: [
      "Running multiple processes at once: a calendar, a prep sheet per firm, and honest updates to each.",
      "Final-round and superday prep: back-to-back interviews, energy, and consistency across interviewers.",
      "Declining without burning a relationship: frame it as fit, not preference.",
      "Pre-interview research on the firm and the interviewer, and how to use it without sounding like you looked them up.",
      "Level 5 check: 350+ sent, 2 graded mocks passed, and 1+ real first round where available.",
    ],
    liveReps: "A second full mock with a harder interviewer (a stranger), in a different format.",
    oneOnOne: "Prep for whatever is real this week: a first round, a follow-up, or a decline. If nothing is live, a mini-mock on the weakest scorecard area.",
    minimum: MIN,
    deliverables: ["350+ total sent", "2 graded mocks passed", "First rounds completed where available"],
    level: 5,
    coachQuestions: [
      "What do you know about the person interviewing you?",
      "Which process are you most likely to let slip, and what's the next step there?",
      "What did the stranger's mock show you that ours didn't?",
    ],
    assets: ["interview-scorecard", "outreach-tracker"],
    parents: "Your student completes their second mock, run by a stranger, and keeps every live process moving.",
    numbers: { emails: "350+", calls: "5+", stories: "8 recorded", externship: "Outcome depends on the program" },
  },
  {
    n: 8,
    title: "Results & the 6-Month Game Plan",
    phase: "Interview Reps",
    objective: "Close the program and keep the engine running.",
    teach: [
      "Evaluating and accepting offers: what to ask, how long you can take, and how to say yes well.",
      "Keeping networks warm after the search, so the next cycle starts with relationships, not a blank list.",
      "What spring and sophomore recruiting looks like, and when it starts. The program ends before spring recruiting opens, not during it.",
      "Building the 6-month game plan: monthly targets, contacts to keep warm, an applications calendar, and skills to build.",
    ],
    liveReps: "Each student re-records \"tell me about yourself\" and watches it next to the Week 1 baseline.",
    oneOnOne: "Finish the 6-month game plan together, and rehearse the family results presentation.",
    minimum: "Final results report and the 6-month game plan.",
    deliverables: ["Final results report", "6-month game plan (monthly targets, contacts to keep warm, applications calendar, skills to build)"],
    coachQuestions: [
      "What's the one habit from these 8 weeks you'll keep?",
      "Who are the five people you'll stay in touch with, and when?",
      "What does spring recruiting need from you, starting next month?",
    ],
    assets: ["game-plan", "outreach-tracker"],
    parents: "The Week 8 family meeting (30 minutes): your student presents their numbers (emails sent, calls, referrals, interviews, externship applications, level, outcome) and the Week 1 and Week 8 intros side by side.",
    numbers: { emails: "350+", calls: "5+", stories: "8 recorded", externship: "Applications complete" },
  },
];

export const weeklyRhythm = [
  { name: "90-minute group session", body: "Scoreboard, one skill taught, live reps, and each student's commitment for the week." },
  { name: "60-minute 1:1", body: "Tracker review, the biggest bottleneck fixed, live edits on real work, and the next 7 days written down." },
  { name: "Pod of three", body: "Two classmates matched to your student's schedule, checking each other's numbers through the week." },
  { name: "Sunday scoreboard", body: "The tracker is updated by Sunday night. The numbers read aloud in session come from it." },
];

export const rhythmNotes = [
  "Finals week and holiday weeks run async: no session, but the minimums are still due.",
  "Two missed weekly minimums in a row triggers a call with the student and a parent.",
  "Parents get a one-page progress report every two weeks, plus the Week 8 family results meeting.",
];

export const getWeek = (n: number) => weeks.find((w) => w.n === n);
export const weekHref = (n: number) => `/curriculum/week-${n}`;

// Display names for each asset. Files are listed in content/downloads.ts.
export const assetTitles: Record<AssetSlug, string> = {
  "outreach-tracker": "Outreach tracker",
  "target-list": "Target list template (A/B/C tiers)",
  "cold-email-pack": "Cold email template pack",
  "ai-prompt-pack": "AI personalization prompt pack",
  "call-framework": "Call framework + referral close script",
  "self-questions": "25 self-questions + story template",
  "why-worksheet": "\"Why\" worksheet",
  "technicals-finance": "Finance technical question bank",
  "technicals-accounting": "Accounting technical question bank",
  "technicals-marketing": "Marketing technical question bank",
  "technicals-tech": "Tech technical question bank",
  "interview-scorecard": "Interview scorecard",
  "game-plan": "6-month game plan template",
};
