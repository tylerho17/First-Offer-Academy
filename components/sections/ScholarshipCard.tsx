import Link from "next/link";
import { site } from "@/content/site";

// Homepage: the cream card directly below the navy band, pointing to /scholarship.
export default function ScholarshipCard() {
  return (
    <section className="section-tight" aria-labelledby="scholarship-card-title">
      <div className="wrap">
        <Link href="/scholarship" className="card scholarship-card">
          <span className="eyebrow">The First Offer Scholarship</span>
          <h2 id="scholarship-card-title">One full-tuition seat. Apply by {site.scholarship.closesShort}.</h2>
          <span className="link-arrow">See the scholarship →</span>
        </Link>
      </div>
    </section>
  );
}
