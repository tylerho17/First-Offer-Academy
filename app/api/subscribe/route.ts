import { z } from "zod";
import { email, formRoute, optText } from "@/lib/formRoute";
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
  after: (d) => sendEmail({ to: d.email, ...subscribeConfirmation(d) }),
});
