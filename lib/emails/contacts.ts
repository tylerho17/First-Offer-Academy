import { Resend } from "resend";

// Adds a newsletter signup to Resend: a global contact, then the segment in
// RESEND_SEGMENT_ID. Skips silently when either key is missing. Never throws:
// the Supabase row is the source of truth, so Resend errors are only logged.
// A contact or segment membership that already exists counts as success.

const isDuplicate = (e: { message: string; statusCode: number | null }) =>
  e.statusCode === 409 || /already (exists|in|a member)/i.test(e.message);

export async function addNewsletterContact(c: { email: string; firstName?: string | null }) {
  const key = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  if (!key || !segmentId) return;

  try {
    const resend = new Resend(key);
    const created = await resend.contacts.create({ email: c.email, ...(c.firstName ? { firstName: c.firstName } : {}) });
    if (created.error && !isDuplicate(created.error)) {
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
