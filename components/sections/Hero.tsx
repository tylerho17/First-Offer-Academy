import Image from "next/image";
import Link from "next/link";
import LinkedInLink from "../LinkedInLink";
import VideoCard from "../VideoCard";
import { videoAt } from "@/content/videoTestimonials";
import { PILOT_LANDED, PILOT_STUDENTS, PLACEMENT_FIRMS, site } from "@/content/site";
import PrimaryCTA, { CtaNote } from "../PrimaryCTA";
import AvatarGroup from "../AvatarGroup";
import { founder, shownCredentials } from "@/content/founder";

export default function Hero() {
  // The lead video: the only large video on the homepage.
  const lead = videoAt("home-hero");
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Internship coaching · Business freshmen and sophomores</span>
          <h1>Coached until your first offer.</h1>
          <p className="lede">{site.description}</p>
          <AvatarGroup />
          <div className="cta-block">
            <PrimaryCTA location="hero" />
            <CtaNote />
          </div>
          <p className="hero-secondary"><Link href="/apply" className="link-arrow">Apply →</Link></p>
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
        {/* The one place the founder photo appears on the homepage. Two
            columns: the photo in its own fixed box, the text beside it
            (photo on top below 560px). Nothing is absolutely positioned. */}
        <figure className="card founder-card">
          <div className="founder-card-photo">
            <Image src="/images/tyler.jpg" alt="Tyler Ho, founder of First Offer Academy" width={800} height={903} sizes="160px" priority />
          </div>
          <figcaption>
            <p className="founder-card-name"><strong>{founder.name}</strong>, {founder.title}</p>
            <ul className="founder-card-creds">
              {shownCredentials().map((c) => <li key={c.label}>{c.value} {c.label}</li>)}
            </ul>
            <p className="founder-card-links">
              <Link href="/about" className="link-arrow">Meet Tyler →</Link>
              <LinkedInLink />
            </p>
          </figcaption>
        </figure>
        </div>
      </div>
    </section>
  );
}
