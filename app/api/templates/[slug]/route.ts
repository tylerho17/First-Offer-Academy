import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { downloads, templateFileName } from "@/content/downloads";
import { DOWNLOAD_COOKIE, gateOpen, verifyDownload } from "@/lib/downloadToken";

// A template file, behind the email gate. Files live in private/templates/;
// without the signup cookie this sends the visitor to the template's card on
// /free-resources.
const TYPES: Record<string, string> = { pdf: "application/pdf", csv: "text/csv; charset=utf-8" };

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = downloads.find((x) => x.slug === slug);
  if (!d) return NextResponse.redirect(new URL("/free-resources", req.url));
  if (!gateOpen() && !verifyDownload(req.cookies.get(DOWNLOAD_COOKIE)?.value)) {
    return NextResponse.redirect(new URL(`/free-resources#${slug}`, req.url));
  }
  const name = templateFileName(d);
  const file = await readFile(path.join(process.cwd(), "private", "templates", name));
  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": TYPES[d.format.toLowerCase()],
      "Content-Disposition": `attachment; filename="${name}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
