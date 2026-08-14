# DIM Public Website — Build Plan

## Current state (verified)

This project is a fresh template: `src/routes/` contains only `__root.tsx` and the placeholder `index.tsx`. There is **no** existing authentication, dashboard, subscription logic, navigation, or backend. So nothing existing can break — the public website is built from scratch, and auth/dashboard are new work.

## Scope of this build

Phase 1 (this plan): the complete public, pre-login DIM website — all pages, content, interactions, SEO, mobile-first responsive layouts, accessibility.

Auth and the member dashboard are Phase 2. To honour "every button has a destination" and "no fake login", CTAs in Phase 1 route to `/get-started` and `/sign-in` placeholder pages that clearly state accounts open soon, rather than to a fake signup form. Real accounts require enabling Lovable Cloud (backend + login), which I'll do in Phase 2 on your go-ahead.

## Brand direction

Light theme. White and very light grey surfaces, deep navy text, electric cyan primary, blue gradients, controlled neon purple for Earn / Creator / premium. Pillar colours: Learn & Build = blue/cyan, Connect = teal, Earn & Creator = purple, Grow = deep blue. Type: a modern geometric sans for headings, clean grotesque for body. Generous whitespace, restrained motion, reduced-motion respected.

## Routes

- `/` — Home (full scroll story: Hero → Problem → Ecosystem → Who DIM Is For → Find Your Path → AI Tools → Career → Creator → Community → Opportunities → Memberships → Why DIM → FAQ preview → Final CTA)
- `/about` — vision, mission, purpose, belief, story
- `/how-it-works` — 5-step Discover → Learn → Build → Connect → Grow
- `/learn`, `/build`, `/connect`, `/earn`, `/grow` — pillar pages
- `/ai-tools` — directory positioning + category previews
- `/career`, `/creator` — experience pages with tier callouts
- `/community`, `/opportunities`, `/events`
- `/memberships` — four options + full comparison table
- `/8-month-career-program`
- `/stories` — "Member stories coming soon" with the format preview
- `/faq`, `/contact`
- `/sign-in`, `/get-started`
- `/privacy`, `/terms`, `/cookies`, `/refunds`
- `/coming-soon` pattern via a shared component, not dead links

## Components

Layout: `SiteHeader` (desktop nav + mobile sheet menu, persistent Get Started CTA), `SiteFooter` (Explore / Membership / Company / Legal columns; only real social links), `Section`, `SectionHeading`, `Container`.

Content: `Hero` (animated pillar flow around the logo mark), `ProblemCompare` (Without DIM vs With DIM), `EcosystemPillars` (five interactive pillar cards), `AudienceGrid` (8 audience cards linking to relevant pages), `PathFinder` (client-side selector → recommended pathway, no backend), `ToolCategoryGrid`, `TierCard`, `PricingTable`, `WhyDim`, `FaqAccordion` (Radix accordion), `CtaBand` (varied copy per placement), `ComingSoon`.

Content lives in typed data modules under `src/content/` (pillars, audiences, paths, tiers, faqs, tool categories) so pages stay declarative and copy is edited in one place.

## Content and honesty rules

Pricing exactly: Starter free, Creator R95/month, Career R250/month, 8-Month Career Program R1,650 once-off (8 months, not lifetime). No invented member counts, testimonials, partnerships, guarantees, discounts, or countdowns. Anything not built shows "Coming Soon" with a real explanation and a link to what is available. Explicit notes that DIM does not guarantee employment or income.

## SEO

Per-route `head()` with unique title, description, og:title, og:description, og:url, og:type, and a leaf canonical. Home title: "Digital Intelligence Marketplace | Elevate Your Digital IQ". Organization/WebSite JSON-LD at root, FAQ page uses its own structured content. `public/robots.txt` and `public/sitemap.xml` cover all public routes. Single H1 per page, semantic sections, alt text everywhere.

## Accessibility and performance

Keyboard-operable pillar/path selectors, visible focus rings, ARIA labels on icon buttons, AA contrast on the light theme, `prefers-reduced-motion` disabling transforms. Generated hero/section imagery kept lean and lazy-loaded below the fold; animation via CSS transitions and small Motion usage only.

## Technical notes

TanStack Start file-based routes; tokens added to `src/styles.css` as oklch semantic variables (no hardcoded colour utilities); shadcn components restyled through variants; PathFinder and nav menus are local React state only. Hero and pillar art generated as assets under `src/assets/`.

## Phase 2 (after approval of Phase 1)

Enable Lovable Cloud, real email + Google sign-up/sign-in, `_authenticated` route group with the member dashboard shell, logged-in redirect away from marketing pages, logout back to `/`, and subscription tier storage.
