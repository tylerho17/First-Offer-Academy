// Turns toolkit data (content/toolkit.ts) into content blocks, so the
// Playbook PDF, the downloads, and the guides all show the same material.

import type { Block } from "./blocks";
import * as t from "./toolkit";

type Track = keyof typeof t.technicals;

export const tb = {
  fiveThings: (): Block => ({
    type: "table",
    caption: "The 5 things that matter, ranked",
    head: ["#", "What", "Why it's ranked here"],
    rows: t.fiveThings.map((f) => [String(f.rank), f.name, f.why]),
  }),
  earlyMarket: (): Block => ({ type: "ul", items: t.earlyMarket.map((m) => `${m.name}: ${m.body}`) }),

  calendarByTrack: (): Block => ({
    type: "table",
    caption: "Recruiting calendar by track",
    head: ["Track", "Freshman year", "Sophomore year", "Junior year"],
    rows: t.recruitingCalendar.byTrack.map((r) => [r.track, r.freshman, r.sophomore, r.junior]),
  }),
  calendarByQuarter: (): Block => ({
    type: "table",
    caption: "Freshman through junior year, by quarter",
    head: ["When", "What to do"],
    rows: t.recruitingCalendar.byQuarter.map((q) => [q.when, q.do.join(" · ")]),
  }),

  rubric: (): Block[] => t.resumeRubric.map((r) => ({ type: "checklist", title: r.area, items: r.checks })),
  bulletRewrites: (limit = t.bulletRewrites.length): Block => ({
    type: "table",
    caption: "Bullet rewrites (made-up examples)",
    head: ["Before (a duty)", "After (an outcome)"],
    rows: t.bulletRewrites.slice(0, limit).map((b) => [b.before, b.after]),
  }),
  exampleResume: (): Block[] => [
    { type: "callout", tone: "example", title: t.exampleResume.label, text: "Before: " + t.exampleResume.before.join(" / ") },
    { type: "ul", items: t.exampleResume.after.map((l) => `After: ${l}`) },
  ],
  resumeTemplate: (): Block => ({
    type: "table",
    caption: "Resume structure, top to bottom",
    head: ["Section", "What goes on each line"],
    rows: t.resumeTemplate.map((s) => [s.section, s.lines.join("\n")]),
  }),
  intro: (): Block => ({
    type: "table",
    caption: "The 60-second intro",
    head: ["Part", "Time", "Example (made-up)"],
    rows: t.introStructure.map((i) => [i.part, i.seconds, i.example]),
  }),

  tiers: (): Block => ({
    type: "table",
    caption: "The A/B/C target list",
    head: ["Tier", "What", "How many (of 50)", "Why"],
    rows: t.targetTiers.map((x) => [x.tier, x.name, x.share, x.purpose]),
  }),
  sourcing: (): Block => ({ type: "ol", items: t.sourcingSteps }),

  twoCs: (): Block[] => [
    { type: "callout", tone: "tyler", title: "The Two C's", text: t.twoCs.intro },
    { type: "ul", items: [`Compliment: ${t.twoCs.compliment}`, `Connection: ${t.twoCs.connection}`] },
  ],
  emailRules: (): Block => ({ type: "checklist", title: "Before you hit send", items: t.emailRules }),
  subjectLines: (): Block => ({ type: "ul", items: t.subjectLines }),
  emailTemplates: (): Block[] =>
    t.emailTemplates.flatMap((e): Block[] => [{ type: "template", title: `${e.name}. ${e.use}`, text: e.text }]),
  followUps: (): Block[] => [
    { type: "p", text: t.followUpCadence.rule },
    {
      type: "table",
      caption: "Follow-up sequence",
      head: ["Step", "Peak (Nov–Dec)", "Off-peak", "What to send"],
      rows: t.followUpCadence.steps.map((s) => [s.step, s.peak, s.offPeak, s.text]),
    },
  ],
  aiGuardrails: (): Block => ({ type: "checklist", title: "AI guardrails", items: t.aiGuardrails }),
  aiPrompts: (limit = t.aiPrompts.length): Block[] => t.aiPrompts.slice(0, limit).map((p): Block => ({ type: "template", title: p.name, text: p.prompt })),
  sequencing: (): Block => ({ type: "ol", items: t.sequencingSetup }),
  tracker: (): Block[] => [
    { type: "callout", tone: "tyler", title: "The tracker rule", text: t.trackerRule },
    { type: "p", text: `Tracker columns: ${t.trackerColumns.join(" · ")}.` },
  ],

  callFramework: (): Block => ({
    type: "table",
    caption: "The call, minute by minute (20 minutes)",
    head: ["Stage", "Time", "What happens"],
    rows: t.callFramework.map((c) => [c.stage, c.time, c.what]),
  }),
  questionBank: (): Block[] => [
    { type: "checklist", title: "Their path", items: t.callQuestionBank.path },
    { type: "checklist", title: "The work", items: t.callQuestionBank.work },
    { type: "checklist", title: "The firm", items: t.callQuestionBank.firm },
    { type: "checklist", title: "Advice", items: t.callQuestionBank.advice },
  ],
  thankYou: (): Block => ({ type: "template", title: "Thank-you email (send 1–2 hours after the call)", text: t.thankYouTemplate }),
  callFailures: (): Block => ({ type: "ul", items: t.callFailureModes }),

  referralClose: (): Block[] => [
    { type: "callout", tone: "tyler", title: "The rule", text: t.referralClose.rule },
    { type: "ul", items: t.referralClose.lines.map((l) => `"${l}"`) },
    { type: "p", text: `If they say no: ${t.referralClose.ifNo}` },
    { type: "p", text: `If they say yes: ${t.referralClose.ifYes}` },
    { type: "template", title: "Forwardable blurb", text: t.referralClose.blurb },
  ],
  stayWarm: (): Block => ({
    type: "table",
    caption: "Staying warm",
    head: ["When", "What"],
    rows: t.referralClose.stayWarm.map((s) => [s.when, s.what]),
  }),

  selfQuestions: (): Block => ({ type: "ol", items: t.selfQuestions }),
  storyTemplate: (): Block => ({
    type: "table",
    caption: "The story template",
    head: ["Part", "What to write"],
    rows: t.storyTemplate.map((s) => [s.part, s.prompt]),
  }),
  behavioralQuestions: (): Block => ({ type: "ol", items: t.behavioralQuestions }),
  storyMap: (): Block[] => [
    { type: "p", text: t.storyMap.note },
    { type: "table", caption: "Story map: 8 stories × 10 questions", head: t.storyMap.head, rows: t.storyMap.rows },
  ],

  whyBuckets: (): Block => ({
    type: "table",
    caption: "The 3-bucket \"why\"",
    head: ["#", "Bucket", "What goes in it"],
    rows: t.whyBuckets.map((b) => [String(b.n), b.name, b.body]),
  }),
  whyWorksheet: (): Block => ({ type: "checklist", title: "The \"why\" worksheet", items: t.whyWorksheet }),
  whyExample: (): Block => ({ type: "callout", tone: "example", title: t.whyExample.label, text: t.whyExample.text }),

  technicals: (track: Track): Block[] => {
    const x = t.technicals[track];
    return [
      { type: "p", text: `Study order: ${x.studyOrder.join(" → ")}. ${x.method}` },
      { type: "ol", items: x.questions },
    ];
  },

  // All four tracks at once: one study-order table, then a question box per track.
  technicalsAll: (limit?: number): Block[] => {
    const all = Object.values(t.technicals);
    return [
      { type: "table", caption: "Study order by track", head: ["Track", "Study order", "How to practice"], rows: all.map((x) => [x.name, x.studyOrder.join(" → "), x.method]) },
      ...all.map((x): Block => ({ type: "checklist", title: `${x.name} questions`, items: x.questions.slice(0, limit ?? x.questions.length) })),
    ];
  },

  interviewFlow: (): Block => ({
    type: "table",
    caption: "A typical 30-minute first round",
    head: ["Part", "Time", "What they're checking"],
    rows: t.interviewFlow.map((i) => [i.part, i.time, i.note]),
  }),
  blankRecovery: (): Block => ({ type: "ol", items: t.blankRecovery }),
  questionsToAsk: (): Block => ({ type: "ul", items: t.questionsToAsk }),
  superday: (): Block => ({ type: "checklist", title: "Final rounds and superdays", items: t.superdayTips }),
  scorecard: (): Block[] => [
    { type: "p", text: t.interviewScorecard.scale },
    {
      type: "table",
      caption: "Interview scorecard",
      head: ["Area", "What a 5 looks like", "Score (1–5)"],
      rows: t.interviewScorecard.areas.map((a) => [a.area, a.looks, ""]),
    },
  ],

  externships: (): Block[] => [
    { type: "p", text: t.externships.what },
    { type: "checklist", title: "What counts", items: t.externships.counts },
    { type: "ul", items: t.externships.doesNot.map((d) => `Doesn't count: ${d}`) },
    { type: "h3", text: "How to get one" },
    { type: "ol", items: t.externships.how },
    { type: "table", caption: `Putting it on your resume (${t.externships.bullet.label})`, head: ["Before", "After"], rows: [[t.externships.bullet.before, t.externships.bullet.after]] },
  ],

  executionCalendar: (): Block[] => [
    { type: "p", text: t.weeklyMinimumLine },
    {
      type: "table",
      caption: "12-week execution calendar",
      head: ["Week", "Focus", "Emails (cumulative)", "Calls"],
      rows: t.executionCalendar.map((w) => [String(w.week), w.focus, w.emails, w.calls]),
    },
  ],

  gamePlan: (): Block[] => [
    { type: "p", text: t.gamePlan.intro },
    {
      type: "table",
      caption: "6-month game plan",
      head: ["", ...t.gamePlan.months],
      rows: t.gamePlan.fields.map((f) => [f, "", "", "", "", "", ""]),
    },
    { type: "checklist", title: "Monthly review (first of every month)", items: t.gamePlan.review },
  ],
};
