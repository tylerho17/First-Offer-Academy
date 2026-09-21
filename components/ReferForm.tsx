"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { postForm } from "@/lib/submit";
import Honeypot from "./Honeypot";

export default function ReferForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "unconnected">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    const result = await postForm("/api/refer", { ...Object.fromEntries(data.entries()), hasPermission: data.get("hasPermission") === "on" });
    setStatus(result === "ok" ? "done" : result);
  }

  if (status === "done") {
    return <p className="form-status" role="status">Thank you. Tyler will reach out to them personally, and mention that you sent them.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Honeypot />
      <h2 className="form-group-title">About you</h2>
      <div className="field"><label htmlFor="r-name">Your name</label><input id="r-name" name="referrerName" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="r-email">Your email</label><input id="r-email" name="referrerEmail" type="email" required autoComplete="email" /></div>
      <div className="field full">
        <label htmlFor="r-role">I am a</label>
        <select id="r-role" name="referrerRole" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Current or past student</option>
          <option>Parent</option>
          <option>Educator or counselor</option>
          <option>Other</option>
        </select>
      </div>

      <h2 className="form-group-title">Who you&apos;re referring</h2>
      <div className="field"><label htmlFor="r-fname">Their name</label><input id="r-fname" name="friendName" required /></div>
      <div className="field"><label htmlFor="r-femail">Their email or phone</label><input id="r-femail" name="friendContact" required /></div>
      <div className="field">
        <label htmlFor="r-ftype">They are a</label>
        <select id="r-ftype" name="friendRole" defaultValue="">
          <option value="" disabled>Select</option>
          <option>Student</option>
          <option>Parent of a student</option>
        </select>
      </div>
      <div className="field"><label htmlFor="r-school">Their school <span className="hint">(optional)</span></label><input id="r-school" name="friendSchool" /></div>
      <div className="field full"><label htmlFor="r-note">Anything we should know? <span className="hint">(optional)</span></label><textarea id="r-note" name="note" /></div>
      <div className="field full consent">
        <input id="r-perm" name="hasPermission" type="checkbox" required />
        <label htmlFor="r-perm">They know I&apos;m sharing their contact information and are OK with First Offer Academy reaching out once. <span aria-hidden="true">*</span></label>
      </div>
      <div className="full">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send referral"}</button>
      </div>
      {status === "unconnected" && (
        <p className="form-status" role="status">
          Referrals aren&apos;t connected yet. Email their name and contact info to <a href={`mailto:${site.email}`}>{site.email}</a> instead.
        </p>
      )}
      {status === "error" && <p className="form-status" role="alert">Something went wrong. Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
    </form>
  );
}
