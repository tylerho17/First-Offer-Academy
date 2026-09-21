// The First Offer toolkit: the templates, rubrics, scripts, and question
// banks behind the Playbook PDF (content/playbook.ts), the free downloads
// (content/downloads.ts), and the Playbook guides (content/articles.ts).
//
// Source of truth for the methods: docs/CURRICULUM-SOURCE.md. Methods marked
// (Tyler) there appear here in Tyler's voice. Written by the site build and
// NOT yet reviewed by Tyler: every consumer carries reviewedByTyler: false.
//
// Rules: no real firm names, no outcome promises, no invented stats. Example
// people are made up and labeled as examples everywhere they appear.

// ---------------------------------------------------------------- basics

export const fiveThings = [
  { rank: 1, name: "Networking", why: "Most early internships are filled by someone who already knows you, or knows someone who does. A resume gets read because a person asked to see it." },
  { rank: 2, name: "Resume", why: "It's the document every conversation ends up at. It doesn't need to be impressive; it needs to be clean, specific, and easy to talk through." },
  { rank: 3, name: "Enthusiasm", why: "Interviewers hire people they want to sit next to for ten weeks. Real interest in the work, backed by specifics, beats a perfect answer." },
  { rank: 4, name: "Behaviorals", why: "\"Tell me about a time…\" questions decide more first rounds than technicals do, especially for freshmen and sophomores." },
  { rank: 5, name: "Technicals", why: "They matter, and you'll learn them. But for first- and second-year roles, nobody expects you to know everything. They expect you to be learning." },
];

export const earlyMarket = [
  { name: "Boutiques", body: "Small, specialized firms (advisory, investment, consulting, agencies). Fewer applicants, and a single conversation can turn into an interview." },
  { name: "Middle-market firms", body: "Firms that work with mid-sized companies. Real work, lean teams, and more willingness to take a first- or second-year intern." },
  { name: "Local Orange County firms", body: "Wealth managers, accounting and advisory firms, family offices, agencies, and operating companies. Being local is an advantage you should use." },
  { name: "Startups", body: "They hire for hustle and learn-fast. Founders often answer cold emails themselves." },
  { name: "Early-insight and diversity programs", body: "Structured programs at larger firms built for first- and second-year students. Deadlines are early and dates change every year, so check each one directly." },
];

// ---------------------------------------------------------------- calendar

export const recruitingCalendar = {
  note: "Timelines move earlier almost every year and differ by firm. Treat this as a planning map, and confirm each firm's real dates on its careers page.",
  byTrack: [
    { track: "Finance (banking, investing)", freshman: "Resume, target list, first calls. Apply to early-insight and diversity programs.", sophomore: "Heavy networking in fall and winter. Many junior-summer processes open during sophomore year. Sophomore internships at boutiques and local firms.", junior: "Junior-summer internship (the one that most often leads to a full-time offer). Remaining processes run early in the year." },
    { track: "Consulting", freshman: "Resume, stories, case basics, calls with consultants. Apply to early programs where they exist.", sophomore: "Sophomore programs and smaller-firm internships. Keep building relationships at target firms.", junior: "Most junior-summer recruiting runs in the fall and winter of junior year: applications, case interviews, final rounds." },
    { track: "Marketing", freshman: "Portfolio pieces, a campus or local role, calls with marketers at brands and agencies.", sophomore: "Internships at agencies, startups, and brands. Many postings go up in winter and spring.", junior: "Brand and agency internships. Rolling timelines: apply as roles post, and keep a warm list ready." },
    { track: "Tech (software, data, product)", freshman: "One real project, coding practice, first-year programs where they exist.", sophomore: "Many roles post in late summer and fall for the next summer. Referrals matter a lot.", junior: "Junior-summer internships, mostly recruited in the fall. Online assessments plus technical interviews." },
  ],
  byQuarter: [
    { when: "Freshman fall", do: ["Resume v1 (high school counts)", "Answer the 25 self-questions", "Pick one or two directions", "Record your 60-second intro"] },
    { when: "Freshman winter", do: ["Target list of 50 with named contacts", "Set up your outreach system", "Send 50 sequenced emails a week", "First calls"] },
    { when: "Freshman spring", do: ["Turn calls into intros", "Write and record 8 stories", "Apply to open roles on your list", "An externship or a real project"] },
    { when: "Freshman summer", do: ["An internship, a job, or a project you can talk about", "Keep 10–15 relationships warm", "Start technicals for your track"] },
    { when: "Sophomore year", do: ["Recruiting for sophomore internships and early junior-summer processes", "Mocks, technicals, and the 6-month game plan on repeat"] },
    { when: "Junior year", do: ["Junior-summer internship processes (timing depends on track)", "Use every relationship you've kept warm"] },
  ],
};

// ---------------------------------------------------------------- resume

