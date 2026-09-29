import Link from "next/link";
import { downloads } from "@/content/downloads";
import { leadMagnet as m } from "@/content/leadMagnet";

// One slim line pointing to /free-resources, where the Playbook and every
// template live.
export default function FreeStrip() {
  return (
    <section className="section-tight" aria-label="Free resources">
      <div className="wrap">
        <Link href="/free-resources" className="card free-strip">
          <span className="eyebrow">Free</span>
          <span className="free-strip-text">The {m.pages}-page Playbook and {downloads.length} templates</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
