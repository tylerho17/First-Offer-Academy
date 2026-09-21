import { site } from "../site";
import { legalContact, type LegalDoc } from "./types";

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  description: "The terms for using the First Offer Academy website and enrolling in the program.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  body: [
    { type: "h2", text: "The program" },
    { type: "p", text: "First Offer Academy provides coaching, instruction, and feedback for a student's internship search. We do not promise internship offers or any specific outcome." },
    { type: "h2", text: "Payment" },
    { type: "p", text: `Tuition is ${site.cohort.price}, or ${site.cohort.plan}. A ${site.cohort.deposit} refundable deposit holds a seat.` },
    { type: "h2", text: "Refunds" },
    { type: "p", text: site.refundTerms || "Refund terms will be published here before deposits open." },
  ],
};
