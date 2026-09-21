import type { Metadata } from "next";
import { site } from "@/content/site";
import { workshopTopics, workshopAudiences, pastWorkshops } from "@/content/workshops";
import { Check } from "@/components/Icons";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Free school workshops",
  description: "Bring a free internship recruiting workshop to your club, high school, community college, or PTSA.",
};

export default function WorkshopsPage() {
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Free workshop request")}`;
  return (
    <>
      <section className="split-hero">
        <div className="split-copy">
          <span className="eyebrow">Free school workshops</span>
          <h1>Want a free recruiting workshop for your club or school?</h1>
          <p className="lede">
            First Offer Academy runs free, hands-on workshops on internship recruiting for college clubs,
            high schools, PTSAs, and tutoring centers. If your group would benefit, email{" "}
            <a href={mail}><strong>{site.email}</strong></a> and we&apos;ll set one up.
          </p>
          <div className="btn-row">
            <a href={mail} className="btn btn-primary">Request a workshop</a>
          </div>
          <ul className="audience">
            {workshopAudiences.map((a) => <li key={a}><Check />{a}</li>)}
          </ul>
        </div>
        <div className="split-art">
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tyler.jpg" alt="Tyler Ho, who leads First Offer workshops" width={800} height={903} />
          </div>
          <div className="float-card split-float">
            <strong>60–90 min</strong>
            In person or on Zoom
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Topics</span>
            <h2>Pick a session, or combine two</h2>
          </div>
          <div className="grid grid-2">
            {workshopTopics.map((t, i) => (
              <div className="card prep-card" key={t.title}>
                <span className="offer-n">0{i + 1}</span>
                <div><h3>{t.title}</h3><p>{t.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {(pastWorkshops.length > 0 || site.showPlaceholders) && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Past workshops</span>
              <h2>See what a session looks like</h2>
            </div>
            <div className="grid grid-2">
              {pastWorkshops.map((w) => (
                <figure className="card workshop-past" key={w.title}>
                  {w.embedUrl && (
                    <div className="embed"><iframe src={w.embedUrl} title={w.title} allowFullScreen /></div>
                  )}
                  <figcaption><h3>{w.title}</h3><p>{w.host}</p></figcaption>
                </figure>
              ))}
              {site.showPlaceholders && pastWorkshops.length === 0 && [1, 2].map((i) => (
                <div className="slot" style={{ aspectRatio: "16 / 9" }} key={i}>
                  <span className="slot-tag">Placeholder</span>
                  Workshop recording {i}
                  <small>Add to content/workshops.ts</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalCta />
    </>
  );
}
