import type { Guide } from "./types";
import { check, example, h2, h3, note, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "ai-cold-email-system",
  title: "The AI-assisted cold email system: personalization at scale without sounding like a robot",
  excerpt: "How to send 50 personalized emails a week without spending your whole week writing them: AI for research and drafts, a sequencing tool for sending and follow-ups, and you for the part that matters.",
  category: "Networking",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["ai-prompt-pack", "outreach-tracker"],
  related: ["cold-email-template", "target-list-of-50", "networking-call-framework"],
  reviewedByTyler: false,
  body: [
    p("In our program, the weekly minimum from Week 3 on is 50 new sequenced emails, every follow-up due that week, and the tracker updated by Sunday night. Ten weeks of that is 500+ personalized emails. When students hear that number, the first reaction is always the same: there's no way I have time to write 50 emails a week."),
    p("They're right, if they write them one at a time from scratch. Nobody should. The answer is a system: AI helps you research each person and draft a personalized first line, a sequencing tool sends the emails and the follow-ups on schedule, and you personalize and read every single email before it goes. Done well, it takes a few focused hours a week, and the emails read like you wrote them, because you did."),
    p("This guide walks through the whole system: the setup, the prompts, the follow-up cadence, and the guardrails that keep it from sounding like a robot. The full prompt pack and the tracker are free downloads."),

    h2("The system in one picture"),
    table("Who does what", ["Step", "Who does it", "Time per week"], [
      ["Find the person and one real detail", "You, with AI helping you research", "About 1 hour"],
      ["Draft a personalized first line", "AI drafts options; you pick and edit", "About 1 hour"],
      ["Merge into your template", "The sequencing tool", "Minutes"],
      ["Read every email before it sends", "You. Always.", "About 30 minutes"],
      ["Send, follow up, stop on reply", "The sequencing tool", "Automatic"],
      ["Log replies and book calls", "You, in the tracker", "About 30 minutes"],
    ]),
    tyler("AI drafts, humans personalize. The first line is always yours, and you never send an email you haven't read."),

    h2("Step 1: set up your sequence"),
    p("A sequence is a series of emails that go to one person on a schedule: the first email, then follow-ups a set number of days later, stopping automatically when they reply. Here's the setup, which students in the program do live in the Week 3 session and send before they leave."),
    tb.sequencing(),
    h3("Choosing a tool"),
    p("Many students use a mail-merge or sequencing add-on that works inside Gmail or Outlook, so emails come from their real school address and replies land in their normal inbox. Whatever you pick, check four things: it sends from your own address, it supports merge fields from a spreadsheet, it can schedule follow-ups, and it stops follow-ups when someone replies. Start with a free tier; you don't need anything fancy."),
    note("Stay within the rules", "Send from your own school or personal address, at a human pace, to named individuals you've actually researched. Check your school's email policy and your tool's sending limits, and never buy lists or scrape emails in bulk."),
    h3("Your sheet"),
    p("One row per contact, with columns for first name, firm, subject line, and your personalized first line. The first-line column is the one that matters. If it's empty or generic, the email isn't ready."),
    example("A merge template (made-up)", "Subject: {{subject}}\n\nHi {{first_name}},\n\n{{first_line}}\n\nI'm a freshman at [school] studying [major] and trying to learn how people break into [field]. Would you be open to a short call in the next couple of weeks? Happy to work around your schedule.\n\nThank you,\n[Your name]\n[LinkedIn URL]"),

    h2("Step 2: research with AI, not guesses"),
    p("The quality of your first line depends entirely on the quality of what you give the AI. Paste in real material: their LinkedIn profile, a post they wrote, their firm's page, a press release. Never just a name and a firm. If you give AI nothing, it will invent something, and an invented compliment is worse than none."),
    ...tb.aiPrompts(),

    h2("Step 3: the personalized first line"),
    p("Your first line does one job: prove that this email was written for this person. It uses the Two C's from the cold email guide: a genuine compliment about something specific they did, and a real connection you share. You won't always have both. When you only have one, make it very specific."),
    table("First lines, weak vs. strong (made-up examples)", ["Weak", "Strong"], [
      ["I really admire your career.", "Your move from audit into deal advisory after two years is exactly the path I'm trying to understand."],
      ["I saw you work at [firm].", "I saw you went from our school to [firm]'s Irvine office. I'm a freshman in the same major."],
      ["Your company is doing great things.", "I read your post on pricing for early-stage products, especially the point about testing with ten customers first."],
      ["I'm interested in marketing.", "The campaign your team ran for [local brand] last spring is the reason I started paying attention to agency work."],
    ]),
    p("Ask the AI for five options, then pick the most specific one and edit it into your own words. Read it out loud. If it sounds like a press release, rewrite it the way you'd say it to a friend's older sibling. Politely."),

    h2("Step 4: follow-ups, on autopilot"),
    p("No reply is normal. Plenty of replies come from a follow-up rather than the first email, which is why loading them on day one matters. The rule: at most 4 follow-ups. Weekly in November and December, which is peak season for many firms, and biweekly to monthly off-peak."),
    ...tb.followUps(),
    p("Follow-up 3 is the most important one to personalize. Add one real update: something you read, did, or learned since your first email. It gives the person a new reason to reply and shows you're doing the work."),

    h2("Step 5: the guardrails"),
    tb.aiGuardrails(),
    h3("The read-before-send check"),
    p("Before every send, open three random merged emails and read them start to finish as if you were the recipient. Check:"),
    ul(
      "Did every merge field fill correctly? (No \"Hi {{first_name}}\".)",
      "Is every fact true and verifiable?",
      "Does the first line only make sense for this person?",
      "Is it under 120 words, with one clear ask?",
      "Would you reply to it?",
    ),
    p("If any answer is no, fix the sheet and check again. Sending 50 bad emails is worse than sending 20 good ones."),

    h2("Step 6: the tracker"),
    ...tb.tracker(),
    p("Every reply goes into the tracker the same day, with the date, what they said, and the next step. Every call gets a line with the thank-you time. Every Sunday night, you read your numbers: emails sent, replies, calls, and your reply rate. That Sunday check is how you know whether your emails are working, and what to fix."),
    h3("Reading your numbers"),
    table("If your reply rate is low", ["Likely cause", "Fix to try first"], [
      ["First lines are generic", "Rewrite with a more specific detail; use the research prompt"],
      ["The ask is vague or too big", "Ask for one short call, nothing else"],
      ["The list skews senior or famous", "Add more B-tier firms and analysts or associates"],
      ["Emails are too long", "Cut to under 120 words with the tighten prompt"],
      ["No follow-ups", "Load up to 4, spaced for the season"],
    ]),

    h2("What this looks like week to week"),
    ol(
      "Monday: research and write first lines for this week's 50 contacts.",
      "Tuesday morning: read three merged emails, fix anything off, and send.",
      "Every day: reply to replies within 24 hours and book calls.",
      "Sunday night: update the tracker and calculate your reply rate.",
    ),

    h2("Common mistakes"),
    ul(
      "Letting AI write the whole email. It will sound like AI.",
      "Letting AI invent facts about the person. If you can't verify it, cut it.",
      "Sending without reading. Merge errors are the fastest way to lose credibility.",
      "Skipping follow-ups because they feel pushy. A lot of replies come from them.",
      "Tracking everyone. Only track people who reply.",
      "Sending in bursts. A steady weekly number beats 200 emails one week and none the next.",
    ),
    check("You're ready to send when",
      "Your tool sends from your own address and stops on reply",
      "Every contact has a real, verified first line",
      "Follow-ups (up to 4) are loaded and scheduled",
      "You've read three merged emails start to finish",
      "Your tracker is ready for replies",
    ),
    p("The system makes 50 emails a week possible. It doesn't make them good; you do. In the program, the weekly 60-minute 1:1 includes a line-by-line look at your emails and your reply rate, so the fix happens that week instead of a month later."),
  ],
};
