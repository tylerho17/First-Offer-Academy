-- 003: deposits paid through the Stripe deposit Payment Links (written by
-- /api/stripe/webhook). Additive only; safe to run more than once.
create extension if not exists citext;

create table if not exists public.deposits (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text unique not null,
  email citext not null,
  name text,
  phone text,
  amount_cents integer not null,
  currency text not null,
  payment_link_id text,
  status text not null default 'paid',          -- paid / refunded (manual for now)
  confirmation_sent_at timestamptz,
  owner_notified_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.deposits enable row level security;   -- no policies: server-only
