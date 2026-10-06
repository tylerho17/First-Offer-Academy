import { site } from "./site";

// The "You're in." page (/enrolled) and the deposit confirmation email share
// this copy, word for word.
export const enrolled = {
  held: `Your seat in the ${site.cohort.start} ${site.cohort.name.toLowerCase()} is held.`,
  steps: [
    "A confirmation email is on its way in the next few minutes. If it hasn't landed, check spam, then email us.",
    "Your winter break pre-work arrives within 2 business days: the resume template, the target list worksheet, and the Candidate Brand module. You start now, not in January.",
    "We'll send a link to book your first 1:1 in the first week of December.",
  ],
  // Paid in full (the $5,000 Payment Link): the email's opening lines.
  confirmed: `Your seat in the ${site.cohort.start} ${site.cohort.name.toLowerCase()} is confirmed.`,
  paidInFull: "The program is paid in full.",
  // Step 1 in the email itself (the email is the confirmation).
  emailStep1: "Keep this email; it's your confirmation. Stripe also sent a separate receipt.",
  refund: `Changed your mind? Your deposit is fully refundable until ${site.depositRefundDeadline} — just email us.`,
  terms: { label: "Read the enrollment terms →", href: "/terms" },
};
