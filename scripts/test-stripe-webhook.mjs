// Tests /api/stripe/webhook end to end against a stand-in Supabase (PostgREST)
// and Resend, with events signed by Stripe's own test helper.
//
//   1. Build and start the site pointed at the stand-in (port 4547):
//        SUPABASE_URL=http://localhost:4547 SUPABASE_SERVICE_ROLE_KEY=test \
//        RESEND_API_KEY=re_test RESEND_BASE_URL=http://localhost:4547 EMAIL_FROM="FOA <test@example.com>" \
//        STRIPE_WEBHOOK_SECRET=whsec_test DEPOSIT_PAYMENT_LINK_IDS=plink_deposit_test FULL_PAYMENT_LINK_IDS=plink_full_test \
//        npm run build && npx next start -p 3125
//   2. In another terminal (same env not needed):  BASE=http://localhost:3125 npm run test:webhook
//
// Never point this at the live database or real keys.

import http from "node:http";
import assert from "node:assert/strict";
import Stripe from "stripe";

const BASE = process.env.BASE || "http://localhost:3125";
const SECRET = "whsec_test";
const stripe = new Stripe("sk_test_unused");

// --- stand-in Supabase (the subset of PostgREST the route uses) + Resend ---
const rows = [];
const emails = [];
let failEmails = false;
let failInsert = false;
let noPaymentTypeColumn = false; // simulates migration 004 not run yet
const match = (row, q) =>
  [...q.entries()].every(([k, v]) => {
    if (["select", "on_conflict"].includes(k)) return true;
    if (v.startsWith("eq.")) return String(row[k]) === v.slice(3);
    if (v === "is.null") return row[k] === null || row[k] === undefined;
    return true;
  });
const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    const u = new URL(req.url, "http://x");
    const json = (code, data) => { res.writeHead(code, { "Content-Type": "application/json" }); res.end(data === undefined ? "" : JSON.stringify(data)); };
    if (u.pathname === "/rest/v1/deposits" && req.method === "POST") {
      if (failInsert) return json(500, { message: "simulated outage" });
      const row = JSON.parse(body);
      if (noPaymentTypeColumn && (Array.isArray(row) ? row : [row]).some((r) => "payment_type" in r)) {
        return json(400, { code: "PGRST204", message: "Could not find the 'payment_type' column of 'deposits' in the schema cache" });
      }
      for (const r of Array.isArray(row) ? row : [row]) {
        if (!rows.some((x) => x.stripe_session_id === r.stripe_session_id)) rows.push({ confirmation_sent_at: null, owner_notified_at: null, id: `row_${rows.length + 1}`, ...r });
      }
      return json(201, []);
    }
    if (u.pathname === "/rest/v1/deposits" && req.method === "PATCH") {
      const patch = JSON.parse(body);
      const hit = rows.filter((r) => match(r, u.searchParams));
      hit.forEach((r) => Object.assign(r, patch));
      return u.searchParams.has("select") ? json(200, hit.map((r) => ({ id: r.id }))) : json(204);
    }
    if (u.pathname === "/emails" && req.method === "POST") {
      if (failEmails) return json(500, { message: "simulated Resend outage", name: "application_error", statusCode: 500 });
      const m = JSON.parse(body);
      emails.push({ to: m.to, subject: m.subject, text: m.text, html: m.html });
      return json(200, { id: `email_${emails.length}` });
    }
    json(404, { message: `unhandled ${req.method} ${u.pathname}` });
  });
});
await new Promise((r) => server.listen(4547, r));

// --- helpers ---
let n = 0;
const session = (over = {}) => ({
  id: `cs_test_${++n}`,
  object: "checkout.session",
  payment_status: "paid",
  payment_link: "plink_deposit_test",
  amount_total: 100000,
  currency: "usd",
  created: 1791200000,
  customer_details: { email: "parent@example.com", name: "Pat Parent", phone: "+15555550123" },
  ...over,
});
const event = (obj, type = "checkout.session.completed") => ({ id: `evt_${n}`, object: "event", type, data: { object: obj } });
async function post(evt, { badSig = false } = {}) {
  const payload = JSON.stringify(evt);
  const header = badSig ? "t=1,v1=deadbeef" : stripe.webhooks.generateTestHeaderString({ payload, secret: SECRET });
  const res = await fetch(`${BASE}/api/stripe/webhook`, { method: "POST", headers: { "stripe-signature": header, "Content-Type": "application/json" }, body: payload });
  return { status: res.status, body: await res.json().catch(() => ({})) };
}

let failures = 0;
async function check(name, fn) {
  try { await fn(); console.log(`PASS ${name}`); } catch (e) { failures++; console.log(`FAIL ${name}\n     ${e.message}`); }
}

