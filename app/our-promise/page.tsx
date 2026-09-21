import type { Metadata } from "next";
import Link from "next/link";
import { promise } from "@/content/promise";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";
import { Check, Minus } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Promise",
  description: "What First Offer Academy commits to, what it does not promise, and what it asks of students.",
};

export default function OurPromisePage() {
  const p = promise;
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p className="lede">{p.lede}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="section-head">
            <Ornament />
            <h2>{p.weDo.title}</h2>
          </div>
          <ul className="grid grid-3 promise-grid">
            {p.weDo.items.map((i) => (
              <li className="card" key={i.title}>
                <span className="icon-dot"><Check /></span>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band">
        <div className="wrap two-col">
          <div>
            <h2>{p.weDont.title}</h2>
            <ul className="dont-list">
              {p.weDont.items.map((i) => <li key={i}><Minus />{i}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="why-title">Why</h3>
            <p className="why-text">{p.weDont.why}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Ornament />
            <h2>{p.weAsk.title}</h2>
          </div>
          <ol className="grid grid-3 promise-grid">
            {p.weAsk.items.map((i, n) => (
              <li className="card" key={i.title}>
                <span className="pain-n">{String(n + 1).padStart(2, "0")}</span>
                <h3>{i.title}</h3>
                <p>{i.body}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 36 }}>
            The full details are in our <Link href="/terms">Terms of Service</Link> and <Link href="/refunds">Refund &amp; Payment Policy</Link>.
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply</Link>
            <CallLink />
          </div>
        </div>
      </section>
    </>
  );
}
