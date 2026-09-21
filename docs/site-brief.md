# First Offer Academy — Site Brief

Reference: Wall Street Mastermind's long-form, proof-heavy sales page and call funnel (structure only, not its claims or logo use). Secondary reference: Leland's clean program pages and coach cards. Tone: warm like a mentor, serious like an offer letter.

Conversion goal, in order: 1) Apply, 2) Book a free parent call (Calendly), 3) Register for an info session.

---

## Facts the site may state

- Program: 12 weeks, founding cohort starts January 2027 (winter quarter).
- Tracks: Finance, Consulting, Marketing, Tech (software, data, product).
- Who: first- and second-year college students in Orange County, including community college students. Treat them as starting from zero; no club membership needed.
- Seats: 24, in three sections of 8.
- Price: $5,000. Payment plan: 3 × $1,700. $1,000 refundable deposit holds a seat.
- Format: weekly 90-minute group session + weekly 15-minute 1:1 + accountability pod of 3.
- The Standard: 6 levels graded on evidence (Foundation → Launched → In Motion → Networked → Interviewing → Offer).
- Week 12: family meeting where the student presents their results and a side-by-side of their Week 1 and Week 12 recorded intros.
- Proof: Tyler coached 8 students who landed internships in their first year of college (exact internship count: TODO). Tyler landed 7 internships himself before starting First Offer Academy.
- Tagline: Build the skills. Be that candidate. Get the offer.

## TODO before launch (render nothing until filled)
- [ ] Total internships landed by the 8 students
- [ ] Student testimonials with written permission (`content/testimonials.ts`)
- [ ] At least one parent testimonial
- [ ] Employer names each student permits (`content/employers.ts`)
- [ ] Session format: in person (location) or online; day/time
- [ ] Application deadline and info-session dates
- [ ] Deposit refund rule (write exact terms)
- [ ] Calendly URL, Stripe deposit link, apply form destination
- [ ] Headshot: transparent PNG at `public/images/tyler.png`; casual daylight photo at `public/images/tyler-casual.jpg`

---

## Pages
1. `/` Home: the long-form sales page (below)
2. `/results`: full testimonial wall with every permitted student and parent quote, video slots, and the stats row
3. `/program`: curriculum phases, tracks, the Standard, weekly format, what's included
4. `/about`: Tyler's story, long version
5. `/apply`: application form with qualifying questions
6. `/info-session`: next session date + registration
7. `/faq`: full FAQ (home shows the top 6)
8. `/privacy`, `/terms`: placeholder legal pages, clearly marked draft

Global: sticky header (logo, Program, Results, About, FAQ, Apply button). Navy announcement bar on top: "Next parent info session: [date] · Register →".

---

## Home — section by section

### 1. Hero (mist)
- H1: **Your first internship shouldn't depend on which club lets you in.**
- Sub: First Offer Academy is a 12-week program that teaches first- and second-year college students how to land internships in finance, consulting, marketing, and tech, starting from zero.
- Buttons: **Apply for the January cohort** (primary navy) · **Book a parent call** (secondary)
- Right side: Tyler's headshot (transparent PNG on a cream rounded card).
- Proof row under the buttons: "24 seats · Starts January 2027 · Orange County"

### 2. Stats row (cream cards on mist)
Pull from `content/stats.ts`. Launch set:
- **8** students coached
- **[TODO]** internships landed
- **Year 1**: first internship landed in freshman year
- **7**: internships the founder landed before starting First Offer
Render a stat only if its value is filled.

### 3. Employer bar
"Our students have interned at". Grayscale-to-navy text list or logos from `content/employers.ts`, only entries with `employerPermission: true`. **Hide the whole section if fewer than 4 permitted entries.**

### 4. The problem
- H2: **College teaches the major. Nobody teaches the job search.**
- Three cream cards:
  1. **Access is gated.** The best recruiting help sits inside selective campus clubs. Most freshmen don't get in.
  2. **The timeline is earlier than anyone says.** Internship recruiting for many roles starts sophomore year or earlier. Students find out too late.
  3. **Career centers are built for everyone.** One advisor for thousands of students can't run your outreach, review every email, or mock-interview you weekly.

### 5. How it works
- H2: **12 weeks. One standard. A real search, fully executed.**
- Four-step horizontal timeline (stacked on mobile):
  1. **Weeks 1–3 · Foundation.** Resume that passes our rubric, a recorded 60-second intro, a target list of 50 companies, first 25 personalized emails.
  2. **Weeks 4–8 · Outreach & network.** 25 new emails a week, calls with professionals, referrals earned, six behavioral stories recorded.
  3. **Weeks 9–10 · Your track.** Split into Finance, Consulting, Marketing, or Tech for track-specific technical prep.
  4. **Weeks 11–12 · Interview-ready.** Graded mock interviews, the last ones run by strangers, then a family results meeting.
