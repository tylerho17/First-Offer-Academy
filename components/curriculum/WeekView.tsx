import Link from "next/link";
import { assetTitles, weekHref, weeks, type Week } from "@/content/curriculum";
import { downloadFile, getDownload } from "@/content/downloads";
import Ornament from "../Ornament";
import CallLink from "../CallLink";
import LevelBadge from "./LevelBadge";
import { Check } from "../Icons";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card week-block">
      <h2 className="week-block-title">{title}</h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="week-list">
      {items.map((i) => <li key={i}><Check />{i}</li>)}
    </ul>
  );
}

export default function WeekView({ week: w }: { week: Week }) {
  const prev = weeks.find((x) => x.n === w.n - 1);
  const next = weeks.find((x) => x.n === w.n + 1);
  const numbers = [
    { label: "Emails sent (cumulative)", value: w.numbers.emails },
    { label: "Calls completed", value: w.numbers.calls },
    { label: "Stories", value: w.numbers.stories },
    { label: "Externships", value: w.numbers.externship },
  ];

  return (
    <>
      <section className="page-hero week-hero">
        <div className="wrap">
          <Link href="/curriculum" className="link-arrow">← All 12 weeks</Link>
          <div style={{ marginTop: 24 }}><Ornament /></div>
          <span className="eyebrow" style={{ display: "block" }}>
            Week {w.n} of 12 · {w.phase}{w.split ? " · track split" : ""}
          </span>
          <h1>{w.title}</h1>
          <p className="lede"><strong>Objective:</strong> {w.objective}</p>
          {w.level ? <p style={{ marginTop: 20 }}><LevelBadge n={w.level} long /></p> : null}
        </div>
      </section>

      <section className="section-tight" aria-label="Numbers this week">
        <div className="wrap">
          <div className="week-numbers">
            <span className="eyebrow">Numbers this week</span>
            <dl>
              {numbers.map((x) => (
                <div key={x.label}>
                  <dt>{x.label}</dt>
                  <dd>{x.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap week-layout">
          <Block title="What we teach">
            <List items={w.teach} />
            {w.trackTeach && (
              <div className="track-teach">
                {Object.entries(w.trackTeach).map(([track, items]) => (
                  <div key={track}>
                    <h3>{track}</h3>
                    <List items={items} />
                  </div>
                ))}
              </div>
            )}
          </Block>

          <Block title="Live reps">
            <p>{w.liveReps}</p>
          </Block>

          <Block title="Your 60-minute 1:1 this week">
            <p>{w.oneOnOne}</p>
          </Block>

          <Block title="The weekly minimum">
            <p>{w.minimum}</p>
          </Block>

          <Block title="Deliverables">
            <List items={w.deliverables} />
            {w.level ? <p className="week-gate">Meeting every deliverable completes the gate for <LevelBadge n={w.level} />.</p> : null}
          </Block>

          <Block title="Coach questions">
            <ul className="week-questions">
              {w.coachQuestions.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </Block>

          <Block title="Templates used this week">
            <ul className="week-list">
              {w.assets.map((a) => {
                const d = getDownload(a);
                return (
                  <li key={a}>
                    <Check />
                    {d ? <a href={downloadFile(d)} download data-event="template_download">{assetTitles[a]} ({d.format})</a> : assetTitles[a]}
                  </li>
                );
              })}
            </ul>
            <p style={{ marginTop: 14 }}><Link href="/free-resources" className="link-arrow">All free templates →</Link></p>
          </Block>

          <div className="card week-block week-parents">
            <span className="eyebrow">For parents</span>
            <h2 className="week-block-title">What parents will see this week</h2>
            <p>{w.parents}</p>
          </div>
        </div>
      </section>

      <nav className="wrap week-nav" aria-label="Week navigation">
        {prev ? (
          <Link href={weekHref(prev.n)} className="card week-nav-link">
            <span className="eyebrow">← Previous</span>
            <strong>Week {prev.n}: {prev.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={weekHref(next.n)} className="card week-nav-link is-next">
            <span className="eyebrow">Next →</span>
            <strong>Week {next.n}: {next.title}</strong>
          </Link>
        ) : <span />}
      </nav>

      <section className="band booking-band" style={{ marginTop: 72 }}>
        <div className="wrap booking-inner">
          <div>
            <h2>Want your student doing this every week?</h2>
            <p>Twelve weeks, a 60-minute 1:1 every week, and a coach who checks the numbers.</p>
          </div>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-sage">Apply</Link>
            <CallLink className="btn btn-cream-outline" />
          </div>
        </div>
      </section>
    </>
  );
}
