import Link from "next/link";
import { site } from "@/content/site";
import CallLink from "../CallLink";
import { Book, Calendar, Users } from "../Icons";
import TrackPills from "./TrackPills";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">12-week internship program · Freshmen and sophomores</span>
          <h1>Your first internship shouldn&apos;t depend on which club lets you in.</h1>
          <p className="lede">
            A 12-week internship program for college freshmen and sophomores aiming at finance,
            consulting, marketing, and tech. Every student leaves with six things: a Candidate Brand,
            an Outreach System, a Story Bank, Track Technicals, Interview Reps, and the Accountability
            &amp; Pods that keep the work moving.
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply for the January cohort</Link>
            <CallLink />
          </div>
          <div className="proof-row">
            <span><Users />{site.cohort.seats} seats</span>
            <span><Calendar />Starts {site.cohort.start}</span>
            <span><Book />Freshmen and sophomores</span>
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
