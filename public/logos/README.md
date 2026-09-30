# Logos for "Where pilot students landed"

Rendered by components/sections/LogoMarquee.tsx. The company list comes from
content/students.ts (every `headline` and `otherCompanies` entry); a company
with a file here (mapped in `companyLogos`) shows its logo, everything else
shows a serif text wordmark. Each SVG is recolored at build time into one
muted navy (lib/logos.ts), so brand colors in the files don't matter.

| File | Company | Source |
|---|---|---|
| pimco.svg | PIMCO | Wikimedia Commons: "Pimco Logo 2025.svg" |
| morgan-stanley.svg | Morgan Stanley | Wikimedia Commons: "Morgan Stanley Logo 2024.svg" |
| jpmorgan-chase.svg | JPMorgan Chase | Wikimedia Commons: "Logo of JPMorganChase 2024.svg" |
| wells-fargo.svg | Wells Fargo | Lettering from Wikimedia Commons "Wells Fargo Logo (2020).svg", with the red box removed |
| us-bank.svg | U.S. Bank | Wikimedia Commons: "US Bank logo 2023 color.svg" |
| blackstone.svg | Blackstone | Lettering from Wikimedia Commons "The Blackstone Group logo (2).svg", with the black box removed |
| tricon.svg | Tricon | Wikimedia Commons: "Tricon Residential.svg" |
| bridgebio.svg | BridgeBio | Header logo on bridgebio.com |
| sila.svg | Sila | Header logo on silanano.com |
| mercer-advisors.svg | Mercer Advisors | Header logo on merceradvisors.com |

To add a logo: drop `<slug>.svg` here, add the company to `companyLogos`,
and rebuild.
