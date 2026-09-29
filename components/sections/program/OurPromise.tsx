import Link from "next/link";
import { promise as p } from "@/content/promise";
import CallLink from "../../CallLink";
import { Check, Minus } from "../../Icons";
import PayButton from "@/components/PayButton";

// What we promise, what we don't, and what we ask. Formerly /our-promise,
// which now redirects here.
export default function OurPromise() {
  return (
    <>
      <section className="section" id="promise" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow" style={{ display: "block" }}>{p.eyebrow}</span>
            <h2>{p.title}</h2>
            <p className="lede">{p.lede}</p>
          </div>
          <h3 className="promise-sub">{p.weDo.title}</h3>
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
            <PayButton />
            <CallLink />
          </div>
        </div>
      </section>
    </>
  );
}
