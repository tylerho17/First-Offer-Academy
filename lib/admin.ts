import { supabaseAdmin } from "./supabase";

// Tables shown in /admin, in tab order.
export const ADMIN_TABLES = {
  applications: "Applications",
  subscribers: "Subscribers",
  contact_messages: "Contact messages",
  story_submissions: "Story submissions",
  referrals: "Referrals",
} as const;

export type AdminTable = keyof typeof ADMIN_TABLES;
export const isAdminTable = (t: string): t is AdminTable => t in ADMIN_TABLES;
export const adminEnabled = () => !!process.env.ADMIN_USER && !!process.env.ADMIN_PASSWORD;

export type Row = Record<string, unknown>;

export async function fetchRows(table: AdminTable, limit = 1000): Promise<{ rows: Row[]; error?: string }> {
  const db = supabaseAdmin();
  if (!db) return { rows: [], error: "Supabase isn't connected (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing)." };
  const { data, error } = await db.from(table).select("*").order("created_at", { ascending: false }).limit(limit);
  return error ? { rows: [], error: error.message } : { rows: data ?? [] };
}

export const cell = (v: unknown) =>
  v === null || v === undefined ? "" : Array.isArray(v) ? v.join(", ") : typeof v === "object" ? JSON.stringify(v) : String(v);

// CSV with spreadsheet formula injection guarded (=, +, -, @ prefixes).
export function toCsv(rows: Row[]) {
  if (rows.length === 0) return "";
  const cols = Object.keys(rows[0]);
  const esc = (v: unknown) => {
    let s = cell(v);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\r\n");
}
