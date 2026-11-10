import { site, tuitionLine } from "../site";
import { legalContact, type LegalDoc } from "./types";

const who = site.legalEntityName || site.name;

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  description: "The terms for using the First Offer Academy website and enrolling in the program, including what we do and don't promise.",
  effective: "2026-10-05",
  lastUpdated: "2026-11-09",
  contactEmail: legalContact,
  intro: `These terms apply to the ${site.name} website and program. By using the website, applying, or enrolling, you agree to them. If a student is under 18, a parent or guardian must agree on their behalf.`,
  body: [
    { type: "h2", text: "Who we are" },
    { type: "p", text: `${who}${site.legalEntityName ? "," : ""} runs an internship coaching program for college students. "We", "us", and "our" mean ${site.name}. "Student" means the person enrolled in the program. "You" means the student and, where one is involved, the parent or guardian who enrolls or pays for them.` },

    { type: "h2", text: "Eligibility" },
    { type: "ul", items: [
      "The program is for college students, typically in their first or second year, including community college students.",
      "Enrollment is by application. We may decline an application if we don't think the program is a good fit, and we'll say so plainly.",
      "Students under 18 need a parent or guardian to agree to these terms and to be listed as a contact.",
    ] },

    { type: "h2", text: "What the program is" },
    { type: "p", text: "The program is coaching and instruction for a student's internship search. It runs 12 weeks. Weeks 1–8 are core teaching: eight weekly 90-minute group sessions, eight weekly 60-minute 1:1s, an accountability pod, feedback on the student's work, graded mock interviews, a status email to parent and student every Monday, and a Week 8 family meeting. Weeks 9–12 are the Offer Sprint: technical and behavioral mock interviews and networking. After Week 12, until the student receives an internship offer (paid or unpaid) or May 31, 2027, whichever comes first, the student gets a 20-minute weekly check-in and a mock interview every other week, as long as they keep up the weekly minimum of 100 emails, 6–8 networking calls, and 25 applications. Week 0 prep materials are sent January 1, 2027, and Week 1 starts Monday, January 4, 2027. Times and format are shared before the cohort starts." },
    { type: "p", text: "We may adjust session content, order, or coaches to improve the program. If we need to change a scheduled session, we'll give as much notice as we can and offer a make-up or recording." },

    { type: "h2", text: "No promise of outcomes" },
    { type: "p", text: "We do not promise internship offers or any specific outcome. We don't promise an internship at any particular company, in any particular role, at any particular pay, or by any particular date. Hiring decisions belong to employers, and they depend on things no one outside the employer controls." },
    { type: "p", text: "What we do commit to is described on our [Our Promise](/program#promise) page: the sessions, 1:1s, feedback, documented search, Monday status emails, the Week 8 meeting, the Offer Sprint, and after Week 12 a 20-minute weekly check-in and a mock interview every other week until an offer or May 31, 2027." },
    { type: "p", text: "The one exception to \"no promise of outcomes\" is offer-or-refund: if a student meets every weekly minimum through May 31, 2027 and receives no internship offer, we refund the full $5,000. The exact terms are in our [Refund & Payment Policy](/refunds)." },

    { type: "h2", text: "Student responsibilities" },
    { type: "ul", items: [
      "Attend every session, 1:1, and scheduled mock, and every interview an employer schedules.",
      "Meet the weekly minimums (outreach emails, networking calls, applications) from Week 4, counted as set out in the [Refund & Payment Policy](/refunds#how-work-is-counted).",
      "Turn in assignments by Sunday 11:59 pm Pacific, and check in with your pod every Sunday.",
      "One makeup week: the student may miss one week's minimums once and make them up the following week. A second miss ends offer-or-refund eligibility; coaching continues, and we schedule a reset call with the student and parent.",
    ] },
    { type: "p", text: "The program's results depend heavily on the student's own effort. A student who doesn't do the work won't get the benefit of it, and that isn't grounds for a refund beyond what the [Refund & Payment Policy](/refunds) provides." },

    { type: "h2", text: "Code of conduct" },
    { type: "p", text: "Students must follow our [Code of Conduct](/code-of-conduct): respect for everyone in the program, honesty and professionalism in outreach, and never misrepresenting themselves to professionals. Serious or repeated violations can lead to removal from the program, as described there." },

    { type: "h2", text: "Payment and refunds" },
    { type: "p", text: `Tuition includes everything. ${tuitionLine()} Deadlines, late payments, cancellation, and refunds are covered in our [Refund & Payment Policy](/refunds), which is part of these terms.` },

    { type: "h2", text: "Intellectual property" },
    { type: "p", text: "Our curriculum, templates, rubrics, trackers, recordings of sessions, and website content belong to us. Enrolled students get a personal, non-transferable license to use them for their own internship search, during and after the program." },
    { type: "p", text: "Please don't copy, share, resell, or publish our materials, or use them to teach others, without written permission. The work students create (their resume, emails, and stories) belongs to them." },

    { type: "h2", text: "Testimonials and consent" },
    { type: "p", text: "We never publish a student's or parent's name, quote, photo, video, results, or employer without separate written permission for each. Declining won't affect a student's place in the program in any way. You can withdraw permission at any time by emailing us, and we'll remove the content from our website within 10 business days. See our [Privacy Policy](/privacy) for details." },

    { type: "h2", text: "Recordings" },
    { type: "p", text: "Students record practice answers (like their 60-second introduction) and mock interviews as part of the program. These recordings are used for feedback and shown at the Week 8 family meeting. They are not published anywhere without separate written permission." },

    { type: "h2", text: "Using our website" },
    { type: "p", text: "Don't misuse the website: no attempts to break it, scrape it at scale, or submit false information through its forms. Free guides and articles on the website are general information, not personalized advice." },

    { type: "h2", text: "Disclaimers" },
    { type: "p", text: "The program and website are provided as described in these terms and on our website. To the extent the law allows, we make no other promises or warranties, express or implied, including about any hiring outcome." },

    { type: "h2", text: "Limitation of liability" },
    { type: "p", text: "To the extent the law allows, we aren't liable for indirect, incidental, or consequential losses, including lost job opportunities or lost earnings. Our total liability for any claim relating to the program is limited to the amount you paid us for it. Nothing in these terms limits liability that can't be limited under California law." },

    { type: "h2", text: "Governing law and disputes" },
    { type: "p", text: `These terms are governed by the laws of the State of California. If there's a problem, please email ${legalContact} first; most issues can be resolved with a conversation. Any legal dispute that can't be resolved informally will be handled in the state or federal courts in California.` },

    { type: "h2", text: "Changes to these terms" },
    { type: "p", text: "We may update these terms. We'll change the \"Last updated\" date at the top of this page, and we'll email enrolled students and parents about material changes. Changes won't apply retroactively to a cohort already in progress unless you agree." },

    { type: "h2", text: "Contact" },
    { type: "p", text: `Questions about these terms? Email ${legalContact}.` },
  ],
};
