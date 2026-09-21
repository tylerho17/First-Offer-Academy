import { site } from "./site";

const tba = (v: string, fallback = "To be announced.") => (v ? v : fallback);

export type Faq = { q: string; a: string; home?: boolean };

export const faqs: Faq[] = [
  {
    home: true,
    q: "My student is a freshman. Isn't this too early?",
    a: "No. Many internship timelines start sophomore year. Freshman year is when you build the resume, the network, and the stories that get you there.",
  },
  {
    home: true,
    q: "Why pay when the career center is free?",
    a: "Use it too. Career centers serve thousands of students. We run your search with you every week: your emails, your calls, your interviews.",
  },
  {
    home: true,
    q: "What if they don't land an internship?",
    a: "We don't promise offers; nobody honest can. We promise a fully executed search with a documented record of every step, graded against a clear standard.",
  },
  {
    home: true,
    q: "How much time does it take each week?",
    a: site.weeklyHours
      ? `Plan on ${site.weeklyHours} hours a week: the session, the 1:1, and outreach.`
      : "The weekly session is 90 minutes and the 1:1 is 15 minutes. Outreach time on top of that will be confirmed before the cohort starts.",
  },
  {
    home: true,
    q: "Is it online or in person?",
    a: tba(site.format, "Format and meeting times will be confirmed before applications close."),
  },
  {
    home: true,
    q: "Is the deposit refundable?",
    a: `Yes. A ${site.cohort.deposit} refundable deposit holds a seat. ${tba(site.refundTerms, "Exact refund dates will be published before deposits open.")}`,
  },
  {
    q: "Are community college students welcome?",
    a: "Yes. The program is built for first- and second-year students at any Orange County college, including community colleges.",
  },
  {
    q: "Which majors is this for?",
    a: "Any major. Students pick one of four tracks: Finance, Consulting, Marketing, or Tech (software, data, product).",
  },
  {
    q: "Does my student need to be in a club?",
    a: "No. The program is built to work whether or not a student gets into a selective campus club.",
  },
  {
    q: "Who coaches the program?",
    a: "Tyler Ho, the founder, leads the founding cohort. Guest professionals join for mock interviews.",
  },
  {
    q: "How does the payment plan work?",
    a: `The program is ${site.cohort.price}, or ${site.cohort.plan}. A ${site.cohort.deposit} refundable deposit holds a seat.`,
  },
  {
    q: "What do parents see during the program?",
    a: "A one-page progress report every two weeks, and a Week 12 family meeting where your student presents their results.",
  },
  {
    q: "What happens after Week 12?",
    a: "Students leave with a documented search, a network, and interview practice they keep using. Details on continued support will be shared with the cohort.",
  },
];
