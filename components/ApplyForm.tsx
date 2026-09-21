"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

const tracks = ["Finance", "Consulting", "Marketing", "Tech"];

export default function ApplyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      ...Object.fromEntries(data.entries()),
      tracks: data.getAll("tracks"),
      agreeTerms: data.get("agreeTerms") === "on",
      updatesConsent: data.get("updatesConsent") === "on",
    };

    if (!site.applyEndpoint) {
      console.info("[apply] endpoint not set. Payload:", payload);
      setStatus("unconnected");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.applyEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      window.location.href = site.calendlyUrl;
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form-group-title">About the student</h2>
      <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="field"><label htmlFor="school">School</label><input id="school" name="school" required placeholder="UC Irvine, Irvine Valley College…" /></div>
      <div className="field">
        <label htmlFor="year">Year</label>
        <select id="year" name="year" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field"><label htmlFor="major">Major</label><input id="major" name="major" /></div>
      <div className="field full">
        <fieldset>
          <legend>Track interest <span className="hint">(pick any)</span></legend>
          <div className="choices">
            {tracks.map((t) => (
              <label className="choice" key={t}>
                <input type="checkbox" name="tracks" value={t} />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="field">
        <label htmlFor="gpa">GPA range</label>
        <select id="gpa" name="gpa" defaultValue="">
          <option value="" disabled>Select</option>
          <option>3.7+</option>
          <option>3.3–3.69</option>
          <option>3.0–3.29</option>
          <option>Below 3.0</option>
          <option>No college GPA yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="source">How did you hear about us?</label>
        <input id="source" name="source" />
      </div>
      <div className="field full"><label htmlFor="tried">What have you tried so far?</label><textarea id="tried" name="tried" placeholder="Clubs applied to, applications sent, people contacted…" /></div>
      <div className="field full"><label htmlFor="obstacle">What&apos;s your biggest obstacle right now?</label><textarea id="obstacle" name="obstacle" /></div>

      <h2 className="form-group-title">Parent or guardian <span className="hint" style={{ fontFamily: "var(--sans)", fontSize: 15 }}>(optional)</span></h2>
      <div className="field"><label htmlFor="parentName">Name</label><input id="parentName" name="parentName" /></div>
      <div className="field"><label htmlFor="parentEmail">Email</label><input id="parentEmail" name="parentEmail" type="email" /></div>

      <div className="field full consent-group">
        <div className="consent">
          <input id="agreeTerms" name="agreeTerms" type="checkbox" required />
          <label htmlFor="agreeTerms">I agree to the <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>. <span aria-hidden="true">*</span></label>
        </div>
        <div className="consent">
          <input id="updatesConsent" name="updatesConsent" type="checkbox" />
          <label htmlFor="updatesConsent">Send me program updates by email and text <span className="hint">(optional)</span>. Every email has an unsubscribe link; reply STOP to any text to opt out.</label>
        </div>
      </div>

      <div className="full" style={{ gridColumn: "1 / -1" }}>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit and book my fit call"}
        </button>
      </div>

      {status === "unconnected" && (
        <p className="form-status" role="status">
          The application form isn&apos;t connected yet. For now, <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">book a call with Tyler</a> directly.
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
