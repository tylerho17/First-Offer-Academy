// Social profiles and Instagram posts. The only place these URLs live.
//
// If a URL is ever set back to empty or a placeholder string, its footer
// button (and the "Follow on Instagram" button) hides instead of rendering a
// dead link.

export const LINKEDIN_URL = "https://www.linkedin.com/company/first-offer-academy";
export const TIKTOK_URL = "https://www.tiktok.com/@firstofferacademy";
export const INSTAGRAM_URL = "https://www.instagram.com/firstofferacademy/";

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
