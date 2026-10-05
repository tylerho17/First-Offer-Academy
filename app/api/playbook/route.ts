import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { DOWNLOAD_COOKIE, gateOpen, setDownloadCookies, verifyDownload } from "@/lib/downloadToken";

// The Playbook PDF, behind the email gate. The file lives in private/, not
// public/, so there is no direct URL to it.
export async function GET(req: NextRequest) {
  const fromLink = req.nextUrl.searchParams.get("t");
  // ?fallback=1: the signup request itself failed (network or server down).
  // The visitor still gets the PDF: never a second gate.
  const fallback = req.nextUrl.searchParams.get("fallback") === "1";
  if (fallback) console.warn("[playbook] served via fallback (signup request failed)");
  const ok = fallback || gateOpen() || verifyDownload(fromLink) || verifyDownload(req.cookies.get(DOWNLOAD_COOKIE)?.value);
  if (!ok) return NextResponse.redirect(new URL("/playbook", req.url));

  const pdf = await readFile(path.join(process.cwd(), "private", "first-offer-playbook.pdf"));
  const res = new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="first-offer-playbook.pdf"',
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
  // Opened from the email link: remember this browser too.
  if (fromLink && verifyDownload(fromLink)) {
    setDownloadCookies(res, fromLink);
  }
  return res;
}
