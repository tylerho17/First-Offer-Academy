"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import { isSubscribed, rememberSubscribed } from "@/lib/subscribed";
import Honeypot from "./Honeypot";

// A download button behind the email gate. The first download asks for an
// email (posted to /api/subscribe with source = the download's slug, so it
// lands in Supabase and the Resend newsletter segment). After that, this
// browser downloads straight away. The file URL itself stays public: without
// JavaScript the link simply downloads.
export default function GatedDownload({
  slug,
  href,
  label,
  className = "btn btn-secondary",
  event = "template_download",
}: {
  slug: string; // subscriber source, e.g. "cold-email-pack" or "playbook"
  href: string;
  label: string; // visible button text, e.g. "Download: Cold email template pack"
  className?: string;
  event?: string;
}) {
  const [state, setState] = useState<"closed" | "open" | "sending" | "ready" | "unconnected" | "error">("closed");
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const readyRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (state === "open") emailRef.current?.focus();
    if (state === "ready" || state === "unconnected") readyRef.current?.focus();
  }, [state]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState("sending");
    const result = await postForm("/api/subscribe", { ...data, source: slug });
    if (result === "ok") {
      rememberSubscribed();
      track("subscribe", { source: slug });
    }
    setState(result === "ok" ? "ready" : result);
  }

  if (state === "ready" || state === "unconnected") {
    return (
      <div className="gate is-open" role="status">
        <p className="gate-msg">
          {state === "ready" ? "You're in. Your download is ready." : "Here's your copy. (Email signup isn't connected yet, so nothing was saved.)"}
        </p>
        <a ref={readyRef} href={href} className="btn btn-primary" download data-event={event}>{label}</a>
      </div>
    );
  }

  const open = state !== "closed";
  return (
    <div className={`gate${open ? " is-open" : ""}`}>
      <a
        href={href}
        className={className}
        download
        aria-expanded={open}
        onClick={(e) => {
          if (isSubscribed()) {
            track(event, { file: slug });
            return;
          }
          e.preventDefault();
          setState("open");
        }}
      >
        {label}
      </a>
      {open && (
        <form className="nl-form timeline-form gate-form" onSubmit={onSubmit}>
          <p className="gate-msg">Enter your email to download. You&apos;ll only be asked once on this browser.</p>
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
          <input ref={emailRef} id={`${id}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" />
          <p className="nl-fine">You&apos;ll also get the First Offer newsletter every other week. Unsubscribe anytime.</p>
          <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Get the download"}
          </button>
          <p className="nl-fine">See our <Link href="/privacy">Privacy Policy</Link>.</p>
          {state === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
        </form>
      )}
    </div>
  );
}
