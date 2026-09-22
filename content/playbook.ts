// "The First Offer Playbook": the gated lead-magnet PDF.
// Build it with `npm run pdf` (scripts/build-playbook-pdf.mjs). The script
// fails if the PDF renders under 15 pages.
//
// Written in Tyler's voice from docs/CURRICULUM-SOURCE.md. Not yet reviewed by
// While reviewedByTyler is false, the PDF cover and /playbook-pdf show a
// "Draft" chip.

import type { Block } from "./blocks";
import { tb } from "./toolkitBlocks";

export type Chapter = { n: number; slug: string; title: string; summary: string; blocks: Block[] };

export const playbook = {
  title: "The First Offer Playbook",
  subtitle: "How to Land Your First Internship Before Junior Year",
  author: "Tyler Ho",
  authorLine: "Tyler Ho · Founder, First Offer Academy · Finance & Computer Science",
  file: "/downloads/first-offer-playbook.pdf",
  reviewedByTyler: true,
  minPages: 15,
  intro:
    "Everything in here is free. It's the exact system I used through the two most recent recruiting cycles, and the one I've taught to first-year students. The tactics aren't the hard part. Doing them every week is.",
};

const p = (text: string): Block => ({ type: "p", text });
const h3 = (text: string): Block => ({ type: "h3", text });
const check = (title: string, items: string[]): Block => ({ type: "checklist", title, items });
const tyler = (text: string, title = "From Tyler"): Block => ({ type: "callout", tone: "tyler", title, text });

