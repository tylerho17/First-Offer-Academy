-- 006: The First Offer Scholarship applications (/scholarship), 2026-10-12.
-- New table only. RLS on with no policies: the server route writes with the
-- service role key; nothing is readable or writable from the browser.
create extension if not exists citext;

create table if not exists public.scholarship_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email citext not null,
  phone text not null,
  school text not null,
  major text not null,
  year text not null,
  linkedin_url text,
  answer_recruiting text not null,
  answer_drive text not null,
  answer_cost text not null,
  commitment boolean not null
);

alter table public.scholarship_applications enable row level security;

create index if not exists scholarship_applications_created_at_idx
  on public.scholarship_applications (created_at desc);
