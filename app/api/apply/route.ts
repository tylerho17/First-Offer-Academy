import { z } from "zod";
import { bool, email, formRoute, optText, reqText } from "@/lib/formRoute";
import { sendEmail } from "@/lib/emails/send";
import { applyConfirmation, applyNotify } from "@/lib/emails/templates";

const schema = z.object({
  name: reqText(),
  email: email(),
  phone: optText(40),
  school: reqText(),
  year: reqText(40),
  major: optText(120),
  tracks: z.array(z.enum(["Finance", "Consulting", "Marketing", "Tech"])).max(4).optional().default([]),
  gpa: optText(40),
  source: optText(300),
  tried: optText(3000),
  obstacle: optText(3000),
  parentName: optText(200),
  parentEmail: z.union([email(), z.literal("")]).optional().transform((v) => v || null),
  agreeTerms: z.literal(true, { error: "You must agree to the Terms and Privacy Policy." }),
  updatesConsent: bool(),
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
    year: d.year,
    major: d.major,
    tracks: d.tracks,
    gpa: d.gpa,
    source: d.source,
    tried: d.tried,
    obstacle: d.obstacle,
    parent_name: d.parentName,
    parent_email: d.parentEmail,
    agree_terms: d.agreeTerms,
    updates_consent: d.updatesConsent,
  }),
  after: async (d) => {
    await Promise.allSettled([
      sendEmail({ to: d.email, ...applyConfirmation(d) }),
      process.env.NOTIFY_EMAIL ? sendEmail({ to: process.env.NOTIFY_EMAIL, replyTo: d.email, ...applyNotify(d) }) : Promise.resolve(),
    ]).then((rs) => rs.forEach((r) => r.status === "rejected" && console.error("[apply] email failed:", r.reason)));
  },
});
