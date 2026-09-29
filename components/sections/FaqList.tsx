import Link from "next/link";
import { faqs } from "@/content/faq";
import { getVideo } from "@/content/videoTestimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import { Plus } from "../Icons";

// Default (homepage): the four questions marked `home`, capped at four.
export default function FaqList({ all = false, parent = false, title = "Questions parents ask" }: { all?: boolean; parent?: boolean; title?: string }) {
  const list = all ? faqs : parent ? faqs.filter((f) => f.parent) : faqs.filter((f) => f.home).slice(0, 4);
  return (
    <section className="section" id="faq" style={all ? { paddingTop: 24 } : undefined}>
      <div className="wrap">
        {!all && (
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>{title}</h2>
          </div>
        )}
        <div className="faq-list">
          {list.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}<span className="plus" aria-hidden="true"><Plus /></span></summary>
              <div className="answer">
                <p>{f.a}</p>
                {f.video && getVideo(f.video) && <VideoTestimonial video={getVideo(f.video)!} />}
                {f.link && <p style={{ marginTop: 10 }}><Link href={f.link.href}>{f.link.label} →</Link></p>}
              </div>
            </details>
          ))}
        </div>
        {!all && (
          <p style={{ marginTop: 28 }}>
            <Link href="/faq" className="link-arrow">All questions →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
