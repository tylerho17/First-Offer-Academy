import Link from "next/link";
import { testimonials } from "@/content/testimonials";
import { videosFor } from "@/content/videoTestimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Ornament from "../Ornament";

// Homepage proof: the lead parent video, one permitted student quote if one
// exists, and a link to everything else on /results.
export default function Proof() {
  const video = videosFor("home-results")[0];
  const quote = testimonials.find((t) => t.permission && t.role === "student");
  if (!video && !quote) return null;

  return (
    <section className="section" id="results" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Results</span>
          <h2>What changed, in a parent&apos;s words.</h2>
        </div>
        <div className="proof-grid">
          {video && <VideoTestimonial video={video} label="A parent on the change" />}
          {quote && (
            <figure className="card quote">
              <blockquote>{quote.quote}</blockquote>
              <figcaption className="who">
                <div>
                  <strong>{quote.name}</strong>
                  {quote.school} · {quote.year}
                  {quote.employerPermission && quote.employer && <><br />Interned at {quote.employer}</>}
                </div>
              </figcaption>
            </figure>
          )}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link href="/results" className="link-arrow">Read every result →</Link>
        </p>
      </div>
    </section>
  );
}
