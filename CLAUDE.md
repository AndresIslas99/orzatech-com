# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 multi-page site for **Orza Technologies SAPI de CV** — industrial automation, robotics, and AI solutions for industrial buyers in MX, US and LATAM. Trust-first design ("Industrial mexicano confiable" — light theme, navy + orange, sober B2B aesthetic).

**Live site:** https://orzatech.com (deployed via GitHub Pages from this repo's `main` branch)

## Commands

```bash
npm run dev        # Development server (http://localhost:3000)
npm run build      # Production build (generates /out folder for static export)
npm run start      # Production server (Node.js)
npm run lint       # ESLint
npm run test       # Build + Playwright tests
npm run test:quick # Playwright tests only (no build)
npm run test:ui    # Playwright UI mode
```

## Deployment (GitHub Pages, automatic)

**Push to `main` ⇒ live at orzatech.com in ~3-4 minutes.** No manual upload.

The `.github/workflows/deploy.yml` workflow runs on every push to `main`:
1. `npm ci`
2. `npm run build` (Next.js static export → `/out`)
3. `touch out/.nojekyll`
4. Uploads `/out` as Pages artifact and deploys

**Custom domain:**
- `public/CNAME` contains `orzatech.com`.
- GitHub repo Settings → Pages: Source = "GitHub Actions", custom domain `orzatech.com`, "Enforce HTTPS" enabled.
- DNS at **Cloudflare** (NS: matias/grace.ns.cloudflare.com): A records to GitHub Pages IPs (185.199.108-111.153) + AAAA + CNAME www → andresislas99.github.io. **All gray cloud (DNS only)**, never proxied.

**See logs:** https://github.com/AndresIslas99/orzatech-com/actions

**Local preview:**
```bash
npm run build && npx serve out -p 3000
```

## Architecture

### Pages

| Route | Purpose | Key sections |
|-------|---------|--------------|
| `/` | Home — trust-first | TrustHero, ClientBar, Limser testimonial, 3 verticals, featured projects, partners, CTA |
| `/industria` | Industrial automation | TrustPageHero, 3 trust pillars, Limser case, 3 services, 5 projects, partners, CTA |
| `/software` | Software & IA | TrustPageHero, problem list, AGNOR case, 5 sub-services, public pricing (4 tiers), 3-step process, CTA |
| `/pulse` | ORZA Pulse product | Custom hero with chat preview, problem grid, solution+steps, AI tech, BI dashboard (static showcase), ROI+comparison+timeline, origin+team, CTA |
| `/proyectos` | All cases grid | TrustPageHero, 6 projects, CTA |
| `/nosotros` | About / manifesto | TrustPageHero, 4 values, founders (avatar placeholders), 4-year timeline, corporate data, partners, CTA |
| `/contacto` | Contact | TrustPageHero, contact form, side panel with 3 direct channels + corporate data |
| `/styleguide` | Internal design system reference (noindex) | Self-contained, NO_CHROME route |

### Layout architecture

**`src/app/layout.tsx`** is the root layout — minimal: html/body wrappers, fonts (Geist Sans + Geist Mono), Organization JSON-LD, and renders `<SiteChrome>{children}</SiteChrome>`.

**`src/components/layout/SiteChrome.tsx`** is a client component that conditionally renders chrome based on pathname:
- `/styleguide` → `<main>` only (no header/footer — styleguide has its own)
- All other routes → `<TrustNavbar>` + `<main>` + `<TrustFooter>` wrapped in trust-bg/min-h-screen

**`src/app/template.tsx`** wraps every page child with `.page-enter` animation (works with `experimental.viewTransition` in next.config.ts).

### Trust components (`src/components/trust/`)

All page-level building blocks. Light theme. Server components unless marked.

- **TrustNavbar** (client) — sticky white navbar, logo monogram, dropdown Soluciones, phone visible md+, "Solicitar cotización" CTA, mobile drawer
- **TrustFooter** — navy footer with razón social, RFC placeholder, 3 contact channels, hours, legal links
- **TrustHero** — home hero (badge + title + dual CTAs + right trust panel with stats from data)
- **TrustPageHero** — vertical-page hero (eyebrow + title + description + CTAs + trust items + phone)
- **TrustClientBar** — 5 client logos in grayscale row
- **TrustTestimonialBlock** — reusable two-column quote + metrics + avatar initials. Use `pendingReview` flag to mark unverified quotes
- **TrustVerticalCard** — small light card for vertical links (industria/software/pulse)
- **TrustProjectCard** — light project card pulling from data with up to 3 metrics
- **TrustPartnersBar** — 8 partners, "certificado" badge for partners.certified === true
- **TrustServiceCard** — light service card with icon + features + specs (datasheet-style chips)
- **TrustPricingGrid** — 4-tier pricing, navy highlight tier with "Más popular" accent
- **TrustProcessSteps** — numbered timeline with duration badges
- **TrustProblemList** — problem ⇄ solution two-column rows (XCircle + CheckCircle)
- **TrustContactForm** (client) — light Formspree form with verified/critical states
- **TrustCTASection** — final CTA card with 3 contact methods + verified guarantees
- **TrustSectionHeader** — eyebrow + title + optional subtitle (center/left)

### SEO (`src/components/seo/`)

- **JsonLd** — server component that injects `<script type="application/ld+json">` from a static object. Never accepts user input.
- Used in:
  - `layout.tsx`: Organization schema (every page)
  - `/pulse/page.tsx`: Product schema
  - `/industria/page.tsx`: Service schema with hasOfferCatalog
  - `/software/page.tsx`: Service schema with offers (pricing tiers)

