import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ADMIN_TABLES, adminEnabled, cell, fetchRows, isAdminTable } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

const fmt = (v: unknown, col: string) =>
  col === "created_at" && typeof v === "string"
    ? new Date(v).toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" })
    : typeof v === "boolean"
      ? v ? "Yes" : "No"
      : cell(v);

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ table?: string }> }) {
  // Middleware already guards /admin; this is a second lock.
  if (!adminEnabled()) notFound();
  const { table: t = "applications" } = await searchParams;
  const table = isAdminTable(t) ? t : "applications";
  const { rows, error } = await fetchRows(table);
  const cols = rows.length ? Object.keys(rows[0]).filter((c) => c !== "id") : [];

  return (
    <section className="section admin" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <span className="eyebrow">Admin · read-only</span>
        <h1 className="admin-title">Submissions</h1>
        <nav className="tab-row admin-tabs" aria-label="Tables">
          {Object.entries(ADMIN_TABLES).map(([key, label]) => (
            <Link key={key} href={`/admin?table=${key}`} className={`tab${key === table ? " is-active" : ""}`} aria-current={key === table ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="admin-bar">
          <p>{error ? <strong>{error}</strong> : `${rows.length} row${rows.length === 1 ? "" : "s"}, newest first${rows.length === 1000 ? " (showing the latest 1,000)" : ""}`}</p>
          {rows.length > 0 && <a href={`/admin/export/${table}`} className="btn btn-secondary">Export CSV</a>}
        </div>
        {rows.length > 0 && (
          <div className="table-scroll" data-scroller>
            <table className="admin-table">
              <thead>
                <tr>{cols.map((c) => <th key={c} scope="col">{c.replace(/_/g, " ")}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={String(r.id)}>{cols.map((c) => <td key={c}>{fmt(r[c], c)}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