export const resumeRubric = [
  {
    area: "Format",
    checks: [
      "One page. No exceptions for first- and second-year students.",
      "One clean, standard font; 10–12 pt body; margins no smaller than 0.5 in.",
      "No photos, graphics, color blocks, skill bars, or two-column templates.",
      "Consistent dates, punctuation, and alignment on every line.",
      "Saved as a PDF named Firstname-Lastname-Resume.pdf.",
    ],
  },
  {
    area: "Header",
    checks: [
      "Name, phone, school email, city, and LinkedIn URL. Nothing else.",
      "LinkedIn URL is customized (no random numbers) and the profile matches the resume.",
    ],
  },
  {
    area: "Education",
    checks: [
      "School, degree, major, expected graduation month and year.",
      "GPA listed if it's 3.5 or higher; otherwise leave it off and be ready to answer if asked.",
      "Relevant coursework only if it's specific to the field (no \"Intro to College Writing\").",
      "High school listed in freshman year, with real achievements; drop it by junior year.",
    ],
  },
  {
    area: "Experience bullets",
    checks: [
      "Every bullet starts with a strong past-tense verb (present tense only for current roles).",
      "Every bullet shows an outcome, not a duty: what changed because you were there.",
      "At least half the bullets have a number: people, dollars, hours, percent, count.",
      "Each bullet fits on one or two lines. No bullet you couldn't explain for two minutes.",
      "No filler phrases: \"responsible for,\" \"helped with,\" \"various,\" \"assisted in.\"",
    ],
  },
  {
    area: "Leadership & activities",
    checks: [
      "Real roles with real bullets, not a list of club names.",
      "Jobs count: retail, food service, tutoring, family business. They show reliability.",
      "Projects count when they have a result (a model built, a site launched, an event run).",
    ],
  },
  {
    area: "Skills & interests",
    checks: [
      "Only skills you can use in an interview tomorrow (Excel, SQL, Python, Figma, languages with level).",
      "Two or three specific interests that start conversations (\"long-distance running,\" not \"sports\").",
    ],
  },
  {
    area: "The 6-second test",
    checks: [
      "A stranger can tell what you're interested in within six seconds.",
      "The strongest item is in the top third of the page.",
      "Zero typos. Read it backwards, then have someone else read it.",
    ],
  },
];

export const bulletRewrites = [
  { before: "Responsible for social media for the club.", after: "Grew club Instagram from 300 to 1,100 followers in one quarter by posting three times a week and running a member-spotlight series." },
  { before: "Helped with events.", after: "Planned a 120-person networking night with 6 alumni speakers; handled outreach, budget ($900), and day-of logistics." },
  { before: "Worked as a cashier.", after: "Handled 150+ transactions per shift and trained 4 new hires on the register and closing procedures." },
  { before: "Tutored students in math.", after: "Tutored 8 high school students weekly in algebra and pre-calc; 6 of 8 raised their course grade by at least one letter." },
  { before: "Did research on stocks.", after: "Built a valuation of a consumer company in Excel using comparable companies; presented a buy recommendation to a 20-person investing club." },
  { before: "Member of the marketing team.", after: "Wrote and A/B tested 5 email subject lines for a student event; the winning line lifted open rate from 31% to 44%." },
];

export const exampleResume = {
  label: "EXAMPLE ONLY. Jordan Rivera is a made-up student. Numbers are illustrative.",
  name: "Jordan Rivera (example)",
  before: [
    "Education: Example State University, Business, 2029",
    "Experience: Cashier at Example Coffee Co. Responsible for the register and helping customers.",
    "Activities: Member of the business club. Helped with events.",
    "Skills: Microsoft Office, teamwork, communication, leadership",
  ],
  after: [
    "EDUCATION — Example State University, B.A. Business Economics, expected June 2029 · GPA 3.6",
    "EXPERIENCE — Example Coffee Co., Shift Lead (2024–present): Handled 150+ transactions per shift; trained 4 new hires on register and closing; cut end-of-night cash discrepancies to zero over three months by adding a two-person count.",
    "LEADERSHIP — Business Club, Events Committee: Planned a 120-person alumni networking night with 6 speakers; ran outreach and a $900 budget.",
    "PROJECTS — Personal valuation of a consumer company (Excel, comparable companies); presented to a 20-person investing club.",
    "SKILLS — Excel (VLOOKUP, pivot tables), Canva · Spanish (fluent) · Interests: long-distance running, Orange County food trucks",
  ],
};

export const resumeTemplate = [
  { section: "Header", lines: ["FIRST LAST", "City, CA · (000) 000-0000 · you@school.edu · linkedin.com/in/yourname"] },
  { section: "Education", lines: ["School Name — Degree, Major · Expected Month Year", "GPA (if 3.5+) · Relevant coursework (field-specific only)", "Honors, scholarships (if any)"] },
  { section: "Experience", lines: ["Organization — Title · City · Month Year–Month Year", "• Verb + what you did + result (number)", "• Verb + what you did + result (number)", "• Verb + what you did + result (number)"] },
  { section: "Leadership & Activities", lines: ["Organization — Role · Month Year–Present", "• Verb + what you did + result", "• Verb + what you did + result"] },
  { section: "Projects (optional)", lines: ["Project name — tools used · Month Year", "• What you built and what it showed"] },
  { section: "Skills & Interests", lines: ["Technical: Excel, SQL, …", "Languages: Spanish (fluent), …", "Interests: two or three specific ones"] },
];