- Below: "Every week: a 90-minute session, a 1:1 with your coach, and a pod of three that keeps you honest."

### 6. Tracks
Four cream cards with an icon each: Finance, Consulting, Marketing, Tech (software, data, product). One line each on the roles they lead to. Link: "See the full program →" /program

### 7. Results: testimonial wall (WSM-style)
- H2: **What students say**
- Grid of cream quote cards from `content/testimonials.ts` where `permission: true`. Each card: quote, first name + last initial, school, year, track, internship employer (only if `employerPermission: true`), optional photo.
- Video slots: first 3 testimonials with `videoUrl` render as 9:16 video cards above the grid.
- One featured parent quote, full width, larger type.
- Link: "Read every result →" /results
- If zero permitted testimonials: hide the section in production.

### 8. The Standard
- H2: **Progress you can see, graded on evidence**
- 6-level ladder (Foundation → Offer) with the gate for each level. Parent angle: "Every two weeks, parents get a one-page progress report."

### 9. Founder story (mist, casual photo left)
- H2: **Why I built this**
- Copy:
  > I grew up in Garden Grove, the son of Vietnamese parents who worked hard but couldn't show me how recruiting worked. So I learned it the hard way: seven internships across investment banking, venture, and consulting, and an incoming investment banking offer. At UCI I ran finance recruiting education for a student investing organization and coached eight freshmen who landed internships in their first year. The system kept producing after I stepped back.
  >
  > First Offer Academy is that system, built for every student, not just the ones who got into the right club.
- Signature line: **Tyler Ho, Founder** · UC Irvine, Finance & Computer Science
- Button: Book a call with Tyler (secondary)

### 10. Comparison table
- H2: **Why not just…**
- Columns: First Offer Academy · Career center · Campus clubs · Doing it alone
- Rows: Weekly 1:1 coaching · Someone reviews every outreach email · Graded mock interviews · Open to every student · Accountability to a weekly number · Parent progress reports · Track-specific prep
- First Offer column: all checks. Others: honest mix (career center: open to every student ✓; clubs: some mock interviews ✓; etc.). Don't trash the alternatives; stay factual.

### 11. Price band (navy band, cream text)
- H2: **Founding cohort · January 2027**
- Sage price box: **$5,000** · or 3 payments of $1,700
- Bullets: 12 weekly sessions · 12 1:1s · accountability pod · resume, outreach & interview toolkit · graded mocks · biweekly parent reports
- "24 seats. A $1,000 refundable deposit holds your spot."
- Buttons: **Apply now** (sage, navy text) · Book a parent call (cream outline)

### 12. FAQ (cream panels, accordion)
Top 6 on home, full list on /faq:
1. **My student is a freshman. Isn't this too early?** No. Many internship timelines start sophomore year; freshman year is when you build the resume, network, and stories that get you there.
2. **Why pay when the career center is free?** Use it too. Career centers serve thousands of students. We run your search with you every week: your emails, your calls, your interviews.
3. **What if they don't land an internship?** We don't promise offers; nobody honest can. We promise a fully executed search with a documented record of every step, graded against a clear standard.
4. **How much time per week?** Plan on [TODO] hours: the session, the 1:1, and outreach.
5. **Online or in person?** [TODO]
6. **Is the deposit refundable?** Yes. [TODO: exact terms]
Also on /faq: community college students welcome? · which majors? · who coaches? · payment plan details · what happens after week 12?

### 13. Final CTA (mist)
- H2: **24 seats. January starts sooner than it sounds.**
- Buttons: Apply · Book a parent call

### Footer (navy, cream text)
Logo, tagline, nav links, email, Instagram, © 2026 First Offer Academy, Privacy · Terms.

---

## /apply: form fields
Student name · email · phone · school · year (freshman/sophomore/other) · major · track interest (multi-select) · GPA range · what you've tried so far (textarea) · biggest obstacle (textarea) · parent/guardian name + email (optional) · how did you hear about us · "Book my fit call" → redirect to Calendly after submit.
Destination: TODO (Supabase table or Tally). Build the form UI with a stubbed submit handler until decided.

## Content data shapes (`content/`)
```ts
// testimonials.ts
{ name: string; school: string; year: string; track: 'Finance'|'Consulting'|'Marketing'|'Tech';
  quote: string; employer?: string; employerPermission: boolean; photo?: string;
  videoUrl?: string; role: 'student'|'parent'; permission: boolean }

// employers.ts
{ name: string; logo?: string; employerPermission: boolean }

// stats.ts
{ value: string; label: string }  // render only if value is non-empty

// site.ts
{ calendlyUrl: string; depositUrl: string; applyEndpoint: string; nextInfoSession?: { date: string; url: string } }
```
Seed every file with clearly fake TODO placeholders marked `permission: false` so nothing renders in production until real data lands.
