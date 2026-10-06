"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { postForm } from "@/lib/submit";
import { rememberSubscribed, useSubscribed } from "@/lib/subscribed";
import Honeypot from "./Honeypot";
import CallLink from "./CallLink";

export type TemplateCard = { slug: string; title: string; what: string; format: string; week: number; stage: string; href: string };

// /free-resources: one email form unlocks every template and the Playbook.
// Titles and descriptions are always visible; the download links appear once
// this browser has signed up (cookie, 365 days).
export default function TemplateLibrary({
  templates,
  stages,
  playbook,
}: {
  templates: TemplateCard[];
  stages: string[];
  playbook: { href: string; title: string; subtitle: string; pages: number; chapters: number };
}) {
  const unlocked = useSubscribed();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [anchor, setAnchor] = useState<string | null>(null);
  const id = useId();
  const emailRef = useRef<HTMLInputElement>(null);

  // Arrived on a template's anchor (e.g. from a guide): tag the signup with it.
  useEffect(() => {
    const slug = decodeURIComponent(location.hash.slice(1));
    if (templates.some((t) => t.slug === slug)) setAnchor(slug);
  }, [templates]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const result = await postForm("/api/subscribe", { ...data, source: "templates", ...(anchor ? { template: `template-${anchor}` } : {}) });
    if (result === "ok") track("newsletter_signup", { source: "templates" });
    if (result === "ok" || result === "unconnected") {
      rememberSubscribed();
      setStatus("idle");
      if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ block: "center" }));
    } else setStatus("error");
  }

  return (
    <>
      <div className="card unlock-card" id="unlock">
        {unlocked ? (
          <div role="status">
            <h2>Everything is unlocked.</h2>
            <p>Download any template below. Want someone checking this every week? <CallLink className="">Book a parent call</CallLink>.</p>
          </div>
        ) : (
          <>
            <div>
              <h2>Get all {templates.length} templates and the Playbook.</h2>
              <p>Enter your email once. Every download opens right away, on this browser from now on.</p>
            </div>
            <form className="nl-form nl-inline-form" onSubmit={onSubmit}>
              <Honeypot />
              <div className="nl-fields">
                <label className="sr-only" htmlFor={`${id}-email`}>Email</label>
                <input ref={emailRef} id={`${id}-email`} name="email" type="email" required placeholder="Email" autoComplete="email" />
                <label className="sr-only" htmlFor={`${id}-role`}>I am a</label>
                <select id={`${id}-role`} name="role" defaultValue="">
                  <option value="" disabled>I am a…</option>
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Educator</option>
                </select>
                <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? "Unlocking…" : "Unlock"}
                </button>
              </div>
              <p className="nl-fine">You&apos;ll also get the newsletter every other week. Unsubscribe anytime. See our <Link href="/privacy">Privacy Policy</Link>.</p>
              {status === "error" && <p className="nl-status" role="alert">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>

      <div className="card featured-download" id="playbook">
        <div className="pdf-cover is-small" aria-hidden="true">
          <span>Free guide</span>
          <strong>{playbook.title}</strong>
        </div>
        <div>
          <span className="eyebrow">Featured · PDF · {playbook.pages} pages</span>
          <h3 className="featured-title">{playbook.title}</h3>
          <p className="playbook-sub">{playbook.subtitle}</p>
          <p style={{ marginTop: 12 }}>
            {playbook.chapters} chapters with every template included. <Link href="/playbook">See what&apos;s inside</Link>
          </p>
          <div style={{ marginTop: 20 }}>
            {unlocked ? (
              <a href={playbook.href} className="btn btn-primary" data-event="playbook_download">Download the Playbook (PDF)</a>
            ) : (
              <a href="#unlock" className="btn btn-secondary" onClick={() => emailRef.current?.focus()}>Unlock the Playbook</a>
            )}
          </div>
        </div>
      </div>

      {stages.map((stage) => {
        const items = templates.filter((t) => t.stage === stage);
        if (!items.length) return null;
        const sid = `stage-${stage.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return (
          <section className="download-stage" key={stage} aria-labelledby={sid}>
            <h3 id={sid} className="download-stage-title">{stage}</h3>
            <ul className="download-grid">
              {items.map((t) => (
                <li className={`card download-card${anchor === t.slug ? " is-target" : ""}`} key={t.slug} id={t.slug}>
                  <span className="download-format">{t.format}{t.format === "CSV" ? " · opens in Sheets or Excel" : " · 1 page"}</span>
                  <h4>{t.title}</h4>
                  <p>{t.what}</p>
                  <p className="download-week">Used in <Link href={`/curriculum/week-${t.week}`}>Week {t.week}</Link></p>
                  {unlocked ? (
                    <a href={t.href} className="btn btn-secondary" download data-event="template_download">
                      Download<span className="sr-only">: {t.title}</span>
                    </a>
                  ) : (
                    <a href="#unlock" className="download-locked" onClick={() => emailRef.current?.focus()}>
                      Unlock with your email<span className="sr-only"> to download {t.title}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
