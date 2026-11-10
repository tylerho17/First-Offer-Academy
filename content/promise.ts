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
      { title: "A status email every Monday", body: "To parent and student: your student's numbers for the week and their offer-or-refund status." },
      { title: "The Week 8 family meeting", body: "Your student presents their results to you, including their Week 1 and Week 8 recorded introductions side by side." },
      { title: "The Offer Sprint, then weekly check-ins", body: "Weeks 9–12: technical and behavioral mocks, plus prep and debriefs for every networking call. After that, a 20-minute weekly check-in and a mock interview every other week until an internship offer or May 31, 2027, while your student keeps up 100 emails, 6–8 networking calls, and 25 applications a week." },
      { title: "Coached Extern applications, fee covered", body: "We coach the Extern externship application, the recorded video, and the live interview, and cover the Extern fee. Admission is Extern's decision, not ours." },
      { title: "Offer-or-refund", body: "If your student meets every weekly minimum through May 31, 2027 and receives no internship offer, we refund the full $5,000. An offer is any internship, paid or unpaid, offered in writing." },
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
      { title: "Hit the weekly minimums", body: "Weeks 1–3 build the foundation with no outreach minimums. From Week 4, each week has a number: outreach emails, networking calls, applications. About 8–12 hours a week from Week 7. The program only works if the work gets done." },
      { title: "Show up", body: "Attend every session, 1:1, and scheduled mock, check in with the pod every Sunday, turn in assignments by Sunday 11:59 pm Pacific, and attend every interview an employer schedules." },
      { title: "One makeup week", body: "Miss one week's minimums once and make them up the following week. A second miss ends offer-or-refund eligibility; coaching continues, and we schedule a reset call with the student and parent." },
    ],
  },
};
