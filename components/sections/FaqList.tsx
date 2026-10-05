import Link from "next/link";
import { faqs } from "@/content/faq";
import { Plus } from "../Icons";

// Default (homepage): the questions marked `home`, capped at five.
export default function FaqList({ all = false, parent = false, title = "Questions parents ask" }: { all?: boolean; parent?: boolean; title?: string }) {
  const list = all ? faqs : parent ? faqs.filter((f) => f.parent) : faqs.filter((f) => f.home).slice(0, 5);
  return (
    <section className="section" id="faq" style={all ? { paddingTop: 24 } : undefined}>
      <div className="wrap">
        {!all && (
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>{title}</h2>
          </div>
        )}
        <div className="faq-list">
          {list.map((f) => (
            <details className="faq-item" key={f.q} id={f.id}>
              <summary>{f.q}<span className="plus" aria-hidden="true"><Plus /></span></summary>
              <div className="answer">
                <p>{f.a}</p>
                {f.list && <ul className="faq-points">{f.list.map((x) => <li key={x.slice(0, 40)}>{x}</li>)}</ul>}
                {f.link && <p style={{ marginTop: 10 }}><Link href={f.link.href}>{f.link.label} →</Link></p>}
              </div>
            </details>
          ))}
        </div>
        {!all && (
          <p style={{ marginTop: 28 }}>
            <Link href="/faq" className="link-arrow">All questions →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
