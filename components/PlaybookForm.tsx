"use client";

import Link from "next/link";
import { useState } from "react";
import { leadMagnet } from "@/content/leadMagnet";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import { rememberSubscribed, useSubscribed } from "@/lib/subscribed";
import Honeypot from "./Honeypot";

export default function PlaybookForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");
  // Already gave an email for another download in this browser: skip the form.
  const subscribed = useSubscribed();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/subscribe", { ...data, source: "playbook" });
    if (result === "ok") {
      rememberSubscribed();
      track("subscribe", { source: "playbook" });
    }
    setStatus(result === "ok" ? "done" : result);
  }

  const download = (
    <a href={leadMagnet.file} className="btn btn-primary" download data-event="playbook_download">
      Download the Playbook (PDF)
    </a>
  );

  if (subscribed && status === "idle") return <div className="timeline-done">{download}</div>;

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
      <p className="nl-fine">You&apos;ll also get the First Offer newsletter every other week. Unsubscribe anytime.</p>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get the free Playbook"}
      </button>
      <p className="nl-fine">Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
