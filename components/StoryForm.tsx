"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

const tracks = ["Finance", "Consulting", "Marketing", "Tech"];

// Testimonial submissions. Nothing submitted here appears on the site
// automatically: Tyler reviews each one and sets permission flags by hand.
export default function StoryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {
      ...Object.fromEntries(data.entries()),
      publishQuote: data.get("publishQuote") === "on",
      publishEmployer: data.get("publishEmployer") === "on",
      publishMedia: data.get("publishMedia") === "on",
    };
    setStatus("sending");
    const result = await postForm("/api/stories", payload);
    setStatus(result === "ok" ? "done" : result);
  }

  if (status === "done") {
    return (
      <p className="form-status" role="status">
        Thank you. Tyler reads every story personally. Nothing goes on the website until he confirms the details with you.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="field"><label htmlFor="s-name">Your name</label><input id="s-name" name="name" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="s-email">Email <span className="hint">(so we can confirm with you)</span></label><input id="s-email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="s-school">School</label><input id="s-school" name="school" required /></div>
      <div className="field">
        <label htmlFor="s-year">Year when you did the program</label>
        <select id="s-year" name="year" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="s-track">Track</label>
        <select id="s-track" name="track" required defaultValue="">
          <option value="" disabled>Select</option>
          {tracks.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="field"><label htmlFor="s-employer">Internship employer <span className="hint">(optional)</span></label><input id="s-employer" name="employer" /></div>
      <div className="field full"><label htmlFor="s-quote">Your story, in your words</label><textarea id="s-quote" name="quote" required placeholder="Where you started, what you did each week, and what happened." /></div>
      <div className="field full"><label htmlFor="s-video">Video link <span className="hint">(optional: YouTube, Vimeo, or Google Drive)</span></label><input id="s-video" name="videoUrl" type="url" placeholder="https://" /></div>

      <fieldset className="field full consent-group">
        <legend>What may we publish? <span className="hint">(each is separate, and optional)</span></legend>
        <div className="consent"><input id="s-pq" name="publishQuote" type="checkbox" /><label htmlFor="s-pq">You may publish my quote, with my first name and last initial.</label></div>
        <div className="consent"><input id="s-pe" name="publishEmployer" type="checkbox" /><label htmlFor="s-pe">You may publish my employer&apos;s name.</label></div>
        <div className="consent"><input id="s-pm" name="publishMedia" type="checkbox" /><label htmlFor="s-pm">You may use my photo or video.</label></div>
        <p className="consent-note">You can withdraw permission at any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      </fieldset>

      <div className="full">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Share my story"}</button>
      </div>
      {status === "unconnected" && (
        <p className="form-status" role="status">
          Story submissions aren&apos;t connected yet. Email your story to <a href={`mailto:${site.email}`}>{site.email}</a> instead.
        </p>
      )}
      {status === "error" && <p className="form-status" role="alert">Something went wrong. Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
    </form>
  );
}