export const introStructure = [
  { part: "Where you're from", seconds: "10 sec", example: "I grew up in Santa Ana; my parents run a small restaurant, so I did the books on weekends from age 14." },
  { part: "What pulled you in", seconds: "15 sec", example: "That's what got me curious about how businesses actually make money." },
  { part: "What you've done", seconds: "25 sec", example: "At school I've led events for the business club and started teaching myself valuation in Excel." },
  { part: "Why you're talking to them", seconds: "10 sec", example: "I'm reaching out because you went from our school into advisory, and I'd love to understand how you made that jump." },
];

// ---------------------------------------------------------------- target list

export const targetTiers = [
  { tier: "A", name: "Dream firms", share: "About 10", purpose: "For relationships, not for this season's offer. You're playing the long game here: calls, updates, and staying warm into sophomore and junior year." },
  { tier: "B", name: "Realistic", share: "About 30", purpose: "Boutiques, middle-market firms, Orange County firms, and startups. This is where most first- and second-year internships actually come from." },
  { tier: "C", name: "Safe", share: "About 10", purpose: "Places very likely to take a first-year student: local businesses, campus roles, small startups, family-network companies. Reps and a line on the resume." },
];

export const sourcingSteps = [
  "Start with the firm, not the person: what does it do, how big is it, does it hire interns (even informally)?",
  "Find 2–3 people per firm on LinkedIn: same school first, then shared background, then anyone in the role you want.",
  "Use a contact tool like Apollo or RecruitEm to find a work email. Verify the format with a second source if you can.",
  "Log the named contact, their title, the email, and one personal detail you can use in the first line.",
  "No generic inboxes (info@, careers@). A named person or it doesn't count toward the 50.",
];

export const targetListColumns = ["Tier (A/B/C)", "Company", "Type", "City", "Contact name", "Title", "Email", "LinkedIn URL", "School / shared background", "Personal detail for first line", "Source", "Date added"];

// ---------------------------------------------------------------- outreach

export const twoCs = {
  intro: "Every email I send has two things in it: a compliment and a connection. People help people who remind them of themselves.",
  compliment: "Something specific about them or their work: a deal, a post, a talk, a career move. Specific, not flattering. \"I read your post on…\" beats \"I admire your career.\"",
  connection: "Something you share: same school, same hometown, same first job, same weird path. If you can't find one, the compliment has to carry the email.",
};

export const subjectLines = [
  "UCI freshman: quick question about your path into [field]",
  "Fellow [school] student with a question about [firm]",
  "Your post on [topic]",
  "From [hometown] to [role]: a question",
  "[Mutual contact] suggested I reach out",
  "Question about the [team] at [firm]",
];

export const emailRules = [
  "Under 120 words. If it takes more than 30 seconds to read, cut it.",
  "One ask: a short call. Not a job, not a referral, not \"any advice you have.\"",
  "First line is about them, not you.",
  "Send from your school email, Tuesday to Thursday morning, their time zone.",
  "AI drafts; you personalize. Never send an email you haven't read.",
];

export const emailTemplates = [
  {
    name: "1. Same school",
    use: "Alumni from your school. Your highest reply rate, so start here.",
    text: "Subject: [School] freshman: quick question about your path into [field]\n\nHi [First name],\n\nI saw you went from [school] to [firm], and your move from [previous role] into [current role] caught my eye. [One specific detail from their profile or work.]\n\nI'm a freshman studying [major] and trying to learn how people actually break into [field]. Would you be open to a short call in the next couple of weeks? Happy to work around your schedule.\n\nThank you,\n[Your name]\n[School] · [LinkedIn URL]",
  },
  {
    name: "2. Shared background",
    use: "Same hometown, same high school, same first job, same first-gen path.",
    text: "Subject: From [hometown] to [role]: a question\n\nHi [First name],\n\nI noticed you're also from [hometown] (I went to [high school]). Seeing someone from home working in [field] at [firm] made me want to reach out.\n\nI'm a first-year at [school] exploring [field]. Would you have 20 minutes for a quick call sometime soon? I'd love to hear how you got started.\n\nBest,\n[Your name]\n[LinkedIn URL]",
  },
  {
    name: "3. Something they made",
    use: "They wrote a post, gave a talk, were quoted, or worked on something public.",
    text: "Subject: Your post on [topic]\n\nHi [First name],\n\nI read your post on [topic], especially the point about [specific point]. It changed how I think about [related idea].\n\nI'm a freshman at [school] interested in [field], and I'd love to ask you a couple of questions about your work at [firm]. Would you be open to a short call in the next two weeks?\n\nThanks,\n[Your name]\n[LinkedIn URL]",
  },
  {
    name: "4. Local or small firm",
    use: "Orange County firms, boutiques, and small teams where a student reaching out is rare.",
    text: "Subject: Irvine student with a question about [firm]\n\nHi [First name],\n\nI'm a freshman at [school] and I've been reading about [firm]'s work with [type of client / recent project]. It's rare to find a firm doing [specific thing] right here in Orange County.\n\nI'm trying to learn how people get started in [field]. Would you be open to a quick call? I'm local and happy to meet for coffee if that's easier.\n\nThank you,\n[Your name]\n[LinkedIn URL]",
  },
  {
    name: "5. Startup founder",
    use: "Founders and early employees. Shorter, more direct, lead with what you noticed.",
    text: "Subject: [Company]'s [feature / launch]\n\nHi [First name],\n\nI've been using / following [company] since [specific thing], and [one sentence on what impressed you].\n\nI'm a freshman at [school] who wants to learn how early-stage companies work. Would you be open to a 15–20 minute call? If there's ever a small project I could help with, I'd love to hear about it too.\n\n[Your name]\n[LinkedIn URL]",
  },
];

