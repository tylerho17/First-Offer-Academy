import { legalContact, type LegalDoc } from "./types";

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  description: "How First Offer Academy collects, uses, and protects information from students and parents.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  body: [
    { type: "h2", text: "What we collect" },
    { type: "p", text: "First Offer Academy collects the information you submit through our application and contact forms (such as name, email, phone, school, and your answers) to evaluate applications and communicate with you about the program." },
    { type: "h2", text: "Sharing" },
    { type: "p", text: "We do not sell your information. We share it only with service providers that help us run the program (for example, scheduling and payment tools), and only as needed." },
    { type: "h2", text: "Your requests" },
    { type: "p", text: `To request access to or deletion of your information, email ${legalContact}.` },
  ],
};
