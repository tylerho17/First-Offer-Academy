// Social profiles and Instagram posts. The only place these URLs live.
//
// TikTok and Instagram start as placeholder strings. While a URL is still its
// placeholder (or empty), its footer button, the "Follow on Instagram"
// button, and anything else that links to it stay hidden.

export const LINKEDIN_URL = "https://www.linkedin.com/company/first-offer-academy";
export const TIKTOK_URL = "TIKTOK_URL"; // TODO(Tyler): e.g. "https://www.tiktok.com/@firstofferacademy"
export const INSTAGRAM_URL = "INSTAGRAM_URL"; // TODO(Tyler): e.g. "https://www.instagram.com/firstofferacademy"

// Instagram post or reel URLs for the "From the program" section on the home
// page, e.g. "https://www.instagram.com/p/ABC123xyz/". Empty = the section
// doesn't render.
export const INSTAGRAM_POSTS: string[] = [];

const PLACEHOLDERS = new Set(["TIKTOK_URL", "INSTAGRAM_URL"]);

// A real, usable URL: not empty and not a placeholder string.
export const isLive = (url: string) => !!url && !PLACEHOLDERS.has(url) && /^https?:\/\//.test(url);

export const socialLinks = [
  { name: "LinkedIn", url: LINKEDIN_URL },
  { name: "TikTok", url: TIKTOK_URL },
  { name: "Instagram", url: INSTAGRAM_URL },
] as const;

export const liveSocialLinks = () => socialLinks.filter((s) => isLive(s.url));
