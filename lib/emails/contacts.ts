import { Resend } from "resend";

// Adds a signup to Resend: a global contact (with `source` and `role` contact
// properties), then the segment in RESEND_SEGMENT_ID. Skips silently when
// either key is missing. Never throws: the Supabase row is the source of
// truth, so Resend errors are only logged. A contact or segment membership
// that already exists counts as success.
//
// The `source`, `role`, and `template` properties must exist in the Resend dashboard
// (Audience → Properties). If they don't, the contact is still created
// without them.

const isDuplicate = (e: { message: string; statusCode: number | null }) =>
  e.statusCode === 409 || /already (exists|in|a member)/i.test(e.message);

type Signup = { email: string; firstName?: string | null; source?: string | null; role?: string | null; template?: string | null };

export async function addNewsletterContact(c: Signup) {
  const key = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  if (!key || !segmentId) return;

  const properties = {
    source: c.source ?? "newsletter",
    ...(c.role ? { role: c.role.toLowerCase() } : {}),
    ...(c.template ? { template: c.template } : {}),
  };

  try {
    const resend = new Resend(key);
    const base = { email: c.email, ...(c.firstName ? { firstName: c.firstName } : {}) };
    let created = await resend.contacts.create({ ...base, properties });
    // Properties not set up in Resend yet: create the contact without them.
    if (created.error && !isDuplicate(created.error)) created = await resend.contacts.create(base);
    if (created.error && isDuplicate(created.error)) {
      // Returning subscriber: record the latest source and role.
      const updated = await resend.contacts.update({ email: c.email, properties });
      if (updated.error) console.error("[subscribe] Resend contact update failed:", updated.error.message);
    } else if (created.error) {
      console.error("[subscribe] Resend contact create failed:", created.error.message);
      return;
    }
    // Added by email so a returning subscriber (contact already exists) still lands in the segment.
    const added = await resend.contacts.segments.add({ email: c.email, segmentId });
    if (added.error && !isDuplicate(added.error)) {
      console.error("[subscribe] Resend segment add failed:", added.error.message);
    }
  } catch (e) {
    console.error("[subscribe] Resend contact sync failed:", e);
  }
}
