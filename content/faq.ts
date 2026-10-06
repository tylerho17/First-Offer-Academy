import { founderInternships, PILOT_LANDED, PILOT_STUDENTS, site, spell } from "./site";
import { afterProgram, formatNote, offerOrRefund, oneOnOneFormat, sessionFormat } from "./program";
import { rhythmNotes, weeklyRhythm } from "./curriculum";
import { programOverview } from "./programOverview";
import { promise } from "./promise";
import type { VideoSpot } from "./videoTestimonials";

const tba = (v: string, fallback = "To be announced.") => (v ? v : fallback);

// `id`: anchor on /faq. `list`: bullet points rendered under the answer.
// `group`: the heading it sits under on /faq (faqGroups order).
// `video`: clips that directly answer the question, shown under the answer on
// /faq only (the FAQ lists on other pages stay text only).
export const faqGroups = ["Results and refunds", "Fit", "How it works", "Cost and alternatives"] as const;
export type FaqGroup = (typeof faqGroups)[number];
export type Faq = { q: string; a: string; group: FaqGroup; id?: string; list?: string[]; home?: boolean; parent?: boolean; video?: VideoSpot[]; link?: { label: string; href: string } };

// Consolidated 2026-10-04 from 23 questions to 17 in four groups. Merged
// answers keep every fact (refund terms, deposit, weeks, minimums); only
// duplicated sentences were trimmed.
export const faqs: Faq[] = [
  // Results and refunds
  {
    group: "Results and refunds",
    home: true,
    parent: true,
    id: "offer-or-refund",
    q: "What if my student doesn't land an offer?",
    a: `Check-ins and mocks continue through ${afterProgram.until}. If they've met every weekly minimum and still have no offer, you get a full $5,000 refund. Terms: ${offerOrRefund.terms}`,
  },
  {
    group: "Results and refunds",
    home: true,
    parent: true,
    q: "Do you place students?",
    a: "No. We coach students through every application, including Extern externships, and cover the Extern fee. The offer is earned by the student.",
  },
  {
    group: "Results and refunds",
    q: "What happens after Week 12?",
    a: `Weeks 9–12 are the Offer Sprint: technical and behavioral mocks, plus prep and debriefs for every networking call. ${afterProgram.full}`,
  },

  // Fit
  {
    group: "Fit",
    parent: true,
    id: "right-fit",
    q: "Is this right for my student?",
    video: ["faq-right-fit-1", "faq-right-fit-2"],
    // Merged: "Who is First Offer Academy for?" and "Which majors is this for?"
    a: `It fits a student who will do the work every week: the outreach, the calls, the reps. It doesn't fit a student who wants it done for them, and it isn't a fix for a student who doesn't want to be there. Any major. In Track Technicals, students pick one of three tracks: Finance, Marketing, or Accounting. ${programOverview.whoFor.title.replace(/…$/, ":")}`,
    list: [...programOverview.whoFor.pains.map((p) => `${p.title}: ${p.body}`), programOverview.whoFor.callout],
  },
  {
    group: "Fit",
    home: true,
    parent: true,
    id: "why-freshman-year",
    q: "My student is a freshman. Isn't this too early?",
    video: ["faq-too-early"],
    // Merged: "Why start in freshman year?"
    a: "No. Many internship timelines start sophomore year. Freshman year is when a student builds the resume, the contacts, and the interview stories that get them there.",
    list: programOverview.whyNow.paragraphs,
  },
  {
    group: "Fit",
    q: "Are community college students welcome?",
    a: "Yes. The program is built for college freshmen and sophomores at any school, including community colleges.",
  },
  {
    group: "Fit",
    q: "Does my student need to be in a club?",
    video: ["faq-club"],
    a: "No. The program is built to work whether or not a student gets into a selective campus club.",
  },
  {
    group: "Fit",
    parent: true,
    q: "My student is shy. Can they still do the networking?",
    a: "Yes. Networking here is a process, not a personality. It starts in writing, with emails their coach reviews, and every call follows a framework your student practices out loud in session and in the weekly 1:1 before the real thing.",
  },

  // How it works
  {
    group: "How it works",
    home: true,
    parent: true,
    id: "weekly-minimums",
    q: "What does my student commit to each week?",
    // Merged: "What are the weekly minimums?", "What do you ask of students?",
    // and "How much time does it take each week?"
    a: site.weeklyHours
      ? `Plan on ${site.weeklyHours} hours a week: the session, the 1:1, and outreach.`
      : `The weekly session is 90 minutes and the 1:1 is 60 minutes. ${
          site.outreachHours
            ? `Outreach on top of that: ${site.outreachHours}.`
            : "Outreach time on top of that will be confirmed before the cohort starts."
        }`,
    list: [
      offerOrRefund.minimums.training,
      offerOrRefund.minimums.sprint,
      offerOrRefund.minimums.after,
      offerOrRefund.minimums.makeup,
      // "Hit the weekly minimums" is covered by the four lines above.
      ...promise.weAsk.items.slice(1).map((i) => `${i.title}: ${i.body}`),
    ],
  },
  {
    group: "How it works",
    parent: true,
    id: "typical-week",
    q: "What does a typical week look like?",
    a: `A group session, a 1:1, and a pod of three. ${formatNote}`,
    list: [
      `The session: ${sessionFormat.map((r) => `${r.block} (${r.time}): ${r.what}`).join(" ")}`,
      `The 1:1: ${oneOnOneFormat.map((r) => `${r.block} (${r.time}): ${r.what}`).join(" ")}`,
      ...weeklyRhythm.slice(2).map((r) => `${r.name}: ${r.body}`),
      ...rhythmNotes,
    ],
  },
  {
    group: "How it works",
    q: "Is it online or in person?",
    a: site.format ? `${site.format}.` : "Format and meeting times will be confirmed before applications close.",
  },
  {
    group: "How it works",
    parent: true,
    q: "What do parents see during the program?",
    a: "Through Accountability & Pods: a one-page progress report every two weeks, and a Week 8 family meeting where your student presents their results.",
  },
  {
    group: "How it works",
    parent: true,
    q: "Who coaches the program?",
    a: "Tyler Ho, the founder, leads the founding cohort. Guest professionals run the last graded mocks in Interview Reps.",
  },
  // Drafted 2026-09-30 from facts elsewhere on the site (programOverview,
  // Founder, site.ts). TODO(Tyler): review the wording of this answer and the ChatGPT one below.
  {
    group: "How it works",
    parent: true,
    id: "recent-recruit",
    q: "Why learn from someone who just went through recruiting?",
    video: ["faq-coach"],
    a: `Because the timelines, emails, and interviews Tyler coaches are ones he ran himself, recently: ${founderInternships() ? `${founderInternships()}, and ` : ""}an incoming investment banking offer. In college he led finance recruiting education and coached ${spell(PILOT_STUDENTS)} pilot students: ${PILOT_LANDED} of ${PILOT_STUDENTS} landed an internship or offer.`,
  },

  // Cost and alternatives. "Is there a payment plan?" was removed: there is
  // no payment plan, only pay in full or the deposit plus the balance.
  {
    group: "Cost and alternatives",
    home: true,
    parent: true,
    q: "Is the deposit refundable?",
    a: `${tba(site.refundTerms, "Exact refund dates will be published before deposits open.")} ${site.withdrawalPolicy}`.trim(),
    link: { label: "Read the Refund & Payment Policy", href: "/refunds" },
  },
  {
    group: "Cost and alternatives",
    parent: true,
    q: "Why pay when the career center is free?",
    video: ["faq-career-center"],
    a: "Use it too. Career centers serve thousands of students. We work with your student every week: reviewing the resume, the emails, the stories, and the interviews, and holding them to a weekly number.",
  },
  {
    group: "Cost and alternatives",
    parent: true,
    q: "Can't my student just use ChatGPT for this?",
    video: ["faq-ai"],
    a: "AI is part of the system, not a replacement for it. In Week 2 every student sets up their own AI-assisted email automation, but AI drafts; your student personalizes and reads every email before it goes, and their coach reviews the emails in the weekly 1:1. AI can't take the networking call, tell your student's story, or sit the interview for them.",
  },
];
