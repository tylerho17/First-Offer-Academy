import Link from "next/link";
import PrimaryCTA from "../PrimaryCTA";
import { site } from "@/content/site";

// Homepage navy band. No tuition figure: tuition and scholarship details are
// covered on the parent call. Sage CTA (navy text), then the scholarship link.
export default function PriceBand() {
  const c = site.cohort;
  return (
    <section className="section band" id="pricing">
      <div className="wrap">
        <h2>{c.name} · {c.start}</h2>
        <p className="band-line">Limited seats. Tuition and scholarship details are covered on the parent call.</p>
        <div className="btn-row">
          <PrimaryCTA location="band" tone="navy-band" />
        </div>
        <p style={{ marginTop: 12 }}><Link href="/scholarship" className="band-link">Apply for the scholarship seat</Link></p>
      </div>
    </section>
  );
}
