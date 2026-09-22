import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { tb } from "../toolkitBlocks";

export const guide: Guide = {
  slug: "behavioral-stories",
  title: "Behavioral interviews: finding and telling your 8 stories",
  excerpt: "\"Tell me about a time…\" decides more first rounds for freshmen and sophomores than technicals do. How to mine 8 stories from 25 questions, structure them, map them to every common question, and tell them out loud.",
  oneLine: "Mine 8 stories from 25 questions and map them to every common behavioral question.",
  category: "Interviews",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["self-questions", "interview-scorecard"],
  related: ["tell-me-about-yourself", "why-this-industry-why-this-firm", "resume-with-zero-experience"],
  reviewedByTyler: true,
  body: [
    p("When students prepare for interviews, they almost always start with technicals, because it feels like studying for a test. But for first- and second-year roles, behavioral questions decide more first rounds than technicals do. \"Tell me about a time you led a team.\" \"Tell me about a time you failed.\" \"Tell me about a conflict with a teammate.\" Nobody expects a freshman to value a company perfectly. Everyone expects a freshman to answer those questions well."),
    p("The good news: you don't need a different story for every question. You need 8 good stories, each flexible enough to answer several questions, practiced out loud until they sound natural. This guide walks through the whole process: mining your raw material, choosing stories, structuring them, mapping them to questions, and practicing. The 25 self-questions and the story template are a free download."),

    h2("Choose stories for uniqueness, not impressiveness"),
    p("This is the most important idea in this guide. Students skip their best stories because they seem too small: a shift at a restaurant, a fight with a group project partner, helping a younger sibling with school, a club event that almost fell apart. They reach instead for the most impressive-sounding thing, which is usually generic, and usually the same thing every other applicant says."),
    p("Interviewers hear dozens of stories about leading a club fundraiser. They remember the student who talked about keeping a family restaurant's books balanced at 16, or the one who admitted exactly how they messed up a group project and what they changed. Unique beats impressive, because unique is memorable, and memorable is what gets you to the next round."),
    tyler("The best stories are usually the ones you think are too small. If it could only have happened to you, it's probably a good story."),

    h2("Step 1: answer the 25 self-questions"),
    p("Don't write stories yet. Start by answering these honestly, in bullet points, with no editing. This is your raw material. In the program, it's a Week 1 deliverable, weeks before anyone writes a story, because the best material surfaces when you're not trying to sound good."),
    tb.selfQuestions(),
    h3("How to answer them"),
    ul(
      "Give yourself two sittings of about 45 minutes. Don't do it all at once.",
      "Write fast. Bullets, not paragraphs.",
      "Include things from high school, jobs, family, and anything outside school. All of it counts.",
      "If nothing comes to mind for a question, skip it and come back.",
      "Don't judge whether something is impressive. That comes later.",
    ),

    h2("Step 2: pick your 8"),
    p("Read your answers and circle anything with a clear situation, something you did, and a result. Then choose 8 that are different from each other: different settings (work, school, family, activities), different skills, and at least one real failure. A good set of 8 might include a job, a leadership moment, a team that struggled, a mistake you owned, something you started, a time you learned fast, a conflict you resolved, and the moment that pulled you toward your field."),
    table("A balanced set of 8 (example themes)", ["#", "Theme", "Could come from"], [
      ["1", "A responsibility most students didn't have", "A job, family business, caregiving"],
      ["2", "Leading without a title", "A group project, a team, an event"],
      ["3", "A real failure you owned", "A missed deadline, a bad decision, a lost competition"],
      ["4", "A conflict you worked through", "A teammate, a coworker, a club disagreement"],
      ["5", "Something you started", "A project, a club, a small business, a fundraiser"],
      ["6", "Learning something fast under pressure", "A new job, a hard class, a crisis"],
      ["7", "Changing someone's mind", "A proposal, a negotiation, a debate"],
      ["8", "What pulled you into the field", "A moment, a person, a problem you noticed"],
    ]),

    h2("Step 3: write each story in four parts"),
    tb.storyTemplate(),
    p("Most of the story should be the second part: what you did. Students spend too long on the situation and rush through their own actions, which is the only part the interviewer is actually scoring. Use \"I,\" not \"we.\" If you were on a team, say what the team did in one sentence and what you did in the rest."),
    h3("Before and after"),
    example("Weak version (made-up)", "\"In my business club we had an event and there were some problems with the planning, so we all worked together and it ended up going well, and I learned a lot about teamwork.\""),
    example("Strong version (made-up)", "\"Two weeks before our alumni networking night, three of our six speakers dropped out and our room booking fell through (situation). I split the problem: I emailed 20 alumni from our LinkedIn list with a short personal ask, and I went to the events office in person with two backup dates (what I did). We confirmed four new speakers and a bigger room, and 120 people came, the club's largest event that year (what changed). I learned to act on the problem the same day instead of waiting for the next meeting, and I've done that on every project since (what I learned).\""),
    p("The strong version is specific, uses \"I,\" has a number, and ends with a lesson you could actually say to a friend. It's also about 90 seconds out loud, which is about right."),

    h2("Step 4: map your stories to the questions"),
    p("One story, many questions. The alumni-night story above could answer leadership, pressure, initiative, and even persuasion. Mapping your 8 stories against the common questions shows you where you're strong and where you have gaps."),
    tb.behavioralQuestions(),
    ...tb.storyMap(),
    p("If a question has no story, go back to your self-questions and find one. If one story is carrying five questions, find a second option for a couple of them, because interviewers sometimes ask two related questions in a row."),

    h2("Step 5: say them out loud and record them"),
    p("A story you've only written isn't ready. The first time you say it, it'll run four minutes and wander. Cut it to two. Then record it, watch it, and cut again. You're aiming for stories that sound practiced, not memorized: the same structure every time, slightly different words."),
    ol(
      "Say each story out loud three times, timing each one.",
      "Record the best version on your phone.",
      "Watch it back: where did you ramble? Where did you say \"we\"? Where was the energy low?",
      "Cut, re-record, repeat until each story is under two minutes.",
      "Practice answering random questions from the list by picking a story on the spot.",
    ),
    p("In the program, the Week 7 session has every student tell two stories while peers guess which question each one answers. If the group can't tell, the story needs a clearer point."),

    h2("Answering the tricky ones"),
    h3("\"Tell me about a time you failed\""),
    p("Pick a real failure with real stakes, not a disguised strength (\"I work too hard\"). Own it clearly, spend most of the time on what you changed afterward, and end with evidence that the change stuck."),
    h3("\"What's your biggest weakness?\""),
    p("Name something true and specific that isn't central to the job, show what you're doing about it, and give one example of progress. \"I used to avoid asking for help until I was stuck for hours; now I set a 30-minute rule\" is honest and shows self-awareness."),
    h3("\"Tell me about a conflict\""),
    p("Choose a disagreement about work, not a personal feud. Show that you understood the other person's view, what you did to resolve it, and how the relationship ended up. Never make the other person the villain."),

    h2("How interviewers score behavioral answers"),
    p("Interviewers are listening for a few things, whether or not they use a formal rubric: a specific situation, clear personal actions, a real result, and self-awareness. On our interview scorecard, behavioral stories are scored on exactly that: specific situation, \"I\" not \"we,\" a result, and a real lesson. The scorecard is a free download if you want someone to grade your practice."),

    h2("Common mistakes"),
    ul(
      "Choosing the most impressive story instead of the most specific one.",
      "Spending two minutes on the situation and twenty seconds on what you did.",
      "Saying \"we\" throughout, so the interviewer can't tell what you did.",
      "No result, or a result with no number.",
      "A lesson that sounds like a poster (\"teamwork makes the dream work\").",
      "Memorizing word for word, so it sounds recited.",
    ),
    check("Your stories are ready when",
      "All 25 self-questions are answered",
      "8 stories are written in the four-part template",
      "Every common question has at least two stories mapped to it",
      "All 8 are recorded, each under two minutes",
      "You can answer a random question by picking a story in under five seconds",
    ),
    p("In the program, 8 stories written, recorded, and mapped is the Week 7 deliverable and part of the Level 4 gate, so they're ready well before the first mock interview. The weekly 60-minute 1:1 is where the weakest two stories get line-by-line edits."),
  ],
};
