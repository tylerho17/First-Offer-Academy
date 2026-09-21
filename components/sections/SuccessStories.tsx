import Link from "next/link";
import { permittedStories } from "@/content/stories";
import { site } from "@/content/site";
import Carousel from "../Carousel";
import VideoSlot from "../VideoSlot";
import Ornament from "../Ornament";
import { Play } from "../Icons";

// "How [Name] landed [role]…" story cards in a scroll-snap carousel.
// Only stories with permission: true render. Pre-launch, 4 labeled
// placeholder cards show where they go.
export default function SuccessStories({
  title = "See what students are saying.",
  eyebrow = "Success stories",
  flush = false,
  flushBottom = false,
}: { title?: string; eyebrow?: string; flush?: boolean; flushBottom?: boolean }) {
  const list = permittedStories();
  if (list.length === 0 && !site.showPlaceholders) return null;

  return (
    <section className="section stories" style={{ ...(flush && { paddingTop: 0 }), ...(flushBottom && { paddingBottom: 32 }) }}>
      <div className="wrap">
        <div className="section-head row-head">
          <div>
            <Ornament />
            <span className="eyebrow" style={{ display: "block" }}>{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <Link href="/results" className="link-arrow">View all results →</Link>
        </div>
        <Carousel label="Student success stories">
          {list.map((s) => (
            <article className="story-card" key={s.slug}>
              {s.videoUrl ? (
                <VideoSlot url={s.videoUrl} label={s.headline} />
              ) : s.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="story-photo" src={s.photo} alt={s.name} width={640} height={360} loading="lazy" />
              ) : null}
              <div className="story-body">
                <span className="tag">{s.track} · {s.year}</span>
                <h3><Link href={`/results/${s.slug}`}>{s.headline}</Link></h3>
                <p>{s.name} · {s.school}</p>
              </div>
            </article>
          ))}
          {list.length === 0 &&
            Array.from({ length: 4 }, (_, i) => (
              <article className="story-card is-placeholder" key={i}>
                <div className="story-thumb">
                  <span className="play"><Play /></span>
                </div>
                <div className="story-body">
                  <span className="slot-tag">Placeholder · story {i + 1}</span>
                  <h3>How [Name] landed [role] at [employer]</h3>
                  <p>Student video + written story, with written permission</p>
                </div>
              </article>
            ))}
        </Carousel>
      </div>
    </section>
  );
}
