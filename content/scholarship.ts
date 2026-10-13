// The First Offer Scholarship (/scholarship). Copy as written by Tyler
// (2026-10-12); dates live in content/site.ts (site.scholarship).
import { site } from "./site";

const s = site.scholarship;

export const WORD_LIMIT = 150;

export const scholarship = {
  title: "The First Offer Scholarship",
  lede: `One full-tuition seat in the ${site.cohort.start} ${site.cohort.name.toLowerCase()}.`,
  intro:
    "Cost shouldn't decide who gets a first internship. Each cohort, we reserve one seat for a student who has the drive but not the means. Same program, same coaching, same weekly support as every other student.",
  who: {
    title: "Who should apply",
    items: [
      "Business students starting recruiting",
      "Students for whom tuition would be a real barrier for them or their family",
      "Students ready to hit weekly outreach and mock-interview targets",
    ],
  },
  lookFor: {
    title: "What we look for",
    body: "Drive over polish. We care more about what you've done with what you had than about your GPA or résumé.",
  },
  timeline: {
    title: "Timeline",
    items: [
      { label: "Applications close", value: s.closes },
      { label: "Finalists", value: `15-minute call, ${s.finalists}` },
      { label: "Decision", value: `by ${s.decision}` },
    ],
  },
  questions: [
    { name: "recruiting", label: "Where are you in recruiting right now, and what's been the hardest part?" },
    { name: "drive", label: "Tell us about something you worked hard for without anyone telling you to." },
    { name: "cost", label: "How would the cost of a program like this affect you or your family?" },
  ] as const,
  commitment: "I understand the scholarship recipient commits to the same weekly targets as every student.",
  finePrint: "One seat per cohort. Applicants not selected can still enroll in the program.",
  thanks: `Got it. We'll be in touch by ${s.replyBy}.`,
};

export const wordCount = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0);
