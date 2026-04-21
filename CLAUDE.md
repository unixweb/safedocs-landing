# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, deployed on Vercel.

**Language:** German-only site — all copy is in German.

**Routes:**
- `/` — Landing page (single-page layout with Hero, Features, LiveDemo, HowItWorks, ArchitectureDiagram, SetupAnimation, Pricing, FAQ, CTA, Footer sections)
- `/blog/[slug]/` — Three static blog posts
- `/impressum/`, `/datenschutz/` — Legal pages
- `/api/contact` — POST endpoint that sends email via Brevo API

**Content:** All content is hardcoded in components — no CMS or external data source.

**Email:** Contact form submissions post to `/api/contact`, which calls the Brevo transactional email API. Requires `BREVO_API_KEY` env var.

## CSP / Security Headers

Security headers are split across two places — both must stay in sync:

1. **`src/middleware.ts`** — Sets a dynamic nonce-based `Content-Security-Policy` header on every request. This is the primary CSP and overrides next.config.ts at runtime.
2. **`next.config.ts`** — Defines static security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) and a fallback CSP (used during static export or if middleware doesn't run).

When adding new external scripts, fonts, or API origins, update the CSP `script-src`, `style-src`, `font-src`, or `connect-src` in **both** files.

## Styling

Tailwind CSS 4 with custom theme variables defined in `src/app/globals.css` under `@theme`. Dark mode is toggled by adding `dark` class to `<html>` (stored in `localStorage`). Use Tailwind's `dark:` variant throughout.

## Accessibility

The Navbar includes font size controls (100–150%, stored in `localStorage`) and a dark mode toggle. Maintain `aria-label` attributes and semantic HTML when editing these features.
