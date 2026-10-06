-- Read-only checks for the Supabase SQL editor. Run before and after
-- migrations/002. Nothing here changes data.

-- Columns of public.subscribers
select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'subscribers'
order by ordinal_position;

-- Row count and how many signups have no signup_source yet
-- (the second count errors before 002 if the column doesn't exist yet).
select count(*) as rows from public.subscribers;
select count(*) as missing_signup_source from public.subscribers where signup_source is null;

-- RLS on/off for the five form tables
select c.relname as table, c.relrowsecurity as rls_enabled
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('applications', 'contact_messages', 'referrals', 'story_submissions', 'subscribers')
order by 1;

-- Any policies on those tables (there should be none: no public read access)
select tablename, policyname, cmd, roles
from pg_policies
where schemaname = 'public'
  and tablename in ('applications', 'contact_messages', 'referrals', 'story_submissions', 'subscribers');
