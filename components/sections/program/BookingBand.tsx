import { programOverview } from "@/content/programOverview";
import CallLink from "../../CallLink";
import PayButton from "@/components/PayButton";

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
          <PayButton className="btn btn-sage" />
          <CallLink className="btn btn-cream-outline" />
        </div>
      </div>
    </section>
  );
}
