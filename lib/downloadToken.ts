import { createHmac, timingSafeEqual } from "node:crypto";
import { captureConfigured } from "./capture";

// The Playbook PDF is served only to someone who gave an email. Proof is a
// token: an HMAC of the email, carried in a cookie (set by /api/subscribe) or
// in the ?t= link of the confirmation email. /api/playbook checks it.

export const DOWNLOAD_COOKIE = "foa_dl"; // httpOnly, signed: checked by the file routes
export const UNLOCKED_COOKIE = "foa_unlocked"; // readable flag: tells the page to show links
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const secret = () => process.env.DOWNLOAD_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// The gate is open (downloads need no email) when email capture isn't set up
// (no Supabase keys: the site shows plain download links), or locally with no
// secret so the gate can be tested.
export const gateOpen = () => !captureConfigured() || (!secret() && process.env.NODE_ENV !== "production");

const mac = (email: string) => createHmac("sha256", secret()).update(`playbook:${email}`).digest("base64url").slice(0, 32);

export function signDownload(email: string): string | null {
  if (!secret()) return null;
  return `${Buffer.from(email).toString("base64url")}.${mac(email)}`;
}

// Set both cookies on a response (after a signup, or opening an emailed link).
export function setDownloadCookies(res: { cookies: { set: (name: string, value: string, o: object) => unknown } }, token: string) {
  const base = { secure: true, sameSite: "lax" as const, maxAge: COOKIE_MAX_AGE, path: "/" };
  res.cookies.set(DOWNLOAD_COOKIE, token, { ...base, httpOnly: true });
  res.cookies.set(UNLOCKED_COOKIE, "1", base);
}

export function verifyDownload(token: string | null | undefined): boolean {
  if (!token || !secret()) return false;
  const [e, sig] = token.split(".");
  if (!e || !sig) return false;
  const expected = Buffer.from(mac(Buffer.from(e, "base64url").toString()));
  const given = Buffer.from(sig);
  return given.length === expected.length && timingSafeEqual(given, expected);
}
