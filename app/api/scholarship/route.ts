import { z } from "zod";
import { email, formRoute, optText, reqText } from "@/lib/formRoute";
import { sendEmail } from "@/lib/emails/send";
import { scholarshipConfirmation, scholarshipNotify } from "@/lib/emails/templates";
import { WORD_LIMIT, wordCount } from "@/content/scholarship";

// The First Offer Scholarship application (/scholarship). Stored in
// public.scholarship_applications (supabase/migrations/006_scholarship_applications.sql).
const answer = () => reqText(2000).refine((v) => wordCount(v) <= WORD_LIMIT, `${WORD_LIMIT} words max.`);

const schema = z.object({
  name: reqText(),
  email: email(),
  phone: reqText(40),
  school: reqText(),
  major: reqText(120),
  year: reqText(40),
  linkedin: optText(300),
  recruiting: answer(),
  drive: answer(),
  cost: answer(),
  commitment: z.literal(true, { error: "Please confirm the weekly targets commitment." }),
});

export const POST = formRoute({
  name: "scholarship",
  schema,
  table: "scholarship_applications",
  toRow: (d) => ({
    name: d.name,
    email: d.email,
    phone: d.phone,
    school: d.school,
    major: d.major,
    year: d.year,
    linkedin_url: d.linkedin,
    answer_recruiting: d.recruiting,
    answer_drive: d.drive,
    answer_cost: d.cost,
    commitment: d.commitment,
  }),
  after: async (d) => {
    await Promise.allSettled([
      sendEmail({ to: d.email, ...scholarshipConfirmation(d) }),
      process.env.NOTIFY_EMAIL ? sendEmail({ to: process.env.NOTIFY_EMAIL, replyTo: d.email, ...scholarshipNotify(d) }) : Promise.resolve(),
    ]).then((rs) => rs.forEach((r) => r.status === "rejected" && console.error("[scholarship] email failed:", r.reason)));
  },
});