export const followUpCadence = {
  rule: "At most 4 follow-ups. Weekly in November and December (peak season); biweekly to monthly off-peak.",
  steps: [
    { step: "Follow-up 1", peak: "Day 7", offPeak: "Day 14", text: "Hi [First name], just bumping this up in case it got buried. Would love 20 minutes whenever works. Thank you!" },
    { step: "Follow-up 2", peak: "Day 14", offPeak: "Day 28", text: "Hi [First name], I know this time of year is busy. I'm still very interested in hearing about your path at [firm]. Even a short call would help a lot." },
    { step: "Follow-up 3", peak: "Day 21", offPeak: "Day 45", text: "Hi [First name], I've been [one real update: reading about X / started Y]. It made me want to ask you about [specific question] even more. Any chance for a quick call?" },
    { step: "Follow-up 4 (last)", peak: "Day 28", offPeak: "Day 75", text: "Hi [First name], I'll leave it here so I'm not crowding your inbox. If a call ever makes sense down the road, I'd be grateful. Thanks for reading." },
  ],
};

export const aiGuardrails = [
  "AI drafts, humans personalize. The first line is always yours.",
  "Never send an email you haven't read, start to finish.",
  "Never let AI invent a fact about the person. If you can't verify it, cut it.",
  "Paste in real material (their profile, their post), not just their name.",
  "If the email sounds like a press release, rewrite it the way you'd text a cousin's friend. Politely.",
];

export const aiPrompts = [
  {
    name: "1. Research the person",
    prompt: "Here is a LinkedIn profile and a recent post from someone I want to email: [paste]. List (a) three specific, verifiable things about their career or work, (b) anything we have in common given that I'm a [year] at [school] from [hometown] studying [major], and (c) one thoughtful question I could ask them on a call. Do not invent anything that isn't in the text.",
  },
  {
    name: "2. Draft the personalized first line",
    prompt: "Using only these facts about [name]: [paste facts], write five different first lines for a cold email from a college freshman. Each under 25 words, specific, not flattering, and about them rather than me. Use the 'compliment + connection' idea: one genuine compliment and one real thing we share.",
  },
  {
    name: "3. Tighten the email",
    prompt: "Cut this email to under 120 words without losing the specific first line or the single ask for a short call. Keep it warm and plain; remove any phrase that sounds like a cover letter: [paste draft].",
  },
  {
    name: "4. Subject lines",
    prompt: "Write eight subject lines for this email, each under 8 words. Mix: school connection, their specific work, and a plain question. No clickbait, no exclamation points: [paste email].",
  },
  {
    name: "5. Mail-merge personalization column",
    prompt: "For each row in this table (name, firm, title, detail), write a one-sentence personalized opener that uses the detail column exactly and invents nothing. Output as a single column I can paste into my sheet: [paste rows].",
  },
  {
    name: "6. Call prep",
    prompt: "I have a 20-minute call with [name], [title] at [firm]. Here's their profile and what I know about the firm: [paste]. Give me: a two-line summary of what the firm does, three recent things worth asking about, five questions that show I did my homework, and one question about their personal path.",
  },
  {
    name: "7. Thank-you draft",
    prompt: "Draft a 4-sentence thank-you email after a call with [name]. The specific things they said that I want to mention: [notes]. The next step I promised: [step]. Keep it warm and specific; no generic 'thank you for your time and insights.'",
  },
];

