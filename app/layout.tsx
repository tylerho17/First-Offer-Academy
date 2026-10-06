import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import Reveal from "@/components/Reveal";
import NewsletterBand from "@/components/NewsletterBand";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

// The two brand fonts. Swapping one is a one-line change here: globals.css reads
// them only through --font-display and --font-body.
// Newsreader (variable: weights 500/600 used, optical-size axis on) for
// headlines, names, and big numbers; Instrument Sans (400/500/600) for body/UI.
const display = Newsreader({ subsets: ["latin"], axes: ["opsz"], variable: "--font-display-face", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body-face", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://firstofferacademy.com"),
  // "./" resolves per route, so every page gets its own canonical URL and the
  // www, non-www, and ?utm= variants don't compete with each other in search.
  alternates: { canonical: "./" },
  title: {
    default: "First Offer Academy | Coached until your first offer.",
    template: "%s | First Offer Academy",
  },
  description: site.description,
  // The preview image is app/opengraph-image.tsx (and twitter-image.tsx).
  openGraph: {
    type: "website",
    siteName: "First Offer Academy",
    locale: "en_US",
    title: "First Offer Academy | Coached until your first offer.",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: "First Offer Academy | Coached until your first offer.", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <AnnouncementBar />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <NewsletterBand />
        <Footer />
        <StickyCTA />
        <Analytics />
        <SpeedInsights />
        <AnalyticsEvents />
        <Reveal />
      </body>
    </html>
  );
}
