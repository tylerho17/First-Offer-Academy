import { createHmac, timingSafeEqual } from "node:crypto";

// The Playbook PDF is served only to someone who gave an email. Proof is a
// token: an HMAC of the email, carried in a cookie (set by /api/subscribe) or
// in the ?t= link of the confirmation email. /api/playbook checks it.

export const DOWNLOAD_COOKIE = "foa_dl";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const secret = () => process.env.DOWNLOAD_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// No secret configured: allowed locally so the gate can be tested, never in production.
export const gateOpen = () => !secret() && process.env.NODE_ENV !== "production";

const mac = (email: string) => createHmac("sha256", secret()).update(`playbook:${email}`).digest("base64url").slice(0, 32);

export function signDownload(email: string): string | null {
  if (!secret()) return null;
  return `${Buffer.from(email).toString("base64url")}.${mac(email)}`;
}

export function verifyDownload(token: string | null | undefined): boolean {
  if (!token || !secret()) return false;
  const [e, sig] = token.split(".");
  if (!e || !sig) return false;
  const expected = Buffer.from(mac(Buffer.from(e, "base64url").toString()));
  const given = Buffer.from(sig);
  return given.length === expected.length && timingSafeEqual(given, expected);
}
