# Kubwabo Foundation

NGO website built with React, Vite, TypeScript, and Tailwind CSS.

## Brand

- Primary (blue): `#1147FF`
- Accent (yellow): `#FFCD00`
- Ink: `#131313`
- Warm white: `#F6F6F6`
- Logo: `src/assets/logo.svg`

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project structure

- `src/pages/` — route pages
- `src/components/` — UI, layout, donation form
- `src/data/site.ts` — content (CMS-ready)
- `src/lib/donation.ts` — donation provider adapter (mock in Phase 1)
- `docs/website-brief.md` — sections 06–11 of the project brief

## Donations

Phase 1 uses a mock provider. Swap via `setDonationProvider()` in `src/lib/donation.ts` when connecting Stripe or Donorbox.
