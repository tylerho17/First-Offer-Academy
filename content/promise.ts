// /our-promise: what the program commits to, what it doesn't, and what it
// asks of students. Keep this consistent with /terms and /refunds.

export const promise = {
  eyebrow: "Our promise",
  title: "What we promise, and what we don't.",
  lede: "You're trusting us with your student's time and your money. Here is exactly what that buys, stated plainly.",

  weDo: {
    title: "What we promise",
    items: [
      { title: "A weekly group session", body: "Twelve 90-minute sessions: the scoreboard, one skill taught, live reps, and a clear commitment for the week." },
      { title: "A weekly 1:1", body: "Twelve 15-minute 1:1s where your student's coach reviews the tracker and fixes the single biggest bottleneck." },
      { title: "Feedback on every piece of work", body: "Resume, outreach emails, behavioral stories, and interviews. Nothing your student submits goes unreviewed." },
      { title: "A documented search, graded against the Standard", body: "Every email, call, and interview is logged. Your student's level on the Standard moves on evidence, not on how the week felt." },
      { title: "Parent progress reports", body: "A one-page report every two weeks showing your student's level and numbers." },
      { title: "The Week 12 family meeting", body: "Your student presents their results to you, including their Week 1 and Week 12 recorded introductions side by side." },
    ],
  },

  weDont: {
    title: "What we don't promise",
    items: [
      "An internship offer.",
      "An internship at any specific company, or in any specific role.",
      "Any particular outcome, salary, or timeline.",
    ],
    why: "Hiring decisions belong to employers. They depend on each firm's needs that season, on the other candidates, and on how an interview goes on the day. Nobody outside the company controls those, and anyone who promises an offer is promising something they can't deliver. What we can control is the quality and volume of your student's search, and we commit to that fully.",
  },

  weAsk: {
    title: "What we ask of students",
    items: [
      { title: "Hit the weekly minimums", body: "Each week has a number: emails sent, calls completed, stories recorded. The program only works if the work gets done." },
      { title: "Show up", body: "Attend the weekly session and the 1:1, and check in with the pod every Sunday." },
      { title: "Two missed weeks in a row triggers a call", body: "If a student misses their minimums two weeks in a row, we set up a call with the student and a parent to reset the plan together." },
    ],
  },
};
