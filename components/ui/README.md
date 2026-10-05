# components/ui

Small, reusable UI pieces (patterns from component.gallery). Token-based: they use the site's CSS variables, fonts and radii from `app/globals.css` (`.ui-*` classes). Native elements where possible, visible focus rings, tap targets of at least 44px, and no dependencies.

| Component | Pattern | Props |
|---|---|---|
| `Stat` | Statistic / KPI tile | `value: string`, `label: string`, `className?` |
| `Badge` | Badge / tag | `children`, `tone?: "navy" \| "sage" \| "outline"` (default `navy`) |
| `Timeline` | Vertical timeline (`<ol>`) | `items: TimelineItem[]` (`title`, `subtitle?`, `meta?`, `detail?`, `badge?: { label, tone? }`), `className?`. Empty fields render nothing. |
| `Disclosure` | Accordion (native `<details>`) | `summary`, `children`, `open?` (default closed), `className?` |
| `PullQuote` | Blockquote | `children`, `cite?` |
| `ResourceCard` | Resource card | `href`, `title`, `body?`, `tag?`. One link; badge, title (2 lines max), description (2 lines max), "Open →" pinned to the bottom. |
| `ResourceRow` | Compact list row | `href`, `title`, `body?`, `tag?`. One link, about 72px tall, hairline dividers when wrapped in `.ui-resource-rows`. |
| `LogoTile` | Logo wall tile | `name` (alt text + screen-reader name), `caption`, `logo: string \| null` (null = monogram), `ratio?` (width/height, for equal visual weight), `mono?` (white-only logo drawn navy), `monogram?`, `badge?` |
| `CTABanner` | Call-to-action banner | `title: string`, `body?: string`, `action: ReactNode` (pass the existing button, e.g. `<CallLink />`) |

Used on `/about` (`Stat`, `LogoTile` with `Badge`, `CTABanner`), `/resources` (`ResourceRow`), and the resource blocks on `/program` and `/parents` (`ResourceCard`). `Timeline`, `Disclosure` and `PullQuote` are available but not currently placed.