### Data layer (`src/data/`)

All content in typed TypeScript arrays. No CMS.

- `services.ts` — 4 services with `vertical` and `slug` fields
- `projects.ts` — 6 projects with `featured`, `slug`, `results`, `duration` fields
- `partners.ts` — 8 partners + 4 tech stack items
- `clients.ts` — 5 client logos
- `stats.ts` — 4 key metrics displayed in TrustHero
- `navigation.ts` — nav items (legacy structure, may simplify later)
- `software-services.ts` — sub-services, pricing tiers, process steps, problem/solution pairs
- `pulse.ts` — ORZA Pulse content (problems, origin events, solutions, BI features, etc.)

### Constants (`src/lib/constants.ts`)

Centralized: SITE, CONTACT (phone, email, location), WHATSAPP (with `getUrl()`), FORMSPREE, IMAGES.

### Metadata (`src/lib/metadata.ts`)

`generatePageMetadata()` helper for per-page Metadata with OG tags + canonical URLs.

## Design system — Trust theme

**Reference:** GBM + Caterpillar + Banorte for B2B Mexican industrial buyers. Light, conservative, predictable. NO dark mode for marketing pages.

### Tokens (`src/app/globals.css`)

```
Surfaces: #ffffff (bg) · #f8fafc (surface) · #f1f5f9 (surface-2)
Borders:  #e5e7eb (default) · #cbd5e1 (strong)
Navy:     50, 100, 300, 500, 700, 900 (#0a2540 = primary brand)
Accent:   50, 100, 500 (#ea580c industrial orange) — RESERVED, max 1 per section
Status:   verified-500 (#16a34a) · critical-500 (#dc2626)
Ink:      900, 700, 500, 400, 300 (text scale)
Fonts:    Geist Sans (UI), Geist Mono (eyebrow/data)
```

### Utilities

- `.trust-card` / `.trust-card-elevated` — light cards with subtle border + shadow
- `.btn-primary` (navy) / `.btn-accent` (orange) / `.btn-secondary` (outline)
- `.badge-verified` / `.badge-accent` / `.badge-neutral`
- `.section-light` / `.section-surface` / `.section-navy`
- `.eyebrow-light` — uppercase mono accent label
- `.avatar-initials` — placeholder avatar with navy gradient
- `.shadow-industrial-md` — compound shadow for highlight pricing tier

### Conventions

- One primary CTA per section. Orange accent appears max once per section.
- Trust signals visible above fold (badge SAPI, stats, phone, location).
- Real data only — testimonials with real names, metrics, and `pendingReview` flag if quote not yet validated by client.
- Footer is heavy — razón social, RFC, location, 3 contact channels, hours, legal.

## Config (`next.config.ts`)

- `output: 'export'` — static export
- `trailingSlash: true` — generates `/pulse/index.html`, etc.
- `images.unoptimized: true` — required for static export
- `experimental.viewTransition: true` — enables view transitions with template.tsx

## External Services

- **Form**: Formspree endpoint `https://formspree.io/f/mgoolqdw`
- **WhatsApp**: +52 5620595320 with pre-filled message via `WHATSAPP.getUrl(message?)`
- **Email**: sales@orzatech.com

## Content (Spanish, es-MX)

UI text in Spanish neutral mexicano. Solutions:
- Robótica industrial (UR, ABB, FANUC, KUKA, Yaskawa)
- AGV/AMR — robots móviles autónomos
- Automatización de grúas
- Gemelos digitales & simulación (Isaac Sim)
- Agentes de IA
- Software WMS & control de flotas
- Telemetría industrial & IoT
- CRM automatizado
- Dashboards en tiempo real
- Integración de sistemas
- **ORZA Pulse** — kiosko con IA para distribuidoras eléctricas

Partners (4 certified): Universal Robots, ABB, Siemens, Yaskawa. Plus Danfoss, Magnetek, Sumitomo, NVIDIA.

## Testing

```bash
npm run test         # Full build + all Playwright tests
npm run test:quick   # Tests only (requires dev server on :3000)
npm run test:ui      # Playwright UI mode
```

Test files in `e2e/`:
- `visual-test.spec.ts` — screenshots, navbar, WhatsApp, contact form, footer
- `dropdown-debug.spec.ts` — Soluciones dropdown behavior

NOTE: tests reference legacy dark components/selectors that may need updating after the trust-first migration. Check before relying on them.

## Hookify Rules

Regression prevention rules in `.claude/hookify.*.local.md`:
- **block-pages-router** — Blocks `getServerSideProps`/`getStaticProps`
- **block-server-only-imports** — Blocks `next/headers`/`next/cookies`
- **warn-missing-metadata** — Warns when editing `page.tsx` without metadata export
- **warn-use-client** — Warns when adding `"use client"` (keep server components by default)

## Static Export Constraints

Since `output: 'export'`:
- No `getServerSideProps`, `getStaticProps`, `getInitialProps`
- No `next/headers` or `next/cookies`
- No API routes (`/api/*`)
- No middleware
- Images must use `unoptimized: true`
- `new Date()` in server components runs at build time only

## Migration history

- **2026-05-08** — Trust-first migration complete: all 7 pages on light theme, 29 legacy components deleted, Fraunces font dropped, dark theme tokens removed, JSON-LD schemas added.
- **2026-05-07** — GitHub Pages migration from Cloudflare Worker (steep-field-a224 was the prior backend).
