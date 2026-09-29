import Link from "next/link";
import { depositLine, site } from "@/content/site";
import CallLink from "../CallLink";

// Homepage tuition and final call to action in one navy band.
export default function PriceBand() {
  const c = site.cohort;
  return (
    <section className="section band" id="pricing">
      <div className="wrap price-grid">
        <div>
          <span className="eyebrow">Tuition</span>
          <h2>{c.name} · {c.start}</h2>
          <p className="lede">Apply in ten minutes, or talk it through with Tyler first.</p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-sage">Apply</Link>
            <CallLink className="btn btn-cream-outline" />
          </div>
        </div>
        <div className="price-box">
          <span className="amount">{c.price}</span>
          <span className="plan">or {c.plan}</span>
          <span className="seats">{c.seats} seats. {depositLine()}</span>
          <Link href="/refunds" className="price-policy">Refund &amp; payment policy</Link>
        </div>
      </div>
    </section>
  );
}
