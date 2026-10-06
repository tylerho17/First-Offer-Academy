-- 004: full payments ($5,000 Payment Links) share public.deposits with the
-- $1,000 deposits. Additive only; safe to run more than once. Existing rows
-- get the default, 'deposit'.
alter table public.deposits add column if not exists payment_type text default 'deposit';  -- deposit / full