export const sequencingSetup = [
  "Pick a mail-merge or sequencing tool that works with your school email (many students use a Gmail or Outlook add-on).",
  "Build your sheet: one row per named contact, columns for first name, firm, subject line, and the personalized first line.",
  "Write your base template with merge fields ({{first_name}}, {{firm}}, {{first_line}}).",
  "Load the follow-up steps now, not later: up to 4, spaced by the cadence for the season.",
  "Set the follow-ups to stop automatically when someone replies.",
  "Send a test to yourself. Read every merged email before the real send.",
  "Log every reply in the tracker the same day.",
];

export const trackerColumns = ["Name", "Firm", "Title", "Tier", "Email", "Date first sent", "Sequence step", "Replied? (date)", "Call date", "Thank-you sent (time)", "Referral close used?", "Intro to", "Next follow-up date", "Notes (what they said)"];

export const trackerRule = "Only track people who reply. Everyone else lives in your sequence until they do. A tracker full of non-replies hides the relationships that matter.";

// ---------------------------------------------------------------- the call

export const callFramework = [
  { stage: "Open", time: "0–3 min", what: "Ask \"Anything exciting going on lately?\" Then answer it yourself when they ask back: long and casual. You're setting the tone: this is a conversation, not an interview." },
  { stage: "Your intro", time: "3–5 min", what: "Your 60-second intro, loosened up. Where you're from, what pulled you in, what you've done, why them." },
  { stage: "Their story", time: "5–15 min", what: "How they got here, what they actually do day to day, what they'd do differently. 80% listening, 20% talking." },
  { stage: "Questions that prove you listened", time: "15–18 min", what: "Follow-ups on what they just said beat anything you prepared. \"You mentioned X. What did that look like?\"" },
  { stage: "The close", time: "18–20 min", what: "\"Is there anyone on the team you'd be comfortable introducing me to?\" or \"Is there another perspective you think would be good for me to hear?\" Then thank them and end on time." },
];

export const callQuestionBank = {
  path: [
    "How did you end up in [field]? Was it the plan?",
    "What did you do in college that actually mattered for getting here?",
    "If you were a freshman again, what would you do differently?",
    "What surprised you most in your first year on the job?",
  ],
  work: [
    "What does a normal week look like for you?",
    "What part of the job do you enjoy most on a bad day?",
    "What separates the interns who get asked back?",
    "What skill do you wish you'd built earlier?",
  ],
  firm: [
    "What makes [firm] different from similar firms you considered?",
    "How does the team work together day to day?",
    "What's the firm focused on this year?",
    "Does the team ever take first- or second-year interns, formally or informally?",
  ],
  advice: [
    "Where would you focus if you were in my position this year?",
    "Is there anything on my resume you'd change?",
    "What should I read or learn before I talk to more people in [field]?",
  ],
};

export const thankYouTemplate = "Subject: Thank you, [First name]\n\nHi [First name],\n\nThank you for the call today. [Specific thing they said] really stuck with me, and I'm going to [specific action you'll take because of it].\n\nI'll [next step you promised, e.g. \"reach out to Sam as you suggested\"] and let you know how it goes.\n\nThanks again,\n[Your name]";

export const callFailureModes = [
  "Being dry. The biggest one. If the call feels like an interview, nobody remembers it.",
  "Talking more than 20% of the time.",
  "Asking questions a Google search answers.",
  "Asking for a job or a referral directly.",
  "Running over time without asking.",
  "Sending the thank-you the next day. Send it 1–2 hours after.",
];

// ---------------------------------------------------------------- referrals

export const referralClose = {
  rule: "Never ask for a referral directly. Asking puts people on the spot; offering them an easy way to help doesn't.",
  lines: [
    "Is there anyone on the team you'd be comfortable introducing me to?",
    "Is there another perspective you think would be good for me to hear?",
  ],
  ifNo: "\"Totally understand, thank you for the time today.\" Then send the thank-you anyway. A \"no\" today is usually about timing, not about you.",
  ifYes: "Thank them, offer to send a two-line blurb they can forward, and follow up within 24 hours if the intro hasn't happened.",
  blurb: "Hi [First name], thank you again for offering to connect me with [Name]. Here's a short note you can forward if it helps:\n\n\"[Your name] is a freshman at [school] interested in [field]. We talked about [topic] and I think a conversation with you would be useful for them.\"",
  stayWarm: [
    { when: "Within 2 hours", what: "Thank-you email with one specific detail." },
    { when: "When you act on their advice", what: "A short update: \"You suggested X; I did it and here's what happened.\"" },
    { when: "Every 6–8 weeks", what: "A one-line check-in with something real (a result, an article relevant to their work, a question)." },
    { when: "Holidays", what: "A personal note, not a template. One sentence about something they told you." },
    { when: "When recruiting opens", what: "Tell them you're applying and ask one specific question about the process." },
  ],
};

// ---------------------------------------------------------------- stories

