import type { Guide } from "./types";
import { check, example, h2, h3, ol, p, table, tyler, ul } from "./_helpers";
import { technicals } from "../toolkit";

export const guide: Guide = {
  slug: "consulting-case-interviews-from-zero",
  title: "Consulting case interviews from zero",
  excerpt: "What a case interview actually tests, how to structure any case from the question (not a memorized framework), market sizing out loud, the mental math that keeps you moving, and how to practice with a partner.",
  oneLine: "What a case tests, how to structure one from the question, and market sizing out loud.",
  category: "Technicals",
  track: "consulting",
  date: "2026-09-21",
  author: "Tyler Ho",
  downloads: ["technicals-consulting", "interview-scorecard"],
  related: ["finance-technicals-for-beginners", "why-this-industry-why-this-firm", "behavioral-stories"],
  reviewedByTyler: true,
  body: [
    p("The first time most students see a case interview, it feels impossible. An interviewer describes a business problem in two sentences (\"A regional coffee chain's profits have fallen. Figure out why.\") and then waits. There's no formula to plug in and no single right answer. Students either freeze or start listing everything they can think of."),
    p("Here's the secret: a case interview isn't testing whether you know the answer. It's testing how you think. Can you break a messy problem into clear pieces? Can you do quick math out loud without getting lost? Can you look at a chart and find the one thing that matters? Can you land on a recommendation and defend it? All of that is learnable, and none of it requires a business degree."),
    p("This guide covers what the case tests, how a case flows, how to build a structure from the question, market sizing, mental math, and a practice plan. The consulting question bank is a free download."),

    h2("What a case interview tests"),
    table("What interviewers are scoring", ["Skill", "What it looks like"], [
      ["Structure", "Breaking the problem into logical, non-overlapping pieces before diving in"],
      ["Math", "Quick, accurate arithmetic out loud, with clear units"],
      ["Judgment", "Spotting what matters in data and ignoring what doesn't"],
      ["Communication", "Thinking out loud, signposting, and summarizing clearly"],
      ["Synthesis", "Ending with a clear recommendation, reasons, and next steps"],
    ]),
    tyler("Understand the concept first. The answer comes easier after that, and so does the version of the case you've never seen."),

    h2("How a case flows"),
    ol(
      "The prompt. The interviewer describes the client and the problem. Take notes.",
      "Clarify. Ask one to three questions about the goal, the business, or anything unclear. (\"Is the goal to restore profits to last year's level, or to maximize them?\")",
      "Structure. Ask for a moment, build your structure on paper, and walk the interviewer through it.",
      "Analyze. Work through the branches: ask for data, do math, read charts, form hypotheses.",
      "Recommend. Summarize your answer, the two or three reasons, and the risks or next steps.",
    ),

    h2("Build the structure from the question"),
    p("Many students memorize a handful of named frameworks and force every case into one of them. Interviewers can tell, and it breaks down the moment the case is unusual. Instead, build your structure from the specific question. Ask yourself: what would I need to know to answer this? Then group those things into three or four buckets that don't overlap and together cover everything."),
    h3("The profit tree: your most useful tool"),
    p("A huge share of cases come back to profit. Profit equals revenue minus costs. Revenue equals price times volume. Costs split into fixed and variable. Break a profit problem down this way and you'll always know where to look next."),
    table("Profit, broken down", ["Branch", "Break it into", "Questions to ask"], [
      ["Revenue", "Price × volume, by product, channel, or region", "Did prices change? Did volume drop? Which products or locations?"],
      ["Costs", "Fixed (rent, salaries) and variable (ingredients, shipping)", "Which costs grew? Per unit or in total? Why?"],
    ]),
    example("Structuring a profit case (made-up)", "Prompt: \"A regional coffee chain's profits fell 20% over two years.\" Structure: (1) Revenue: price per drink, drinks per store, number of stores, mix of products. (2) Costs: ingredient costs, labor, rent, other. (3) External: new competitors, changing customer habits. Then: \"I'd like to start with revenue, since a 20% drop is large. Do we have data on drinks sold per store?\""),
    h3("Other common case types"),
    table("Case types and starting questions", ["Case type", "Start by asking about"], [
      ["Market entry (\"Should we enter a new market?\")", "Market attractiveness, competition, our ability to win, and the economics of entering"],
      ["Growth (\"How can we grow?\")", "Existing customers, new customers, new products, new channels or regions"],
      ["Pricing (\"How should we price this?\")", "Costs, customer value, and competitors' prices"],
      ["New product (\"Should we launch this?\")", "Customer need, market size, fit with the business, and profitability"],
      ["Operations (\"Why are wait times up?\")", "The process step by step: demand, capacity, and bottlenecks"],
    ]),
    p("Use these as starting points, then tailor. The best structures sound like they were built for this client, because they were."),

    h2("Market sizing, out loud"),
    p("Market sizing questions ask you to estimate a number you can't possibly know, like the number of electric scooters in a mid-size US city. The interviewer isn't grading the final number. They're grading your logic, your assumptions, and your math."),
    ol(
      "Clarify what you're estimating (all scooters, or only rentals? a year or at one time?).",
      "Pick an approach: from the population down, or from supply up.",
      "Break it into steps, state each assumption out loud, and use round numbers.",
      "Do the math step by step, saying units as you go.",
      "Sanity-check the result: does it seem reasonable?",
    ),
    example("A market sizing walk-through (made-up assumptions)", "\"Estimate the annual revenue of a campus bookstore.\" Assume about 30,000 students. Suppose the average student spends about $300 a year there on books, supplies, and merchandise. 30,000 × $300 = $9 million. Add a little for visitors and events, say about 10%, and we're near $10 million. Sanity check: that's roughly $27,000 a day across a year, which seems plausible for a large campus store."),
    p("The numbers in that example are assumptions, and that's the point: say them clearly, keep them round, and be ready to adjust if the interviewer gives you better data."),

    h2("Mental math"),
    p("You'll do math out loud, under a little pressure, without a calculator. Mental math needs to be fast enough that it doesn't break your train of thought. It's a practice problem, not a talent."),
    ul(
      "Round aggressively and say so: \"I'll call that 30,000 to keep the math clean.\"",
      "Use percentages as fractions: 25% is a quarter, 20% is a fifth, 12.5% is an eighth.",
      "Break multiplication apart: 7 × 68 = 7 × 70 − 7 × 2 = 490 − 14 = 476.",
      "Keep track of zeros with scientific shorthand: 30 thousand × 300 = 9 million.",
      "Say units every time: dollars, drinks, stores, per year.",
    ),
    table("Quick drills", ["Question", "Answer"], [
      ["15% of 240", "36 (10% is 24, 5% is 12)"],
      ["7 × 68", "476"],
      ["1,200 ÷ 16", "75"],
      ["30,000 × $300", "$9 million"],
      ["25% growth on 80", "100"],
    ]),

    h2("Thinking out loud: what to actually say"),
    p("Interviewers can only score what they hear. Students who work silently, even brilliantly, often score worse than students who narrate a slightly weaker approach. Signposting keeps the interviewer with you and lets them nudge you if you drift."),
    table("Useful phrases", ["Moment", "Say something like"], [
      ["After the prompt", "\"Let me make sure I understand. The client is…, and the goal is…. Is that right?\""],
      ["Before structuring", "\"Could I take a minute to organize my thoughts?\""],
      ["Presenting the structure", "\"I'd look at three areas: …. I'd like to start with … because ….\""],
      ["Before math", "\"I'll round that to … to keep the math clean.\""],
      ["After math", "\"So that's about …, which means …. That suggests we should look at … next.\""],
      ["When stuck", "\"I'm not sure yet. Here's what I'd want to know to figure it out.\""],
    ]),
    p("Notice the pattern after every calculation: the number, then the \"so what.\" A number on its own isn't an insight. The implication for the client is what moves the case forward, and it's what interviewers remember when they fill out the scorecard afterward."),

    h2("Charts and synthesis"),
    p("Interviewers often hand you a chart and ask what it says. Don't describe every bar. Read the title and axes, find the one thing that matters for the case, and say it in one sentence, followed by what you'd do with it. \"Drinks per store are flat, but average price dropped 15% after the discount launch, so the revenue problem looks like pricing, not demand.\""),
    h3("The 30-second recommendation"),
    p("End every case with a clear answer: the recommendation, two or three reasons, and the main risk or next step. Lead with the answer, not the journey. \"I recommend the client end the discount program. Revenue per store fell mainly because of lower prices, the discount didn't bring in new customers, and we can recover most of the lost profit within a year. The risk is losing some price-sensitive regulars, so I'd test it in a few stores first.\""),

    h2("The behavioral half"),
    p("Most consulting interviews aren't only a case. They usually open with your intro, a couple of behavioral questions, and \"why consulting, why our firm?\" Interviewers are also asking themselves whether they'd want you in front of a client. Your 8 stories, your 60-second intro, and your 3-bucket \"why\" matter as much as the case, so practice them with the same seriousness. A strong case with a flat \"why consulting\" answer is a common way to miss the next round."),

    h2("The practice questions"),
    { type: "ol", items: technicals.consulting.questions },

    h2("How to practice"),
    p("Cases are a conversation, so you can't learn them only by reading. Practice out loud with a partner: one person gives the case, the other solves it, then you switch. Time yourself and always finish with a recommendation."),
    ol(
      "Weeks 1–2: learn the profit tree and do ten market sizings out loud.",
      "Weeks 3–4: two cases a week with a partner, graded on structure, math, and synthesis.",
      "Every day: ten minutes of mental math.",
      "Before any interview: one full case with someone you don't know.",
    ),
    p("In the program, consulting students spend Week 9 on case structure, frameworks, market sizing, and mental math with timed drills, then face a full 30-minute graded mock in Week 10 that includes a case."),

    p("A note on partners: the best practice partner isn't always the smartest person you know. It's someone who will give you cases consistently, stop you when your structure overlaps or leaves something out, and tell you honestly when your recommendation didn't land. Trade roles every session; giving cases teaches you what a clear answer sounds like from the other side of the table."),

    h2("Common mistakes"),
    ul(
      "Jumping into analysis without a structure.",
      "Forcing a memorized framework that doesn't fit the question.",
      "Doing math silently. Think out loud.",
      "Describing a chart instead of interpreting it.",
      "Ending without a clear recommendation.",
      "Not asking clarifying questions at the start.",
    ),
    check("You're ready for a first round when you can",
      "Build a clean structure from any prompt in about two minutes",
      "Break any profit problem into revenue and costs",
      "Do a market sizing out loud with clear assumptions",
      "Do mental math quickly with units",
      "Find the one thing that matters in a chart",
      "Give a 30-second recommendation that leads with the answer",
    ),
  ],
};
