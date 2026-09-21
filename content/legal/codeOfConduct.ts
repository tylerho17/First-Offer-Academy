import { legalContact, type LegalDoc } from "./types";

export const codeOfConduct: LegalDoc = {
  slug: "code-of-conduct",
  title: "Code of Conduct",
  description: "How First Offer Academy students treat each other, the professionals they contact, and the program.",
  lastUpdated: "2026-09-21",
  contactEmail: legalContact,
  intro: "Recruiting runs on trust. Professionals take calls from students because they expect honesty and respect. This code keeps that trust intact for every student in the program, including the ones who come after you.",
  body: [
    { type: "h2", text: "Respect" },
    { type: "ul", items: [
      "Treat classmates, pod members, coaches, and guest interviewers with respect. No harassment, discrimination, or bullying, in sessions or online.",
      "Keep what classmates share in sessions and pods (their struggles, their numbers, their stories) private.",
      "Give feedback the way you'd want to receive it: specific, honest, and kind.",
    ] },
    { type: "h2", text: "Professionalism in outreach" },
    { type: "ul", items: [
      "Never misrepresent yourself to a professional. Don't claim a title, club membership, school, grade, internship, or connection you don't have.",
      "Don't say someone referred you unless they did.",
      "Don't send mass, copy-paste emails that pretend to be personal. Every email should be written for the person receiving it.",
      "Show up to every call you schedule, on time. If you must cancel, give as much notice as you can and apologize.",
      "Send a thank-you within two hours of every call.",
      "Never share a professional's contact details or what they told you in confidence.",
    ] },
    { type: "h2", text: "Attendance and effort" },
    { type: "ul", items: [
      "Attend the weekly session and your 1:1. If you can't, tell your coach ahead of time.",
      "Hit your weekly minimums and log them honestly. A tracker with made-up numbers helps no one.",
      "Check in with your pod every Sunday.",
    ] },
    { type: "h2", text: "Honesty" },
    { type: "ul", items: [
      "Your resume, stories, and interview answers must be true.",
      "Don't share program materials, templates, or recordings outside the program.",
    ] },
    { type: "h2", text: "Consequences" },
    { type: "p", text: "Most problems get solved with a conversation. How we respond depends on what happened:" },
    { type: "ul", items: [
      "First, a private conversation with your coach about what happened and how to fix it.",
      "Missing minimums two weeks in a row leads to a call with the student and a parent to reset the plan.",
      "Serious or repeated violations (harassment, lying to professionals, or sharing others' private information) can lead to removal from the program. Refunds in that case follow our [Refund & Payment Policy](/refunds).",
    ] },
    { type: "h2", text: "Reporting a concern" },
    { type: "p", text: `If someone in the program makes you uncomfortable, or you see something that breaks this code, email ${legalContact}. We'll take it seriously and keep it as private as we can.` },
  ],
};
