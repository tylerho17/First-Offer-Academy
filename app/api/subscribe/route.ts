import { z } from "zod";
import { email, formRoute, optText } from "@/lib/formRoute";

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
});
