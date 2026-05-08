# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 multi-page site for **Orza Technologies** - industrial automation, robotics, and AI solutions. Dark developer theme with blue accents. Targeting industrial enterprises in Mexico, US, and LATAM.

**Live site:** orzatech.com (deployed via GitHub Pages from this repo's `main` branch)

## Commands

```bash
npm run dev        # Development server (http://localhost:3000)
npm run build      # Production build (generates /out folder for static hosting)
npm run start      # Production server (Node.js)
npm run lint       # ESLint
npm run test       # Build + Playwright tests
npm run test:quick # Playwright tests only (no build)
npm run test:ui    # Playwright UI mode
```

## Deployment (GitHub Pages, automatic)

**Push to `main` ⇒ live at orzatech.com in ~2-4 minutes.** No manual upload.

The `.github/workflows/deploy.yml` workflow runs on every push to `main`:
1. `npm ci`
2. `npm run build` (Next.js static export → `/out`)
3. `touch out/.nojekyll` (so GitHub doesn't process with Jekyll)
4. Uploads `/out` as Pages artifact and deploys

**Custom domain config:**
- `public/CNAME` contains `orzatech.com` (copied to `/out` at build).
- GitHub repo → Settings → Pages → Source = "GitHub Actions"; custom domain `orzatech.com`; "Enforce HTTPS" enabled.

**DNS at the registrar (apex `orzatech.com` and `www`):**
- A records (apex): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- AAAA records (apex): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `www` CNAME → `andresislas99.github.io.`

**Local preview before pushing:**
```bash
npm run build && npx serve out -p 3000
```

**See logs:** https://github.com/AndresIslas99/orzatech-com/actions

## Project Structure

```
orza-landing/
├── src/
│   ├── app/
│   │   ├── page.tsx             # Home hub (segmented by vertical)
│   │   ├── layout.tsx           # Root layout + Navbar/Footer/WhatsApp/LeadMagnet + JSON-LD
│   │   ├── template.tsx         # Client wrapper — page entrance animation
│   │   ├── globals.css          # Tailwind v4 + custom CSS
│   │   ├── software/page.tsx    # Software & IA landing (pricing, process)
│   │   ├── pulse/page.tsx       # ORZA Pulse product page (AI kiosk for distributors)
│   │   ├── contacto/page.tsx    # Dedicated contact page
│   │   ├── industria/page.tsx   # Industrial automation vertical
│   │   └── proyectos/page.tsx   # All projects grid
│   ├── components/
│   │   ├── layout/              # Navbar (with dropdown), Footer, WhatsAppButton, LeadMagnet
│   │   ├── ui/                  # SectionHeader, ServiceCard, ProjectCard, ProjectModal,
│   │   │                        #   StatCard, PartnerLogo, ClientLogo, VerticalCard,
│   │   │                        #   PricingTable, ProcessStep, ScrollReveal
│   │   ├── sections/            # HeroHome, HeroVertical, StatsSection, ClientsBar,
│   │   │                        #   PartnersSection, CTASection, ContactSection, IndustrialServices
│   │   ├── pulse/               # 14 Pulse components: PulseHero, PulseTrustBar,
│   │   │                        #   PulseProblemGrid, PulseOriginStory, PulseSolution,
│   │   │                        #   PulseHowItWorks, PulseAIEngine, PulseBIDashboard,
│   │   │                        #   PulseROIGrid, PulseComparison, PulseTimeline,
│   │   │                        #   PulseBenefits, PulseTeam, PulseCTAPhotos
│   │   └── forms/               # ContactForm
│   ├── data/                    # Typed data arrays (no CMS, pure TypeScript)
│   │                            #   services, projects, partners, clients, stats,
│   │                            #   navigation, software-services, pulse
│   ├── lib/                     # constants.ts, metadata.ts
│   └── types/                   # TypeScript interfaces
├── public/images/
│   ├── logo/                    # orza-logo.webp
│   ├── projects/                # Project images + hero video (MP4)
│   ├── clients/                 # Client logos (PNG)
│   ├── partners/                # Partner/tech logos (PNG)
│   ├── icons/                   # 21 feature icons (WebP/PNG/JPG)
│   └── pulse/                   # 16 Pulse product photos (WebP)
├── e2e/                         # Playwright tests + screenshots
├── next.config.ts               # Static export + experimental.viewTransition
└── out/                         # Static build output
```

## Architecture

### Pages
- `/` — Home hub with vertical segmentation (Industrial, Software, Service Robots)
- `/software` — Software & IA landing with pricing and process steps
- `/pulse` — ORZA Pulse product page (AI-powered kiosk for electrical distributors, 14 dedicated components)
- `/industria` — Industrial automation with services and projects
- `/proyectos` — Full projects grid with project detail modal
- `/contacto` — Dedicated contact page

### template.tsx
Client component wrapping all pages with `.page-enter` animation. Works with `experimental.viewTransition: true` in next.config.ts.

### Shared Layout (layout.tsx)
Navbar, Footer, WhatsAppButton, LeadMagnet, background decorations, JSON-LD schema.

### Navbar
Uses a hover-triggered dropdown (desktop) / tap-triggered dropdown (mobile) for "Soluciones" menu linking to Software & IA and ORZA Pulse pages. Closes on route change.

### Client Components (`"use client"`)
Only where state is needed:
- **Navbar** — scroll state, mobile menu, dropdown, pathname
- **template.tsx** — page entrance animation wrapper
- **HeroHome** — entrance animation
- **HeroVertical** — entrance animation
- **LeadMagnet** — scroll-triggered popup, form state
- **ContactForm** — form submission state
- **ServiceCard** — hover state
- **IndustrialServices** — service card hover wrapper
- **ScrollReveal** — intersection observer entrance animation
- **ProjectCard** — scroll-triggered animation
- **ProjectModal** — project detail modal
- **ProjectsGrid** — project grid with modal state
- **PulseHero** — Pulse hero animation
- **PulseBIDashboard** — interactive BI dashboard demo

### Data Layer (src/data/)
All content in typed TypeScript arrays. No CMS. Key files:
- `services.ts` — 4 services with `vertical` and `slug` fields
- `projects.ts` — 6 projects with `featured` and `slug` fields
- `partners.ts` — 8 partners + 4 tech stack items
- `clients.ts` — 5 client logos
- `stats.ts` — 4 key metrics
- `navigation.ts` — nav items for header/footer
- `software-services.ts` — sub-services, pricing tiers, process steps, problem/solution pairs
- `pulse.ts` — ORZA Pulse content (problems, origin events, solutions, architecture, ROI metrics, comparison, timeline, benefits, team stats, BI features, 50+ exported items)

### Constants (src/lib/constants.ts)
Centralized: SITE, CONTACT, WHATSAPP, FORMSPREE, IMAGES.

### SEO (src/lib/metadata.ts)
`generatePageMetadata()` helper for per-page Metadata with OG tags and canonical URLs.

### Styling Conventions
- Dark background: `bg-[#0a0a0b]`
- Primary color: Blue (`blue-600`, `blue-500`)
- Gradient text: `.gradient-text` class
- Pricing glow: `.pricing-highlight` class
- Glass morphism: `.glass-card` class (frosted glass with hover glow)
- Icon glow: `.icon-glow` class (blue gradient glow backgrounds)
- Icon blend: `.icon-blend` class (mix-blend-mode for icon backgrounds)
- Page enter: `.page-enter` class (entrance animation from template.tsx)
- Borders: `border-white/10`, `border-white/20`

### Config (next.config.ts)
- `output: 'export'` — static export
- `trailingSlash: true` — generates `/pulse/index.html`, etc.
- `images.unoptimized: true` — required for static export
- `experimental.viewTransition: true` — enables view transitions with template.tsx

## Contact Info
- Email: sales@orzatech.com
- Phone: +52 5620595320
- Location: Ciudad de Mexico, MX
- Form: Formspree endpoint `https://formspree.io/f/mgoolqdw`
- WhatsApp: +52 5620595320 with pre-filled message

## Content (Spanish)

All UI text is in Spanish (es-MX). Products & services:
- Robotica Industrial (UR, ABB, FANUC, KUKA, Yaskawa)
- AGV/AMR - Robots Moviles Autonomos
- Automatizacion de Gruas
- Gemelos Digitales & Simulacion (Isaac Sim)
- Agentes de IA
- Software WMS & Control de Flotas
- Telemetria Industrial & IoT
- CRM Automatizado
- Dashboards en Tiempo Real
- Integracion de Sistemas
- **ORZA Pulse** — AI-powered kiosk system for electrical distributors

## Testing

Playwright e2e tests in `e2e/`:
```bash
npm run test         # Full build + all tests
npm run test:quick   # Tests only (no build, requires dev server on :3000)
npm run test:ui      # Playwright UI mode
```

Test files:
- `visual-test.spec.ts` — Screenshots (6 pages x 2 viewports), navbar links, WhatsApp button, contact form, pricing table, footer links, mobile hamburger menu
- `dropdown-debug.spec.ts` — Soluciones dropdown behavior (desktop hover, mobile tap, /pulse navigation)

## Deployment Notes
- **Hosting**: GitHub Pages with custom domain `orzatech.com` (see "Deployment" section above for the full flow)
- **Images**: PNG for logos, WebP for projects/pulse, MP4 for hero video
- **Static export**: `output: 'export'` + `trailingSlash: true` generates `/software/index.html`, `/pulse/index.html`, `/contacto/index.html`, etc.
- **CI**: `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
