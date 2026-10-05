"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { site } from "@/content/site";
import PayButton, { DepositNote } from "./PayButton";
import { Check } from "./Icons";

type Option = "full" | "deposit";

// /pricing: the two ways to pay that the site already offers, as a segmented
// control (role="radiogroup", arrow keys move between options). Amounts and
// terms come from content/site.ts. The selected option shows a check and bold
// text, so it doesn't rely on color alone. Default: pay in full.
export default function PaymentToggle() {
  const c = site.cohort;
  const [option, setOption] = useState<Option>("full");
  const refs = { full: useRef<HTMLButtonElement>(null), deposit: useRef<HTMLButtonElement>(null) };
  const options: { value: Option; label: string; amount: string }[] = [
    { value: "full", label: "Pay in full", amount: c.price },
    { value: "deposit", label: "Reserve a seat", amount: `${c.deposit} deposit` },
  ];

  function choose(v: Option, focus = false) {
    setOption(v);
    track("pricing_toggle", { option: v });
    if (focus) refs[v].current?.focus();
  }

  return (
    <div className="pay-toggle">
      <div
        className="seg"
        role="radiogroup"
        aria-label="How to pay"
        onKeyDown={(e) => {
          if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) {
            e.preventDefault();
            choose(option === "full" ? "deposit" : "full", true);
          }
        }}
      >
        {options.map((o) => (
          <button
            key={o.value}
            ref={refs[o.value]}
            type="button"
            role="radio"
            aria-checked={option === o.value}
            tabIndex={option === o.value ? 0 : -1}
            className={`seg-option${option === o.value ? " is-selected" : ""}`}
            onClick={() => choose(o.value)}
          >
            <span className="seg-check" aria-hidden="true">{option === o.value && <Check />}</span>
            <span className="seg-label">{o.label}</span>
            <span className="seg-amount">{o.amount}</span>
          </button>
        ))}
      </div>

      <div className="card pay-panel" aria-live="polite">
        {option === "full" ? (
          <>
            <p className="pay-amt">{c.price}</p>
            <p>One payment before Week 1.</p>
            <div className="btn-row"><PayButton kind="full" className="btn btn-secondary">Pay in full ({c.price})</PayButton></div>
          </>
        ) : (
          <>
            <p className="pay-amt">{c.deposit} deposit</p>
            <p>{site.refundTerms}</p>
            <p style={{ marginTop: 12 }}>Already paid it? We&apos;ll email your {c.balance} balance link.</p>
            <div className="btn-row"><PayButton className="btn btn-secondary" /></div>
            <DepositNote />
          </>
        )}
        <p className="pay-policy"><Link href="/refunds">Refund &amp; payment policy →</Link></p>
      </div>
    </div>
  );
}
