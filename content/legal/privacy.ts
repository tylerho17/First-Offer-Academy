import { site } from "../site";
import { legalContact, type LegalDoc } from "./types";

const who = site.legalEntityName ? `${site.name} (${site.legalEntityName})` : site.name;
const providers = site.serviceProviders.map((p) => `${p.name}: ${p.purpose}. [Privacy policy](${p.url})`);

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  description: "How First Offer Academy collects, uses, shares, and protects information from students and parents, and how to exercise your privacy rights.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  intro: `This policy explains what information ${site.name} collects, why, who we share it with, and the choices you have. We wrote it in plain English. If anything is unclear, email ${legalContact}.`,
  body: [
    { type: "h2", text: "Who we are" },
    { type: "p", text: `${who} runs a 12-week internship recruiting program for college students, based in ${site.city}. In this policy, "we", "us", and "our" mean ${site.name}. "You" means anyone who uses our website or program, including students and their parents or guardians.` },

    { type: "h2", text: "What we collect and why" },
    { type: "p", text: "We only collect what we need to run the program and answer your questions." },
    { type: "ul", items: [
      "Application form: the student's name, email, phone, school, year, major, track interests, GPA range, answers about their search so far, how they heard about us, and (optionally) a parent or guardian's name and email. We use this to evaluate the application and contact you about it.",
      "Contact form: first and last name, email, phone, whether you're a student, parent, or school, your message, and whether you agreed to receive text messages. We use this to reply to you and schedule a call.",
      "Newsletter form: first name, email, and whether you're a student, parent, or educator. We use this to send the newsletter.",
      "Story and referral forms: the details you choose to submit. Nothing from these forms is published without separate, written permission (see \"Student outcomes and testimonials\" below).",
      "Call bookings: when you book a call, Calendly collects your name, email, and the time you choose, and shares them with us. Calendly processes this under its own privacy policy.",
      "Payments: deposits and tuition are processed by Stripe. Stripe collects your card details directly. We never see or store full card numbers; we receive only a confirmation, the amount, and the name and email on the payment.",
      "Analytics: we use Vercel Analytics, which counts page views in aggregate without cookies and without identifying individual visitors.",
      "Program records: once a student enrolls, we keep their tracker (emails sent, calls, interviews), coach feedback, recorded practice answers, and progress level, because running the program depends on them.",
    ] },

    { type: "h2", text: "How we use information" },
    { type: "ul", items: [
      "To evaluate applications and schedule fit calls.",
      "To run the program: sessions, 1:1s, pods, feedback, and progress tracking.",
      "To send parent progress reports. These go only to the parent or guardian the student lists, and to no one else.",
      "To send program emails, confirmations, and (if you subscribed) the newsletter. Every marketing email includes an unsubscribe link.",
      "To send text messages, only if you checked the box agreeing to them. Reply STOP at any time to opt out.",
      "To keep the website secure and working.",
    ] },
    { type: "p", text: "We do not use student information for advertising, and we do not build profiles of you for anyone else." },

    { type: "h2", text: "Service providers we use" },
    { type: "p", text: "We share information with these companies only so they can provide a service to us, and only what they need to do it:" },
    { type: "ul", items: providers },
    { type: "p", text: "We may also disclose information if the law requires it, to protect someone's safety, or as part of a sale or transfer of the business (in which case this policy would continue to apply to your information)." },

    { type: "h2", text: "We do not sell or share your information" },
    { type: "p", text: "We do not sell personal information. We do not share personal information for cross-context behavioral advertising (targeted ads based on your activity across other websites). We have never done either, including for students under 16." },

    { type: "h2", text: "Your privacy rights" },
    { type: "p", text: "California residents have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act. We extend the same rights to everyone who uses our website or program, wherever they live:" },
    { type: "ul", items: [
      "Right to know: ask what personal information we have about you, where it came from, why we have it, and who we've shared it with.",
      "Right to delete: ask us to delete personal information we hold about you, subject to limited exceptions (for example, payment records we must keep for tax purposes).",
      "Right to correct: ask us to fix information that's inaccurate.",
      "Right to opt out of sale or sharing: we don't sell or share personal information, so there's nothing to opt out of, but you may still ask us to confirm this in writing.",
      "Right to limit use of sensitive information: we don't use sensitive personal information beyond what's needed to provide the program.",
      "Right to non-discrimination: using any of these rights will never affect a student's application, place in the program, or the price you pay.",
    ] },
    { type: "p", text: `To make a request, email ${legalContact} with the subject line "Privacy request". We'll confirm we received it within 10 business days and respond within 45 days. To protect you, we'll verify your identity by matching details we already have, usually your email address. A parent or guardian, or someone you authorize in writing, may make a request on your behalf.` },

    { type: "h2", text: "Student outcomes and testimonials" },
    { type: "p", text: "We never publish a student's or parent's name, quote, photo, video, results, or employer without written permission. Permission for a quote, for naming an employer, and for using a photo or video are asked for separately, and you can agree to one without the others." },
    { type: "p", text: `You can withdraw permission at any time by emailing ${legalContact}. We'll remove the content from our website within 10 business days. We can't recall copies others may have already saved or printed.` },

    { type: "h2", text: "Children and minors" },
    { type: "p", text: "Our program is for college students. We do not knowingly collect personal information from children under 13. If we learn we have, we will delete it. If a student applying is under 18, we ask for a parent or guardian's contact information, and we'll involve that parent or guardian in enrollment decisions." },

    { type: "h2", text: "How long we keep information" },
    { type: "ul", items: [
      "Applications that don't lead to enrollment: 2 years, then deleted.",
      "Contact form messages: 2 years, then deleted.",
      "Newsletter subscribers: until you unsubscribe.",
      "Enrolled students' program records: for the length of the program plus 2 years, so we can answer questions and provide references if asked.",
      "Payment records: as long as tax and accounting law requires.",
      "Testimonials and stories: for as long as permission stands.",
    ] },
    { type: "p", text: "You can ask us to delete information sooner at any time (see \"Your privacy rights\")." },

    { type: "h2", text: "Security" },
    { type: "p", text: "We use service providers with strong security practices, encrypted connections (HTTPS) across our website, and access controls so only the people who need information can see it. No system is perfectly secure, so if we ever learn of a breach that affects your information, we'll tell you as the law requires." },

    { type: "h2", text: "Do Not Track and Global Privacy Control" },
    { type: "p", text: "Some browsers send a \"Do Not Track\" signal. Because we don't track visitors across other websites, and our analytics don't use cookies or identify individuals, our website works the same way whether or not the signal is on. We also honor the Global Privacy Control signal as a request to opt out of sale or sharing, which we don't do in any case." },

    { type: "h2", text: "Users outside the United States" },
    { type: "p", text: "Our program serves students in Southern California, and our website and service providers are based in the United States. If you visit from elsewhere, your information will be processed in the United States." },

    { type: "h2", text: "Changes to this policy" },
    { type: "p", text: "If we change this policy, we'll update the \"Last updated\" date at the top of this page. If a change materially affects how we use information we already have, we'll email enrolled students and parents before it takes effect. This policy is effective as of the \"Last updated\" date." },

    { type: "h2", text: "Contact us" },
    { type: "p", text: `For privacy questions or requests, email ${legalContact}. ${who}, ${site.city}.` },
  ],
};
