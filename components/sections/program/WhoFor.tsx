import { programOverview } from "@/content/programOverview";
import Ornament from "../../Ornament";
import { Check } from "../../Icons";

export default function WhoFor() {
  const w = programOverview.whoFor;
  return (
    <section className="section" id="who-its-for">
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <h2>{w.title}</h2>
        </div>
        <ol className="pain-grid">
          {w.pains.map((p, i) => (
            <li className="card pain" key={p.title}>
              <span className="pain-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="callout">
          <span className="callout-mark" aria-hidden="true"><Check /></span>
          <p>{w.callout}</p>
        </div>
      </div>
    </section>
  );
}