// (a) a deposit link: 1 row, 2 emails (parent + owner)
const s1 = session();
await check("(a) deposit payment: 1 row, 2 emails", async () => {
  const r = await post(event(s1));
  assert.equal(r.status, 200);
  assert.equal(rows.filter((x) => x.stripe_session_id === s1.id).length, 1);
  assert.equal(emails.length, 2);
  const parent = emails.find((e) => e.to === "parent@example.com" || (Array.isArray(e.to) && e.to.includes("parent@example.com")));
  const owner = emails.find((e) => e !== parent);
  assert.equal(parent.subject, "You're in: your First Offer Academy seat is held");
  assert.match(parent.text, /^Hi Pat,/);
  assert.match(parent.text, /Your seat in the January 2027 founding cohort is held\./);
  assert.match(parent.text, /Keep this email; it's your confirmation\. Stripe also sent a separate receipt\./);
  assert.match(parent.text, /fully refundable until December 15, 2026/);
  assert.match(parent.text, /Questions\? Just reply to this email\./);
  assert.doesNotMatch(parent.text + parent.html, /guarantee/i);
  assert.equal(owner.subject, "New deposit: Pat Parent ($1,000)");
  assert.match(owner.text, /Send pre-work within 2 business days\./);
  assert.match(owner.text, /dashboard\.stripe\.com\/payments/);
  assert.match(owner.text, /PT/);
  const row = rows.find((x) => x.stripe_session_id === s1.id);
  assert.ok(row.confirmation_sent_at && row.owner_notified_at, "both timestamps set");
});

// (b) the same event again: nothing new
await check("(b) replayed event: no new row, no new email", async () => {
  const r = await post(event(s1));
  assert.equal(r.status, 200);
  assert.equal(rows.filter((x) => x.stripe_session_id === s1.id).length, 1);
  assert.equal(emails.length, 2);
});

// (c) a non-deposit payment link (and an unpaid session): ignored
await check("(c) non-deposit link and unpaid session: ignored", async () => {
  const before = { rows: rows.length, emails: emails.length };
  const r1 = await post(event(session({ payment_link: "plink_something_else" })));
  const r2 = await post(event(session({ payment_status: "unpaid" })));
  const r3 = await post(event(session(), "payment_intent.succeeded"));
  for (const r of [r1, r2, r3]) assert.equal(r.status, 200);
  assert.equal(rows.length, before.rows);
  assert.equal(emails.length, before.emails);
});

// (d) a bad signature: 400, nothing saved
await check("(d) bad signature: 400", async () => {
  const before = rows.length;
  const r = await post(event(session()), { badSig: true });
  assert.equal(r.status, 400);
  assert.equal(rows.length, before);
});

// (e) email outage: row saved, 200, emails retried on the next delivery
await check("(e) email outage: row saved + 200, and a retry sends the emails once", async () => {
  const s = session();
  failEmails = true;
  const r = await post(event(s));
  assert.equal(r.status, 200);
  const row = rows.find((x) => x.stripe_session_id === s.id);
  assert.ok(row && row.confirmation_sent_at === null && row.owner_notified_at === null, "claims released");
  failEmails = false;
  const before = emails.length;
  await post(event(s));
  assert.equal(emails.length, before + 2);
  await post(event(s));
  assert.equal(emails.length, before + 2);
});

// (f) database outage: 500 so Stripe retries, no emails
await check("(f) database outage: 500, no emails", async () => {
  failInsert = true;
  const before = emails.length;
  const r = await post(event(session()));
  failInsert = false;
  assert.equal(r.status, 500);
  assert.equal(emails.length, before);
});

// (g) a full payment ($5,000 link): row with payment_type 'full', both emails
await check("(g) full payment: row payment_type 'full', confirmed + full-payment emails", async () => {
  const s = session({ payment_link: "plink_full_test", amount_total: 500000 });
  const before = emails.length;
  const r = await post(event(s));
  assert.equal(r.status, 200);
  const row = rows.find((x) => x.stripe_session_id === s.id);
  assert.equal(row.payment_type, "full");
  const sent = emails.slice(before);
  assert.equal(sent.length, 2);
  const parent = sent.find((e) => e.subject.startsWith("You're in"));
  const owner = sent.find((e) => e !== parent);
  assert.equal(parent.subject, "You're in: your First Offer Academy seat is confirmed");
  assert.match(parent.text, /Your seat in the January 2027 founding cohort is confirmed\. The program is paid in full\./);
  assert.match(parent.text, /Keep this email; it's your confirmation\./);
  assert.doesNotMatch(parent.text + parent.html, /refundable|held|credited|guarantee/i);
  assert.match(parent.text, /Questions\? Just reply to this email\./);
  assert.equal(owner.subject, "New full payment: Pat Parent ($5,000)");
  // the deposit email still has its own subject and refund line
  const dep = emails.find((e) => e.subject === "You're in: your First Offer Academy seat is held");
  assert.match(dep.text, /fully refundable until December 15, 2026/);
});

// (h) the same full payment again: nothing new
await check("(h) replayed full payment: no new row, no new email", async () => {
  const s = rows.find((x) => x.payment_type === "full");
  const before = emails.length;
  const r = await post(event(session({ id: s.stripe_session_id, payment_link: "plink_full_test", amount_total: 500000 })));
  assert.equal(r.status, 200);
  assert.equal(rows.filter((x) => x.stripe_session_id === s.stripe_session_id).length, 1);
  assert.equal(emails.length, before);
});

// (i) migration 004 not run yet: still saved (without payment_type), emails sent
await check("(i) payment_type column missing: row saved without it, emails sent", async () => {
  noPaymentTypeColumn = true;
  const s = session({ payment_link: "plink_full_test", amount_total: 500000 });
  const before = emails.length;
  const r = await post(event(s));
  noPaymentTypeColumn = false;
  assert.equal(r.status, 200);
  const row = rows.find((x) => x.stripe_session_id === s.id);
  assert.ok(row && !("payment_type" in row));
  assert.equal(emails.length, before + 2);
});

server.close();
console.log(failures ? `\n${failures} failed` : "\nall passed");
process.exit(failures ? 1 : 0);
