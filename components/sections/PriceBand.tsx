import Link from "next/link";
import { depositLine, site } from "@/content/site";
import { afterProgram, leavesWith } from "@/content/program";
import CallLink from "../CallLink";
import PayButton, { DepositNote } from "../PayButton";
import { Check } from "../Icons";

// Homepage tuition and final call to action in one navy band. The only sage
// on the homepage: the price box and the Reserve button.
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
            {leavesWith.items.map((i) => <li key={i}><Check />{i}</li>)}
          </ul>
          <p className="band-line">{afterProgram.short}</p>
          <p className="band-line">{site.scholarship}</p>
          <div className="btn-row">
            <PayButton className="btn btn-sage" />
            <CallLink className="btn btn-cream-outline" />
          </div>
          <DepositNote />
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
