import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { tracks } from "@/content/tracks";
import { permittedStories } from "@/content/stories";
import { weeks, weekHref } from "@/content/curriculum";
import { staticRoutes } from "@/lib/routes";

const BASE = "https://firstofferacademy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamic = [
    ...articles.map((a) => ({ path: `/blog/${a.slug}`, lastModified: new Date(a.date + "T12:00:00") })),
    ...tracks.map((t) => ({ path: `/tracks/${t.slug}` })),
    ...weeks.map((w) => ({ path: weekHref(w.n) })),
    ...permittedStories().map((s) => ({ path: `/results/${s.slug}` })),
  ];
  return [
    ...staticRoutes().map((path) => ({
      url: BASE + (path === "/" ? "" : path),
      priority: path === "/" ? 1 : path === "/program" || path === "/apply" ? 0.9 : 0.7,
    })),
    ...dynamic.map((d) => ({ url: BASE + d.path, ...("lastModified" in d ? { lastModified: d.lastModified } : {}), priority: 0.6 })),
  ];
}
