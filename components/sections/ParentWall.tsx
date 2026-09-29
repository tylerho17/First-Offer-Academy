import { testimonials } from "@/content/testimonials";
import { storyVideos } from "@/content/videoTestimonials";
import { site } from "@/content/site";
import VideoTestimonial from "@/components/VideoTestimonial";
import CallLink from "../CallLink";
import Ornament from "../Ornament";

// /results#parents: every permitted parent video (before-and-after first,
// price second), then every parent quote with permission: true. Formerly
// /results/parents, which now redirects here.
export default function ParentWall() {
  const videos = storyVideos();
  const parents = testimonials.filter((t) => t.role === "parent" && t.permission);
  return (
    <section className="section" id="parents" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>Parents</span>
          <h2>Parents, in their own words</h2>
          <p className="lede">Shared with written permission. First names only.</p>
        </div>
        {videos.length > 0 && (
          <ul className="vt-grid">
            {videos.map((v) => (
              <li key={v.id}><VideoTestimonial video={v} /></li>
            ))}
          </ul>
        )}
        {parents.length > 0 ? (
          <div className="quotes" style={videos.length > 0 ? { marginTop: 28 } : undefined}>
            {parents.map((t) => (
              <figure className="card quote parent-card" key={t.name + t.quote.slice(0, 12)}>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="who"><div><strong>{t.name}</strong>Parent</div></figcaption>
              </figure>
            ))}
          </div>
        ) : site.showPlaceholders ? (
          <div className="quotes" style={videos.length > 0 ? { marginTop: 28 } : undefined}>
            {Array.from({ length: 3 }, (_, i) => (
              <div className="quote" key={i}>
                <div className="slot">
                  <span className="slot-tag">Placeholder</span>
                  Parent testimonial {i + 1}
                  <small>In their own words, with written permission</small>
                </div>
              </div>
            ))}
          </div>
        ) : videos.length === 0 ? (
          <div className="card empty-card">
            <div>
              <h3>Parent testimonials are being added.</h3>
              <p>Want to talk to a parent or ask your own questions? Book a call.</p>
            </div>
            <CallLink>Book a call</CallLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
