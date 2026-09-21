import type { Block, ResumeDoc } from "@/content/blocks";
import { headingId } from "@/content/articles";
import { ArrowRight, Check } from "./Icons";

function Resume({ doc }: { doc: ResumeDoc }) {
  return (
    <div className="resume-doc">
      <p className="resume-name">{doc.name}</p>
      <p className="resume-contact">{doc.contact}</p>
      {doc.sections.map((sec) => (
        <section key={sec.title}>
          <p className="resume-h">{sec.title}</p>
          {sec.entries.map((e, i) =>
            e.line ? (
              <p key={i} className="resume-line"><b>{e.org}:</b> {e.line}</p>
            ) : (
              <div key={i} className="resume-entry">
                <p className="resume-row"><b>{e.org}</b><span>{e.place ?? (e.role ? "" : e.dates)}</span></p>
                {e.role && <p className="resume-row"><i>{e.role}</i><span>{e.dates}</span></p>}
                {e.bullets && <ul>{e.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
              </div>
            ),
          )}
        </section>
      ))}
    </div>
  );
}

// Renders content/blocks.ts blocks: prose, lists, checklists, templates,
// tables, callouts, and sample resumes.
function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return <h2 id={headingId(b.text)}>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
      return <ul>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
    case "ol":
      return <ol>{b.items.map((it) => <li key={it}>{it}</li>)}</ol>;
    case "checklist":
      return (
        <div className="card block-checklist">
          {b.title && <p className="block-title">{b.title}</p>}
          <ul>{b.items.map((it) => <li key={it}><Check />{it}</li>)}</ul>
        </div>
      );
    case "template":
      return (
        <div className="card template">
          <span className="eyebrow">{b.title}</span>
          <pre>{b.text}</pre>
        </div>
      );
    case "table":
      return (
        <figure className="block-table">
          {b.caption && <figcaption>{b.caption}</figcaption>}
          <div className="table-scroll">
            <table>
              <thead><tr>{b.head.map((h, i) => <th scope="col" key={i}>{h}</th>)}</tr></thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>{r.map((c, j) => (j === 0 ? <th scope="row" key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );
    case "callout":
      return (
        <aside className={`block-callout is-${b.tone ?? "note"}`}>
          {b.title && <p className="block-title">{b.title}</p>}
          <p>{b.text}</p>
          {b.link && (
            <p><a href={b.link.href} target="_blank" rel="noopener noreferrer">{b.link.label}<span className="sr-only"> (opens in a new tab)</span></a></p>
          )}
        </aside>
      );
    case "resume":
      return (
        <figure className="block-resume">
          <figcaption><span className="eyebrow">{b.label}</span>{b.note && <span>{b.note}</span>}</figcaption>
          <Resume doc={b.doc} />
        </figure>
      );
    case "links":
      return (
        <div className="block-links">
          {b.title && <p className="block-title">{b.title}</p>}
          <ul>
            {b.items.map((it) => (
              <li key={it.href}>
                <a className="card" href={it.href} target="_blank" rel="noopener noreferrer">
                  <span className="block-links-label">{it.label}<ArrowRight /></span>
                  {it.note && <span className="block-links-note">{it.note}</span>}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          {(b.source || b.more) && (
            <p className="block-links-source">
              {b.source}
              {b.more && <> <a href={b.more.href} target="_blank" rel="noopener noreferrer">{b.more.label}<span className="sr-only"> (opens in a new tab)</span></a>.</>}
            </p>
          )}
        </div>
      );
    case "p":
      return <p>{b.text}</p>;
    default:
      return null;
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((b, i) => <BlockView key={i} b={b} />)}</>;
}
