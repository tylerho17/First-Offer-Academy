import { INSTAGRAM_POSTS, INSTAGRAM_URL, isLive } from "@/content/social";

// Instagram post/reel URL → embed URL, e.g.
// https://www.instagram.com/p/ABC123/ → https://www.instagram.com/p/ABC123/embed/
function embedUrl(url: string): string | null {
  const m = url.match(/instagram\.com\/(p|reel|tv)\/([\w-]+)/);
  return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed/` : null;
}

// "From the program": Instagram posts from content/social.ts. Renders nothing
// while INSTAGRAM_POSTS is empty. Embeds are lazy iframes (no Instagram
// script), so they don't load until scrolled near.
export default function FromTheProgram() {
  const posts = INSTAGRAM_POSTS.map((url) => ({ url, src: embedUrl(url) })).filter((p) => p.src);
  if (posts.length === 0) return null;

  return (
    <section className="section" aria-labelledby="from-program-title" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <h2 id="from-program-title">From the program</h2>
        </div>
        <div className="insta-grid">
          {posts.map((p, i) => (
            <div className="insta-card" key={p.url}>
              <iframe src={p.src!} title={`Instagram post ${i + 1} from First Offer Academy`} loading="lazy" scrolling="no" />
            </div>
          ))}
        </div>
        {isLive(INSTAGRAM_URL) && (
          <div className="btn-row">
            <a href={INSTAGRAM_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Follow on Instagram<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
