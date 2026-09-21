"use client";

import Link from "next/link";
import { useState } from "react";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/subscribe", { ...data, source: "newsletter" });
    setStatus(result === "ok" ? "done" : result);
  }

  if (status === "done") return <p className="nl-status">You&apos;re in. Look for the first issue in your inbox.</p>;

  return (
    <form className="nl-form" onSubmit={onSubmit}>
      <Honeypot />
      <div className="nl-row">
        <label className="sr-only" htmlFor="nl-first">First name</label>
        <input id="nl-first" name="firstName" placeholder="First name" autoComplete="given-name" />
        <label className="sr-only" htmlFor="nl-role">I am a</label>
        <select id="nl-role" name="role" defaultValue="">
          <option value="" disabled>I am a…</option>
          <option>Student</option>
          <option>Parent</option>
          <option>Educator</option>
        </select>
      </div>
      <label className="sr-only" htmlFor="nl-email">Email</label>
      <input id="nl-email" name="email" type="email" required placeholder="Email" autoComplete="email" />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Subscribing…" : "Subscribe"}
      </button>
      <p className="nl-fine">Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
      {status === "unconnected" && <p className="nl-status" role="status">Signup isn&apos;t connected yet. Check back soon.</p>}
      {status === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
    </form>
  );
}
