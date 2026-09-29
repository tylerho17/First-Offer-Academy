import { z } from "zod";
import { email, formRoute, optText } from "@/lib/formRoute";
import { addNewsletterContact } from "@/lib/emails/contacts";
import { sendEmail } from "@/lib/emails/send";
import { subscribeConfirmation } from "@/lib/emails/templates";
import { setDownloadCookies, signDownload } from "@/lib/downloadToken";

const schema = z.object({
  email: email(),
  firstName: optText(100),
  role: optText(40), // Student | Parent | Educator
  source: optText(60),
  template: optText(60), // "template-<slug>" when the visitor arrived on a template anchor
});

export const POST = formRoute({
  name: "subscribe",
  schema,
  table: "subscribers",
  upsertOn: "email",
  toRow: (d) => ({ email: d.email, first_name: d.firstName, role: d.role, source: [d.source ?? "newsletter", d.template].filter(Boolean).join(",") }),
  // Runs only after the Supabase insert succeeds. The Resend sync never throws,
  // so a Resend outage can't fail the signup or block the confirmation email.
  after: async (d) => {
    await addNewsletterContact({ email: d.email, firstName: d.firstName, source: d.source, role: d.role, template: d.template });
    await sendEmail({ to: d.email, ...subscribeConfirmation(d) });
  },
  // Any signup unlocks the Playbook PDF and every template in this browser.
  onOk: (res, d) => {
    const token = signDownload(d.email);
    if (token) setDownloadCookies(res, token);
  },
});
