import { NextResponse } from "next/server";
import { findEvent, withUtm } from "@/lib/events";

// "Add to calendar": a one-event .ics file generated from the event data.
const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, "\\n");

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const e = await findEvent(id);
  if (!e?.startAt) return NextResponse.json({ error: "Event not found." }, { status: 404 });

  const end = e.endAt ?? new Date(new Date(e.startAt).getTime() + 45 * 60_000).toISOString();
  const url = withUtm(e.url, "ics");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//First Offer Academy//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${e.id}@firstofferacademy.com`,
    `DTSTAMP:${stamp(new Date().toISOString())}`,
    `DTSTART:${stamp(e.startAt)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc(`First Offer Academy: ${e.title}`)}`,
    `DESCRIPTION:${esc(`Register and get the ${e.location} link on Luma: ${url}`)}`,
    `LOCATION:${esc(e.location)}`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${e.id}.ics"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