export const selfQuestions = [
  "What's something you did that nobody asked you to do?",
  "When did you lead something, formally or not?",
  "When did you fail at something that mattered to you?",
  "What's the hardest feedback you've ever received?",
  "When did you disagree with someone and how did it end?",
  "What's a job or responsibility you had that most students your age didn't?",
  "When did you have to learn something fast?",
  "When did a team you were on fall apart, and what did you do?",
  "What have you built, started, or organized?",
  "When did you change someone's mind?",
  "What's the most stressful week you've had, and how did you get through it?",
  "When did you make a decision without enough information?",
  "What's a mistake you made that affected other people?",
  "When did you go beyond what was required?",
  "What does your family expect of you, and how has that shaped you?",
  "What's something you're known for among friends?",
  "When did you help someone who was struggling?",
  "What's a goal you set and hit? One you set and missed?",
  "When did you have to work with someone you didn't like?",
  "What's the most interesting problem you've ever worked on?",
  "When did you take a risk?",
  "What would people be surprised to learn about you?",
  "What made you interested in this field in the first place?",
  "When did you notice something others missed?",
  "What are you proudest of that isn't on your resume?",
];

export const storyTemplate = [
  { part: "Situation", prompt: "Where were you, what was at stake, and why did it matter? Two sentences." },
  { part: "What you did", prompt: "The specific actions you took. Use \"I,\" not \"we.\" This is most of the story." },
  { part: "What changed", prompt: "The result, with a number if you have one. What was different because you acted?" },
  { part: "What you learned", prompt: "One sentence you'd actually say to a friend, and how you've used it since." },
];

export const behavioralQuestions = [
  "Tell me about yourself.",
  "Tell me about a time you led a team.",
  "Tell me about a time you failed.",
  "Tell me about a conflict with a teammate.",
  "Tell me about a time you worked on a team.",
  "Tell me about a time you took initiative.",
  "Tell me about a time you worked under pressure.",
  "Tell me about a time you persuaded someone.",
  "What's your biggest weakness?",
  "Why this field?",
];

export const storyMap = {
  note: "8 stories, 10 questions. Mark each box where a story could answer the question. Every question needs at least two stories; no story should need to answer more than four.",
  head: ["Story", "Leadership", "Failure", "Conflict", "Teamwork", "Initiative", "Pressure", "Persuasion", "Weakness", "Why field", "Tell me about yourself"],
  rows: Array.from({ length: 8 }, (_, i) => [`Story ${i + 1}: ____________`, "", "", "", "", "", "", "", "", "", ""]),
};

// ---------------------------------------------------------------- why

export const whyBuckets = [
  { n: 1, name: "Mentality", body: "What about how you think or work fits this field? (\"I like being measured against a clear number,\" \"I like problems without an obvious answer.\") Back it with a story." },
  { n: 2, name: "2–3 specific things about the work", body: "Real parts of the job you've learned about from calls, not from a website. (\"Building a model from scratch and defending every assumption.\")" },
  { n: 3, name: "The people and their standards", body: "Who you've met and what stood out. (\"Everyone I talked to at the firm described feedback the same way…\") This is where your calls pay off." },
];

export const whyWorksheet = [
  "Bucket 1, mentality: two traits you have that fit this work, each with a one-line story as proof.",
  "Bucket 2, the work: three specific tasks you'd do in the role. Where did you learn about each one? (Which call?)",
  "Bucket 3, the people: two people you've spoken with and one thing each said that stuck with you.",
  "Why this firm: one thing only this firm does, one person you've talked to there, and one reason it fits your bucket 1.",
  "Say it out loud in under 90 seconds. Record it. Cut anything a hundred other students could say.",
];

export const whyExample = {
  label: "EXAMPLE ONLY. A made-up answer showing the 3 buckets.",
  text: "\"I've always liked work where you're measured against a clear number: I ran the register at a coffee shop and tracked our end-of-night counts to zero errors (mentality). From my calls this fall, what pulls me in is building a model from scratch and then having to defend every assumption to someone senior, and seeing a deal from the first pitch to close (the work). And every analyst I talked to at your firm described feedback the same way: direct, fast, and meant to make you better. That's the environment I want my first year in (the people).\"",
};

// ---------------------------------------------------------------- technicals

