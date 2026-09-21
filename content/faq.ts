import { site } from "./site";

const tba = (v: string, fallback = "To be announced.") => (v ? v : fallback);

export type Faq = { q: string; a: string; home?: boolean; parent?: boolean; link?: { label: string; href: string } };

export const faqs: Faq[] = [
  {
    home: true,
    parent: true,
    q: "My student is a freshman. Isn't this too early?",
    a: "No. Many internship timelines start sophomore year. Freshman year is when you build the Candidate Brand, the Outreach System, and the Story Bank that get you there.",
  },
  {
    home: true,
    parent: true,
    q: "Why pay when the career center is free?",
    a: "Use it too. Career centers serve thousands of students. We run all six parts with your student every week: Candidate Brand, Outreach System, Story Bank, Track Technicals, Interview Reps, and Accountability & Pods.",
  },
  {
    home: true,
    parent: true,
    q: "What if they don't land an internship?",
    a: "We don't promise offers; nobody honest can. We promise the six parts, fully run: Candidate Brand, Outreach System, Story Bank, Track Technicals, Interview Reps, and Accountability & Pods, with every email, call, and interview on record.",
  },
  {
    home: true,
    parent: true,
    q: "How much time does it take each week?",
    a: site.weeklyHours
      ? `Plan on ${site.weeklyHours} hours a week: the session, the Interview Reps 1:1, and the Outreach System.`
      : "The weekly session is 90 minutes and the Interview Reps 1:1 is 60 minutes. Outreach System time on top of that will be confirmed before the cohort starts.",
  },
  {
    home: true,
    q: "Is it online or in person?",
    a: tba(site.format, "Format and meeting times will be confirmed before applications close."),
  },
  {
    home: true,
    parent: true,
    q: "Is the deposit refundable?",
    a: `Yes. A ${site.cohort.deposit} refundable deposit holds a seat. ${tba(site.refundTerms, "Exact refund dates will be published before deposits open.")}`,
    link: { label: "Read the Refund & Payment Policy", href: "/refunds" },
  },
  {
    q: "Are community college students welcome?",
    a: "Yes. The program is built for college freshmen and sophomores at any school, including community colleges.",
  },
  {
    q: "Which majors is this for?",
    a: "Any major. In Track Technicals, students pick one of four tracks: Finance, Consulting, Marketing, or Tech (software, data, product).",
  },
  {
    q: "Does my student need to be in a club?",
    a: "No. The program is built to work whether or not a student gets into a selective campus club.",
  },
  {
    parent: true,
    q: "Who coaches the program?",
    a: "Tyler Ho, the founder, leads the founding cohort. Guest professionals run the last graded mocks in Interview Reps.",
  },
  {
    parent: true,
    q: "How does the payment plan work?",
    a: `The program is ${site.cohort.price}, or ${site.cohort.plan}. A ${site.cohort.deposit} refundable deposit holds a seat.`,
    link: { label: "Read the Refund & Payment Policy", href: "/refunds" },
  },
  {
    parent: true,
    q: "What do parents see during the program?",
    a: "Through Accountability & Pods: a one-page progress report every two weeks, and a Week 12 family meeting where your student presents their results.",
  },
  {
    q: "What happens after Week 12?",
    a: "Students leave with the six parts: Candidate Brand, Outreach System, Story Bank, Track Technicals, Interview Reps, and Accountability & Pods, and keep using them. Details on continued support will be shared with the cohort.",
  },
];
