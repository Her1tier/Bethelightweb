# Kubwabo Foundation — Website Brief

Reference inspiration: [DoGood Charity Theme](https://dogood.qodeinteractive.com/?utm_source=Pinterest&utm_medium=organic)

Brand colors: **#1E8673** (primary), **#F3EAD8** (warm white)

---

## 06 — Website Structure

### Phase 1 (launch)

| Page | Route | Must contain |
|------|-------|--------------|
| **Home** | `/` | Hero with mission + primary CTA; impact stats; featured programs; donation CTA; volunteer CTA; testimonials; newsletter signup |
| **About** | `/about` | Origin story; mission & vision; values; team/leadership; trust/credibility badges |
| **Programs** | `/programs` | Per-program: problem → action → impact; fundraising progress; donate CTA per program |
| **Donate** | `/donate` | Embedded donation form; amount presets + custom; one-time/monthly; donor details; program selector; trust signals; test-mode notice |
| **Volunteer** | `/volunteer` | Role cards; sign-up form; expectations; benefits; FAQ |
| **Events** | `/events` | Upcoming event cards (date, location, description); register-interest CTA |
| **Stories** | `/stories` | Impact story cards; category + date; excerpt; link to full post (Phase 2) |
| **Contact** | `/contact` | Contact form; phone/email/address; map placeholder; social links in footer |

### Phase 2 additions

- Individual story/blog post pages with CMS
- Event calendar with registration + reminders
- Live payment provider (Stripe / Donorbox / Givebutter)
- Volunteer portal / scheduling
- Impact dashboard & annual report downloads
- Multi-language (i18n)
- Newsletter provider integration (Mailchimp, etc.)
- Shop / merchandise (optional)
- Partner portal & press kit

---

## 07 — UX & Conversion Goals

### The 60-second rule

Within **60 seconds** of landing, a visitor must understand:
1. **What** Kubwabo Foundation does
2. **Who** it helps
3. **How** to take action (donate or volunteer)

Hero copy, one primary CTA, and impact stats above the fold support this.

### CTAs by page

| Page | Primary CTA | Secondary CTA |
|------|-------------|---------------|
| Home | Donate Now | Our Programs / Volunteer |
| About | Support our mission | — |
| Programs | Donate to a program | General fund |
| Donate | Donate Now (form submit) | — |
| Volunteer | Submit application | — |
| Events | Register interest | Volunteer at events |
| Stories | Read more (Phase 2) | Donate |
| Contact | Send message | — |

**Global:** sticky header “Donate Now” on desktop; same in mobile menu.

### Trust signals

- Impact numbers (lives touched, volunteers, funds directed)
- Fundraising progress bars per program
- Testimonials with name + role
- “Test mode” honesty on donations until live
- Nonprofit registration placeholders (501(c)(3), GuideStar, annual report)
- Secure donation copy near checkout
- Transparent “where your money goes” impact-per-amount table

### UX frustrations to avoid

- Hidden donate button (always visible in nav)
- Slow hero / heavy autoplay video
- Donation form buried below long copy
- Too many navigation items (keep ≤ 8 top-level)
- Lorem ipsum left in production
- Fake inflated impact numbers
- Pop-ups on first visit
- Mobile menu that doesn’t close on navigate
- Forms without labels or error feedback
- Broken contrast on brand colors (test WCAG AA)

---

## 08 — Technical Requirements

| Area | Phase 1 | Phase 2 |
|------|---------|---------|
| **Frontend** | React 19 + Vite + TypeScript + Tailwind CSS v4 | Same stack |
| **Routing** | React Router | Same |
| **CMS** | Static content in `src/data/site.ts` | Headless CMS (Sanity, Contentful, or Strapi) |
| **Donations** | Mock provider via `src/lib/donation.ts` adapter | Stripe Checkout / Donorbox embed / Givebutter |
| **Forms** | Client-side submit + success state (no backend yet) | Formspree, Netlify Forms, or custom API |
| **Performance** | Static build; lazy images when added; target LCP < 2.5s | CDN + image optimization |
| **Mobile-first** | Tailwind responsive utilities; sticky nav | PWA optional |
| **Analytics** | Placeholder — add Plausible or GA4 before launch | Conversion events on donate/volunteer |
| **Hosting** | Vercel / Netlify / Cloudflare Pages | Same + custom domain + SSL |
| **SEO** | Meta description, semantic HTML, one H1 per page | Open Graph, sitemap, structured data (NGO schema) |
| **Accessibility** | Labels, focus rings, progressbar ARIA, color contrast | Full audit |

---

## 09 — What to Avoid

- **WordPress theme clone** — we take layout *inspiration* from DoGood, not a pixel copy
- **Stock “sad child” exploitation imagery** — dignified, consent-based photos only
- **Guilt-trip copy** — lead with hope and agency, not shame
- **Dark patterns** — pre-checked monthly donations, hidden fees, confusing opt-outs
- **Feature bloat** — no shop, portfolio, or blog taxonomy at launch
- **Unverified stats** — replace placeholders before public launch
- **Live payments without compliance** — stay in test mode until Stripe/charity onboarding is complete
- **Generic NGO palette** — stick to #1E8673 + #F3EAD8, not random blues/reds
- **Auto-playing video with sound**
- **Infinite scroll blog** without pagination
- **Broken mobile donate flow**

---

## 10 — Success Metrics (first 6 months)

| KPI | Target (indicative) | Tool |
|-----|---------------------|------|
| Unique visitors / month | 2,000+ by month 6 | Analytics |
| Donation conversion rate | 2–5% of donate-page visitors | Analytics + payment provider |
| Total online donations | Track vs. goal ($) | Stripe / Donorbox |
| Average donation amount | Benchmark $35–75 | Payment provider |
| Volunteer form submissions | 20+ / month | Form backend / CRM |
| Newsletter signups | 100+ / month | Email provider |
| Bounce rate (home) | < 55% | Analytics |
| Mobile traffic share | Monitor (expect 60%+) | Analytics |
| Core Web Vitals | LCP < 2.5s, CLS < 0.1 | Lighthouse / CrUX |
| Top traffic sources | Organic, social, email | UTM campaigns |

Review monthly; adjust CTAs and hero copy based on heatmaps (Hotjar/Clarity) after month 2.

---

## 11 — Final Note

**Kubwabo Foundation is not a brochure — it’s a bridge.**

Every page should answer one question for a stranger: *“Can I trust these people, and can I help right now?”* Design for warmth and clarity, not clutter. The green (#1E8673) is action and growth; the cream (#F3EAD8) is safety and humanity. When in doubt, shorten the copy, enlarge the CTA, and show real impact.

Build Phase 1 lean. Ship the donate and volunteer paths first. Replace every placeholder with truth before you send the link to donors. The site should feel like the organization itself — present, honest, and ready to act.

---

*Implementation: `/Users/heritier/Desktop/PROJECTS/Bethelightweb` — React + Tailwind, mock donation adapter ready for provider swap.*
