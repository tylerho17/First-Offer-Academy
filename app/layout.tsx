import type { Metadata } from "next";
import { Young_Serif, Hanken_Grotesk } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const youngSerif = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-young-serif", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://firstofferacademy.com"),
  title: {
    default: "First Offer Academy · 12-week internship program for college students",
    template: "%s · First Offer Academy",
  },
  description:
    "A 12-week program that teaches first- and second-year college students in Orange County how to land internships in finance, consulting, marketing, and tech.",
  openGraph: {
    title: "First Offer Academy",
    description: "Build the skills. Be that candidate. Get the offer.",
    images: ["/images/tyler.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${hanken.variable}`}>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
