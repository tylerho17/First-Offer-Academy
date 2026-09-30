import Link from "next/link";
import { site } from "@/content/site";
import PayButton, { DepositNote } from "./PayButton";

// Reserve a seat, or pay in full. The refund line is part of this component on
// purpose: a page cannot show a deposit button without it.
export default function PayOptions({ className = "" }: { className?: string }) {
  const c = site.cohort;
  return (
    <div className={`pay-options ${className}`.trim()}>
      <PayButton />
      <DepositNote />
      <p className="pay-alts">
        <PayButton kind="full" className="">Pay in full ({c.price})</PayButton>
      </p>
      <p className="pay-note"><Link href="/refunds">Refund &amp; payment policy →</Link></p>
    </div>
  );
}
