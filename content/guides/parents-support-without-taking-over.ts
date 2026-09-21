import type { Guide } from "./types";
import { check, h2, h3, note, ol, p, table, tyler, ul } from "./_helpers";

export const guide: Guide = {
  slug: "parents-support-without-taking-over",
  title: "For parents: how to support your student's internship search without taking it over",
  excerpt: "You want to help, and your student needs to own it. What the search actually involves, what to ask (and not ask), how to read their numbers, how to use your own network well, and what a realistic first year looks like.",
  category: "For parents",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["game-plan"],
  related: ["freshman-internship-timeline", "externships", "resume-with-zero-experience"],
  reviewedByTyler: false,
  body: [
    p("If you're reading this, you probably care a lot about your student's first internship, and you may feel a little helpless about it. The process looks nothing like it did when many parents started their careers. Students are told to network before they have anything to network about, recruiting starts earlier than anyone expects, and most of the work happens on a laptop you can't see."),
    p("Here's the tension every parent runs into: you want to help, and your student needs to own it. Employers are hiring your student, not your family. A student who runs their own search learns the skills that make the second and third searches easier. A student whose parent runs it often arrives at interviews unable to explain their own resume."),
    p("This guide is about finding the middle: what the search actually involves, how to talk about it without turning dinner into a performance review, how to read your student's progress, when and how to use your own network, and what a realistic first year looks like. The 6-month game plan template is a free download you and your student can fill out together."),

    h2("What the search actually involves"),
    p("It helps to know what your student is doing, so you can ask better questions. Here's what matters in recruiting, in order of importance:"),
    table("What matters, ranked", ["#", "What", "What it looks like for your student"], [
      ["1", "Networking", "Emailing professionals, having short calls, staying in touch"],
      ["2", "Resume", "A clean, one-page resume with specific, outcome-focused bullets"],
      ["3", "Enthusiasm", "Being able to explain, specifically, why they want this work"],
      ["4", "Behaviorals", "Telling clear stories about times they led, failed, or solved a problem"],
      ["5", "Technicals", "Field-specific knowledge (valuation, cases, portfolios, coding)"],
    ]),
    p("Notice that applying online isn't on the list. Students who only submit applications through portals often hear nothing back. Students who build relationships alongside their applications do much better. If your student says \"I applied to 40 places and heard nothing,\" the answer is usually more networking, not more applications."),

    h2("A realistic first year"),
    p("For a first- or second-year student, a successful year isn't only measured by an offer. The foundation is the real prize: a strong resume, a target list, a steady outreach habit, relationships with professionals, practiced stories, and interview experience. Those are what make sophomore and junior recruiting work."),
    note("On outcomes", "Nobody can promise an internship offer. Hiring decisions depend on each firm's needs that season, the other candidates, and how an interview goes on the day. What your student can control is the quality and volume of their search. That's what's worth measuring."),
    p("It's also worth knowing that the first internship often isn't at a famous firm. Boutiques, middle-market firms, local Orange County businesses, and startups hire many first-year interns, and a first role at any of them makes the second role much easier."),

    h2("Questions that help (and questions that don't)"),
    p("The way you ask about the search matters as much as whether you ask. Questions about outcomes tend to create pressure and short answers. Questions about the process show interest and help your student think."),
    table("What to ask", ["Instead of…", "Try…"], [
      ["\"Did you get an internship yet?\"", "\"Who did you talk to this week? What did you learn?\""],
      ["\"Why haven't you heard back?\"", "\"What's working in your emails? What are you changing?\""],
      ["\"You should apply to [famous firm].\"", "\"What kinds of firms are on your list? Which ones excite you?\""],
      ["\"Your cousin already has an offer.\"", "\"What's the next step you're working on?\""],
      ["\"Let me write that email for you.\"", "\"Want me to read it and tell you how it sounds?\""],
    ]),
    tyler("The most useful thing a parent can ask is \"What did you learn on your last call?\" It shows interest in the process, not the result, and it's a question your student can always answer if they're doing the work."),

    h2("Reading your student's numbers"),
    p("A search that's working produces visible activity, even before it produces an offer. If your student is willing to share, these are the numbers worth knowing. They're the same ones we use in the program's biweekly parent reports."),
    table("Signs of a healthy search", ["Number", "What healthy looks like"], [
      ["Emails sent per week", "A steady weekly number (our program's minimum is 50 from Week 3)"],
      ["Reply rate", "Moving up over time as emails improve (the goal is toward 10%)"],
      ["Calls completed", "A few calls a month, each with a thank-you within 2 hours"],
      ["Introductions", "Occasional intros to new people from existing contacts"],
      ["Stories and practice", "8 stories written and recorded; mock interviews done"],
      ["Tracker updated", "Every week, not in bursts"],
    ]),
    p("If the numbers are near zero for several weeks, that's worth a gentle conversation about what's getting in the way: time, confidence, not knowing what to do next, or discouragement. In our program, two missed weekly minimums in a row triggers a call with the student and a parent for exactly this reason. Early is much easier than late."),

    h2("Using your own network, well"),
    p("If you know people in your student's field, that can help, as long as your student does the work. Here's the right way to do it:"),
    ol(
      "Ask your contact if they'd be open to a short call with your student. Don't set up an interview.",
      "Give your student the contact's name and email, and let them write the email themselves.",
      "Let your student run the call, send the thank-you, and follow up.",
      "Don't ask your contact afterward how your student did, or ask for a job on their behalf.",
    ),
    p("A parent's intro opens a door. Your student has to walk through it. The contact will be much more impressed by a student who emails them directly, prepares well, and sends a thoughtful thank-you than by a parent who manages the relationship."),
    h3("If you don't have contacts in the field"),
    p("Most families don't, and it matters less than you might think. Alumni from your student's school, people from your hometown, and professionals at local firms respond to thoughtful student emails all the time. That's what the whole outreach system is built on."),

    h2("Practical ways to help"),
    ul(
      "Protect time. Outreach and practice need a few focused hours every week, which can compete with jobs and family responsibilities.",
      "Be a practice audience. Let your student practice their 60-second intro or a story on you, and tell them honestly what you remember.",
      "Read emails for tone if asked, not to rewrite them.",
      "Celebrate process wins: a first reply, a first call, a thank-you sent on time.",
      "Help with logistics: a quiet space for calls, reliable internet, business-casual clothes for interviews.",
      "Stay calm about rejections. They're a normal part of every search.",
    ),

    h2("What not to do"),
    ul(
      "Don't contact employers on your student's behalf.",
      "Don't write their emails, resume, or cover letters.",
      "Don't compare their progress to siblings, cousins, or friends.",
      "Don't treat every week without an offer as a failure.",
      "Don't push them toward a field they're not interested in. Enthusiasm is ranked third for a reason; interviewers can tell.",
    ),

    h2("When your student is discouraged"),
    p("Every search has a stretch where nothing seems to work: emails go unanswered, a promising call goes quiet, an interview doesn't turn into a next round. It's normal, and it's often when students are most tempted to stop. How you respond in that stretch matters."),
    ul(
      "Normalize it. Most cold emails don't get replies, even good ones. A quiet week isn't a verdict.",
      "Separate effort from outcome. Ask about what they did this week, not only what happened.",
      "Help them find the smallest next step: five emails, one follow-up, one practice story.",
      "Point to evidence of progress: a better email, a smoother intro, a new contact.",
      "Suggest a change, not a stop. If the reply rate is low, the fix is usually the first line, the ask, or the list.",
    ),
    p("What doesn't help is solving it for them or piling on urgency. A discouraged student needs a manageable next step and someone who believes the process works when it's done consistently."),

    h2("Questions parents often ask"),
    h3("\"My student is a freshman. Isn't this too early?\""),
    p("No. For many fields, the internships that matter most are recruited in sophomore and junior year, and freshman year is when students build the resume, relationships, and stories that get them there. Starting early also means making the first mistakes when the stakes are lowest."),
    h3("\"Should my student take an unpaid internship?\""),
    p("It depends on your family's situation and the role. Some student internships are unpaid, and some are worth it for the experience and the resume line. Look at what your student would actually do, who they'd learn from, and whether it fits around work and school. A paid job plus an externship can also be a strong combination."),
    h3("\"How much time should this take each week?\""),
    p("Enough to hit a steady weekly number, plus time for calls and practice. A few focused hours a week, consistently, beats a big push once a month."),

    h2("The 6-month game plan, together"),
    p("One of the best conversations you can have is a planning conversation. Sit down once, with your student leading, and fill out the 6-month game plan: monthly outreach and call targets, contacts to keep warm, application deadlines, and skills to build. Then agree on how you'll check in (a short weekly or biweekly conversation works for most families), and let the plan do the nagging instead of you."),

    h2("A simple weekly check-in"),
    p("If you want a routine, try a ten-minute check-in once a week, led by your student. Three questions are enough: What did you do this week (emails, calls, practice)? What did you learn? What's the plan for next week? Keep it curious, not evaluative. Over a few months, those ten minutes give you a far clearer picture than any single question about offers, and they teach your student to report on their own progress, which is exactly what they'll do with managers later."),

    p("If your student would rather not share numbers with you directly, that's okay too. What matters is that someone is looking at them every week. That can be a mentor, a career center advisor, a coach, or your student alone with an honest tracker."),

    h2("How the program handles this"),
    p("First Offer Academy is built for exactly this tension. Students own their search; parents get visibility. Every two weeks, parents receive a one-page progress report with their student's level on the Standard and their numbers. In Week 12, families attend a 30-minute results meeting where the student presents their own numbers and plays their Week 1 and Week 12 recorded introductions side by side. The coach holds the student to the weekly number, so you don't have to."),
    check("A good week, from a parent's side",
      "You asked about the process, not the outcome",
      "Your student knows their numbers for the week",
      "You helped with time or practice, not with writing",
      "Any intro you made was for a conversation, not a job",
    ),
  ],
};
