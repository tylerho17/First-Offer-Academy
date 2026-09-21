import { adminEnabled, fetchRows, isAdminTable, toCsv } from "@/lib/admin";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ table: string }> }) {
  const { table } = await params;
  if (!adminEnabled() || !isAdminTable(table)) return new Response("Not found", { status: 404 });
  const { rows, error } = await fetchRows(table, 100_000);
  if (error) return new Response(error, { status: 503 });
  const date = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + toCsv(rows), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${table}-${date}.csv"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
