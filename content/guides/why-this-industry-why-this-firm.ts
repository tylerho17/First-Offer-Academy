import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "why-this-industry-why-this-firm",
  title: "\"Why banking, consulting, marketing, or tech, and why this firm?\"",
  excerpt: "\"I'm passionate about finance\" tells the interviewer nothing. The 3-bucket answer (mentality, the work, the people), how to build firm-specific versions from your calls, and the sector questions that catch students off guard.",
  category: "Interviews",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["why-worksheet"],
  related: ["networking-call-framework", "behavioral-stories", "tell-me-about-yourself"],
  reviewedByTyler: false,
  body: [
    p("Enthusiasm is ranked third on the list of things that matter in recruiting, above behaviorals and technicals. That surprises students until they think about it from the interviewer's side. An intern spends ten weeks sitting next to the team. Given two candidates with similar resumes, the team picks the one who actually wants to do the work, and can explain why."),
    p("The question that tests this is \"Why this industry, and why this firm?\" Almost every student answers it badly. \"I've always been passionate about finance.\" \"I love solving problems.\" \"Your firm has a great culture.\" None of those answers is wrong. They're just empty. They could come from anyone, about anything, and interviewers hear them all day."),
    p("This guide gives you a structure that makes your answer specific and believable: the 3-bucket \"why.\" It also shows how to build firm-specific versions from calls you've already had, and how to prepare for the sector questions that often follow. The worksheet is a free download."),

    h2("Why generic enthusiasm fails"),
    p("Interviewers aren't testing whether you like the field. They're testing whether you understand it well enough to know you'd like it. \"I'm passionate about consulting\" can't be checked. \"I talked to four consultants this fall, and the part every one of them described as the best part of the job was the first two weeks of a project, when nobody knows the answer yet. That's exactly the kind of problem I enjoy\" can be checked, and it's obviously true."),
    p("Enthusiasm reads as real when it's specific, and it's specific when it comes from people you've actually talked to. That's why this answer gets built last, after your calls, not first."),
    tyler("The best \"why us\" quotes someone who works there. If you haven't talked to anyone at the firm yet, that's your next email."),

    h2("The 3-bucket \"why\""),
    tb.whyBuckets(),
    h3("Bucket 1: mentality"),
    p("What about how you think or work fits this field? Pick one or two traits and prove each with a quick story, ideally one of your 8 behavioral stories. Examples: you like being measured against a clear number; you like problems without an obvious answer; you like building things people use; you like figuring out why people choose one thing over another."),
    h3("Bucket 2: two or three specific things about the work"),
    p("Name real parts of the job, not the industry in general. \"Building a model from scratch and defending every assumption.\" \"The first two weeks of a case, before the answer is clear.\" \"Testing two versions of a campaign and seeing which one wins.\" \"Shipping a feature and watching how people actually use it.\" The more specific, the better, and the best specifics come from your calls."),
    h3("Bucket 3: the people and their standards"),
    p("Who have you met, and what stood out? This is where your networking pays off. \"Every analyst I spoke with described feedback the same way: direct and fast.\" \"Two people on your team independently mentioned how much the senior people teach.\" You're showing that you've done the work of getting to know the field, and that you're choosing it for reasons you can name."),
    tb.whyExample(),

    h2("From industry to firm"),
    p("\"Why this industry\" and \"why this firm\" are usually asked together, or back to back. Your industry answer is the 3 buckets. Your firm answer narrows them down to this specific place."),
    table("Building a firm-specific answer", ["Ingredient", "Where it comes from", "Example (made-up)"], [
      ["One thing only this firm does", "The firm's site, news, your calls", "\"Your focus on family-owned businesses in Southern California\""],
      ["One person you've talked to there", "Your tracker", "\"When I spoke with Alex, they described…\""],
      ["A link to your bucket 1", "Your stories", "\"…which fits how I like to work, because…\""],
    ]),
    example("A firm answer (made-up)", "\"Two reasons. First, your team works mostly with family-owned businesses, and I grew up doing the books for my parents' restaurant, so that's the kind of client I understand and want to learn to serve. Second, when I talked to Alex on your team, the thing they emphasized was how much the senior people teach first-years, and that's exactly the environment I want for my first internship.\""),
    p("If you can't fill in \"one person you've talked to there,\" you're not ready to interview at that firm yet. Go back to your target list and send the email."),

    h2("Versions by track"),
    table("What buckets 1 and 2 often sound like", ["Track", "Mentality (bucket 1)", "The work (bucket 2)"], [
      ["Finance", "Measured against clear numbers; comfortable with detail and pace", "Building models, defending assumptions, seeing a deal from pitch to close"],
      ["Consulting", "Likes ambiguous problems; enjoys structuring chaos", "The early weeks of a project, synthesizing data into one recommendation, client presentations"],
      ["Marketing", "Curious about why people choose things; likes testing ideas", "Campaign tests, audience research, turning numbers into creative decisions"],
      ["Tech", "Likes building and fixing things; cares about users", "Shipping features, debugging, measuring how people use what you built"],
    ]),
    p("These are starting points, not scripts. Your version has to come from your own stories and your own calls, or it will sound like everyone else's."),

    h2("The sector and company questions"),
    p("After \"why,\" interviewers often test whether your interest goes deeper than the interview. These questions catch students off guard, and you can prepare for them in an evening."),
    ul(
      "\"What's a company or deal you've been following?\" Have one you can discuss for two minutes: what happened, why, and what you think.",
      "\"What trend are you watching in the industry?\" Pick one, know two facts about it, and have an opinion.",
      "\"What do you know about our firm?\" What it does, who its clients are, one recent thing, and why it matters to you.",
      "\"Where else are you interviewing?\" Be honest in general terms (\"a few boutiques and middle-market firms\"), and say why this firm is your focus.",
      "\"What would you do if you didn't get this role?\" Show that you're committed to the field, not just to this one opportunity.",
    ),
    h3("An evening of prep"),
    ol(
      "Read the last three months of news about the firm and its industry.",
      "Pick one company or deal to follow and write three bullets on it.",
      "Pick one trend and write two facts and one opinion.",
      "Review your tracker notes from every call with someone at the firm.",
      "Say your \"why us\" out loud for this firm, and record it.",
    ),

    h2("What if you're not sure yet?"),
    p("Plenty of first-year students aren't certain which field they want, and that's fine. You don't need lifelong certainty to give a good answer. You need honest, specific reasons for this stage of your life. \"I'm exploring finance and consulting, and here's what I've learned about each from my calls\" is a real answer in a networking conversation."),
    p("In an interview for a specific role, though, commit. Choose the reasons that are true for this field and lead with them. If the honest answer is that you're still deciding, the 3 buckets will help you decide: the field where you can fill all three with real, specific material is usually the one that fits."),
    table("Signs a field fits you", ["Signal", "What it looks like"], [
      ["Calls energize you", "You leave conversations with people in this field wanting to learn more"],
      ["Bucket 2 is easy", "You can name specific tasks you'd enjoy without looking anything up"],
      ["The people feel familiar", "You'd like working next to the people you've met"],
      ["You read about it for fun", "You follow news, companies, or trends without being told to"],
    ]),

    h2("The worksheet"),
    tb.whyWorksheet(),

    p("One more tip: update your \"why\" after every few calls. The answer you give in Week 8 should sound noticeably more specific than the one you'd have given in Week 3, because you've met more people and seen more of the work."),

    h2("Practicing"),
    p("In the program, the Week 8 session runs rapid-fire \"why us\" drills: students pick firms from their own target lists and answer on the spot, one after another. It's hard at first, and it gets fast. Try it yourself: write ten firms from your list on slips of paper, draw one, and answer in under 90 seconds. If you can't say something specific about the firm, that's a gap to fill."),

    h2("Common mistakes"),
    ul(
      "\"I've always been passionate about…\" with nothing behind it.",
      "Praising the firm's \"culture\" or \"prestige\" without specifics.",
      "Describing the industry in general instead of the work itself.",
      "Using the same firm answer for every firm.",
      "Building the answer from the website instead of from people.",
      "Running over 90 seconds.",
    ),
    check("Your \"why\" is ready when",
      "All three buckets are filled in, with a story for bucket 1",
      "Bucket 2 names two or three specific tasks, learned from calls",
      "Bucket 3 names real people and what they said",
      "You have firm-specific versions for your top three firms",
      "It's recorded and under 90 seconds",
    ),
    p("In the program, the \"why\" pitch is recorded in Week 8, at the same time students reach the Networked level, because by then they've had enough calls to fill every bucket with something real."),
  ],
};
