import { afterProgram } from "./program";

// /parents: the page for the people paying. Built from content/program.ts,
// content/site.ts, and content/promise.ts. No new claims.

export const parentsPage = {
  eyebrow: "For parents",
  title: "What you're paying for, and what you'll see.",
  lede: "First Offer Academy is for business freshmen and sophomores: built for finance and accounting recruiting, with an outreach and interview system that works for any business role. You won't be in the sessions, so you deserve a clear picture of what your student does each week, what you'll get to see, and what we will and won't promise.",

  weekly: {
    title: "What your student does every week",
    note: "Each week also has a number to hit: emails sent, calls completed, stories recorded. Students log it in their tracker, and their coach checks it.",
  },

  youSee: {
    title: "What you see",
    items: [
      { title: "A progress report every two weeks", body: "One page: your student's level on the Standard, their numbers (emails, calls, interviews), and what they're working on next. It goes only to the parent or guardian your student lists." },
      { title: "The Week 8 family meeting", body: "Your student presents their results to you: every email, call, and interview on record, plus their Week 1 and Week 8 recorded introductions side by side." },
      { title: "Check-ins after Week 12", body: afterProgram.full },
      { title: "A call if things slip", body: "If your student misses their weekly minimums two weeks in a row, we set up a call with your student and you to reset the plan." },
    ],
  },

  timing: {
    title: "The timing",
    body: "The program ends before spring recruiting opens, not during it.",
  },

  externship: {
    title: "Extern applications, fee covered.",
    body: "Every student applies to Extern externships — remote projects with real companies — with our coaching on the written application, the recorded video, and the live interview. We cover the Extern fee. These are competitive and admission is Extern's decision, but a student who lands one finishes with real company work on their resume before their first internship interview.",
  },

  dont: {
    title: "What we don't promise",
    body: "We don't promise an internship offer, a specific employer, or any particular outcome. Hiring decisions belong to employers, and anyone who promises an offer is promising something they can't control. We promise a fully executed search: the sessions, the 1:1s, feedback on every piece of work, and a documented record graded against a clear standard. And offer-or-refund: if your student hits every weekly minimum through May 31, 2027 and gets no internship offer, we refund the full $5,000.",
  },
};
