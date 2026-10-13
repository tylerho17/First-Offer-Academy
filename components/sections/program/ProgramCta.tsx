import Link from "next/link";
import { site } from "@/content/site";
import PrimaryCTA from "../../PrimaryCTA";

// Closing CTA (no tuition figure) and the FAQ link.
export default function ProgramCta() {
  const c = site.cohort;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="card program-cta">
          <div>
            <h2>{c.name} · {c.start}</h2>
            <p>Limited seats. Tuition and scholarship details are covered on the parent call. <Link href="/scholarship">The scholarship seat →</Link></p>
          </div>
          <div>
            <PrimaryCTA location="program" />
            <p className="hero-secondary"><Link href="/apply" className="link-arrow">Apply →</Link></p>
          </div>
        </div>
        <p className="program-faq">Questions about format, time, or fit? <Link href="/faq" className="link-arrow">Read the FAQ →</Link></p>
      </div>
    </section>
  );
}
