import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import CallLink from "../CallLink";

// Every parent testimonial with permission: true.
export default function ParentWall() {
  const parents = testimonials.filter((t) => t.role === "parent" && t.permission);
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="wrap">
        {parents.length > 0 ? (
          <div className="quotes">
            {parents.map((t) => (
              <figure className="card quote parent-card" key={t.name + t.quote.slice(0, 12)}>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="who"><div><strong>{t.name}</strong>Parent</div></figcaption>
              </figure>
            ))}
          </div>
        ) : site.showPlaceholders ? (
          <div className="quotes">
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
        ) : (
          <div className="card empty-card">
            <div>
              <h3>Parent testimonials are being added.</h3>
              <p>Want to talk to a parent or ask your own questions? Book a call.</p>
            </div>
            <CallLink>Book a call</CallLink>
          </div>
        )}
      </div>
    </section>
  );
}
