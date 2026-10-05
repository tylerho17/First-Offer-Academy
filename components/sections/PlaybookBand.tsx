import Link from "next/link";
import { leadMagnet } from "@/content/leadMagnet";

// Homepage: the free Playbook, after the stats strip. The button goes to the
// existing gated download (/playbook-pdf: email, then the PDF). It's an
// outline button so "Book a parent call" stays the dominant CTA.
export default function PlaybookBand() {
  return (
    <section className="section-tight" aria-labelledby="playbook-band-title">
      <div className="wrap">
        <div className="card playbook-band">
          <div>
            <h2 id="playbook-band-title">Get the free recruiting playbook</h2>
            <p>{leadMagnet.title}: {leadMagnet.subtitle}.</p>
          </div>
          <Link href="/playbook-pdf" className="btn btn-secondary" data-event="playbook_download" data-event-location="home">
            Download the free playbook
          </Link>
        </div>
      </div>
    </section>
  );
}
