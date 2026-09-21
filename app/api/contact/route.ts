import { z } from "zod";
import { bool, email, formRoute, optText, reqText } from "@/lib/formRoute";
import { sendEmail } from "@/lib/emails/send";
import { contactConfirmation } from "@/lib/emails/templates";

const schema = z.object({
  firstName: reqText(100),
  lastName: optText(100),
  email: email(),
  phone: z.string().trim().max(40).refine((v) => v.replace(/\D/g, "").length >= 10, "Please enter a full phone number."),
  role: optText(40),
  message: optText(5000),
  smsConsent: bool(),
});

export const POST = formRoute({
  name: "contact",
  schema,
  table: "contact_messages",
  toRow: (d) => ({
    first_name: d.firstName,
    last_name: d.lastName,
    email: d.email,
    phone: d.phone,
    role: d.role,
    message: d.message,
    sms_consent: d.smsConsent,
  }),
  after: (d) => sendEmail({ to: d.email, ...contactConfirmation(d) }),
});
