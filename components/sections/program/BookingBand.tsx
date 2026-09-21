import Link from "next/link";
import { programOverview } from "@/content/programOverview";
import CallLink from "../../CallLink";

export default function BookingBand() {
  const b = programOverview.booking;
  return (
    <section className="band booking-band">
      <div className="wrap booking-inner">
        <div>
          <h2>{b.title}</h2>
          <p>{b.sub}</p>
        </div>
        <div className="btn-row">
          <CallLink className="btn btn-sage">Book a free call</CallLink>
          <Link href="/apply" className="btn btn-cream-outline">Apply</Link>
        </div>
      </div>
    </section>
  );
}
