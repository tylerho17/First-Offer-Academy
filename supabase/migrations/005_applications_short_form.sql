-- 005: the short /apply form (2026-10-12). Additive only: one new column on
-- the existing applications table. Nothing is dropped, renamed, or rewritten.
alter table public.applications add column if not exists recruiting_status text;
