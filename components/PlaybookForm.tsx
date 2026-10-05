"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { leadMagnet } from "@/content/leadMagnet";
import { track } from "@vercel/analytics";
import { postFormJson } from "@/lib/submit";
import { rememberSubscribed, useSubscribed } from "@/lib/subscribed";
import Honeypot from "./Honeypot";

// The Playbook signup. `capture` is false when email capture isn't set up
// (no Supabase keys): then there's no email field, just the download.
// Never a second gate: if the signup request fails, the download link still
// appears (served by /api/playbook?fallback=1).
const FALLBACK = `${leadMagnet.file}?fallback=1`;

export default function PlaybookForm({ capture = true }: { capture?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [href, setHref] = useState(leadMagnet.file);
  const id = useId();
  // Already gave an email for another download in this browser: skip the form.
  const subscribed = useSubscribed();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const { result, data: reply } = await postFormJson<{ download: string }>("/api/subscribe", { ...data, source: "playbook" });
    if (result === "ok") {
      rememberSubscribed();
      track("email_signup", { source: "playbook" });
      const url = typeof reply.download === "string" ? reply.download : leadMagnet.file;
      setHref(url);
      setStatus("done");
      window.location.assign(url); // starts the download; the link stays on screen
    } else {
      setHref(FALLBACK);
      setStatus("failed");
    }
  }

  const download = (url: string) => (
    <a href={url} className="btn btn-primary" data-event="playbook_download">
      Download the Playbook (PDF)
    </a>
  );

  if (!capture || (subscribed && status === "idle")) return <div className="timeline-done">{download(leadMagnet.file)}</div>;

  if (status === "done" || status === "failed") {
    return (
      <div className="timeline-done" role="status">
        <p><strong>{status === "done" ? "You're in." : "Here's your copy."}</strong>{status === "done" ? " Your download is starting." : ""}</p>
        {download(href)}
      </div>
    );
  }

  return (
    <form className="nl-form timeline-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="nl-row">
        <label className="sr-only" htmlFor={`${id}-first`}>First name</label>
        <input id={`${id}-first`} name="firstName" placeholder="First name" autoComplete="given-name" />
        <label className="sr-only" htmlFor={`${id}-role`}>I am a</label>
        <select id={`${id}-role`} name="role" defaultValue="">
          <option value="" disabled>I am a…</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Educator</option>
        </select>
      </div>
      <label className="sr-only" htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get the free Playbook"}
      </button>
      <p className="nl-fine">Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
    </form>
  );
}
