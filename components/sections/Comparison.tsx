import { compareColumns, compareRows, type Mark } from "@/content/comparison";
import { Check, Minus } from "../Icons";

const LABEL: Record<Mark, string> = { yes: "Yes", partial: "Partial", no: "No" };

// ✓ / partial / — with a text label for screen readers.
function Cell({ v }: { v: Mark }) {
  if (v === "yes") return <span className="mark mark-yes"><Check /><span className="sr-only">{LABEL.yes}</span></span>;
  if (v === "partial") return <span className="mark mark-some">Partial</span>;
  return <span className="mark mark-no"><Minus /><span className="sr-only">{LABEL.no}</span></span>;
}

// /pricing "How this compares". A table from 768px; below that, one stacked
// card per row (First Offer Academy vs. each alternative), so nothing scrolls
// sideways.
export default function Comparison() {
  const [us, ...others] = compareColumns;
  return (
    <section className="section" id="compare" style={{ paddingTop: 0 }} aria-labelledby="compare-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="compare-title">How this compares</h2>
        </div>

        <table className="compare compare-table">
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">What you get</span></th>
              {compareColumns.map((c, i) => <th scope="col" key={c} className={i === 0 ? "us" : undefined}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r) => (
              <tr key={r.row}>
                <th scope="row">{r.row}</th>
                {r.marks.map((m, i) => <td key={compareColumns[i]} className={i === 0 ? "us" : undefined}><Cell v={m} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="compare-cards">
          {compareRows.map((r) => (
            <li className="card compare-card" key={r.row}>
              <h3>{r.row}</h3>
              <dl>
                <div className="is-us"><dt>{us}</dt><dd><Cell v={r.marks[0]} /></dd></div>
                {others.map((o, i) => <div key={o}><dt>{o}</dt><dd><Cell v={r.marks[i + 1]} /></dd></div>)}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
