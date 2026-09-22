import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, template, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "externships",
  title: "Externships: what they are and how to use them",
  excerpt: "No internship yet? Don't wait. How externships and scoped projects create real experience you can put on a resume and talk about in an interview, what counts, how to find or create one, and how to write it up.",
  oneLine: "How short, scoped projects give you real experience to put on a resume and talk about.",
  category: "Getting started",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: [],
  related: ["resume-with-zero-experience", "freshman-internship-timeline", "marketing-and-tech-internships-freshman"],
  reviewedByTyler: true,
  body: [
    p("The hardest part of the first internship search is the loop everyone complains about: you need experience to get an internship, and you need an internship to get experience. Most students respond by waiting, hoping someone will take a chance on them. The better response is to go create the experience yourself."),
    p("An externship is one of the fastest ways to do that. It's short, it's structured, it ends with a real deliverable, and it gives you something concrete to put on your resume and talk about in every interview. In our program, every student completes two externship projects over the 12 weeks, because the difference they make on a thin first-year resume is hard to overstate."),
    p("This guide covers what an externship is, what counts and what doesn't, how to find one or create your own, how to do it well, and how to write it up."),

    h2("What an externship is"),
    ...tb.externships().slice(0, 1),
    p("Think of it as a short, real project with a clear start, a clear end, and something you produce at the end. It might be a company-designed virtual project, a scoped piece of work for a local firm or startup, or a job shadow that ends with a memo or analysis. What makes it count is the deliverable, not the name."),
    table("Externship vs. internship", ["", "Externship", "Internship"], [
      ["Length", "Days to a few weeks", "Usually a summer or a semester"],
      ["Structure", "One defined project with a deliverable", "Ongoing work on a team"],
      ["Access", "Often open to first-years; can be self-created", "More competitive; formal applications"],
      ["What you get", "A real project to talk about and a resume line", "Deeper experience, relationships, sometimes a return offer"],
    ]),
    tyler("An externship won't replace an internship. It's what gets you the internship: a real project you can walk through when an interviewer asks what you've done."),

    h2("What counts, and what doesn't"),
    ...tb.externships().slice(1, 3),
    p("The test is simple: at the end, can you show someone what you made and explain the decisions you made along the way? If yes, it counts. If all you have is a certificate of completion, it doesn't."),

    h2("Where to find one"),
    h3("Structured virtual externship programs"),
    p("Some platforms and companies publish virtual externship projects designed around real work: a short analysis, a research brief, a presentation. Look for programs that clearly describe the project and the deliverable, and read reviews from past participants before you commit your time. Avoid anything that charges a lot for a certificate with no real work behind it."),
    h3("Your own calls"),
    p("Some of the best externships come from networking. On a call with someone at a small firm or startup, after you've built rapport, ask: \"Is there ever a small project a student could help with?\" Many small teams have a backlog of useful-but-not-urgent work: a competitor overview, a list of potential clients, a social media audit, a data cleanup. Offering to do one well is a strong way to turn a call into real experience."),
    h3("Pitch a scoped project"),
    p("If they don't have something in mind, offer something specific. A clear, small, time-boxed offer is easy to say yes to."),
    template("Pitching a scoped project", "Hi [First name],\n\nThank you again for the call last week. I kept thinking about what you said about [challenge they mentioned].\n\nIf it would be helpful, I'd be glad to put together a one-page [competitor overview / list of 25 potential clients / audit of your Instagram] for your team over the next two weeks, at no cost. I'm trying to build real experience, and I'd learn a lot from doing it well.\n\nWould that be useful?\n[Your name]"),
    h3("Professors and campus"),
    p("Professors, research labs, and campus offices often have small projects: data entry that turns into analysis, a literature review, a survey, a communications plan. These count when they're defined and end with something you produced."),

    h2("Project ideas by track"),
    p("If you're pitching your own project, it helps to have ideas ready. Here are scoped projects that fit in two weeks and produce something you can show. Match the idea to what the person told you on the call; the best pitch solves a problem they mentioned."),
    table("Two-week project ideas", ["Track", "Project", "Deliverable"], [
      ["Finance", "Comparable-companies snapshot for a sector the firm covers", "A one-page table of 6–8 companies with key metrics and three observations"],
      ["Finance", "Prospect list for a wealth manager or advisory firm", "25 potential clients with a one-line fit note each"],
      ["Consulting", "Competitor overview for a small business", "A 5-slide summary of 4–5 competitors: offer, pricing, strengths, gaps"],
      ["Consulting", "Customer survey and synthesis", "A short survey, 20+ responses, and a one-page findings memo"],
      ["Marketing", "Social media audit", "A 6-slide review of the account with three content tests to try"],
      ["Marketing", "Email campaign draft", "Two versions of an email with a test plan and success metric"],
      ["Tech", "Small internal tool or script", "A working tool plus a short README explaining how to use it"],
      ["Tech", "Data cleanup and dashboard", "A cleaned dataset and a simple dashboard with three insights"],
    ]),
    p("Keep the scope small enough that you can finish it well. A tight, polished one-pager beats an ambitious project that runs late. If the person likes your first project, there's often a second one."),

    h2("How to choose a structured program"),
    p("If you're considering a structured virtual externship program, a few questions help you tell the useful ones from the rest:"),
    ul(
      "Is the project designed around real work at a real company, with a clear deliverable?",
      "Will anyone review your work, or is it self-graded?",
      "How long does it take, and does that fit around your classes?",
      "Can you describe what you'd produce in one sentence? If not, it may not give you much to talk about.",
      "What does it cost? Many good options are free or low-cost; be wary of paying heavily for a certificate.",
      "What do past participants say about it, in reviews you can find yourself?",
    ),
    p("The goal is the same either way: at the end, you should have something you made and a two-minute story about making it."),

    h2("Doing it well"),
    ol(
      "Agree on the deliverable and the deadline in writing, even in a short email.",
      "Ask one or two clarifying questions early, then work independently.",
      "Send a short update halfway through, even if nobody asked.",
      "Deliver on time or early, with a short note summarizing what you found.",
      "Ask for feedback: \"What would you have done differently?\"",
      "Thank them, log it in your tracker, and add it to your resume.",
    ),
    p("Treat a small project like a real job. Being reliable on a two-week project is exactly what makes someone think of you when a real role opens."),

    h2("Putting it on your resume"),
    p("Write an externship like any other experience: organization, a clear title, dates, and outcome bullets. Be accurate about what it was. \"Virtual externship\" or \"Project\" in the title is honest and still impressive when the bullets are strong."),
    ...tb.externships().slice(5, 6),
    example("More bullet examples (made-up)", "• Built a list of 25 potential clients for a local wealth management firm, with contacts and a one-line fit note for each; the team used it for its spring outreach.\n• Audited a startup's Instagram account and delivered a 6-slide plan with three content tests.\n• Cleaned and analyzed a 2,000-row survey dataset for a campus lab and summarized results in a one-page memo."),

    p("If the project was self-created, name the organization you did it for, and only with their permission. If they'd rather not be named, describe it accurately (\"a local wealth management firm\"). Honesty here matters: an interviewer may ask who you worked with and what they thought of the result."),

    h2("Talking about it in interviews"),
    p("An externship is a perfect behavioral story: a clear situation, specific actions, a result, and a lesson. It also answers \"what have you done in this field?\" and gives you real material for \"why this industry.\" Prepare a two-minute version: what the project was, what you did, what you found, what you'd do differently, and what it taught you about the work."),

    h2("How externships fit the program"),
    p("In the 12-week program, externship 1 starts in Week 4 and is completed by Week 7, and externship 2 starts in Week 8 and is completed by Week 11. Both are part of the Standard's level gates. Every week, the scoreboard and the tracker show exactly where each student is."),

    h2("After it's done: turning it into the next step"),
    p("The project isn't finished when you hit send. What you do in the following weeks decides whether it stays a resume line or becomes a relationship."),
    ol(
      "Within a day: thank the person and ask one specific question about what they'll do with your work.",
      "Within a week: add the project to your resume and write the two-minute story version.",
      "Within a month: send a short update on what you've done since, and mention anything you learned from their feedback.",
      "When a role opens: tell them you're applying and ask whether there's anyone you should talk to.",
    ),
    p("A person who has seen your work is in a very different position from a person who has only seen your email. They can speak to how you work, not just how you write. That's the real value of an externship: it gives someone firsthand evidence that you're reliable, curious, and good at finishing things."),
    tyler("Every project should end with two things: something you can show, and someone who remembers you did it well."),

    p("If you're in the program, the weekly 60-minute 1:1 is where externship work gets reviewed before it goes out, so the version the company sees is your best one, not your first draft."),

    h2("Common mistakes"),
    ul(
      "Collecting certificates instead of deliverables.",
      "Taking on a project with no clear scope or deadline.",
      "Going quiet mid-project.",
      "Overstating it on your resume. Call it what it was, and let the bullets do the work.",
      "Not asking for feedback or staying in touch afterward.",
    ),
    check("Your externship counts when",
      "It has a defined deliverable and deadline",
      "You produced something you can show",
      "You can explain your decisions for two minutes",
      "It's on your resume with an outcome bullet",
      "You've thanked the person and logged the relationship",
    ),
  ],
};
