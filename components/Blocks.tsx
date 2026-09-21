import type { Block } from "@/content/blocks";
import { headingId } from "@/content/articles";
import { Check } from "./Icons";

// Renders content/blocks.ts blocks: prose, lists, checklists, templates,
// tables, and callouts.
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
        </aside>
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
