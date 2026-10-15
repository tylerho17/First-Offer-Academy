import { z } from "zod";
import { email, formRoute, reqText } from "@/lib/formRoute";
import { sendEmail } from "@/lib/emails/send";
import { applyConfirmation, applyNotify } from "@/lib/emails/templates";

// The short application (/apply). Stored in public.applications; the
// "Where are you in recruiting right now?" answer goes in recruiting_status
// (supabase/migrations/005_applications_short_form.sql). Until that migration
// runs, formRoute drops the missing column and the answer still reaches Tyler
// in the notification email.
const schema = z.object({
  name: reqText(),
  email: email(),
  phone: reqText(40),
  school: reqText(),
  major: reqText(120),
  year: reqText(40),
  recruiting: reqText(3000),
  parentEmail: z.union([email(), z.literal("")]).optional().transform((v) => v || null),
  agreeTerms: z.literal(true, { error: "You must agree to the Terms and Privacy Policy." }),
});

export const POST = formRoute({
  name: "apply",
  schema,
  table: "applications",
  toRow: (d) => ({
    name: d.name,
    email: d.email,
    phone: d.phone,
    school: d.school,
    major: d.major,
    year: d.year,
    recruiting_status: d.recruiting,
    parent_email: d.parentEmail,
    agree_terms: d.agreeTerms,
  }),
  after: async (d) => {
    await Promise.allSettled([
      sendEmail({ to: d.email, ...applyConfirmation(d) }),
      process.env.NOTIFY_EMAIL ? sendEmail({ to: process.env.NOTIFY_EMAIL, replyTo: d.email, ...applyNotify(d) }) : Promise.resolve(),
    ]).then((rs) => rs.forEach((r) => r.status === "rejected" && console.error("[apply] email failed:", r.reason)));
  },
});
