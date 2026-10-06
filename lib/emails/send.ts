import { Resend } from "resend";

// Sends an email through Resend when RESEND_API_KEY and EMAIL_FROM are set.
// Skips silently otherwise, so forms keep working before email is set up.
// Returns true when Resend accepted the email, false when it was skipped.
export async function sendEmail(msg: { to: string; subject: string; html: string; text: string; replyTo?: string }): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!key || !from) return false;
  const { error } = await new Resend(key).emails.send({ from, ...msg });
  if (error) throw new Error(`Resend: ${error.message}`);
  return true;
}
