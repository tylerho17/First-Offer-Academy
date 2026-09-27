import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/", "/enrolled"] }],
    sitemap: "https://firstofferacademy.com/sitemap.xml",
    host: "https://firstofferacademy.com",
  };
}
