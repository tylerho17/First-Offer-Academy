import Link from "next/link";
import { promise as p } from "@/content/promise";
import { Check, Minus } from "../../Icons";

// What we promise and what we don't, side by side. Full terms: /terms and
// /refunds; what we ask of students: the FAQ.
export default function OurPromise() {
  return (
    <section className="section" id="promise" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>{p.title}</h2>
        </div>
        <div className="promise-split">
          <div className="card">
            <h3>{p.weDo.title}</h3>
            <ul className="promise-list">
              {p.weDo.items.map((i) => <li key={i.title}><Check /><span><strong>{i.title}.</strong> {i.body}</span></li>)}
            </ul>
          </div>
          <div className="card">
            <h3>{p.weDont.title}</h3>
            <ul className="promise-list is-dont">
              {p.weDont.items.map((i) => <li key={i}><Minus /><span>{i}</span></li>)}
            </ul>
            <p className="promise-why">{p.weDont.why}</p>
            <p className="promise-why">
              Details: <Link href="/terms">Terms</Link> · <Link href="/refunds">Refund &amp; Payment Policy</Link> · <Link href="/faq#what-we-ask">What we ask of students</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
