import Link from "next/link";
import { faqs } from "@/content/faq";
import { Plus } from "../Icons";

export default function FaqList({ all = false }: { all?: boolean }) {
  const list = all ? faqs : faqs.filter((f) => f.home);
  return (
    <section className="section" id="faq" style={all ? { paddingTop: 24 } : undefined}>
      <div className="wrap">
        {!all && (
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions parents ask</h2>
          </div>
        )}
        <div className="faq-list">
          {list.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}<span className="plus" aria-hidden="true"><Plus /></span></summary>
              <p className="answer">{f.a}</p>
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
