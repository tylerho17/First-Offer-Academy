-- 002: additive only. Safe to run more than once.
-- Never drops, recreates or truncates anything, and changes no existing data
-- except backfilling subscribers.signup_source = 'newsletter' where it's null.

-- 1. subscribers.signup_source: where a signup came from (playbook /
--    newsletter / footer / template-...). The site writes it alongside the
--    older `source` column (kept as is).
alter table public.subscribers add column if not exists signup_source text;
update public.subscribers set signup_source = 'newsletter' where signup_source is null;

-- 2. Row Level Security ON for every form table. Turning it on when it's
--    already on is a no-op. No policies are added: the anon key can't read or
--    write; the server routes (app/api/*) insert with the service role key,
--    which bypasses RLS.
alter table public.applications enable row level security;
alter table public.contact_messages enable row level security;
alter table public.referrals enable row level security;
alter table public.story_submissions enable row level security;
alter table public.subscribers enable row level security;
