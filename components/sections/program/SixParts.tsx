import { leavesWith } from "@/content/program";
import { modules } from "@/content/programOverview";
import ModuleIcon from "../../ModuleIcon";
import { Check } from "../../Icons";

// The six parts as a compact grid. Each card's full write-up sits in a
// collapsed <details>; card ids are the /program#<slug> anchors.
export default function SixParts() {
  return (
    <section className="section" id="modules" style={{ paddingTop: 16 }}>
      <div className="wrap">
        <div className="section-head">
          <h2>{leavesWith.title}</h2>
          <p className="lede">{leavesWith.note}</p>
        </div>
        <ul className="part-grid-compact">
          {modules.map((m) => (
            <li className="card part-compact" id={m.slug} key={m.slug}>
              <div className="part-compact-head">
                <span className="icon-dot" aria-hidden="true"><ModuleIcon name={m.icon} /></span>
                <h3>{m.title}</h3>
              </div>
              <p>{m.detail}</p>
              <details className="more">
                <summary>How it works</summary>
                <div className="more-body">
                  {m.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                  <ul className="more-checks">
                    {m.components.map((c) => <li key={c}><Check />{c}</li>)}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
