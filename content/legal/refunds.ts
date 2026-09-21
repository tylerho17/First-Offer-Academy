import { site } from "../site";
import { legalContact, type LegalDoc } from "./types";

const c = site.cohort;
const pending = "Exact terms will be published here before deposits open, and they'll be in writing before you pay anything.";

export const refunds: LegalDoc = {
  slug: "refunds",
  title: "Refund & Payment Policy",
  description: "Tuition, the payment plan, the refundable deposit, and how refunds and withdrawals work at First Offer Academy.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  intro: `This page explains what the program costs, how to pay, and how refunds work. It's part of our [Terms of Service](/terms).`,
  body: [
    { type: "h2", text: "Tuition" },
    { type: "p", text: `Tuition for the ${c.name.toLowerCase()} (${c.start}) is ${c.price}. It covers the full 12-week program: every session, 1:1, mock interview, parent report, and the Week 12 family meeting. There are no other required fees.` },

    { type: "h2", text: "Ways to pay" },
    { type: "ul", items: [
      `Pay in full: ${c.price}, before the cohort starts.`,
      `Payment plan: ${c.plan}. The plan totals more than paying in full because it spreads payments across the program.`,
      "All payments are processed securely by Stripe. We never see or store your card number.",
    ] },

    { type: "h2", text: "The refundable deposit" },
    { type: "p", text: `A ${c.deposit} deposit holds a seat in the cohort. It counts toward tuition; it is not an extra fee.` },
    { type: "p", text: site.depositRefundDeadline
      ? `The deposit is fully refundable if you ask for a refund by ${site.depositRefundDeadline}.`
      : `The deposit is refundable. The deadline for a full deposit refund: ${pending}` },
    ...(site.refundTerms ? [{ type: "p" as const, text: site.refundTerms }] : []),

    { type: "h2", text: "Missed payments" },
    { type: "p", text: "If a payment-plan charge fails or is missed, we'll email you and give you time to update your payment method. We'd much rather work out a plan than remove a student, so please reply and tell us what's going on. A student's access to sessions may be paused if a payment remains unresolved after we've been in touch." },

    { type: "h2", text: "Withdrawing during the program" },
    { type: "p", text: site.withdrawalPolicy || `If a student needs to leave the program after it starts, email us and we'll talk it through. How much, if anything, is refunded after the program starts: ${pending}` },
    { type: "p", text: "Not landing an internship offer is not by itself grounds for a refund, because we don't promise one. See [Our Promise](/our-promise) for what we do commit to." },

    { type: "h2", text: "If we cancel or change the cohort" },
    { type: "p", text: "If we cancel the cohort before it starts, you get a full refund of everything you've paid, including the deposit. If we change the start date or format in a way that doesn't work for you, you may withdraw for a full refund before the program starts." },

    { type: "h2", text: "How to request a refund" },
    { type: "p", text: `Email ${legalContact} from the email address you used to apply, with the student's name and "Refund request" in the subject line. We'll confirm we received it within 2 business days. Approved refunds go back to the original payment method through Stripe; your bank may take 5–10 business days to show it.` },

    { type: "h2", text: "Questions" },
    { type: "p", text: `Not sure how any of this applies to you? Email ${legalContact} or [book a call](${site.calendlyUrl}) before you pay.` },
  ],
};
