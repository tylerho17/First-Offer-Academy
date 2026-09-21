# TODO for Tyler

Things that need your real input. Each line names the file to edit.

## Must do before parents see it
- Confirm the attendance policy stated on /program and /our-promise: "two missed weeks in a row triggers a call with the student and a parent" (`content/programOverview.ts`, `content/promise.ts`).
- Set `showPlaceholders: false` in `content/site.ts` before sharing the site. Every empty video/proof/testimonial slot then disappears.

## Attorney review

## Keys and accounts

## Content to collect
- **Program overview video** ("Program overview from Tyler", 2–3 min): YouTube/Vimeo URL → `content/programOverview.ts` (`hero.videoUrl`).
- **12 module videos** ("Hear from Tyler" + "Hear from a student" for each of the 6 parts) → `content/programOverview.ts` (`modules[].videos`). Student videos need written permission.
- **Module proof assets** → `content/programOverview.ts` (`modules[].proof`): 3 resume before/after images (names removed, permission), outreach tracker screenshot, Week 1 vs Week 12 "Tell me about yourself" recordings, a sample technical session video, a mock interview recording, and a real pod photo.
- **Success stories** in "How [Name] landed [role]" format → `content/stories.ts` (`permission: true` only after written consent; `employerPermission` separately).

