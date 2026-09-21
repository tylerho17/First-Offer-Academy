// The 12-week curriculum. Generated from docs/CURRICULUM-SOURCE.md (the
// source of truth). Expand it; never contradict it. Every number here must
// match the Standard in content/program.ts.
//
// Used by /curriculum, /curriculum/week-[n], and the /program syllabus.

export type Phase = "Foundation" | "Outreach & network" | "Your track" | "Interview-ready";
export type TrackName = "Finance" | "Consulting" | "Marketing" | "Tech";

// Download slugs from content/downloads.ts. Week pages link each one to its file.
export type AssetSlug =
  | "resume-rubric"
  | "resume-template"
  | "outreach-tracker"
  | "target-list"
  | "cold-email-pack"
  | "ai-prompt-pack"
  | "call-framework"
  | "self-questions"
  | "why-worksheet"
  | "technicals-finance"
  | "technicals-consulting"
  | "technicals-marketing"
  | "technicals-tech"
  | "interview-scorecard"
  | "game-plan";

export type WeekNumbers = {
  emails: string; // cumulative sequenced emails sent by the end of the week
  calls: string; // cumulative calls completed
  stories: string; // behavioral stories written and recorded
  externship: string; // externship status
};

export type Week = {
  n: number;
  title: string;
  phase: Phase;
  split?: boolean; // Weeks 9–10: the cohort splits by track
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

export const phaseInfo: { name: Phase; weeks: string; summary: string }[] = [
  { name: "Foundation", weeks: "Weeks 1–3", summary: "Resume, intro, a target list of 50 with named contacts, and the outreach system live." },
  { name: "Outreach & network", weeks: "Weeks 4–8", summary: "50 sequenced emails a week, calls, referrals, 8 stories, and the first externship." },
  { name: "Your track", weeks: "Weeks 9–10", summary: "Split by track for technicals and the first graded mock interview." },
  { name: "Interview-ready", weeks: "Weeks 11–12", summary: "Real interviews, a mock with a stranger, results, and the 6-month game plan." },
];

const MIN = "50 new sequenced emails · every follow-up due this week · tracker updated by Sunday night";

export const weeks: Week[] = [
  {
    n: 1,
    title: "The Game",
    phase: "Foundation",
    objective: "Kill the idea that recruiting rewards intelligence. It rewards persistence.",
    teach: [
      "The 5 things that matter, ranked: networking, resume, enthusiasm, behaviorals, technicals. Most students study them in reverse order.",
      "Why clubs matter less than people think. A club is one way to get reps and contacts; it is not a gate you have to pass.",
      "How the freshman and sophomore market actually works: boutiques, middle-market firms, local Orange County firms, startups, and early-insight and diversity programs.",
      "What a 12-week search looks like on paper: the level gates, the weekly minimum from Week 3, and how the tracker is graded.",
      "How to answer the 25 self-questions honestly. They're the raw material for every story you'll tell in an interview.",
    ],
    liveReps: "Each student answers \"tell me about yourself\" cold, on camera. No prep. This recording is the Week 12 baseline.",
    oneOnOne: "Baseline assessment: where the resume stands, what the student has already done that counts, and a realistic weekly hours commitment.",
    minimum: "No email minimum yet. The deliverables below are due before Week 2.",
    deliverables: ["Resume v1", "Answers to the 25 self-questions (raw material for stories)", "Baseline assessment completed"],
    coachQuestions: [
      "What would have to be true in 12 weeks for you to call this a win?",
      "How many hours a week can you honestly commit?",
      "What have you been avoiding?",
    ],
    assets: ["self-questions", "resume-template"],
    parents: "Your student records their cold Week 1 intro. You'll see it again at the Week 12 family meeting, next to the new one.",
    numbers: { emails: "0", calls: "0", stories: "25 self-questions answered", externship: "Not started" },
  },
  {
    n: 2,
    title: "Resume & Story",
    phase: "Foundation",
    objective: "A top-tier resume that passes the rubric, and a 60-second intro that doesn't sound rehearsed.",
    teach: [
      "The resume rubric, line by line: format, order, what gets cut, and what a reader sees in the first six seconds.",
      "Bullets as outcomes, not duties. \"Responsible for social media\" becomes what changed because you were there.",
      "Turning high school leadership, jobs, and class projects into bullets that hold up in an interview.",
      "The intro structure: where you're from, what pulled you in, what you've done, and why you're talking to them.",
      "Building the target list of 50 companies, with a named contact at each. Names, not generic inboxes.",
    ],
    liveReps: "Peers swap resumes and grade them against the rubric. Intros are delivered in the hot seat and cut down until they fit in 60 seconds.",
    oneOnOne: "Live resume edit, bullet by bullet, until it passes the rubric. Then the intro, recorded and cut again.",
    minimum: "Resume passes the rubric, intro recorded, and the target list of 50 with contacts built.",
    deliverables: ["Resume passes the rubric", "60-second intro recorded", "Target list of 50 companies with named contacts"],
    level: 1,
    coachQuestions: [
      "Which line on your resume would you least like to be asked about? Why is it still there?",
      "If someone read only your top three bullets, what would they think you're good at?",
      "Which ten companies on your list would you most regret never contacting?",
    ],
    assets: ["resume-rubric", "resume-template", "target-list"],
    parents: "The first biweekly progress report: your student's level (Foundation, if the gate is met), the resume status, and the target list count.",
    numbers: { emails: "0", calls: "0", stories: "Intro recorded", externship: "Not started" },
  },
  {
    n: 3,
    title: "Target List & the AI Outreach System",
    phase: "Foundation",
    objective: "A working outreach machine, and the first 50 sequenced emails out the door.",
    teach: [
      "The tiered target list: A (dream firms, for relationships), B (realistic: boutiques, middle market, OC firms, startups), and C (safe).",
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
    parents: "Your student's outreach system is live. The tracker starts counting this week, and every number in future reports comes from it.",
    numbers: { emails: "50", calls: "0", stories: "—", externship: "Not started" },
  },
  {
    n: 4,
    title: "Cold Email That Gets Answered",
    phase: "Outreach & network",
    objective: "Move the reply rate toward 10%.",
    teach: [
      "The Two C's: a compliment and a connection. People help people who remind them of themselves.",
      "Subject lines, length, and the one ask. If the email takes more than 30 seconds to read, it's too long.",
      "Follow-up cadence: at most 4 follow-ups. Weekly in November and December; biweekly to monthly off-peak.",
      "Guardrails on AI: AI drafts, humans personalize. Never send an email you haven't read.",
      "Reading your own numbers: what a low reply rate usually means (the first line, the ask, or the list) and which fix to try first.",
    ],
    liveReps: "The worst email of the week is rewritten live on screen. The group votes on subject lines.",
    oneOnOne: "Reply-rate diagnosis: pull ten sent emails and ten replies, find the pattern, and rewrite the template together.",
    minimum: MIN,
    deliverables: ["100 total sent", "Follow-up cadence loaded", "Externship 1 started"],
    coachQuestions: [
      "What's your reply rate this week, and what changed from last week?",
      "Which email got the fastest reply? What was different about it?",
      "Are your follow-ups going out on schedule, or waiting on you?",
    ],
    assets: ["cold-email-pack", "ai-prompt-pack", "outreach-tracker"],
    parents: "The second progress report: emails sent (target: 100), reply rate, and the first externship project started.",
    numbers: { emails: "100", calls: "0", stories: "—", externship: "Externship 1 started" },
  },
  {
    n: 5,
    title: "The Call",
    phase: "Outreach & network",
    objective: "Turn replies into calls people remember.",
    teach: [
      "The call framework. Open with \"anything exciting lately?\" Answer long and casually yourself to set the tone, then move to your intro and their story.",
      "80% listening, 20% talking. Questions that prove you were listening beat questions you prepared.",
      "Prep with AI on the firm and the person: recent deals, projects, their path, and one thing to ask about.",
      "The thank-you, sent 1–2 hours after the call, naming one specific thing they said.",
      "The biggest failure mode is being dry. A call that feels like an interview is a call nobody remembers.",
    ],
    liveReps: "Mock calls in pairs, then the hot seat with the coach playing a distracted associate.",
    oneOnOne: "A mini-mock call, recorded, then played back: where the energy dropped, where the student talked too much, and the three best follow-up questions.",
    minimum: MIN,
    deliverables: ["150 total sent", "3 calls completed", "A thank-you within 2 hours of each call"],
    level: 3,
    coachQuestions: [
      "What's one thing your last call taught you that you couldn't have Googled?",
      "When did you send the thank-you? What did it say?",
      "Where did the call go flat, and what would you ask instead?",
    ],
    assets: ["call-framework", "outreach-tracker"],
    parents: "Your student is now having calls with working professionals. The tracker logs each one, with the thank-you time.",
    numbers: { emails: "150", calls: "3", stories: "—", externship: "Externship 1 in progress" },
  },
  {
    n: 6,
    title: "Converting Calls Into Referrals",
    phase: "Outreach & network",
    objective: "Calls that lead to the next door.",
    teach: [
      "The referral close. Never ask for a referral directly.",
      "Ask instead: \"Is there anyone on the team you'd be comfortable introducing me to?\" or \"Is there another perspective you think would be good for me to hear?\"",
      "Staying warm for months: the check-in note, the update when you act on their advice, and the holiday message that isn't generic.",
      "Logging every relationship: who introduced whom, when you last spoke, and what you promised to follow up on.",
      "Handling the \"no\" gracefully. Most people say no to an intro because of timing, not because of you.",
    ],
    liveReps: "Practice the close until it sounds natural, then role-play the awkward \"no.\"",
    oneOnOne: "Walk through every call so far: did the close happen, what was the answer, and who's owed a follow-up this week.",
    minimum: MIN,
    deliverables: ["200 total sent", "5 calls completed", "The close used on every call", "First intro earned"],
    coachQuestions: [
      "Did you use the close on every call? Which one did you skip, and why?",
      "Who have you not followed up with who deserves an update?",
      "Which relationship on your list could turn into an intro with one more conversation?",
    ],
    assets: ["call-framework", "outreach-tracker"],
    parents: "The third progress report: 200 emails, 5 calls, and whether the first introduction has come through.",
    numbers: { emails: "200", calls: "5", stories: "—", externship: "Externship 1 in progress" },
  },
  {
    n: 7,
    title: "Behavioral Stories",
    phase: "Outreach & network",
    objective: "8 stories, chosen for uniqueness, not impressiveness.",
    teach: [
      "Mining stories from the Week 1 self-questions. The best stories are usually the ones students think are too small.",
      "The structure: situation, what you did, what changed, what you learned.",
      "One story, many questions. Map each story to leadership, failure, conflict, teamwork, initiative, and why-this-field.",
      "Cutting a story to two minutes without losing the part that makes it yours.",
      "Recording stories out loud. A story you've only written isn't ready yet.",
    ],
    liveReps: "Each student tells two stories; peers guess which question each one answers.",
    oneOnOne: "Line-by-line edits on the weakest two stories, then a rapid drill: one question, pick a story, answer in under two minutes.",
    minimum: MIN,
    deliverables: ["250 total sent", "8 stories written, recorded, and mapped", "Externship 1 completed"],
    coachQuestions: [
      "Which of your 8 stories could only have happened to you?",
      "Which question on the map has no story yet?",
      "Where in your failure story do you actually take responsibility?",
    ],
    assets: ["self-questions"],
    parents: "Your student finishes their first externship project and has 8 recorded stories ready for interviews.",
    numbers: { emails: "250", calls: "5+", stories: "8 recorded", externship: "Externship 1 completed" },
  },
  {
    n: 8,
    title: "Why This Industry, Why This Firm",
    phase: "Outreach & network",
    objective: "Enthusiasm that reads as real.",
    teach: [
      "The 3-bucket \"why\": (1) mentality, (2) 2–3 specific things about the work, and (3) the people and their standards.",
      "Building firm-specific answers from calls you've already had. The best \"why us\" quotes someone who works there.",
      "The sector and company questions that catch students off guard, and how to prepare for them in an evening.",
      "Why generic enthusiasm fails: \"I'm passionate about finance\" tells the interviewer nothing.",
      "Level 4 check: 300 sent, 5+ calls, 2 referrals or intros, 8 stories recorded, and externship 1 completed.",
    ],
    liveReps: "Rapid-fire \"why us\" drills across firms on each student's own target list.",
    oneOnOne: "Record the \"why\" pitch, then rebuild it for the three firms the student cares about most.",
    minimum: MIN,
    deliverables: ["300 total sent", "\"Why\" pitch recorded", "2 referrals or intros", "Externship 2 started"],
    level: 4,
    coachQuestions: [
      "What's one thing about this work you'd actually enjoy on a bad day?",
      "Which person you've talked to would you most want to work for, and why?",
      "If a firm asked \"why us\" right now, which call would you quote?",
    ],
    assets: ["why-worksheet"],
    parents: "The fourth progress report: whether your student has reached Level 4 (Networked), plus the second externship project starting.",
    numbers: { emails: "300", calls: "5+", stories: "8 recorded", externship: "Externship 2 started" },
  },
  {
    n: 9,
    title: "Technicals",
    phase: "Your track",
    split: true,
    objective: "A technical baseline that holds up in a first round, in your track.",
    teach: [
      "The cohort splits into Finance, Consulting, Marketing, and Tech for Weeks 9–10.",
      "Say answers out loud, work on paper, and use AI to close gaps, not to hand you answers.",
      "Understand the concept first. The answer comes easier after that, and so does the version of the question you haven't seen.",
      "The technical baseline quiz at the end of the week, graded at the track threshold.",
    ],
    trackTeach: {
      Finance: [
        "Study order: accounting → valuation → enterprise vs. equity value → M&A → LBO.",
        "Walking the three statements, and what happens to each when one line changes.",
        "Valuation methods and when each one is used.",
      ],
      Consulting: [
        "Case structure and frameworks, built from the question rather than memorized.",
        "Market sizing, out loud, with round numbers.",
        "Mental math until it's fast enough not to break your train of thought.",
      ],
      Marketing: [
        "Portfolio pieces: one campaign idea and one analysis you can walk through.",
        "The metrics that matter, and how to talk about them without jargon.",
        "The brand teardown: what a brand is doing, why, and what you'd change.",
      ],
      Tech: [
        "One strong project you can explain end to end.",
        "Coding, SQL, and product question practice at the level internships actually ask.",
        "Referral strategy: in tech, a referral often matters more than the application.",
      ],
    },
    liveReps: "Timed drills; students grade each other.",
    oneOnOne: "Find the weakest technical area from the drills and work it live, out loud, until the student can explain it back.",
    minimum: MIN,
    deliverables: ["350 total sent", "Technical baseline quiz passed at the track threshold"],
    coachQuestions: [
      "Which question did you get right without being able to explain why?",
      "What would you study first if you had one hour tonight?",
      "Are your emails still going out while you study?",
    ],
    assets: ["technicals-finance", "technicals-consulting", "technicals-marketing", "technicals-tech"],
    parents: "Your student is in their track group for technical prep. The weekly email minimum still applies.",
    numbers: { emails: "350", calls: "5+", stories: "8 recorded", externship: "Externship 2 in progress" },
  },
  {
    n: 10,
    title: "Mock Interviews I",
    phase: "Your track",
    split: true,
    objective: "A full interview under pressure, recorded and graded.",
    teach: [
      "Interview flow: the intro, behaviorals, the why, technicals or the case, and your questions.",
      "Pacing: how long each answer should run, and how to tell when you've lost the room.",
      "Recovering from a blank: say what you know, reason out loud, and come back to it.",
      "Questions to ask at the end that show you did the work.",
      "Applying to every open role on the target list, and keeping the outreach running while you do.",
    ],
    liveReps: "A full 30-minute mock per student (behavioral, why, technical or case), graded on a written scorecard.",
    oneOnOne: "Watch the mock recording together, line by line against the scorecard, and pick the two fixes for next week.",
    minimum: MIN,
    deliverables: ["400 total sent", "1 graded mock passed", "Applications submitted to every open role on the target list"],
    coachQuestions: [
      "Where on the scorecard did you lose the most points?",
      "What did you say when you blanked? What would you say now?",
      "Which open roles on your list haven't you applied to yet?",
    ],
    assets: ["interview-scorecard", "technicals-finance", "technicals-consulting", "technicals-marketing", "technicals-tech"],
    parents: "The fifth progress report: the graded mock score, applications submitted, and emails sent (target: 400).",
    numbers: { emails: "400", calls: "5+", stories: "8 recorded", externship: "Externship 2 in progress" },
  },
  {
    n: 11,
    title: "Interview Execution",
    phase: "Interview-ready",
    objective: "Real interviews, handled like a pro.",
    teach: [
      "Running multiple processes at once: a calendar, a prep sheet per firm, and honest updates to each.",
      "Final-round and superday prep: back-to-back interviews, energy, and consistency across interviewers.",
      "Declining without burning a relationship: frame it as fit, not preference.",
      "Pre-interview research on the firm and the interviewer, and how to use it without sounding like you looked them up.",
      "Level 5 check: 500+ sent, 2 graded mocks passed, externship 2 completed, and 1+ real first round where available.",
    ],
    liveReps: "A second full mock with a harder interviewer (a stranger), in a different format.",
    oneOnOne: "Prep for whatever is real this week: a first round, a follow-up, or a decline. If nothing is live, a mini-mock on the weakest scorecard area.",
    minimum: MIN,
    deliverables: ["500+ total sent", "2 graded mocks passed", "Externship 2 completed", "First rounds completed where available"],
    level: 5,
    coachQuestions: [
      "What do you know about the person interviewing you?",
      "Which process are you most likely to let slip, and what's the next step there?",
      "What did the stranger's mock show you that ours didn't?",
    ],
    assets: ["interview-scorecard", "outreach-tracker"],
    parents: "Your student completes their second mock (run by a stranger) and their second externship project.",
    numbers: { emails: "500+", calls: "5+", stories: "8 recorded", externship: "Externship 2 completed" },
  },
  {
    n: 12,
    title: "Results & the 6-Month Game Plan",
    phase: "Interview-ready",
    objective: "Close the program and keep the engine running.",
    teach: [
      "Evaluating and accepting offers: what to ask, how long you can take, and how to say yes well.",
      "Keeping networks warm after the search, so the next cycle starts with relationships, not a blank list.",
      "What sophomore and junior recruiting looks like, and when it starts.",
      "Building the 6-month game plan: monthly targets, contacts to keep warm, an applications calendar, and skills to build.",
    ],
    liveReps: "Each student re-records \"tell me about yourself\" and watches it next to the Week 1 baseline.",
    oneOnOne: "Finish the 6-month game plan together, and rehearse the family results presentation.",
    minimum: "Final results report and the 6-month game plan.",
    deliverables: ["Final results report", "6-month game plan (monthly targets, contacts to keep warm, applications calendar, skills to build)"],
    coachQuestions: [
      "What's the one habit from these 12 weeks you'll keep?",
      "Who are the five people you'll stay in touch with, and when?",
      "What does the next application season need from you, starting next month?",
    ],
    assets: ["game-plan", "outreach-tracker"],
    parents: "The family results meeting (30 minutes): your student presents their numbers (emails sent, calls, referrals, interviews, externships, level, outcome) and the Week 1 and Week 12 intros side by side.",
    numbers: { emails: "500+", calls: "5+", stories: "8 recorded", externship: "2 completed" },
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
  "Parents get a one-page progress report every two weeks, plus the Week 12 family results meeting.",
];

export const getWeek = (n: number) => weeks.find((w) => w.n === n);
export const weekHref = (n: number) => `/curriculum/week-${n}`;

// Display names for each asset. Files are listed in content/downloads.ts.
export const assetTitles: Record<AssetSlug, string> = {
  "resume-rubric": "Resume rubric",
  "resume-template": "Resume template",
  "outreach-tracker": "Outreach tracker",
  "target-list": "Target list template (A/B/C tiers)",
  "cold-email-pack": "Cold email template pack",
  "ai-prompt-pack": "AI personalization prompt pack",
  "call-framework": "Call framework + referral close script",
  "self-questions": "25 self-questions + story template",
  "why-worksheet": "\"Why\" worksheet",
  "technicals-finance": "Finance technical question bank",
  "technicals-consulting": "Consulting technical question bank",
  "technicals-marketing": "Marketing technical question bank",
  "technicals-tech": "Tech technical question bank",
  "interview-scorecard": "Interview scorecard",
  "game-plan": "6-month game plan template",
};
