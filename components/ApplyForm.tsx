"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

// The short application. No payment here: after submit, /apply/thanks offers
// the call first, and the refundable deposit only to families who've spoken
// with us.
export default function ApplyForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/apply", payload);
    if (result !== "ok") {
      setStatus(result);
      return;
    }
    track("apply_submit");
    router.push("/apply/thanks");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
      <div className="field"><label htmlFor="school">School</label><input id="school" name="school" required /></div>
      <div className="field"><label htmlFor="major">Major</label><input id="major" name="major" required /></div>
      <div className="field">
        <label htmlFor="year">Year</label>
        <select id="year" name="year" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="recruiting">Where are you in recruiting right now?</label>
        <textarea id="recruiting" name="recruiting" required />
      </div>
      <div className="field full">
        <label htmlFor="parentEmail">Parent/guardian email <span className="hint">(optional)</span></label>
        <input id="parentEmail" name="parentEmail" type="email" autoComplete="off" />
      </div>

      <p className="full form-fine">
        By applying, you agree to our <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>. Applying costs nothing.
      </p>
      <div className="full">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit application"}
        </button>
      </div>

      {status === "unconnected" && (
        <p className="form-status" role="status">
          Your application didn&apos;t go through. Please <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">book a call with us</a> directly, or email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      {status === "error" && (
        <p className="form-status" role="alert">
          Something went wrong. Email <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={site.calendlyUrl}>book a call</a>.
        </p>
      )}
    </form>
  );
}
