import type { Metadata } from "next";
import { Source_Serif_4, Hanken_Grotesk } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sourceSerif = Source_Serif_4({ weight: "600", subsets: ["latin"], variable: "--font-source-serif", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://firstofferacademy.com"),
  title: {
    default: "First Offer Academy · 12-week internship program for college students",
    template: "%s · First Offer Academy",
  },
  description:
    "A 12-week internship program for college freshmen and sophomores in finance, consulting, marketing, and tech.",
  openGraph: {
    type: "website",
    siteName: "First Offer Academy",
    locale: "en_US",
    title: "First Offer Academy",
    description: "Build the skills. Be that candidate. Get the offer.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${hanken.variable}`}>
      <body>
        <AnnouncementBar />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <Analytics />
        <AnalyticsEvents />
        <Reveal />
        <BackToTop />
      </body>
    </html>
  );
}
