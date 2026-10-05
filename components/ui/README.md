# components/ui

Small, reusable UI pieces (patterns from component.gallery). Token-based: they use the site's CSS variables, fonts and radii from `app/globals.css` (`.ui-*` classes). Native elements where possible, visible focus rings, tap targets of at least 44px, and no dependencies.

| Component | Pattern | Props |
|---|---|---|
| `Stat` | Statistic / KPI tile | `value: string`, `label: string`, `className?` |
| `Badge` | Badge / tag | `children`, `tone?: "navy" \| "sage" \| "outline"` (default `navy`) |
| `Timeline` | Vertical timeline (`<ol>`) | `items: TimelineItem[]` (`title`, `subtitle?`, `meta?`, `detail?`, `badge?: { label, tone? }`), `className?`. Empty fields render nothing. |
| `Disclosure` | Accordion (native `<details>`) | `summary`, `children`, `open?` (default closed), `className?` |
| `PullQuote` | Blockquote | `children`, `cite?` |
| `LinkCard` | Card link | `href`, `title`, `body?`, `tag?` (an outline `Badge`). The whole card is the link. |
| `LogoTile` | Logo wall tile | `name` (alt text + screen-reader name), `caption`, `logo: string \| null` (null = monogram), `ratio?` (width/height, for equal visual weight), `mono?` (white-only logo drawn navy), `monogram?`, `badge?` |
| `CTABanner` | Call-to-action banner | `title: string`, `body?: string`, `action: ReactNode` (pass the existing button, e.g. `<CallLink />`) |

Used on `/about` (`Stat`, `LogoTile` with `Badge`, `CTABanner`) and in the free-resource cards on `/resources`, `/program` and `/parents` (`LinkCard`). `Timeline`, `Disclosure` and `PullQuote` are available but not currently placed.
