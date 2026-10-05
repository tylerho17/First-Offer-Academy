import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ResourceRow from "@/components/ui/ResourceRow";
import { playbookPdf, resourceLists } from "@/content/resources";
import { formatEvent, upcomingEvents, withUtm, type EventItem } from "@/lib/events";

// Event dates come from Luma (lib/events.ts), refreshed hourly.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Free Resources",
  description: "Free recruiting resources from First Offer Academy for students and parents: the Playbook PDF, guides, templates, and live workshops and info sessions.",
};

function SessionRow({ e, who }: { e: EventItem; who: string }) {
  const d = formatEvent(e);
  return (
    <li className="live-row">
      <span className="live-date">{d ? `${d.weekday}, ${d.month} ${d.day}` : "Date on Luma"}</span>
      <span className="live-title"><span className="live-who">{who}</span>{e.title}</span>
      <a href={withUtm(e.url, "resources")} className="btn btn-secondary live-register" target="_blank" rel="noopener noreferrer">
        Register<span className="sr-only"> for {e.title} (opens Luma in a new tab)</span>
      </a>
    </li>
  );
}

// The hub for every free resource: the Playbook featured once at the top, a
// compact list per audience, then the next live sessions. Every link goes to
// the page that already holds the resource.
export default async function ResourcesPage() {
  const [students, parents] = await Promise.all([upcomingEvents("Students"), upcomingEvents("Parents")]);
  const sessions = [...students.slice(0, 2).map((e) => ({ e, who: "Students" })), ...parents.slice(0, 1).map((e) => ({ e, who: "Parents" }))];
  const columns = [
    { id: "students", title: "For students", items: resourceLists.students },
    { id: "parents", title: "For parents", items: resourceLists.parents },
  ];

  return (
    <>
      <PageHero eyebrow="Free resources" title="Everything free, in one place." lede="Guides, templates, the Playbook PDF, and live sessions for students and parents." />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          {/* Featured: the Playbook, once on the page */}
          <div className="card resource-feature">
            <div>
              <span className="eyebrow">{playbookPdf.tag}</span>
              <h2>{playbookPdf.title} (free PDF)</h2>
              <p>{playbookPdf.body}</p>
            </div>
            <Link href={playbookPdf.href} className="btn btn-secondary" data-event="playbook_download" data-event-location="resources">Download the free playbook</Link>
          </div>

          <div className="resource-columns">
            {columns.map((c) => (
              <div key={c.id} id={c.id} className="resource-column">
                <h2>{c.title}</h2>
                <ul className="ui-resource-rows">
                  {c.items.map((r) => <li key={r.href}><ResourceRow {...r} /></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="live-sessions" aria-labelledby="live-title">
            <div className="resource-block-head">
              <h2 id="live-title">Live sessions</h2>
              <Link href="/events" className="link-arrow">See all events →</Link>
            </div>
            {sessions.length > 0 ? (
              <ul className="live-list">
                {sessions.map(({ e, who }) => <SessionRow key={e.id} e={e} who={who} />)}
              </ul>
            ) : (
              <p>No sessions are scheduled right now.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
