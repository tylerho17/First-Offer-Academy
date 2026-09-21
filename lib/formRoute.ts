import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "./supabase";

// Shared POST handler for every form route:
// 1. basic in-memory rate limit per IP (per route, per minute)
// 2. honeypot: bots fill the hidden `website` field; we pretend it worked
// 3. zod validation
// 4. insert with the service role key; 503 when Supabase isn't configured
//
// The in-memory limiter resets on cold starts and isn't shared between
// serverless instances. It stops casual abuse, not a determined attacker.

export const HONEYPOT = "website";
const LIMIT = 5;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
    return false;
  }
  entry.count++;
  return entry.count > LIMIT;
}

// Optional text: "" and whitespace become null.
export const optText = (max = 500) =>
  z.string().trim().max(max).optional().transform((v) => (v ? v : null));
export const reqText = (max = 200) => z.string().trim().min(1).max(max);
export const email = () => z.string().trim().toLowerCase().pipe(z.email()).pipe(z.string().max(254));
export const bool = () => z.boolean().optional().default(false);

type Options<S extends z.ZodType> = {
  name: string;
  schema: S;
  table: string;
  toRow: (data: z.output<S>) => Record<string, unknown>;
  upsertOn?: string; // ignore duplicates on this unique column
  after?: (data: z.output<S>) => Promise<void>; // e.g. confirmation emails; errors are logged, not surfaced
};

export function formRoute<S extends z.ZodType>(opts: Options<S>) {
  return async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
    if (rateLimited(`${opts.name}:${ip}`)) {
      return NextResponse.json({ error: "Too many requests. Please wait a minute and try again." }, { status: 429 });
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    if (typeof body !== "object" || body === null) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

    // Honeypot filled: answer like a success so bots learn nothing.
    if (typeof body[HONEYPOT] === "string" && body[HONEYPOT] !== "") return NextResponse.json({ ok: true });

    const parsed = opts.schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Please check the form and try again.", fields: z.flattenError(parsed.error).fieldErrors }, { status: 400 });
    }

    const db = supabaseAdmin();
    if (!db) return NextResponse.json({ error: "Not connected yet." }, { status: 503 });

    const row = opts.toRow(parsed.data);
    const { error } = opts.upsertOn
      ? await db.from(opts.table).upsert(row, { onConflict: opts.upsertOn, ignoreDuplicates: true })
      : await db.from(opts.table).insert(row);
    if (error) {
      console.error(`[${opts.name}] insert failed:`, error.message);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }

    if (opts.after) {
      try {
        await opts.after(parsed.data);
      } catch (e) {
        console.error(`[${opts.name}] after-submit hook failed:`, e);
      }
    }
    return NextResponse.json({ ok: true });
  };
}