export const technicals = {
  finance: {
    name: "Finance",
    studyOrder: ["Accounting (the three statements)", "Valuation", "Enterprise value vs. equity value", "M&A", "LBO"],
    method: "Say answers out loud, work on paper, and use AI to close gaps. If you can't explain it to a friend, you don't know it yet.",
    questions: [
      "Walk me through the three financial statements.",
      "How are the three statements connected?",
      "If depreciation goes up by $10, walk me through the three statements (assume a 25% tax rate).",
      "What's the difference between cash and accrual accounting?",
      "What is working capital, and why does it matter?",
      "What are the main ways to value a company?",
      "Walk me through a discounted cash flow (DCF) analysis.",
      "What is WACC and how do you calculate it?",
      "Why would you use comparable companies versus precedent transactions?",
      "What's the difference between enterprise value and equity value?",
      "Walk me from equity value to enterprise value.",
      "Why might a company buy another company?",
      "What makes a deal accretive or dilutive?",
      "What is a leveraged buyout, and why does debt increase returns?",
      "What makes a company a good LBO candidate?",
      "Pitch me a stock (or a company you follow).",
    ],
  },
  consulting: {
    name: "Consulting",
    studyOrder: ["Case structure", "Frameworks built from the question", "Market sizing", "Mental math", "Charts and synthesis"],
    method: "Practice out loud with a partner, time yourself, and always finish with a clear recommendation.",
    questions: [
      "A client's profits have fallen 20% over two years. How would you figure out why?",
      "Should a regional coffee chain expand into a new state?",
      "Estimate the number of electric scooters in Orange County.",
      "Estimate the annual revenue of a campus bookstore.",
      "A hospital's wait times doubled this year. What would you look at first?",
      "Should a snack company launch a healthier product line?",
      "How would you price a new gym membership near a university?",
      "Profit = revenue − costs: break down each side for a food-delivery startup.",
      "What's 15% of 240? 7 × 68? 1,200 ÷ 16? (Say it, don't write it.)",
      "Read this chart and tell me the one thing that matters.",
      "Summarize your recommendation in 30 seconds.",
      "Why consulting, and why our firm?",
    ],
  },
  marketing: {
    name: "Marketing",
    studyOrder: ["The funnel (awareness to loyalty)", "Metrics that matter", "Brand teardown", "Portfolio pieces", "Campaign walkthrough"],
    method: "Build two things you can show: one campaign idea and one analysis. Talk about both without jargon.",
    questions: [
      "What's a brand you think does marketing well, and why?",
      "Tear down a recent campaign: goal, audience, channel, message, result.",
      "How would you market our product to college students?",
      "What's the difference between reach, engagement, and conversion?",
      "What is customer acquisition cost, and how would you lower it?",
      "How would you measure whether a campaign worked?",
      "Walk me through a piece in your portfolio.",
      "How would you grow a small business's Instagram from zero?",
      "If our email open rate dropped, what would you test first?",
      "How would you position a new product against a bigger competitor?",
      "What marketing trend are you following right now?",
      "Why marketing, and why this brand or agency?",
    ],
  },
  tech: {
    name: "Tech (software, data, product)",
    studyOrder: ["One strong project you can explain end to end", "Core data structures and problem solving", "SQL", "Product sense", "Referral strategy"],
    method: "Practice explaining your thinking out loud as you solve. In tech, a referral often matters more than the application.",
    questions: [
      "Walk me through your best project: the problem, your role, the tech, and what you'd change.",
      "Reverse a string / find duplicates in a list. Talk through your approach first.",
      "When would you use a hash map instead of a list?",
      "What's the time complexity of your solution, and can you improve it?",
      "Write a SQL query to find the top 5 customers by total spend.",
      "What's the difference between an INNER JOIN and a LEFT JOIN?",
      "How would you find duplicate rows in a table?",
      "How would you improve an app you use every day?",
      "How would you measure whether a new feature is successful?",
      "Design a simple app for students to find study partners. What would you build first?",
      "Tell me about a bug you got stuck on and how you fixed it.",
      "Why this company and this team?",
    ],
  },
};

// ---------------------------------------------------------------- interviews

export const interviewFlow = [
  { part: "Small talk + tell me about yourself", time: "3–5 min", note: "The first two minutes set the tone. Energy up, answer under 90 seconds." },
  { part: "Behaviorals", time: "8–12 min", note: "Pull from your 8 stories. Situation, what you did, what changed, what you learned." },
  { part: "Why this field, why this firm", time: "3–5 min", note: "The 3 buckets, with names and details from your calls." },
  { part: "Technicals or case", time: "8–15 min", note: "Think out loud. Structure before answers." },
  { part: "Your questions", time: "3–5 min", note: "Two or three that show you did the work." },
];

export const blankRecovery = [
  "Pause and say it: \"Let me think about that for a second.\" Silence for five seconds is fine.",
  "Say what you do know, then reason out loud toward the rest.",
  "If it's a behavioral, pick the closest of your 8 stories and bridge: \"The closest example I have is…\"",
  "If you're truly stuck: \"I'm not sure, but here's how I'd find out,\" then come back to it later if you can.",
  "Never bluff a technical answer. Interviewers can tell, and it costs more than \"I don't know.\"",
];

export const questionsToAsk = [
  "What does a great intern do in the first two weeks that others don't?",
  "You mentioned [thing they said]. How did that come about?",
  "What's something about the team that's hard to see from the outside?",
  "What are you working on right now that you're most excited about?",
  "What do the strongest people on your team have in common?",
];

export const superdayTips = [
  "Keep your answers consistent across every interviewer; they compare notes.",
  "Eat, hydrate, and reset between rounds. Treat every interview as the first one.",
  "Research each interviewer: their path, their group, one thing to ask about.",
  "Send a short, specific thank-you to each interviewer the same day.",
  "Declining an offer: frame it as fit, not preference, and thank everyone who helped.",
];

