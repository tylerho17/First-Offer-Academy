"use client";

import Link from "next/link";
import { useState } from "react";
import { leadMagnet } from "@/content/leadMagnet";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

export default function TimelineForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/subscribe", { ...data, source: "timeline" });
    if (result === "ok") track("subscribe", { source: "timeline" });
    setStatus(result === "ok" ? "done" : result);
  }

  const download = (
    <a href={leadMagnet.file} className="btn btn-primary" download data-event="timeline_download">
      Download the timeline (PDF)
    </a>
  );

  if (status === "done" || status === "unconnected") {
    return (
      <div className="timeline-done" role="status">
        <p><strong>{status === "done" ? "You're in." : "Here's your copy."}</strong> {status === "done" ? "Your download is ready." : "(Email signup isn't connected yet, so nothing was saved.)"}</p>
        {download}
      </div>
    );
  }

  return (
    <form className="nl-form timeline-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="nl-row">
        <label className="sr-only" htmlFor="tl-first">First name</label>
        <input id="tl-first" name="firstName" placeholder="First name" autoComplete="given-name" />
        <label className="sr-only" htmlFor="tl-role">I am a</label>
        <select id="tl-role" name="role" defaultValue="">
          <option value="" disabled>I am a…</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Educator</option>
        </select>
      </div>
      <label className="sr-only" htmlFor="tl-email">Email</label>
      <input id="tl-email" name="email" type="email" required placeholder="Email" autoComplete="email" />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get the free timeline"}
      </button>
      <p className="nl-fine">Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
