import Link from "next/link";
import type { Block, LegalDoc } from "@/content/legal/types";
import { slugify } from "@/content/legal/types";

// [label](href) → link, bare email → mailto. Everything else stays text.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|[\w.+-]+@[\w-]+\.[\w.]+)/g);
  return (
    <>
      {parts.map((part, i) => {
        const md = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (md) {
          const [, label, href] = md;
          return href.startsWith("/") ? <Link key={i} href={href}>{label}</Link> : <a key={i} href={href}>{label}</a>;
        }
        if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) return <a key={i} href={`mailto:${part}`}>{part}</a>;
        return part;
      })}
    </>
  );
}

function renderBlock(b: Block, i: number) {
  if (b.type === "h2") {
    const id = slugify(b.text);
    return (
      <h2 key={i} id={id}>
        {b.text}
        <a href={`#${id}`} className="anchor" aria-label={`Link to section: ${b.text}`}>#</a>
      </h2>
    );
  }
  if (b.type === "ul") return <ul key={i}>{b.items.map((it) => <li key={it}><Inline text={it} /></li>)}</ul>;
  if (b.type === "template")
    return (
      <div className="card template" key={i}>
        <span className="eyebrow">{b.title}</span>
        <pre>{b.text}</pre>
      </div>
    );
  return <p key={i}><Inline text={b.text} /></p>;
}

export default function LegalPage({ doc, children }: { doc: LegalDoc; children?: React.ReactNode }) {
  const headings = doc.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const updated = new Date(doc.lastUpdated + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <section className="page-hero legal-hero">
        <div className="wrap">
          <p className="legal-draft" role="note"><strong>Draft — review with an attorney before launch.</strong></p>
          <span className="eyebrow">Legal</span>
          <h1>{doc.title}</h1>
          <p className="legal-updated">Last updated {updated}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap legal-layout">
          {headings.length > 2 && (
            <nav className="legal-toc" aria-label="On this page">
              <details open>
                <summary>On this page</summary>
                <ol>
                  {headings.map((h) => (
                    <li key={h.text}><a href={`#${slugify(h.text)}`}>{h.text}</a></li>
                  ))}
                </ol>
              </details>
            </nav>
          )}
          <div className="legal-body">
            {doc.intro && <p className="lede" style={{ marginTop: 0 }}><Inline text={doc.intro} /></p>}
            {doc.body.map(renderBlock)}
            {children}
            <p className="legal-contact">Questions about this page? Email <a href={`mailto:${doc.contactEmail}`}>{doc.contactEmail}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
