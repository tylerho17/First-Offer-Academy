import { site } from "../site";
import { afterProgram, commitment, howCounted, minimumLines, offerOrRefund } from "../program";
import { legalContact, type LegalDoc } from "./types";

const c = site.cohort;
const t = site.tuition;
const [first, second] = t.payments;

export const refunds: LegalDoc = {
  slug: "refunds",
  title: "Refund & Payment Policy",
  description: "Tuition, the payment schedule, cancellation, late payments, offer-or-refund, and how refunds work at First Offer Academy.",
  effective: "2026-11-09",
  lastUpdated: "2026-11-09",
  contactEmail: legalContact,
  intro: `This page explains what the program costs, how to pay, and how refunds work. It's part of our [Terms of Service](/terms).`,
  body: [
    { type: "h2", text: "Tuition" },
    { type: "p", text: `Tuition for the ${c.name.toLowerCase()} (${c.start}) is ${t.total} and includes everything: Week 0 prep materials, sent ${c.week0}; the 12-week program, starting ${c.week1} (core teaching in Weeks 1–8, then the 4-week Offer Sprint of mock interviews and networking); after Week 12, a 20-minute weekly check-in and a mock interview every other week until an internship offer or ${afterProgram.until}, while the student keeps up ${afterProgram.maintenance}; and coached Extern externship applications with the Extern fee covered. There are no other required fees.` },

    { type: "h2", text: "Payment schedule" },
    { type: "ul", items: [
      `${t.deposit} deposit at enrollment, fully refundable through ${site.depositRefundDeadline}. It holds a seat and counts toward tuition.`,
      `${first.amount} due ${first.due}.`,
      `${second.amount} due ${second.due}.`,
      `Paid by Zelle request from ${t.zelleFrom}.`,
    ] },

    { type: "h2", text: "Late payments" },
    { type: "ul", items: [
      "7 days late: sessions, 1:1s, and check-ins pause until paid.",
      "14 days late: the student is removed, payments made are not refunded, and offer-or-refund ends.",
    ] },

    { type: "h2", text: "Cancellation and refunds" },
    { type: "ul", items: [
      `Before ${site.depositRefundDeadline}: full refund.`,
      "Before Week 3: prorated refund of unused weeks.",
      "After Week 3: no refund.",
      "If we cancel the cohort: every payment refunded in full.",
    ] },

    { type: "h2", text: "Offer-or-refund" },
    { type: "p", text: offerOrRefund.body },
    { type: "ul", items: offerOrRefund.terms },
    { type: "p", text: "Outside offer-or-refund and the rules above, not landing an internship offer is not by itself grounds for a refund. See [Our Promise](/program#promise) for what we commit to." },

    { type: "h2", text: "Weekly minimums" },
    { type: "p", text: `${commitment.foundation} ${commitment.hours}` },
    { type: "ul", items: [...minimumLines(), commitment.also] },

    { type: "h2", text: "How work is counted" },
    { type: "ul", items: howCounted },

    { type: "h2", text: "How to request a refund" },
    { type: "p", text: `Email ${t.zelleFrom} from the email address you used to apply, with the student's name and "Refund request" in the subject line. We'll confirm we received it within 2 business days. Offer-or-refund requests are due by June 15, 2027; approved refunds are paid within 30 days.` },

    { type: "h2", text: "Questions" },
    { type: "p", text: `Not sure how any of this applies to you? Email ${legalContact} or [book a call](${site.calendlyUrl}) before you pay.` },
  ],
};
