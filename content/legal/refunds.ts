import { site } from "../site";
import { afterProgram, offerOrRefund } from "../program";
import { legalContact, type LegalDoc } from "./types";

const c = site.cohort;
const pending = "Exact terms will be published here before deposits open, and they'll be in writing before you pay anything.";

export const refunds: LegalDoc = {
  slug: "refunds",
  title: "Refund & Payment Policy",
  description: "Tuition, the deposit and balance, offer-or-refund, and how refunds and withdrawals work at First Offer Academy.",
  lastUpdated: "2026-09-30",
  contactEmail: legalContact,
  intro: `This page explains what the program costs, how to pay, and how refunds work. It's part of our [Terms of Service](/terms).`,
  body: [
    { type: "h2", text: "Tuition" },
    { type: "p", text: `Tuition for the ${c.name.toLowerCase()} (${c.start}) is ${c.price}, everything included: Week 0 pre-work, the 8-week training, the 4-week Offer Sprint, weekly check-ins and mock interviews until an offer or ${afterProgram.until}, and coached Extern externship applications with the Extern fee covered. There are no other required fees.` },

    { type: "h2", text: "Ways to pay" },
    { type: "ul", items: [
      `Pay in full: ${c.price}, before Week 1.`,
      `Or reserve a seat with the ${c.deposit} deposit, then pay the ${c.balance} balance before Week 1. Those are the only two ways to pay.`,
      "All payments are processed securely by Stripe. We never see or store your card number.",
    ] },

    { type: "h2", text: "The deposit" },
    { type: "p", text: `A ${c.deposit} deposit holds a seat in the cohort. It counts toward tuition; it is not an extra fee.` },
    { type: "p", text: site.refundTerms || `The deposit is refundable. The deadline for a full deposit refund: ${pending}` },
    { type: "p", text: "If the fit call shows the program isn't a fit, we refund the deposit in full, whatever the date." },
    { type: "p", text: `The ${c.balance} balance is due before Week 1. We email your balance link; it isn't posted on the site.` },

    { type: "h2", text: "Missed payments" },
    { type: "p", text: "If the balance payment fails or is late, we'll email you and give you time to update your payment method. Please reply and tell us what's going on. A student's access to sessions may be paused if a payment remains unresolved after we've been in touch." },

    { type: "h2", text: "Withdrawing during the program" },
    { type: "p", text: site.withdrawalPolicy || `If a student needs to leave the program after it starts, email us and we'll talk it through. How much, if anything, is refunded after the program starts: ${pending}` },

    { type: "h2", text: "Offer-or-refund" },
    { type: "p", text: offerOrRefund.body },
    { type: "p", text: `Terms: ${offerOrRefund.terms}` },
    { type: "p", text: `The weekly minimums. ${offerOrRefund.minimums.training} ${offerOrRefund.minimums.after} ${offerOrRefund.minimums.makeup}` },
    { type: "p", text: "Outside offer-or-refund and the rules above, not landing an internship offer is not by itself grounds for a refund. See [Our Promise](/program#promise) for what we commit to." },

    { type: "h2", text: "If we cancel or change the cohort" },
    { type: "p", text: "If we cancel the cohort, you get a full refund of every payment you've made, including the deposit. If we change the start date or format before the program starts in a way that doesn't work for you, you may withdraw for a full refund." },

    { type: "h2", text: "How to request a refund" },
    { type: "p", text: `Email ${legalContact} from the email address you used to apply, with the student's name and "Refund request" in the subject line. We'll confirm we received it within 2 business days. Approved refunds go back to the original payment method through Stripe; your bank may take 5–10 business days to show it.` },

    { type: "h2", text: "Questions" },
    { type: "p", text: `Not sure how any of this applies to you? Email ${legalContact} or [book a call](${site.calendlyUrl}) before you pay.` },
  ],
};
