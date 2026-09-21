import Link from "next/link";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { site } from "@/content/site";

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card quote">
      <blockquote>{t.quote}</blockquote>
      <figcaption className="who">
        {t.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.photo} alt={t.name} width={44} height={44} loading="lazy" />
        )}
        <div>
          <strong>{t.name}</strong>
          {t.role === "parent" ? "Parent" : `${t.school} · ${t.year}`}
          {t.employerPermission && t.employer && <><br />Interned at {t.employer}</>}
          <br />
          {t.role === "student" && <span className="pill">{t.track}</span>}
        </div>
      </figcaption>
    </figure>
  );
}

// `compact`: home page. The Success Stories row above supplies the header
// and video, so this renders only the quote wall.
export default function Testimonials({ full = false, compact = false }: { full?: boolean; compact?: boolean }) {
  const ok = testimonials.filter((t) => t.permission);
  const parents = ok.filter((t) => t.role === "parent");
  const featuredParent = parents.find((t) => t.featured) ?? parents[0];
  const quotes = ok.filter((t) => t !== featuredParent);
  const videos = ok.filter((t) => t.videoUrl).slice(0, 3);
  const cards = full ? quotes : quotes.slice(0, 6);

  const placeholders = site.showPlaceholders;
  if (ok.length === 0 && !placeholders) return null;

  const videoSlots = Math.max(0, 3 - videos.length);
  const quoteSlots = placeholders ? Math.max(0, 6 - cards.length) : 0;

  return (
    <section className="section" id="results" style={full ? { paddingTop: 24 } : compact ? { paddingTop: 0 } : undefined}>
      <div className="wrap">
        {!full && !compact && (
          <div className="section-head">
            <span className="eyebrow">Results</span>
            <h2>What students say</h2>
          </div>
        )}

        {!compact && (videos.length > 0 || placeholders) && (
          <div className="videos">
            {videos.map((t) => (
              <div className="video-card" key={t.name}>
                <video src={t.videoUrl} controls playsInline preload="metadata" aria-label={`Video testimonial from ${t.name}`} />
              </div>
            ))}
            {placeholders && Array.from({ length: videoSlots }).map((_, i) => (
              <div className="video-card" key={`v${i}`} style={{ background: "transparent" }}>
                <div className="slot">
                  <span className="slot-tag">Placeholder</span>
                  Student video {videos.length + i + 1}
                  <small>30-second vertical clip</small>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="quotes">
          {cards.map((t) => <QuoteCard key={t.name + t.quote.slice(0, 12)} t={t} />)}
          {Array.from({ length: quoteSlots }).map((_, i) => (
            <div className="quote" key={`q${i}`}>
              <div className="slot">
                <span className="slot-tag">Placeholder</span>
                Student testimonial
                <small>Quote · first name + last initial · school · track</small>
              </div>
            </div>
          ))}
        </div>

        {featuredParent ? (
          <figure className="card parent-quote" id="parents">
            <blockquote>{featuredParent.quote}</blockquote>
            <figcaption className="who"><div><strong>{featuredParent.name}</strong>Parent</div></figcaption>
          </figure>
        ) : placeholders ? (
          <div className="slot" style={{ minHeight: 160 }} id="parents">
            <span className="slot-tag">Placeholder</span>
            Featured parent quote
            <small>One parent, in their own words, with written permission</small>
          </div>
        ) : null}

        {!full && (
          <p style={{ marginTop: 28 }}>
            <Link href="/results" className="link-arrow">Read every result →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
