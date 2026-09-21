"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { postForm } from "@/lib/submit";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = { ...Object.fromEntries(data.entries()), smsConsent: data.get("smsConsent") === "on" };

    setStatus("sending");
    const result = await postForm("/api/contact", payload);
    if (result !== "ok") {
      setStatus(result);
      return;
    }
    // Hand off to Calendly with name and email prefilled.
    const url = new URL(site.calendlyUrl);
    url.searchParams.set("name", `${payload.firstName ?? ""} ${payload.lastName ?? ""}`.trim());
    url.searchParams.set("email", String(payload.email ?? ""));
    window.location.href = url.toString();
  }

  return (
    <form className="form contact-form" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="c-first">First name <span aria-hidden="true">*</span></label><input id="c-first" name="firstName" required autoComplete="given-name" /></div>
      <div className="field"><label htmlFor="c-last">Last name</label><input id="c-last" name="lastName" autoComplete="family-name" /></div>
      <div className="field"><label htmlFor="c-email">Email <span aria-hidden="true">*</span></label><input id="c-email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="c-phone">Phone <span aria-hidden="true">*</span></label><input id="c-phone" name="phone" type="tel" required defaultValue="+1" autoComplete="tel" /></div>
      <div className="field full">
        <label htmlFor="c-role">I am a</label>
        <select id="c-role" name="role" defaultValue="">
          <option value="" disabled>Select</option>
          <option>Student</option>
          <option>Parent</option>
          <option>School</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="c-message">Message <span className="hint">(optional)</span></label>
        <textarea id="c-message" name="message" />
      </div>
      <div className="field full consent">
        <input id="c-sms" name="smsConsent" type="checkbox" />
        <label htmlFor="c-sms">
          I agree to receive informational and promotional text messages from First Offer Academy. Consent is not a
          condition of purchase. Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out.
        </label>
      </div>
      <p className="full form-legal"><Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms</Link></p>
      <div className="full">
        <button type="submit" className="btn btn-primary contact-submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Book a Call"}
        </button>
      </div>
      {status === "unconnected" && (
        <p className="form-status" role="status">
          The contact form isn&apos;t connected yet. For now, <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">book a call with Tyler</a> directly
          or email <a href={`mailto:${site.email}`}>{site.email}</a>.
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
