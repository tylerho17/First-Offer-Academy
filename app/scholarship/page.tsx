import { pageMeta } from "@/lib/meta";
import ScholarshipForm from "@/components/ScholarshipForm";
import { scholarship as s } from "@/content/scholarship";
import { site } from "@/content/site";
import { Check } from "@/components/Icons";

export const metadata = pageMeta({
  title: "The First Offer Scholarship",
  description: `${s.lede} For business students starting recruiting who have the drive but not the means. Applications close ${site.scholarship.closes}.`,
});

export default function ScholarshipPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Scholarship</span>
          <h1>{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <p className="scholarship-intro">{s.intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap scholarship-grid">
          <div className="card">
            <h2>{s.who.title}</h2>
            <ul className="plan-list">
              {s.who.items.map((i) => <li key={i}><Check />{i}</li>)}
            </ul>
          </div>
          <div className="card">
            <h2>{s.lookFor.title}</h2>
            <p>{s.lookFor.body}</p>
          </div>
          <div className="card">
            <h2>{s.timeline.title}</h2>
            <dl className="scholarship-timeline">
              {s.timeline.items.map((t) => (
                <div key={t.label}>
                  <dt>{t.label}</dt>
                  <dd>{t.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="apply" style={{ paddingTop: 0 }} aria-labelledby="scholarship-apply-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="scholarship-apply-title">Apply</h2>
          </div>
          <div className="card form-card">
            <ScholarshipForm />
          </div>
          <p className="apply-note">{s.finePrint}</p>
        </div>
      </section>
    </>
  );
}
