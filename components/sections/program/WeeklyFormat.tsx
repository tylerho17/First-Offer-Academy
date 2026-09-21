import { oneOnOneFormat, sessionFormat, type FormatRow } from "@/content/program";
import Ornament from "../../Ornament";

function FormatTable({ caption, rows }: { caption: string; rows: FormatRow[] }) {
  return (
    <div className="card format-card">
      <table className="format-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Block</th>
            <th scope="col">Time</th>
            <th scope="col">What happens</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.block}>
              <th scope="row">{r.block}</th>
              <td className="format-time">{r.time}</td>
              <td>{r.what}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WeeklyFormat() {
  return (
    <section className="section" id="weekly-format" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Every week</span>
          <h2>A 90-minute session and a 60-minute 1:1</h2>
          <p className="lede">Twelve of each. The session builds the skill; the 1:1 makes sure the work actually gets done.</p>
        </div>
        <div className="grid grid-2 format-grid">
          <FormatTable caption="Weekly 60-minute 1:1" rows={oneOnOneFormat} />
          <FormatTable caption="Weekly 90-minute group session" rows={sessionFormat} />
        </div>
      </div>
    </section>
  );
}
