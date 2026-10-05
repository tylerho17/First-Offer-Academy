import Link from "next/link";
import { faqGroups, faqs, type Faq } from "@/content/faq";
import { Plus } from "../Icons";
import VideoPair from "../VideoPair";
import { videosAt } from "@/content/videoTestimonials";

// One FAQ item. Clips (if any) sit under the answer, inside the collapsed
// item, on /faq only.
function Item({ f, withVideo }: { f: Faq; withVideo: boolean }) {
  return (
    <details className="faq-item" id={f.id}>
      <summary>{f.q}<span className="plus" aria-hidden="true"><Plus /></span></summary>
      <div className="answer">
        <p>{f.a}</p>
        {f.list && <ul className="faq-points">{f.list.map((x) => <li key={x.slice(0, 40)}>{x}</li>)}</ul>}
        {withVideo && f.video && <VideoPair videos={videosAt(...f.video)} className="faq-videos" />}
        {f.link && <p style={{ marginTop: 10 }}><Link href={f.link.href}>{f.link.label} →</Link></p>}
      </div>
    </details>
  );
}

// `all` (/faq): every question in its group, with group headings and clips.
// Otherwise (homepage, /pricing): the questions marked `home`, capped at five;
// `parent` (/parents): the parent questions. Those lists stay text only.
export default function FaqList({ all = false, parent = false, title = "Questions parents ask" }: { all?: boolean; parent?: boolean; title?: string }) {
  const list = parent ? faqs.filter((f) => f.parent) : faqs.filter((f) => f.home).slice(0, 5);
  return (
    <section className="section" id="faq" style={all ? { paddingTop: 24 } : undefined}>
      <div className="wrap">
        {all ? (
          faqGroups.map((g) => {
            const items = faqs.filter((f) => f.group === g);
            if (items.length === 0) return null;
            return (
              <div className="faq-group" key={g}>
                <h2 className="faq-group-title">{g}</h2>
                <div className="faq-list">{items.map((f) => <Item key={f.q} f={f} withVideo />)}</div>
              </div>
            );
          })
        ) : (
          <>
            <div className="section-head">
              <span className="eyebrow">FAQ</span>
              <h2>{title}</h2>
            </div>
            <div className="faq-list">{list.map((f) => <Item key={f.q} f={f} withVideo={false} />)}</div>
            <p style={{ marginTop: 28 }}>
              <Link href="/faq" className="link-arrow">All questions →</Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
