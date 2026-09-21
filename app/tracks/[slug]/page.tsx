import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrack, tracks } from "@/content/tracks";
import TrackView from "@/components/TrackView";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTrack(slug);
  return t ? { title: `${t.name} track`, description: t.intro } : {};
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();
  return <TrackView track={track} />;
}
