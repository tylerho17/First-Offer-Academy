import { NextResponse, type NextRequest } from "next/server";

// HTTP Basic Auth for /admin. If ADMIN_USER or ADMIN_PASSWORD is unset, the
// admin area doesn't exist at all (404).

export const config = { matcher: ["/admin", "/admin/:path*"] };

// Constant-time string compare (the Edge runtime has no timingSafeEqual).
function safeEqual(a: string, b: string) {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  if (!user || !pass) return new NextResponse("Not found", { status: 404 });

  const header = req.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const i = decoded.indexOf(":");
      // Compare both parts every time so timing doesn't reveal which was wrong.
      const userOk = safeEqual(i >= 0 ? decoded.slice(0, i) : "", user);
      const passOk = safeEqual(i >= 0 ? decoded.slice(i + 1) : "", pass);
      if (userOk && passOk) {
        const res = NextResponse.next();
        res.headers.set("X-Robots-Tag", "noindex, nofollow");
        res.headers.set("Cache-Control", "no-store");
        return res;
      }
    } catch {}
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="First Offer Admin", charset="UTF-8"', "Cache-Control": "no-store" },
  });
}
