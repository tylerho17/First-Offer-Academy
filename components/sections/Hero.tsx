import Link from "next/link";
import { site } from "@/content/site";
import { positioning } from "@/content/program";
import CallLink from "../CallLink";
import { Calendar, Pin, Users } from "../Icons";
import TrackPills from "./TrackPills";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">12-week internship program · Orange County</span>
          <h1>Your first internship shouldn&apos;t depend on which club lets you in.</h1>
          <p className="lede">
            First Offer Academy is a 12-week program that teaches first- and second-year college
            students how to land internships in finance, consulting, marketing, and tech, starting from zero.
            {" "}{positioning}
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply for the January cohort</Link>
            <CallLink />
          </div>
          <div className="proof-row">
            <span><Users />{site.cohort.seats} seats</span>
            <span><Calendar />Starts {site.cohort.start}</span>
            <span><Pin />Orange County</span>
          </div>
          <TrackPills />
        </div>

        <div className="portrait">
          <div className="portrait-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tyler.jpg" alt="Tyler Ho, founder of First Offer Academy" width={800} height={903} />
          </div>
          <div className="float-card float-b">
            <span className="seal">Founder</span>
            <div>7+ internships worked</div>
          </div>
          <div className="float-card float-a">
            <strong>8 students</strong>
            coached to internships in their first year of college
          </div>
        </div>
      </div>
    </section>
  );
}
