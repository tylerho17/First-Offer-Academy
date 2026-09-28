import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import CallLink from "../CallLink";
import { Book, Calendar, Users } from "../Icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">8-week internship program · Freshmen and sophomores</span>
          <h1>Your first internship shouldn&apos;t depend on which club lets you in.</h1>
          <p className="lede">
            An 8-week internship program for college freshmen and sophomores in finance, consulting,
            and marketing.
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply for the January cohort</Link>
            <CallLink />
            <Link href="/free-resources" className="btn btn-quiet">Free resources</Link>
          </div>
          <div className="proof-row">
            <span><Users />{site.cohort.seats} seats</span>
            <span><Calendar />Starts {site.cohort.start}</span>
            <span><Book />Freshmen and sophomores</span>
          </div>
        </div>

        <div className="portrait">
          <div className="portrait-card">
            <Image
              src="/images/tyler.jpg"
              alt="Tyler Ho, founder of First Offer Academy"
              width={800}
              height={903}
              sizes="(min-width: 1100px) 440px, (min-width: 700px) 40vw, 90vw"
              priority
            />
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
