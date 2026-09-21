import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, permittedStories, storyEmployer, storyPhoto, storyVideo } from "@/content/stories";
import VideoSlot from "@/components/VideoSlot";
import Ornament from "@/components/Ornament";
import FinalCta from "@/components/sections/FinalCta";

// Only permitted stories get a page; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return permittedStories().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getStory(slug);
  return s ? { title: s.headline, description: `${s.name}, ${s.school}: ${s.startingPoint}` } : {};
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const employer = storyEmployer(s);
  const video = storyVideo(s);
  const photo = storyPhoto(s);

  return (
    <>
      <article className="section" style={{ paddingTop: 56 }}>
        <div className="wrap article-wrap">
          <Link href="/results" className="link-arrow">← All results</Link>
          <div style={{ marginTop: 28 }}><Ornament /></div>
          <span className="eyebrow" style={{ display: "block" }}>{s.track} · {s.year}</span>
          <h1 className="story-title">{s.headline}</h1>
          <p className="article-byline">{s.name} · {s.school}{employer ? ` · ${s.role} at ${employer}` : ` · ${s.role}`}</p>
          {s.studentTypes.length > 0 && <div className="coach-tags">{s.studentTypes.map((t) => <span key={t}>{t}</span>)}</div>}

          {video ? (
            <div style={{ marginTop: 32 }}><VideoSlot url={video} label={s.headline} /></div>
          ) : photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt={s.name} width={1200} height={675} className="story-hero-photo" />
          ) : null}

          <dl className="story-facts">
            <div className="card"><dt>Starting point</dt><dd>{s.startingPoint}</dd></div>
            <div className="card"><dt>Weekly numbers</dt><dd>{s.weeklyNumbers}</dd></div>
            <div className="card"><dt>Outcome</dt><dd>{s.outcome}</dd></div>
          </dl>

          {s.quote && (
            <figure className="card parent-quote" style={{ marginTop: 32 }}>
              <blockquote>{s.quote}</blockquote>
              <figcaption className="who"><div><strong>{s.name}</strong>{s.school}</div></figcaption>
            </figure>
          )}
          <p className="story-note">Shared with {s.name.split(" ")[0]}&apos;s written permission. Every student&apos;s search is different; this is one student&apos;s experience, not a promise of results.</p>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
