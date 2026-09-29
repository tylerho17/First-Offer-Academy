import { depositLine, site } from "./site";
import { afterProgram } from "./program";

const tba = (v: string, fallback = "To be announced.") => (v ? v : fallback);

// `video`: id from content/videoTestimonials.ts, embedded inside the answer.
export type Faq = { q: string; a: string; home?: boolean; parent?: boolean; video?: string; link?: { label: string; href: string } };

export const faqs: Faq[] = [
  {
    home: true,
    parent: true,
    q: "My student is a freshman. Isn't this too early?",
    a: "No. Many internship timelines start sophomore year. Freshman year is when a student builds the resume, the contacts, and the interview stories that get them there.",
  },
  {
    parent: true,
    q: "Why pay when the career center is free?",
    a: "Use it too. Career centers serve thousands of students. We work with your student every week: reviewing the resume, the emails, the stories, and the interviews, and holding them to a weekly number.",
  },
  {
    parent: true,
    q: "Is this right for my student?",
    a: "It fits a student who will do the work every week: the outreach, the calls, the reps. It doesn't fit a student who wants it done for them, and it isn't a fix for a student who doesn't want to be there. A parent of a pilot student explains who it isn't for:",
    video: "tom-not-for",
  },
  {
    home: true,
    parent: true,
    q: "What if they don't land an internship?",
    a: `We don't promise offers; nobody honest can. We promise a fully executed search: a weekly session and 1:1, feedback on every piece of work, and every email, call, and interview on record. ${afterProgram.full}`,
    link: { label: "What we promise, and what we don't", href: "/program#promise" },
  },
  {
    home: true,
    parent: true,
    q: "How much time does it take each week?",
    a: site.weeklyHours
      ? `Plan on ${site.weeklyHours} hours a week: the session, the 1:1, and outreach.`
      : "The weekly session is 90 minutes and the 1:1 is 60 minutes. Outreach time on top of that will be confirmed before the cohort starts.",
  },
  {
    q: "Is it online or in person?",
    a: tba(site.format, "Format and meeting times will be confirmed before applications close."),
  },
  {
    home: true,
    parent: true,
    q: "Is the deposit refundable?",
    a: `${tba(site.refundTerms, "Exact refund dates will be published before deposits open.")} ${site.withdrawalPolicy}`.trim(),
    link: { label: "Read the Refund & Payment Policy", href: "/refunds" },
  },
  {
    home: true,
    parent: true,
    q: "Is there financial aid?",
    a: `${site.scholarship} Apply as usual, and book a parent call to ask about it.`,
  },
  {
    q: "Are community college students welcome?",
    a: "Yes. The program is built for college freshmen and sophomores at any school, including community colleges.",
  },
  {
    q: "Which majors is this for?",
    a: "Any major. In Track Technicals, students pick one of three tracks: Finance, Consulting, or Marketing.",
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
    a: `The program is ${site.cohort.price}, or ${site.cohort.plan}. ${depositLine()}`,
    link: { label: "Read the Refund & Payment Policy", href: "/refunds" },
  },
  {
    parent: true,
    q: "What do parents see during the program?",
    a: "Through Accountability & Pods: a one-page progress report every two weeks, and a Week 8 family meeting where your student presents their results.",
  },
  {
    q: "What happens after Week 8?",
    a: "Students keep the system they built: the resume, the target list and tracker, the stories, and the interview prep. Details on continued support will be shared with the cohort.",
  },
];