export const chapters: Chapter[] = [
  {
    n: 1,
    slug: "how-recruiting-works",
    title: "How recruiting actually works",
    summary: "The 5 things that matter, ranked, and the market freshmen and sophomores can actually win.",
    blocks: [
      p("Here's the thing nobody tells you as a freshman: recruiting doesn't reward the smartest student. It rewards the most persistent one. The student who sent the 40th email, followed up on time, and practiced their stories out loud will beat the student with the better GPA who waited to be discovered."),
      p("Most students study for recruiting in reverse order. They start with technicals because that feels like school, then they polish the resume, and networking comes last, if at all. The actual order of importance is the opposite."),
      tb.fiveThings(),
      h3("Why clubs matter less than people think"),
      p("Clubs are useful. They give you reps, mock interviews, and a group chat of people going through the same thing. But a club is one way to get those things, not a gate you have to pass. If you didn't get in, you haven't lost anything you can't build yourself: a resume that passes a rubric, a target list, an outreach system, and a stack of calls."),
      h3("The freshman and sophomore market"),
      p("The famous firms with the famous programs are a small slice of the market, and they're where everyone applies. The rest of the market is bigger, quieter, and much more open to a first- or second-year student who shows up prepared:"),
      tb.earlyMarket(),
      tyler("Networking is ranked first for a reason. Early opportunities rarely start in an application portal. They start with someone who replied to an email and remembered the call."),
      check("Chapter 1 checklist", [
        "Write down the 5 things in order, and how many hours a week you currently spend on each.",
        "List three firms you'd never heard of until you read the market list above.",
        "Decide how many hours a week you can honestly commit for the next 12 weeks.",
      ]),
    ],
  },
  {
    n: 2,
    slug: "recruiting-calendar",
    title: "The recruiting calendar by track and by quarter",
    summary: "What to do in each quarter from freshman fall to junior year, for Finance, Consulting, Marketing, and Tech.",
    blocks: [
      p("The most common thing I hear from sophomores is some version of \"I didn't know it started this early.\" For finance and consulting especially, many of the processes that decide junior summer open during sophomore year. The students who do well started building in freshman year: not by applying everywhere, but by doing a few boring things consistently."),
      tb.calendarByTrack(),
      tb.calendarByQuarter(),
      { type: "callout", tone: "note", title: "Dates move", text: "Timelines move earlier almost every year and differ by firm. Treat this as a planning map, and confirm each firm's real dates on its careers page. Put every deadline you find in your 6-month game plan (Chapter 15)." },
      check("Chapter 2 checklist", [
        "Circle your track (or your top two).",
        "Find the careers page for five firms on your list and write down when their programs open.",
        "Put your next three deadlines on your calendar today.",
      ]),
    ],
  },
  {
    n: 3,
    slug: "resume",
    title: "The top-tier resume",
    summary: "The rubric, line-by-line bullet rewrites, and a before-and-after example.",
    blocks: [
      p("Your resume doesn't need to be impressive. It needs to be clean, specific, and easy to talk about. Every line on it is a question someone might ask you, so every line should be something you'd enjoy answering."),
      p("Here's the rubric we grade every resume against. A resume passes when every box is checked."),
      ...tb.rubric(),
      h3("Bullets are outcomes, not duties"),
      p("The fastest way to improve a resume is to rewrite every bullet from what you were responsible for into what changed because you were there. Verb, what you did, result, with a number wherever you can find one."),
      tb.bulletRewrites(4),
      h3("Before and after"),
      ...tb.exampleResume(),
      h3("Your 60-second intro"),
      p("Your resume and your intro are the same story told two ways. Once the resume passes, write the intro: where you're from, what pulled you in, what you've done, and why you're talking to this person. Record it. Watch it. Cut it."),
      tb.intro(),
      check("Chapter 3 checklist", [
        "Grade your resume against every box in the rubric.",
        "Rewrite every bullet that starts with \"responsible for\" or \"helped.\"",
        "Add a number to at least half your bullets.",
        "Record your 60-second intro, then cut it until it fits.",
      ]),
    ],
  },
  {
    n: 4,
    slug: "target-list",
    title: "Building a target list of 50 with contacts",
    summary: "A/B/C tiers, where to find the right people, and what counts as a contact.",
    blocks: [
      p("A target list is 50 companies, each with a named person you're going to email. Not 50 companies you might apply to someday: 50 names you'll actually contact. Without names, it's a wish list."),
      tb.tiers(),
      p("Most of your first-year opportunities will come from your B tier. Your A tier is for relationships that pay off in sophomore and junior year. Your C tier gives you reps and a line on the resume."),
      h3("Finding the right contacts"),
      tb.sourcing(),
      tyler("Alumni from your school reply more than anyone else. Start there. After that, look for anything you share: hometown, high school, first job, first-gen path. People help people who remind them of themselves."),
      check("Chapter 4 checklist", [
        "50 companies, tiered A/B/C (roughly 10/30/10).",
        "A named contact at every company, with an email.",
        "One personal detail per contact for your first line.",
        "Download the target list template and put it all in one sheet.",
      ]),
    ],
  },
  {
    n: 5,
    slug: "ai-outreach",
    title: "The AI outreach system",
    summary: "Personalization prompts, sequencing, the follow-up cadence, and the guardrails.",
    blocks: [
      p("Sending 50 personalized emails a week sounds impossible until you have a system. Here's the system: AI helps you research and draft, a sequencing tool sends and follows up, and you personalize and read every single email before it goes."),
      h3("Setting up your sequence"),
      tb.sequencing(),
      h3("The prompts"),
      p("Paste in real material: their profile, their post, their firm's page. Never just a name. These prompts are built to find specifics and invent nothing."),
      ...tb.aiPrompts(4),
      p("Three more prompts (mail-merge personalization, call prep, and the thank-you draft) are in the free AI personalization prompt pack."),
      h3("The follow-up cadence"),
      ...tb.followUps(),
      tb.aiGuardrails(),
      tb.tracker()[0],
      check("Chapter 5 checklist", [
        "Sequencing tool connected to your school email.",
        "Sheet built with a personalized first line for every contact.",
        "Follow-up steps loaded (up to 4) and set to stop on reply.",
        "Test email sent to yourself and read end to end.",
        "First 50 sent.",
      ]),
    ],
  },
  {
    n: 6,
    slug: "cold-email",
    title: "Cold email that gets answered",
    summary: "The Two C's, subject lines, and 5 templates.",
    blocks: [
      p("A good cold email is short, specific, and about them. The goal is one thing: a short call. The target is a reply rate moving toward 10%. If you're well under that, the problem is almost always the first line, the ask, or the list."),
      ...tb.twoCs(),
      tb.emailRules(),
      h3("Subject lines"),
      tb.subjectLines(),
      h3("5 templates"),
      p("Every bracket gets replaced with something real. If you can't fill a bracket with a specific detail, choose a different template or a different person."),
      ...tb.emailTemplates(),
      check("Chapter 6 checklist", [
        "Every email has a compliment and a connection.",
        "Under 120 words, one ask.",
        "Subject line tested (have a friend pick between two).",
        "Reply rate calculated for last week: replies ÷ emails sent.",
      ]),
    ],
  },
  {
    n: 7,
    slug: "the-call",
    title: "The call",
    summary: "The full framework, a question bank, and the thank-you.",
    blocks: [
      p("A reply is not the win. The call is. And the call is where most students lose it, because they treat it like an interview: stiff, prepared, and forgettable. The biggest failure mode is being dry."),
      tyler("I open every call with \"Anything exciting going on lately?\" When they ask it back, I answer long and casually. It sets the tone: we're two people talking, not an interview. Then I move to my intro and their story, and I listen 80% of the time."),
      tb.callFramework(),
      h3("Quick prep, with AI"),
      p("Before every call: what the firm does in two lines, three recent things worth asking about, and one question about their personal path. Use the call-prep prompt from the free AI prompt pack, then check every fact yourself."),
      h3("Question bank"),
      ...tb.questionBank(),
      h3("The thank-you"),
      tb.thankYou(),
      check("Chapter 7 checklist", [
        "Prepped the firm and the person.",
        "Opened with \"anything exciting lately?\"",
        "Listened 80% of the time.",
        "Used the close (Chapter 8).",
        "Sent the thank-you within 2 hours and logged it in the tracker.",
      ]),
    ],
  },
  {
    n: 8,
    slug: "referrals",
    title: "Turning calls into referrals",
    summary: "The close, staying warm, and the tracker.",
    blocks: [
      p("Calls are how you meet people. Referrals and introductions are how you get in the door. You get there without ever asking for one directly."),
      ...tb.referralClose(),
      h3("Staying warm for months"),
      p("Most relationships die from silence, not from rejection. A short, specific note every few weeks keeps you in someone's head when a role opens."),
      tb.stayWarm(),
      h3("Logging every relationship"),
      p("For every person who replied: when you spoke, what they said, who they introduced you to, and when you're due to follow up. If it's not in the tracker, you'll forget it, and so will they."),
      check("Chapter 8 checklist", [
        "The close used on every call.",
        "Forwardable blurb sent within 24 hours of every yes.",
        "An update sent to anyone whose advice you acted on.",
        "Next follow-up date set for every contact in the tracker.",
      ]),
    ],
  },
  {
    n: 9,
    slug: "behavioral-stories",
    title: "Behavioral stories",
    summary: "The 25 self-questions, the story template, and mapping 8 stories to 10 questions.",
    blocks: [
      p("Behavioral questions decide more first rounds for freshmen and sophomores than technicals do. You need 8 stories, chosen for uniqueness, not impressiveness. The best stories are usually the ones you think are too small."),
      h3("Step 1: answer the 25 self-questions"),
      p("Don't write stories yet. Just answer these honestly, in bullet points. This is your raw material."),
      tb.selfQuestions(),
      h3("Step 2: pick 8 and write them"),
      tb.storyTemplate(),
      h3("Step 3: map them"),
      p("These 10 questions (and their variations) cover most behavioral interviews:"),
      tb.behavioralQuestions(),
      ...tb.storyMap(),
      tyler("Say your stories out loud and record them. A story you've only written isn't ready. The first time you say it, it'll run four minutes. Cut it to two."),
      check("Chapter 9 checklist", [
        "All 25 self-questions answered.",
        "8 stories written in the template.",
        "Story map filled in: every question has at least two stories.",
        "All 8 recorded, each under two minutes.",
      ]),
    ],
  },
  {
    n: 10,
    slug: "why",
    title: "\"Why this industry, why this firm\"",
    summary: "The 3 buckets and the worksheet.",
    blocks: [
      p("\"I'm passionate about finance\" tells the interviewer nothing. Enthusiasm reads as real when it's specific, and it's specific when it comes from people you've actually talked to."),
      tb.whyBuckets(),
      tb.whyExample(),
      tb.whyWorksheet(),
      p("Firm-specific answers come from your calls. The best \"why us\" quotes someone who works there. If you haven't talked to anyone at the firm yet, that's your next email."),
      check("Chapter 10 checklist", [
        "All three buckets filled in, with a story for bucket 1.",
        "A firm-specific version for your top three firms.",
        "Recorded, under 90 seconds.",
      ]),
    ],
  },
  {
    n: 11,
    slug: "technicals",
    title: "Technicals by track",
    summary: "Study order and question lists for Finance, Consulting, Marketing, and Tech.",
    blocks: [
      p("Understand the concept first; the answer comes easier after that. For first- and second-year roles, nobody expects you to know everything. They expect you to be learning, and to reason out loud when you don't know. Say answers out loud, work on paper, and use AI to close gaps, not to hand you answers."),
      ...tb.technicalsAll(10),
      p("The full question bank for each track is a free download."),
      check("Chapter 11 checklist", [
        "Pick your track's list and answer every question out loud once.",
        "Mark the ones you couldn't explain to a friend.",
        "Close one gap a day for two weeks.",
      ]),
    ],
  },
  {
    n: 12,
    slug: "interviews",
    title: "Interviews and superdays",
    summary: "The flow, recovering from a blank, and questions to ask.",
    blocks: [
      p("An interview is the same skills you've been building, under a clock: your intro, your stories, your why, and your technicals. The difference is pressure, and the only fix for pressure is reps."),
      tb.interviewFlow(),
      h3("Recovering from a blank"),
      tb.blankRecovery(),
      h3("Questions to ask at the end"),
      tb.questionsToAsk(),
      tb.superday(),
      tyler("Do at least one mock with a stranger before a real interview. A friend grading you is kind. A stranger is closer to the real thing."),
      check("Chapter 12 checklist", [
        "One full 30-minute mock, recorded and graded on the scorecard.",
        "A second mock with someone you don't know.",
        "Research on every interviewer before the day.",
        "Thank-you notes sent the same day.",
      ]),
    ],
  },
  {
    n: 13,
    slug: "externships",
    title: "Externships and early experience",
    summary: "What counts, how to get it, and how to put it on a resume.",
    blocks: [
      p("If you don't have an internship yet, the answer isn't to wait. It's to create real experience you can talk about. An externship is one of the fastest ways to do that."),
      ...tb.externships(),
      check("Chapter 13 checklist", [
        "One externship or scoped project started this month.",
        "A clear deliverable and a deadline.",
        "Added to your resume with an outcome bullet when it's done.",
      ]),
    ],
  },
  {
    n: 14,
    slug: "execution-calendar",
    title: "Your 12-week execution calendar",
    summary: "The weekly numbers, from zero to 500 emails.",
    blocks: [
      p("This is the calendar we run in the program. Every week has a focus and a number. Hit the number, and the search takes care of itself far more often than you'd think."),
      ...tb.executionCalendar(),
      tyler("Two missed weeks in a row is where searches die. If you miss one, the next week's number doesn't go down. You make it up."),
      check("Every Sunday night", [
        "Tracker updated.",
        "50 new sequenced emails sent this week.",
        "Every follow-up due this week sent.",
        "Next week's calls and deadlines on the calendar.",
      ]),
    ],
  },
  {
    n: 15,
    slug: "game-plan",
    title: "Your 6-month game plan",
    summary: "A template for the months after the 12 weeks.",
    blocks: [
      ...tb.gamePlan(),
    ],
  },
  {
    n: 16,
    slug: "closing",
    title: "The tactics are free. Execution is the hard part.",
    summary: "What to do next.",
    blocks: [
      p("You now have everything I use. None of it is secret; that's why it's free. What's hard is doing it every week for 12 weeks: sending the 50 emails when nobody's replying yet, following up when it feels awkward, recording the story for the fourth time, and showing your numbers to someone who will tell you the truth about them."),
      p("That's what First Offer Academy is. Not more tactics: execution and accountability, from someone who just went through the two most recent recruiting cycles. A weekly 90-minute session, a weekly 60-minute 1:1, a pod of three, and a coach who reviews every piece of work and holds your student to a number. We don't promise offers; nobody honest can. We promise a fully executed search."),
    ],
  },
];
