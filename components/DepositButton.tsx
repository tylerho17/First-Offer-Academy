"use client";

import { useState } from "react";
import { site } from "@/content/site";

// Starts Stripe Checkout for the deposit. Render it only when
// STRIPE_SECRET_KEY is set (the parent page decides).
export default function DepositButton({ email, className = "btn btn-secondary" }: { email?: string; className?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  async function go() {
    setState("loading");
    try {
      const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error();
      window.location.href = data.url;
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={go} disabled={state === "loading"} data-event="deposit_click">
        {state === "loading" ? "Opening checkout…" : `Hold a seat: ${site.cohort.deposit} deposit`}
      </button>
      {state === "error" && (
        <p className="form-status" role="alert">
          Checkout couldn&apos;t start. Please try again, or email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </>
  );
}
