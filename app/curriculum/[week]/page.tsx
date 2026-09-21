import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeek, weeks } from "@/content/curriculum";
import WeekView from "@/components/curriculum/WeekView";

export const dynamicParams = false;

export function generateStaticParams() {
  return weeks.map((w) => ({ week: `week-${w.n}` }));
}

const parse = (s: string) => {
  const m = /^week-(\d{1,2})$/.exec(s);
  return m ? getWeek(Number(m[1])) : undefined;
};

export async function generateMetadata({ params }: { params: Promise<{ week: string }> }): Promise<Metadata> {
  const w = parse((await params).week);
  return w ? { title: `Week ${w.n}: ${w.title}`, description: `${w.objective} What First Offer Academy students learn, practice, and deliver in Week ${w.n}.` } : {};
}

export default async function WeekPage({ params }: { params: Promise<{ week: string }> }) {
  const w = parse((await params).week);
  if (!w) notFound();
  return <WeekView week={w} />;
}
