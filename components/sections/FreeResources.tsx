import Link from "next/link";
import { downloads } from "@/content/downloads";
import { leadMagnet as m } from "@/content/leadMagnet";
import GatedDownload from "@/components/GatedDownload";
import Ornament from "@/components/Ornament";

// Homepage band: the free Playbook and templates, one email gate away.
// The download button itself is GatedDownload, so the consent line always
// travels with it.
export default function FreeResources() {
  return (
    <section className="section" id="free" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="card free-band">
          <div>
            <Ornament />
            <span className="eyebrow" style={{ display: "block" }}>Free, no strings</span>
            <h2>Start with the same material we teach.</h2>
            <p className="lede">
              The First Offer Playbook is {m.pages} pages: the resume rubric, the target list, the outreach
              system, cold email templates, the call framework, and behavioral stories. {downloads.length} templates
              come with it.
            </p>
            <div className="free-band-actions">
              <GatedDownload slug="playbook" href={m.file} label={`Download the Playbook (${m.pages} pages)`} className="btn btn-primary" event="playbook_download" />
              <Link href="/free-resources" className="link-arrow">See all {downloads.length} free templates →</Link>
            </div>
          </div>
          <div className="pdf-cover is-small" aria-hidden="true">
            <span>Free guide</span>
            <strong>{m.title}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
