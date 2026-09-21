import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

// Every static page route, found by scanning app/ for page.tsx files.
// Dynamic segments ([slug]), route groups, and private routes are skipped;
// dynamic pages are added from content in app/sitemap.ts.

// Never listed in the sitemap: admin, payment result pages, and anything
// kept out of search on purpose.
export const PRIVATE_ROUTES = ["/admin", "/deposit", ...(site.zhReviewed ? [] : ["/zh"])];

export function staticRoutes(dir = path.join(process.cwd(), "app"), base = ""): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name.startsWith("[") || name.startsWith("_") || name === "api") continue;
      const seg = name.startsWith("(") ? "" : `/${name}`;
      out.push(...staticRoutes(full, base + seg));
    } else if (name === "page.tsx") {
      out.push(base || "/");
    }
  }
  return out.filter((r) => !PRIVATE_ROUTES.some((p) => r === p || r.startsWith(p + "/"))).sort();
}
