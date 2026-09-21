import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventsSchedule from "@/components/sections/EventsSchedule";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Free events",
  description: "Free parent info sessions and student recruiting workshops from First Offer Academy.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free events"
        title="Learn how recruiting works, live and free."
        lede="Parent info sessions, student workshops, and livestreams. Ask questions in real time. No commitment."
      />
      <div style={{ paddingTop: 24 }}><EventsSchedule limit={50} heading={false} /></div>
      <FinalCta />
    </>
  );
}
