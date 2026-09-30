# Logos for "Where pilot students landed"

Rendered by components/sections/LogoMarquee.tsx. The company list comes from
content/students.ts (every `headline` and `otherCompanies` entry); a company
mapped in `companyLogos` shows its logo, everything else shows a serif text
wordmark. SVGs are recolored at build time into one muted navy
(lib/logos.ts); PNGs are transparent and drawn through a CSS mask in the same
navy. Brand colors in the files don't matter.

Only official sources: Wikimedia Commons or the company's own website. No
LinkedIn logos.

| File | Company | Source |
|---|---|---|
| pimco.svg | PIMCO | Wikimedia Commons: "Pimco Logo 2025.svg" |
| morgan-stanley.svg | Morgan Stanley | Wikimedia Commons: "Morgan Stanley Logo 2024.svg" |
| jpmorgan-chase.svg | JPMorgan Chase | Wikimedia Commons: "Logo of JPMorganChase 2024.svg" |
| wells-fargo.svg | Wells Fargo | Lettering from Wikimedia Commons "Wells Fargo Logo (2020).svg", red box removed |
| us-bank.svg | U.S. Bank | Wikimedia Commons: "US Bank logo 2023 color.svg" |
| blackstone.svg | Blackstone | Lettering from Wikimedia Commons "The Blackstone Group logo (2).svg", black box removed |
| tricon.svg | Tricon | Wikimedia Commons: "Tricon Residential.svg" |
| bridgebio.svg | BridgeBio | Header logo, bridgebio.com |
| sila.svg | Sila | Header logo, silanano.com |
| mercer-advisors.svg | Mercer Advisors | Header logo, merceradvisors.com |
| black-legend-capital.svg | Black Legend Capital | Site logo, blacklegendcapital.com |
| lb-capital.svg | L&B Capital SGR | Header logo, lbcapitalsgr.it |
| smart-asset-capital.svg | Smart Asset Capital | Header logo, smartassetcapital.com (white fills set to ink) |
| clicinsight.png | Clicinsight | Header logo, clicinsight.com |
| futuraiser.png | Futuraiser | Header logo, futuraiser.com |
| lokahi-therapeutics.png | Lōkahi Therapeutics | Header logo, lokahithera.com (white made transparent) |
| optimize-financial.png | Optimize Financial | Header logo, optimizefinancial.com |
| sellside-group.png | Sellside Group | Site logo, sellsidegroup.com |
| xnergy.png | Xnergy | Header logo, xnergy.com (white background made transparent) |
| concordia-capital.png | Concordia Capital | og:image, concordiacapitalco.com (blue background made transparent) |

Text wordmarks (no usable official logo): Ditto and Valemont Group (no
official site confirmed), Holter Holdings (site only has an "H" icon), The
Amazing Group (site's only image is a photo), and Allied HOA Partners (no
site beyond LinkedIn).

The `.jpg` squares in this folder are LinkedIn company logos. They are not
used (official sources only) and are not committed.

To add a logo: drop `<slug>.svg` or a transparent `<slug>.png` here, add the
company to `companyLogos`, and rebuild.
