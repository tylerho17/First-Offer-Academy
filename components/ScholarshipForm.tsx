"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/content/site";
import { scholarship, WORD_LIMIT, wordCount } from "@/content/scholarship";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

type QName = (typeof scholarship.questions)[number]["name"];

// The scholarship application: contact details, three short answers with a
// live word counter (150 words each), and the weekly-targets commitment.
export default function ScholarshipForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");
  const [answers, setAnswers] = useState<Record<QName, string>>({ recruiting: "", drive: "", cost: "" });
  const over = scholarship.questions.some((q) => wordCount(answers[q.name]) > WORD_LIMIT);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (over) return;
    const data = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(data.entries()), commitment: data.get("commitment") === "on" };
    setStatus("sending");
    const result = await postForm("/api/scholarship", payload);
    if (result !== "ok") {
      setStatus(result);
      return;
    }
    track("scholarship_submit");
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="apply-done" role="status">
        <h2>{scholarship.thanks}</h2>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="field"><label htmlFor="s-name">Full name</label><input id="s-name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="s-email">Email</label><input id="s-email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="s-phone">Phone</label><input id="s-phone" name="phone" type="tel" required autoComplete="tel" /></div>
      <div className="field"><label htmlFor="s-school">School</label><input id="s-school" name="school" required /></div>
      <div className="field"><label htmlFor="s-major">Major</label><input id="s-major" name="major" required /></div>
      <div className="field">
        <label htmlFor="s-year">Year</label>
        <select id="s-year" name="year" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="s-linkedin">LinkedIn URL <span className="hint">(optional)</span></label>
        <input id="s-linkedin" name="linkedin" type="url" inputMode="url" placeholder="https://www.linkedin.com/in/…" />
      </div>

      {scholarship.questions.map((q, i) => {
        const n = wordCount(answers[q.name]);
        const tooLong = n > WORD_LIMIT;
        return (
          <div className="field full" key={q.name}>
            <label htmlFor={`s-${q.name}`}>{i + 1}. {q.label}</label>
            <textarea
              id={`s-${q.name}`}
              name={q.name}
              required
              aria-describedby={`s-${q.name}-count`}
              aria-invalid={tooLong || undefined}
              value={answers[q.name]}
              onChange={(e) => setAnswers((a) => ({ ...a, [q.name]: e.target.value }))}
            />
            <p id={`s-${q.name}-count`} className={`word-count${tooLong ? " is-over" : ""}`} aria-live="polite">
              {n} / {WORD_LIMIT} words{tooLong ? ": please shorten this answer" : ""}
            </p>
          </div>
        );
      })}

      <div className="field full consent">
        <input id="s-commitment" name="commitment" type="checkbox" required />
        <label htmlFor="s-commitment">{scholarship.commitment}</label>
      </div>

      <div className="full">
        <button type="submit" className="btn btn-primary" disabled={status === "sending" || over}>
          {status === "sending" ? "Sending…" : "Apply for the scholarship"}
        </button>
      </div>

      {status === "unconnected" && (
        <p className="form-status" role="status">
          Your application didn&apos;t go through. Please email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      {status === "error" && (
        <p className="form-status" role="alert">
          Something went wrong. Check the form, or email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
