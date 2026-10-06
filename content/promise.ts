// /program#promise: what the program commits to, what it doesn't, and what it
// asks of students. Keep this consistent with /terms and /refunds.

export const promise = {
  eyebrow: "Our promise",
  title: "What we promise, and what we don't.",
  lede: "You're trusting us with your student's time and your money. Here is exactly what that buys, stated plainly.",

  weDo: {
    title: "What we promise",
    items: [
      { title: "A weekly group session", body: "Eight 90-minute sessions: the scoreboard, one skill taught, live reps, and a clear commitment for the week." },
      { title: "A weekly 1:1", body: "Eight 60-minute 1:1s: a line-by-line tracker review, the single biggest bottleneck fixed, live edits on real work, and exact commitments for the next 7 days." },
      { title: "Feedback on every piece of work", body: "Resume, outreach emails, behavioral stories, and interviews. Nothing your student submits goes unreviewed." },
      { title: "A documented search, graded against the Standard", body: "Every email, call, and interview is logged. Your student's level on the Standard moves on evidence, not on how the week felt." },
      { title: "Parent progress reports", body: "A one-page report every two weeks showing your student's level and numbers." },
      { title: "The Week 8 family meeting", body: "Your student presents their results to you, including their Week 1 and Week 8 recorded introductions side by side." },
      { title: "The Offer Sprint, then weekly check-ins", body: "Weeks 9–12: technical and behavioral mocks, plus prep and debriefs for every networking call. After that, a 20-minute weekly check-in and a mock interview every other week until an internship offer or May 31, 2027, while your student keeps up 100 outreach emails and 6–8 networking calls a week." },
      { title: "Coached Extern applications, fee covered", body: "We coach the Extern externship application, the recorded video, and the live interview, and cover the Extern fee. Admission is Extern's decision, not ours." },
      { title: "Offer-or-refund", body: "If your student hits every weekly minimum through May 31, 2027 and doesn't receive an internship offer, paid or unpaid, we refund the full $5,000." },
    ],
  },

  weDont: {
    title: "What we don't promise",
    items: [
      "An internship offer.",
      "An internship at any specific company, or in any specific role.",
      "Any particular outcome, salary, or timeline.",
    ],
    why: "Hiring decisions belong to employers. They depend on each firm's needs that season, on the other candidates, and on how an interview goes on the day. Nobody outside the company controls those, and anyone who promises an offer is promising something they can't deliver. What we can control is the quality and volume of your student's search, and we commit to that fully, backed by offer-or-refund.",
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
