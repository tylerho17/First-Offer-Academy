import { z } from "zod";
import { email, formRoute, optText } from "@/lib/formRoute";
import { addNewsletterContact } from "@/lib/emails/contacts";
import { sendEmail } from "@/lib/emails/send";
import { subscribeConfirmation } from "@/lib/emails/templates";
import { setDownloadCookies, signDownload } from "@/lib/downloadToken";

const schema = z.object({
  email: email(),
  firstName: optText(100),
  role: optText(40), // the "I am a…" select: Student | Parent | Educator
  source: optText(60),
  template: optText(60), // "template-<slug>" when the visitor arrived on a template anchor
});

// Stored as student / parent / other.
const roleOf = (r: string | null | undefined) => (!r ? null : /^student$/i.test(r) ? "student" : /^parent$/i.test(r) ? "parent" : "other");

export const POST = formRoute({
  name: "subscribe",
  schema,
  table: "subscribers",
  upsertOn: "email",
  // signup_source (migration 002) and the older source column get the same
  // value; whichever the table has is written (see formRoute's retry).
  toRow: (d) => {
    const from = [d.source ?? "newsletter", d.template].filter(Boolean).join(",");
    return { email: d.email, first_name: d.firstName, role: roleOf(d.role), source: from, signup_source: from };
  },
  // The download still works if the insert fails (logged server-side).
  softFail: true,
  // Runs only after the Supabase insert succeeds. The Resend sync never throws,
  // so a Resend outage can't fail the signup or block the confirmation email.
  after: async (d) => {
    await addNewsletterContact({ email: d.email, firstName: d.firstName, source: d.source, role: roleOf(d.role), template: d.template });
    await sendEmail({ to: d.email, ...subscribeConfirmation(d) });
  },
  // The Playbook link to open right away (signed, so it works even if the
  // cookie below is blocked).
  respond: (d) => {
    const token = signDownload(d.email);
    return { download: token ? `/api/playbook?t=${token}` : "/api/playbook" };
  },
  // Any signup unlocks the Playbook PDF and every template in this browser.
  onOk: (res, d) => {
    const token = signDownload(d.email);
    if (token) setDownloadCookies(res, token);
  },
});
