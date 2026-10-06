import Link from "next/link";
import PrimaryCTA from "../PrimaryCTA";
import { depositRefundLine, site } from "@/content/site";

// Homepage price band: navy, cream text, the sage price box and sage Apply
// (the only sage on the homepage).
export default function PriceBand() {
  const c = site.cohort;
  return (
    <section className="section band" id="pricing">
      <div className="wrap price-grid">
        <div>
          <span className="eyebrow">Tuition</span>
          <h2>{c.price} · everything included</h2>
          <p className="band-line">
            Week 0 pre-work · 12-week program: Weeks 1–8 core teaching, Weeks 9–12 Offer Sprint · weekly check-ins and mocks
            every other week until your offer · coached
            Extern applications, fee covered
          </p>
          <p className="band-line"><strong>{c.name}: {c.start} · {c.seats} seats</strong></p>
          <p className="band-small">{depositRefundLine()}</p>
          <div className="btn-row">
            <PrimaryCTA location="band" tone="navy-band" />
          </div>
          <p style={{ marginTop: 12 }}><Link href="/apply" className="band-link">Apply →</Link></p>
        </div>
        <div className="price-box">
          <span className="amount">{c.price}</span>
          <span className="plan">everything included</span>
          <span className="seats">{c.deposit} deposit reserves your seat; the remaining {c.balance} is invoiced separately, due {c.balanceDue}.</span>
          <Link href="/refunds" className="price-policy">Refund &amp; payment policy</Link>
        </div>
      </div>
    </section>
  );
}
