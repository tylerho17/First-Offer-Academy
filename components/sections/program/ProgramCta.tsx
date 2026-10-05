import Link from "next/link";
import { site } from "@/content/site";
import PrimaryCTA from "../../PrimaryCTA";
import PayButton, { DepositNote } from "../../PayButton";

// Closing pricing CTA and the FAQ link.
export default function ProgramCta() {
  const c = site.cohort;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="card program-cta">
          <div>
            <h2>{c.price} · everything included</h2>
            <p>{c.name}: {c.start} · {c.seats} seats. <Link href="/pricing">Full pricing →</Link></p>
          </div>
          <div>
            <PrimaryCTA location="program" />
            <p className="hero-secondary"><PayButton className="link-arrow">Reserve a seat · {c.deposit} →</PayButton></p>
            <DepositNote />
          </div>
        </div>
        <p className="program-faq">Questions about format, time, or fit? <Link href="/faq" className="link-arrow">Read the FAQ →</Link></p>
      </div>
    </section>
  );
}
