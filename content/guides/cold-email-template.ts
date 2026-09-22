import type { Guide } from "./types";
import { check, h2, h3, ol, p, table, template, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "cold-email-template",
  title: "Cold email templates that get replies (and why they work)",
  excerpt: "The Two C's, subject lines that get opened, five templates for five situations, and the follow-up sequence. The exact structure our students use.",
  oneLine: "The Two C's, subject lines, five templates, and the follow-up sequence.",
  category: "Networking",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["cold-email-pack"],
  related: ["ai-cold-email-system", "networking-call-framework", "target-list-of-50"],
  reviewedByTyler: true,
  body: [
    p("Most cold emails fail for the same reason: they're about the sender. \"I'm a hardworking freshman passionate about finance, and I'd love any advice or opportunities you might have.\" That email asks a stranger to do work, gives them no reason to care, and could have been sent to anyone. It usually gets deleted."),
    p("A good cold email is the opposite. It's short, specific, and about them. It asks for exactly one thing: a short call. And it gives the reader a reason to say yes, usually because something about you reminds them of themselves."),
    p("This guide covers the principle behind every email I send (the Two C's), the rules for length and subject lines, five templates for five common situations, the follow-up sequence, and how to read your own numbers. The full template pack is a free download."),

    h2("The goal: a reply rate moving toward 10%"),
    p("Most cold emails won't get a reply, and that's normal. It's not a sign you're doing it wrong. In the program, the Week 4 objective is to move each student's reply rate toward 10%. If you're well under that after a few weeks, the problem is almost always one of three things: the first line, the ask, or the list. This guide is mostly about the first two. The target list guide covers the third."),

    h2("The Two C's"),
    ...tb.twoCs(),
    p("Why does this work? Because people are far more likely to help someone who feels familiar. An alum sees themselves four years ago. Someone from your hometown remembers what it was like to leave. A person whose post you actually read feels respected. The compliment shows you did your homework; the connection gives them a reason to care."),
    h3("What a real compliment looks like"),
    table("Compliments, generic vs. specific (made-up examples)", ["Generic (skip)", "Specific (use)"], [
      ["I admire your impressive career.", "Your move from audit into deal advisory after two years is the exact path I'm trying to understand."],
      ["Your firm does amazing work.", "I read about your team's work with family-owned businesses near campus."],
      ["You seem like a great leader.", "Your talk at the campus finance night, especially the part about your first year, stuck with me."],
    ]),
    h3("Where to find a connection"),
    ul(
      "Same school, same major, or same campus organization",
      "Same hometown or high school",
      "Same first job, first-gen path, or language",
      "Same unusual interest you can see on their profile",
      "A mutual contact who suggested you reach out (always ask first)",
    ),

    h2("The rules"),
    tb.emailRules(),
    h3("Why under 120 words"),
    p("Busy people read email on their phones between meetings. If your email fills the whole screen, it feels like work, and work gets postponed. Under 120 words fits on one phone screen with room to spare."),
    h3("Why one ask"),
    p("\"Could we chat, and also would you look at my resume, and do you know of any openings?\" That's three asks, and it's easier to ignore all three than to answer one. Ask for a short call. Everything else, including the resume feedback and the intros, comes naturally from a good call."),

    h2("Subject lines"),
    p("Your subject line has one job: get the email opened. Specific and short beats clever. Here are patterns that work:"),
    tb.subjectLines(),
    p("Test two subject lines on a friend: show them both and ask which one they'd open. In the program, the group votes on subject lines every Week 4 session."),

    h2("Five templates"),
    p("Every bracket gets replaced with something real. If you can't fill a bracket with a specific, true detail, choose a different template or a different person. A template with generic fill-ins is worse than no template."),
    ...tb.emailTemplates(),

    h2("How to pick the template"),
    table("Which template, when", ["Situation", "Template", "Note"], [
      ["They went to your school", "1. Same school", "Your highest reply rate; start every list with alumni"],
      ["Same hometown, high school, or path", "2. Shared background", "Lead with the connection, briefly"],
      ["They wrote, said, or built something public", "3. Something they made", "Quote one specific point"],
      ["Small or local firm", "4. Local or small firm", "Offer coffee if you're nearby"],
      ["Founder or early employee", "5. Startup founder", "Shorter and more direct"],
    ]),

    h2("The follow-up sequence"),
    p("No reply is normal. Busy people miss emails, mean to reply and forget, or see it at a bad moment. A polite follow-up gives them another chance. The rule: at most 4 follow-ups. Weekly in November and December, which is peak season, and biweekly to monthly off-peak."),
    ...tb.followUps(),
    tyler("Follow-ups feel pushy to the sender and almost never feel pushy to the reader. Keep them short, kind, and spaced out, and stop after four."),

    h2("A full example, start to finish"),
    p("Here's how one email comes together for a made-up contact, Alex Example, an analyst at a made-up boutique who went to your school."),
    ol(
      "Research: Alex's profile shows two years in audit before moving to deal advisory, and a post about what surprised them in their first deal.",
      "Compliment: the post, specifically the point about how much of the job is organizing information.",
      "Connection: same school, same major.",
      "Template: 1. Same school.",
    ),
    template("The email (made-up)", "Subject: Fellow [school] student with a question about deal advisory\n\nHi Alex,\n\nI read your post about your first deal, especially the point that most of the job is organizing information well. That's not what I expected, and it made me want to learn more.\n\nI'm a freshman in [major] at [school], same as you, and I'm trying to understand how people move from audit into deals. Would you be open to a short call in the next couple of weeks? Happy to work around your schedule.\n\nThank you,\n[Your name]\n[LinkedIn URL]"),
    p("It's under 100 words. It's about Alex. It asks for one thing. And it couldn't have been sent to anyone else."),

    h2("After the reply"),
    p("When someone says yes, reply within 24 hours with two or three time options, or a scheduling link if you have one. Confirm the day before. Then prepare for the call. The networking call guide covers the full framework, and the thank-you note you'll send 1–2 hours afterward."),

    h2("Reading your numbers"),
    p("Every Sunday, calculate your reply rate: replies divided by emails sent that week. Track it week over week. When it's low, change one thing at a time so you know what worked."),
    table("Diagnosing a low reply rate", ["Symptom", "Likely cause", "Try"], [
      ["Almost no replies from anyone", "First line or subject line", "More specific first lines; test new subject lines"],
      ["Replies from alumni only", "Weak connection elsewhere", "Lead with a stronger compliment when you can't find a connection"],
      ["Replies say \"too busy\"", "The ask feels big", "Ask for 15–20 minutes, their schedule, phone or video"],
      ["No replies from senior people", "The list", "Email analysts and associates first"],
    ]),

    h2("Common mistakes"),
    ul(
      "Opening with \"My name is…\" The first line should be about them.",
      "Attaching your resume to a first email. Offer it on the call instead.",
      "Asking for a job or an internship directly.",
      "Writing more than 120 words.",
      "Generic compliments that could apply to anyone.",
      "Giving up after one email. Load the follow-ups.",
    ),
    check("Before you send",
      "A specific compliment, a real connection, or both",
      "Under 120 words, one ask",
      "Every bracket filled with something true",
      "Subject line tested",
      "Follow-ups loaded",
    ),
    p("Templates get you started. What gets replies is the specific detail you add to each one, and the discipline to send 50 a week and follow up on every single one. That discipline is what the program's weekly minimum is for."),
  ],
};
