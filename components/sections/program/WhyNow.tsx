import { modules, programOverview } from "@/content/programOverview";
import Ornament from "../../Ornament";

export default function WhyNow() {
  const w = programOverview.whyNow;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap why-now">
        <div>
          <Ornament />
          <h2>{w.title}</h2>
          <p className="why-sub">{w.sub}</p>
          <div className="why-body">
            {w.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        </div>
        <nav className="card toc" id="modules" aria-labelledby="toc-title">
          <h3 id="toc-title">The six parts</h3>
          <ol>
            {modules.map((m, i) => (
              <li key={m.slug}>
                <a href={`#${m.slug}`}><span>Part {i + 1}</span>{m.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
