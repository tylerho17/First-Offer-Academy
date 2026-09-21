import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import NewsletterForm from "./NewsletterForm";
import { site } from "@/content/site";
import { tracks } from "@/content/tracks";

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
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/blog">The Playbook</Link></li>
              <li><Link href="/events">Free events</Link></li>
              <li><Link href="/workshops">School workshops</Link></li>
            </ul>
          </div>
          <div>
            <h4>Program</h4>
            <ul>
              <li><Link href="/program">How it works</Link></li>
              {tracks.map((t) => (
                <li key={t.slug}><Link href={`/tracks/${t.slug}`}>{t.name} track</Link></li>
              ))}
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/apply">Apply</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer">Book a parent call</a></li>
              <li>Irvine, California</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 First Offer Academy · All rights reserved</span>
          <span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span>
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
