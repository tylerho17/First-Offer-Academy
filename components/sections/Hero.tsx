import Image from "next/image";
import Link from "next/link";
import CallLink from "../CallLink";
import LinkedInLink from "../LinkedInLink";
import VideoCard from "../VideoCard";
import { videoAt } from "@/content/videoTestimonials";
import { PILOT_LANDED, PILOT_STUDENTS, PLACEMENT_FIRMS, site } from "@/content/site";

export default function Hero() {
  // The lead video: the only large video on the homepage.
  const lead = videoAt("home-hero");
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Internship coaching · Freshmen and sophomores</span>
          <h1>Coached until your first offer.</h1>
          <p className="lede">
            Internship coaching for college freshmen and sophomores in Finance, Marketing, and Accounting. 12 weeks of
            training and mocks, then weekly check-ins and mocks until you land an offer.
          </p>
          <div className="btn-row">
            <Link href="/apply" className="btn btn-primary">Apply</Link>
            <CallLink />
          </div>
          <p className="hero-proof">
            {[`${PILOT_LANDED} of ${PILOT_STUDENTS} pilot students landed internships`, ...PLACEMENT_FIRMS].join(" · ")}
          </p>
          <div className="audience-split">
            <Link href="/program" className="audience-card">I&apos;m a student <span aria-hidden="true">→</span></Link>
            <Link href="/parents" className="audience-card">I&apos;m a parent <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <div className="hero-side">
        {lead && <VideoCard video={lead} size="hero" />}
        {/* The one place the founder photo appears on the homepage. Compact
            under the lead video. */}
        <figure className={`card founder-card${lead ? " is-compact" : ""}`}>
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
      </div>
    </section>
  );
}
