import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import NewsletterForm from "./NewsletterForm";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-cols">
          <div className="footer-brand">
            <Logo />
            <p className="tagline">{site.tagline}</p>
            <Social />
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/results">Testimonials</Link></li>
              <li><Link href="/parents">For parents</Link></li>
              <li><Link href="/blog">The Playbook</Link></li>
              <li><Link href="/timeline">Free recruiting timeline</Link></li>
              <li><Link href="/events">Free events</Link></li>
              <li><Link href="/workshops">School workshops</Link></li>
              <li><Link href="/apply">Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4>Program Details</h4>
            <ul>
              <li><Link href="/program">How it works</Link></li>
              <li><Link href="/curriculum">Curriculum</Link></li>
              <li><Link href="/program#modules">The six parts</Link></li>
              <li><Link href="/our-promise">Our promise</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/program#compare">Compare options</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">Book a parent call</a></li>
              <li><Link href="/refer">Refer a student</Link></li>
              <li>Irvine, California</li>
              {site.zhReviewed && <li><Link href="/zh" lang="zh-Hans">中文（家长）</Link></li>}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 First Offer Academy · All rights reserved</span>
          <nav aria-label="Legal" className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refunds">Refunds</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/code-of-conduct">Code of Conduct</Link>
          </nav>
          <p className="footer-disclaimer">First Offer Academy is not affiliated with any employer, university, or student organization mentioned by students.</p>
        </div>
      </div>
      <aside className="footer-nl" aria-labelledby="nl-title">
        <h3 id="nl-title">The First Offer Newsletter</h3>
        <p>Every other week: recruiting timelines, outreach templates, and interview tips for students and parents. Free.</p>
        <NewsletterForm />
      </aside>
    </footer>
  );
}
