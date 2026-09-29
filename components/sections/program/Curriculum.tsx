import Ornament from "../../Ornament";
import PhaseMap from "../../curriculum/PhaseMap";

// Week 0 pre-work and the four overlapping phases. Formerly /curriculum,
// which now redirects here.
export default function Curriculum() {
  return (
    <section className="section" id="curriculum" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Curriculum</span>
          <h2>Eight weeks, four phases, one search.</h2>
          <p className="lede">
            It starts with winter break pre-work, the day you enroll. Then four phases that overlap on purpose: outreach
            starts in Phase 1 and never stops. Open any week to see exactly what your student does and what you&apos;ll
            see as a parent.
          </p>
        </div>
        <PhaseMap />
      </div>
    </section>
  );
}
