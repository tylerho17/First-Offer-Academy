import { comparison, type Cell } from "@/content/program";
import { Check, Minus } from "../Icons";

function Mark({ v }: { v: Cell }) {
  if (v === true) return <span className="mark mark-yes" aria-label="Yes"><Check /></span>;
  if (v === "some") return <span className="mark mark-some">Sometimes</span>;
  return <span className="mark mark-no" aria-label="No"><Minus /></span>;
}

export default function Comparison() {
  return (
    <section className="section" id="compare" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Compare</span>
          <h2>Why not just…</h2>
          <p className="lede">Career centers and clubs help. Use them. Here is what each one is built to do.</p>
        </div>
        <p className="swipe-hint">Swipe to compare →</p>
        <div className="table-scroll">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                <th scope="col" className="us">First Offer Academy</th>
                <th scope="col">Career center</th>
                <th scope="col">Campus clubs</th>
                <th scope="col">Doing it alone</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.row}>
                  <th scope="row">{r.row}</th>
                  <td className="us"><Mark v={r.us} /></td>
                  <td><Mark v={r.center} /></td>
                  <td><Mark v={r.clubs} /></td>
                  <td><Mark v={r.alone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
