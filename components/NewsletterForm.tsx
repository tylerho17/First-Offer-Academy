"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

// Inline newsletter signup: email, role (segments follow-up email), Subscribe.
export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");
  const id = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/subscribe", { ...data, source: "newsletter" });
    if (result === "ok") track("subscribe", { source: "newsletter" });
    setStatus(result === "ok" ? "done" : result);
  }

  if (status === "done") return <p className="nl-status" role="status">You&apos;re in. Look for the first issue in your inbox.</p>;

  return (
    <form className="nl-form nl-inline-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="nl-fields">
        <label className="sr-only" htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" />
        <label className="sr-only" htmlFor={`${id}-role`}>I am a</label>
        <select id={`${id}-role`} name="role" defaultValue="">
          <option value="" disabled>I am a…</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Educator</option>
        </select>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p className="nl-fine">Every other week. Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "unconnected" && <p className="nl-status" role="status">Signup isn&apos;t connected yet. Check back soon.</p>}
      {status === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
