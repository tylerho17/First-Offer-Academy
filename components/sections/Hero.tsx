import Image from "next/image";
import CallLink from "../CallLink";
import LinkedInLink from "../LinkedInLink";
import PayButton from "../PayButton";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">8-week internship program · Freshmen and sophomores</span>
          <h1>Your first internship shouldn&apos;t depend on which club lets you in.</h1>
          <p className="lede">
            An 8-week internship program for college freshmen and sophomores in finance, marketing,
            and accounting.
          </p>
          <div className="btn-row">
            <PayButton />
            <CallLink />
          </div>
        </div>

        {/* The one place the founder photo appears on the homepage. */}
        <figure className="card founder-card">
          <div className="founder-card-photo">
            <Image
              src="/images/tyler.jpg"
              alt="Tyler Ho, founder of First Offer Academy"
              width={800}
              height={903}
              sizes="(min-width: 900px) 360px, 90vw"
              priority
            />
          </div>
          <figcaption>
            <strong>{site.founder.name}, Founder</strong>
            <span>7+ internships worked, incoming investment banking analyst</span>
            <LinkedInLink />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
