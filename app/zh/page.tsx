import type { Metadata } from "next";
import Link from "next/link";
import { zh } from "@/content/zh";
import { site } from "@/content/site";
import Ornament from "@/components/Ornament";
import CallLink from "@/components/CallLink";
import { Check } from "@/components/Icons";

// noindex until a native speaker has reviewed content/zh.ts.
export const metadata: Metadata = {
  title: zh.meta.title,
  description: zh.meta.description,
  robots: site.zhReviewed ? undefined : { index: false, follow: false },
  alternates: { languages: { en: "/", "zh-Hans": "/zh" } },
};

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h2 className="zh-h2">{title}</h2>
      <ul className="plan-list">{items.map((i) => <li key={i}><Check />{i}</li>)}</ul>
    </div>
  );
}

export default function ZhPage() {
  return (
    <div lang="zh-Hans" className="zh">
      <section className="page-hero">
        <div className="wrap">
          {!site.zhReviewed && <p className="legal-draft" role="note">{zh.draftNotice}</p>}
          <Ornament />
          <span className="eyebrow" style={{ display: "block" }}>{zh.eyebrow}</span>
          <h1>{zh.title}</h1>
          <p className="lede">{zh.lede}</p>
          <div className="btn-row">
            <CallLink className="btn btn-primary">{zh.cta.button}</CallLink>
            <Link href="/" className="btn btn-secondary" lang="en">{zh.cta.english}</Link>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap grid grid-2">
          <Block title={zh.program.title} items={zh.program.items} />
          <Block title={zh.parents.title} items={zh.parents.items} />
          <Block title={zh.format.title} items={zh.format.items} />
          <Block title={zh.price.title} items={zh.price.items} />
        </div>
      </section>
      <section className="section band">
        <div className="wrap two-col">
          <div>
            <h2>{zh.promise.title}</h2>
            <p className="why-text">{zh.promise.body}</p>
          </div>
          <div>
            <h2>{zh.cta.title}</h2>
            <p className="why-text">{zh.cta.body}</p>
            <div className="btn-row">
              <CallLink className="btn btn-sage">{zh.cta.button}</CallLink>
            </div>
            <p className="why-text">{zh.cta.email} <a href={`mailto:${site.email}`} className="band-link">{site.email}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
