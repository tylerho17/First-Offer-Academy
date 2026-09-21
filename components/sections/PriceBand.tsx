import Link from "next/link";
import { site } from "@/content/site";
import { included } from "@/content/program";
import CallLink from "../CallLink";
import { Check } from "../Icons";

export default function PriceBand() {
  const c = site.cohort;
  return (
    <section className="section band" id="pricing">
      <div className="wrap price-grid">
        <div>
          <span className="eyebrow">Tuition</span>
          <h2>{c.name} · {c.start}</h2>
          <p className="includes-title">{c.price} includes</p>
          <ul className="checks">
            {included.map((i) => (
              <li key={i}><Check />{i}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-sage">Apply now</Link>
            <CallLink className="btn btn-cream-outline" />
          </div>
        </div>
        <div className="price-box">
          <span className="amount">{c.price}</span>
          <span className="plan">or {c.plan}</span>
          <span className="seats">{c.seats} seats. A {c.deposit} refundable deposit holds your spot.</span>
          <Link href="/refunds" className="price-policy">Refund &amp; payment policy</Link>
        </div>
      </div>
    </section>
  );
}
