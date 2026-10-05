// Email capture needs Supabase (the source of truth for subscribers). Without
// both keys the site falls back to ungated downloads and hides email fields,
// so a visitor never sees a "not connected" message.
export const captureConfigured = () => !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
