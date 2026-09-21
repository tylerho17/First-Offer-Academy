-- First Offer Academy: form submissions.
-- Row Level Security is ON for every table with NO public policies, so the
-- anon key can't read or write anything. Only the server (service role key,
-- used in app/api/*) can insert, and only /admin reads.

create extension if not exists citext;

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email citext not null,
  phone text,
  school text not null,
  year text not null,
  major text,
  tracks text[] not null default '{}',
  gpa text,
  source text,
  tried text,
  obstacle text,
  parent_name text,
  parent_email citext,
  agree_terms boolean not null,
  updates_consent boolean not null default false
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email citext not null unique,
  first_name text,
  role text,
  source text
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text,
  email citext not null,
  phone text not null,
  role text,
  message text,
  sms_consent boolean not null default false
);

create table if not exists public.story_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email citext not null,
  school text not null,
  year text not null,
  track text not null,
  employer text,
  quote text not null,
  video_url text,
  publish_quote boolean not null default false,
  publish_employer boolean not null default false,
  publish_media boolean not null default false
);

create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  referrer_name text not null,
  referrer_email citext not null,
  referrer_role text not null,
  friend_name text not null,
  friend_contact text not null,
  friend_role text,
  friend_school text,
  note text,
  has_permission boolean not null
);

alter table public.applications enable row level security;
alter table public.subscribers enable row level security;
alter table public.contact_messages enable row level security;
alter table public.story_submissions enable row level security;
alter table public.referrals enable row level security;

create index if not exists applications_created_at_idx on public.applications (created_at desc);
create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
create index if not exists story_submissions_created_at_idx on public.story_submissions (created_at desc);
create index if not exists referrals_created_at_idx on public.referrals (created_at desc);