export const interviewScorecard = {
  scale: "Score each area 1–5. 1 = not there yet, 3 = solid, 5 = would advance. A pass is 3+ in every area and 28+ overall.",
  areas: [
    { area: "Opening & tell me about yourself", looks: "Under 90 seconds, clear arc, energy, eye contact." },
    { area: "Behavioral story 1", looks: "Specific situation, \"I\" not \"we,\" a result, a real lesson." },
    { area: "Behavioral story 2", looks: "A different story, matched to the question asked." },
    { area: "Why field / why firm", looks: "The 3 buckets, with names or details from real conversations." },
    { area: "Technical or case", looks: "Structure first, reasoning out loud, correct fundamentals." },
    { area: "Recovery under pressure", looks: "Handles a blank or a curveball calmly; no bluffing." },
    { area: "Listening & conversation", looks: "Answers the question asked; builds on the interviewer's words." },
    { area: "Questions for the interviewer", looks: "Two or three specific, researched questions." },
    { area: "Presence", looks: "Pace, filler words, posture, camera or room setup." },
    { area: "Close", looks: "Clear thank-you, confident finish, follow-up sent within hours." },
  ],
};

// ---------------------------------------------------------------- externships

export const externships = {
  what: "An externship is a short, structured project that gives you real exposure to a field: a virtual project designed by a company, a job shadow, or a defined project for a small firm or startup. It's not a full internship, but it's real work you can put on a resume and talk about in an interview.",
  counts: [
    "Company-designed virtual externship projects with a real deliverable.",
    "A defined project for a local firm, a startup, or a professor, with a clear start, end, and output.",
    "Job shadowing that ends with something you produced (a memo, an analysis, a deck).",
  ],
  doesNot: [
    "Watching videos and collecting a certificate with no deliverable.",
    "\"Helping out\" with no defined task or result.",
  ],
  how: [
    "Look for structured virtual externship programs that publish their projects and deliverables.",
    "Ask on calls: \"Is there ever a small project a student could help with?\" (See the startup email template.)",
    "Offer a scoped project: \"I could put together a one-page competitor overview for your team in two weeks.\"",
    "Finish it on time and send it with a short note. Then add it to your tracker and resume.",
  ],
  bullet: {
    label: "EXAMPLE ONLY",
    before: "Completed a virtual finance program.",
    after: "Built a comparable-companies analysis of 6 consumer brands in a company-designed virtual externship; summarized findings in a 5-slide recommendation.",
  },
};

// ---------------------------------------------------------------- execution

export const executionCalendar = [
  { week: 1, focus: "The Game: resume v1, 25 self-questions, baseline intro", emails: "0", calls: "0" },
  { week: 2, focus: "Resume passes the rubric, intro recorded, target list of 50 with contacts", emails: "0", calls: "0" },
  { week: 3, focus: "AI outreach system live, first 50 sequenced emails", emails: "50", calls: "0" },
  { week: 4, focus: "Cold email that gets answered; follow-ups loaded; externship 1 started", emails: "100", calls: "0" },
  { week: 5, focus: "The call; thank-yous within 2 hours", emails: "150", calls: "3" },
  { week: 6, focus: "The referral close on every call; first intro", emails: "200", calls: "5" },
  { week: 7, focus: "8 stories written and recorded; externship 1 done", emails: "250", calls: "5+" },
  { week: 8, focus: "Why this industry, why this firm; 2 referrals or intros; externship 2 started", emails: "300", calls: "5+" },
  { week: 9, focus: "Technicals for your track", emails: "350", calls: "5+" },
  { week: 10, focus: "Mock interview 1; apply to every open role on your list", emails: "400", calls: "5+" },
  { week: 11, focus: "Mock interview 2 with a stranger; externship 2 done; real first rounds", emails: "500+", calls: "5+" },
  { week: 12, focus: "Results and the 6-month game plan", emails: "500+", calls: "5+" },
];

export const weeklyMinimumLine = "From Week 3: 50 new sequenced emails, every follow-up due that week, and the tracker updated by Sunday night. 10 weeks × 50 = 500+.";

export const gamePlan = {
  intro: "The search doesn't end when the 12 weeks do. Fill this in before your last session and review it on the first of every month.",
  months: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
  fields: [
    "Outreach target (new emails this month)",
    "Calls target",
    "Contacts to keep warm (names)",
    "Applications due this month (firm, role, deadline)",
    "Skill to build (and how)",
    "One thing to finish (project, externship, certification)",
  ],
  review: [
    "Did I hit my outreach and call numbers? If not, what got in the way?",
    "Who did I update this month? Who have I gone quiet on?",
    "What deadlines are coming in the next 60 days?",
    "What's the one thing that would make the biggest difference next month?",
  ],
};
