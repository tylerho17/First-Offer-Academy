import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LinkCard from "@/components/ui/LinkCard";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "Free Resources",
  description: "Free recruiting resources from First Offer Academy for students and parents: the Playbook guides, templates, the Playbook PDF, and live workshops and info sessions.",
};

const groups = [
  { id: "students", title: "For students", items: resources.students },
  { id: "parents", title: "For parents", items: resources.parents },
];

// The hub for every free resource. Each card links to the page that already
// holds the resource.
export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Free resources" title="Everything free, in one place." lede="Guides, templates, the Playbook PDF, and live sessions for students and parents." />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          {groups.map((g) => (
            <div className="resource-group" key={g.id} id={g.id}>
              <h2>{g.title}</h2>
              <ul className="resource-grid">
                {g.items.map((r) => <li key={`${g.id}-${r.href}-${r.title}`}><LinkCard {...r} /></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
