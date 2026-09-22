import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "tell-me-about-yourself",
  title: "\"Tell me about yourself\": a 60-second answer that works",
  excerpt: "The first question in almost every interview and every networking call, and the one most students wing. The four-part structure, examples, versions for calls and interviews, and how to practice until it sounds like you.",
  oneLine: "A four-part, 60-second answer for calls and interviews.",
  category: "Interviews",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["interview-scorecard", "self-questions"],
  related: ["behavioral-stories", "why-this-industry-why-this-firm", "networking-call-framework"],
  reviewedByTyler: true,
  body: [
    p("\"Tell me about yourself\" is not a request for your life story. It's the interviewer asking three things at once: who are you, why are you here, and should I keep listening? You have about sixty seconds to answer all three. It's the first question in almost every interview and a version of it opens every networking call, which makes it the single answer you'll give most often in your entire search."),
    p("It's also the one most students wing. They either recite their resume from top to bottom (\"So I'm a freshman at… and I'm majoring in… and I'm in these clubs…\") or ramble for three minutes about their childhood. Both lose the room before the real interview has started."),
    p("This guide gives you a four-part structure, examples, versions for calls and interviews, and a practice routine. In the program, every student records this answer cold in Week 1 and again in Week 12, and watches the two side by side at the family results meeting. It's the clearest proof of progress we know."),

    h2("The four-part structure"),
    p("The intro has four parts, in this order: where you're from, what pulled you in, what you've done, and why you're talking to them. It's the same structure students build in Week 2 of the program, right after their resume passes the rubric, because the two tell the same story."),
    tb.intro(),
    h3("1. Where you're from (about 10 seconds)"),
    p("One or two sentences that make you a person, not a resume. Hometown, family, a job you had early, something that shaped you. This is where uniqueness lives. \"I did the books for my parents' restaurant on weekends\" is far more memorable than \"I'm a freshman at my school.\""),
    h3("2. What pulled you in (about 15 seconds)"),
    p("The bridge from who you are to the field you're pursuing. A moment, a person, a problem you noticed. It should connect naturally to part one. \"Doing those books is what got me curious about how businesses actually make money.\""),
    h3("3. What you've done (about 25 seconds)"),
    p("The evidence that you're serious: your top two resume items, told as a short story rather than a list. A job, a project, a club role, calls you've had, something you've taught yourself. \"At school I've led events for the business club, and I've been teaching myself valuation by building models of companies I follow.\""),
    h3("4. Why you're talking to them (about 10 seconds)"),
    p("The landing. Why this call, this firm, this role, this person. This is the part most students forget, and it's the part that tells the listener what to do next. \"I'm really interested in advisory work, and your firm's focus on family-owned businesses is exactly the kind of work I want to learn.\""),
    tyler("Your resume and your intro are the same story told two ways. If they don't match, fix the one that's weaker."),

    h2("Full examples"),
    example("Example: finance, made-up student", "\"My parents run a restaurant, and from about 14 I did the books for my parents' restaurant on weekends. That's what got me curious about how businesses actually make money, and why some grow and some don't. At school I've been running events for the business club, and I've taught myself to build basic valuation models in Excel for companies I follow. I'm reaching out because your firm works with family-owned businesses like my parents', and I'd love to understand what that work looks like day to day.\""),
    example("Example: marketing, made-up student", "\"In high school I ran the Instagram for my cousin's bakery, which grew enough that she hired a second baker. That's when I realized I liked figuring out why people buy things. This year I've been writing and testing email campaigns for a campus organization and building a small portfolio of brand teardowns. I wanted to talk to you because your agency's work for local food brands is exactly the kind of marketing I want to learn.\""),
    example("Example: tech, made-up student", "\"I grew up translating tech support calls for my grandparents, which is a very humbling way to learn how confusing software can be. That's what pulled me toward building things people actually find easy to use. I've built a small app that helps students at my school find study partners, and I've been practicing data structures and SQL every week. I'm reaching out because your team builds tools for small businesses, and I'd love to hear how you decide what to build first.\""),
    p("Notice what these have in common. Each is about 100 words and about 60 seconds out loud. Each opens with something only that student could say. Each has concrete evidence in part three. And each ends with a clear reason for this specific conversation."),

    h2("Building yours from scratch"),
    p("If you're staring at a blank page, don't start with the intro. Start with the raw material. Your answers to the 25 self-questions are the fastest way in, because the best part-one material is usually hiding in them."),
    table("Where each part comes from", ["Part", "Look at", "Ask yourself"], [
      ["Where you're from", "Self-questions about family, jobs, and what you're known for", "What's one true detail about my background that most students couldn't say?"],
      ["What pulled you in", "\"What made you interested in this field in the first place?\"", "Was there a moment, a person, or a problem that started it?"],
      ["What you've done", "Your top two resume items", "Which two things best prove I'm serious, and what happened in each?"],
      ["Why them", "Your prep notes on the firm or person", "What specifically about this firm or person connects to parts 1–3?"],
    ]),
    p("Write one sentence for each row, then connect them. That's your first draft. It will be clunky, and that's fine; the practice routine below is where it gets good."),

    h2("\"But my story isn't impressive\""),
    p("You don't need an impressive story. You need a specific one. Interviewers meet a lot of students who led a club and love finance. They remember the one who balanced a restaurant's books, translated for their grandparents, or grew a cousin's bakery account. If your background feels ordinary to you, that's usually because you've lived it every day. Describe it plainly and specifically, and let the details do the work."),
    p("The same goes for part three. A job counts. A class project with a real result counts. Teaching yourself something counts, if you can show what you built or learned. What doesn't work is vague ambition with no evidence behind it."),

    h2("The follow-up questions"),
    p("A good intro usually leads to follow-ups. Be ready for these, because they come right after:"),
    ul(
      "\"Walk me through your resume.\" Use the same arc, with a little more detail on each item, in about two minutes.",
      "\"Why did you choose your major?\" Connect it to part two, honestly, even if the answer is \"I wasn't sure, and here's what I've learned since.\"",
      "\"What are you looking for in an internship?\" Tie it back to part four: the kind of work and people you want to learn from.",
      "\"Tell me more about [something you mentioned].\" This is why every detail in your intro should be something you can talk about for two minutes.",
    ),

    h2("Versions for different situations"),
    table("Adjusting the intro", ["Situation", "Length", "What changes"], [
      ["Networking call", "45–60 sec", "Looser and more casual. End with why you reached out to this person."],
      ["First-round interview", "60–90 sec", "A bit more on part 3. End with why this role at this firm."],
      ["Career fair or event", "20–30 sec", "Parts 1 and 4 only, plus one line of evidence."],
      ["Final round or superday", "60–90 sec", "Same core, updated with anything new since your first round."],
    ]),
    p("Keep the core the same everywhere and swap the ending. Your part four for a boutique advisory firm should sound different from your part four for a startup, because your reason for talking to them is different."),

    h2("Make it sound like you"),
    p("Write it down once, then stop reading it. Practice it out loud ten times until you can say it in slightly different words each time. Memorized answers sound memorized; practiced answers sound confident. If you catch yourself reciting, you've practiced the words instead of the structure."),
    h3("The practice routine"),
    ol(
      "Write a first draft using the four parts. Don't polish.",
      "Say it out loud and time it. Cut anything that pushes it over 90 seconds.",
      "Record it on your phone. Watch it once for content and once with the sound off for energy and eye contact.",
      "Fix the weakest part, usually part 3 (too listy) or part 4 (missing).",
      "Say it to one person and ask them to repeat back what they remember. If they can't recall your part 1, it isn't specific enough.",
      "Record it again a week later and compare.",
    ),

    h2("What interviewers are listening for"),
    ul(
      "Clarity: can they tell who you are and what you want within a minute?",
      "Energy: do you sound interested in your own story?",
      "Evidence: is there something concrete behind the interest?",
      "Fit: does the ending connect to this role and this firm?",
      "Length: did you stop before they had to interrupt?",
    ),
    p("On our interview scorecard, the opening is its own scored area: under 90 seconds, a clear arc, energy, and eye contact. It sets the tone for everything after it, so it's worth more practice than any other single answer."),

    h2("Common mistakes"),
    ul(
      "Reading your resume top to bottom.",
      "Starting with your name and school (they already know).",
      "Going past 90 seconds.",
      "Forgetting part four, so the answer just stops.",
      "Being so rehearsed it sounds recited.",
      "Low energy. If you sound bored by your story, they will be too.",
    ),

    h2("Record the baseline today"),
    p("Here's the exercise we run in Week 1 of the program, and you can do it right now. Before you read any more advice, record yourself answering \"tell me about yourself\" cold. No notes, no prep. Save it. Then use this guide, practice for a few weeks, and record again. Watching the two side by side is uncomfortable and motivating in equal measure."),
    check("Your intro is ready when",
      "It follows the four parts in order",
      "It runs about 60 seconds (never more than 90)",
      "Part 1 is something only you could say",
      "Part 3 has concrete evidence from your resume",
      "Part 4 changes for each firm or person",
      "You've recorded it and watched it back",
    ),
  ],
};
