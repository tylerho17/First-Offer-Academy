import { z } from "zod";
import { email, formRoute, optText } from "@/lib/formRoute";
import { addNewsletterContact } from "@/lib/emails/contacts";
import { sendEmail } from "@/lib/emails/send";
import { subscribeConfirmation } from "@/lib/emails/templates";

const schema = z.object({
  email: email(),
  firstName: optText(100),
  role: optText(40),
  source: optText(60),
});

export const POST = formRoute({
  name: "subscribe",
  schema,
  table: "subscribers",
  upsertOn: "email",
  toRow: (d) => ({ email: d.email, first_name: d.firstName, role: d.role, source: d.source ?? "newsletter" }),
  // Runs only after the Supabase insert succeeds. The Resend sync never throws,
  // so a Resend outage can't fail the signup or block the confirmation email.
  after: async (d) => {
    await addNewsletterContact({ email: d.email, firstName: d.firstName });
    await sendEmail({ to: d.email, ...subscribeConfirmation(d) });
  },
});
