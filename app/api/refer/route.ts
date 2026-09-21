import { z } from "zod";
import { email, formRoute, optText, reqText } from "@/lib/formRoute";

const schema = z.object({
  referrerName: reqText(),
  referrerEmail: email(),
  referrerRole: reqText(60),
  friendName: reqText(),
  friendContact: reqText(254),
  friendRole: optText(60),
  friendSchool: optText(200),
  note: optText(3000),
  hasPermission: z.literal(true, { error: "Please confirm they're OK being contacted." }),
});

export const POST = formRoute({
  name: "refer",
  schema,
  table: "referrals",
  toRow: (d) => ({
    referrer_name: d.referrerName,
    referrer_email: d.referrerEmail,
    referrer_role: d.referrerRole,
    friend_name: d.friendName,
    friend_contact: d.friendContact,
    friend_role: d.friendRole,
    friend_school: d.friendSchool,
    note: d.note,
    has_permission: d.hasPermission,
  }),
});
