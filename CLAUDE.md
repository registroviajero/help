# CLAUDE.md

Help center for RegistroViajero — published at **help.registroviajero.com**. Static VitePress site, deployed to GitHub Pages.

## Working rules (read first)

- **Stealth commits.** Never include `Co-Authored-By: Claude` or any other Claude/Anthropic signature in commit messages or PR descriptions. Commit as the configured git user, nothing more.
- **Keep facts in sync with the app.** This site describes behavior of `app.registroviajero.com`. If you change wording here, verify it still matches the app. If you changed the app, mirror the user-facing consequence here — outdated help docs are worse than missing ones.
- **Spanish only.** All published content is in `es-ES`. Preserve Spanish domain terms (`parte de viajeros`, `reserva de hospedaje`, `código de arrendador`, `número de soporte`, `parentesco`). Do not translate them and do not anglicize them.
- **One intent per change.** No drive-by copy rewrites, no unasked-for restructuring. If a cleanup is worth doing, it earns its own PR.
- **Surface uncertainty.** If a claim (pricing, locales, Ministry error codes, retention) could be stale, check the source repo (`/Users/asur/Code/registroviajero.com/CLAUDE.md`, `docs/ses-schema-reference.md`) before editing.

## Quick reference

```
bun install                   # Install dependencies
bun run dev                   # VitePress dev server
bun run build                 # Build → docs/.vitepress/dist
bun run preview               # Preview the built site
```

Node/runtime: **Bun** (no npm/pnpm/yarn). Package manager lock is `bun.lock`.

## Tech stack

- **VitePress 1.6** (static site generator, Vue-based). Uses `cleanUrls: true` and built-in `sitemap` config.
- **vitepress-plugin-llms** — auto-generates `llms.txt` / `llms-full.txt` at build time so AI agents can ingest the help content.
- **Bun** runtime.
- **GitHub Pages** deployment via `.github/workflows/deploy.yml` (push to `main` → Pages).
- **Umami** analytics (cookieless, self-hosted at `analytics.registroviajero.com`).

## Structure

```
docs/
├── index.md                  # Home (hero layout)
├── faq.md                    # Consolidated FAQ — mirrored into FAQPage JSON-LD in config.ts
├── guia/                     # Step-by-step guides
│   ├── index.md              # "Qué es RegistroViajero"
│   ├── crear-cuenta.md
│   ├── alojamientos.md
│   ├── credenciales-ses.md
│   ├── reservas.md
│   ├── check-in.md
│   ├── ical.md
│   ├── enviar.md
│   ├── equipo.md
│   ├── facturacion.md
│   ├── notificaciones.md
│   └── problemas-comunes.md  # Troubleshooting reference
├── referencia/               # Dense reference tables
│   ├── estados.md
│   ├── errores-ses.md
│   └── sanciones.md          # LO 4/2015 framework
├── public/                   # Static assets served at site root
│   ├── favicon.*, logo.svg, og-image.*
│   ├── robots.txt            # Allow all + explicit AI bot allowlist
│   └── .well-known/
│       └── security.txt      # Expires 2027-04-18
└── .vitepress/
    ├── config.ts             # Nav, sidebar, head, sitemap, transformPageData (canonical + JSON-LD)
    └── theme/
        ├── index.ts          # Extends DefaultTheme
        └── custom.css        # Brand tokens
```

## Configuration conventions

- **Sidebar is manual.** `docs/.vitepress/config.ts` defines nav + sidebar explicitly. Adding a new page requires (1) creating the `.md` and (2) adding the entry to the correct sidebar section. No file-system-based sidebar.
- **Legal pages are external.** Aviso legal / privacidad / términos / cookies live on the marketing site (`registroviajero.com/legal/*`). Never add legal pages here — link out.
- **External links use full URL.** `app.registroviajero.com`, `registroviajero.com/legal/*`, `polar.sh`, `aepd.es`. Internal links use relative paths (`/guia/check-in`, `/referencia/estados`).
- **Brand color `#2563eb`.** Defined in `docs/.vitepress/theme/custom.css` as VitePress `--vp-c-brand-*` tokens. Do not introduce ad-hoc colors.
- **Umami website-id is hardcoded in `config.ts`.** The help site has its own Umami site ID — do not reuse the marketing or app ID.
- **`cleanUrls: true`** — pages render as `/foo/` (no `.html`). Canonical URLs in `pageUrl()` match this convention; don't change one without the other.
- **`lastUpdated: true`** — VitePress reads git history for the "Actualizado" footer. `bun install` in CI must run with `fetch-depth: 0` (already configured in `.github/workflows/deploy.yml`).

## SEO + meta

- **Site-wide head** (in `config.ts`): favicon, theme-color, analytics preconnect + Umami script, static OG (`og:site_name`, `og:locale`, `og:image`), Twitter card, and sitewide JSON-LD (`Organization`, `WebSite`).
- **Per-page head** (in `transformPageData`): canonical `<link>`, `og:url`, `og:title`, `og:description`, `og:type` (`article` for non-home), Twitter title/description, and per-page JSON-LD:
  - `BreadcrumbList` on every page except the home.
  - `FAQPage` on `/faq` — generated from the `faqs` array at the top of `config.ts`.
  - `TechArticle` on every `guia/*` and `referencia/*` page.
- **`faqs` array ↔ `faq.md`.** The FAQ schema is built from the array in `config.ts`. If you add, edit or remove a Q/A in `faq.md`, mirror the change in the array. Mismatched visible content and FAQPage schema is a Google policy violation.
- **Sitemap** is emitted by VitePress's built-in generator (`sitemap: { hostname: SITE_URL }`). It auto-includes every `.md` page. No per-page config needed.
- **`robots.txt`** in `docs/public/` allows all crawlers and explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`. If the policy changes, update here first.
- **`security.txt`** lives at `docs/public/.well-known/security.txt`. `Expires` is 2027-04-18 — renew before that date.
- **LLM ingestion** is handled by `vitepress-plugin-llms`, which generates `/llms.txt` and `/llms-full.txt` from the markdown at build time. Do not hand-author these files.

## Commits, branches, deploy

- Branch names: `feat/…`, `fix/…`, `docs/…`, all kebab-case.
- Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`). Never add co-author lines.
- Push to `main` triggers GitHub Actions → GitHub Pages. No preview environment.
- Do **not** commit `docs/.vitepress/dist/` or `docs/.vitepress/cache/` — already gitignored.

## Content rules

### Audience and tone

- Target reader: **agency owner / admin** managing tourist accommodations in Spain. Not the end guest.
- Plain, procedural tone. No marketing adjectives ("powerful", "seamless"). No emojis in body text.
- Short sentences. Numbered steps for procedures. Tables for enum-like reference (states, errors, roles, platforms).
- Do not surface internal implementation (job queue internals, JWT lifetimes, Drizzle, Bun.sql, `FOR UPDATE SKIP LOCKED`, etc.) unless it's a user-visible guarantee. User-visible security claims (argon2id for passwords, AES-256-GCM for SES credentials, HTTPS, 3-year retention) **are** OK — they're documented in `privacidad.md` on the marketing site and must match.

### Factual accuracy (verify against the app before editing)

- **Guest locales: 9.** `es, en, fr, de, it, pt, gl, eu, ca` — español, inglés, francés, alemán, italiano, portugués, gallego, euskera, catalán.
- **Admin locales: 2.** Spanish + English (not listed publicly as a feature).
- **Geographic coverage:** SES.HOSPEDAJES only. **Cataluña** (Mossos d'Esquadra) and **País Vasco** (Ertzaintza) are **not** supported yet. Do not imply otherwise.
- **Billing:** 5 €/puesto/mes, minimum 2 puestos. 15-day trial, no credit card. Billed via Polar. Guest check-in is **never** blocked by subscription state — even an expired plan lets guests complete their links.
- **iCal sources:** Booking.com, Airbnb, VRBO, Expedia, Tripadvisor, Google Calendar, plus any `.ics` feed. Sync interval: every 15 minutes + manual.
- **Retention:** 3 years per RD 933/2021, auto-deleted after that. Audit log is preserved (immutable) for legal compliance.
- **Document rules:** DNI/NIE require `apellido2` and `número de soporte`. DNI is Spanish-only. Passport/foreign ID/travel doc require only the front photo.
- **Minors:** under 14 exempt from registration (RD 933/2021). 14–17 must complete the form and declare `parentesco` with an adult on the same reservation.
- **Roles:** Propietario / Administrador / Miembro. Only Propietario can access billing.
- **Push notifications:** Brave blocks FCM push — document as a known limitation, suggest Chrome/Edge.
- **Notification types:** `guest_completed`, `submission_confirmed`, `submission_error`, `team_member_joined`, `registration_created`. Keep this list synced with the backend notification catalog.

### Formatting

- Use VitePress containers for callouts:
  - `::: tip` — helpful non-critical advice
  - `::: info` — neutral contextual note
  - `::: warning` — behavior the user must be aware of (e.g., locked states, Brave push)
  - `::: danger` — destructive/irreversible actions only
- Use tables for dense reference content (error codes, states, role matrices, platforms).
- Use fenced code blocks only for actual code/URLs/flows. Do not wrap UI paths in code — write `Configuración → Equipo` as plain text with `→`.
- Headings: H1 is the page title (one per page). H2 for major sections, H3 for sub-steps. Don't skip levels.
- Dates in prose: `abril 2026` style. Dates in frontmatter: ISO `YYYY-MM-DD`.
- Never hardcode the current year in boilerplate like "© 2026" — that lives in `config.ts` footer, not page content.

### Cross-site linking

- **App:** `https://app.registroviajero.com` (login, register, dashboard).
- **Marketing site:** `https://registroviajero.com` and `https://registroviajero.com/legal/*`.
- **This site:** never link to itself with a full URL — always use root-relative paths.

### Adding a new page

1. Create the `.md` under the correct folder (`guia/`, `referencia/`, or root).
2. Give it a `title` and `description` in frontmatter — both feed OG meta and the `TechArticle` JSON-LD.
3. Add a sidebar entry in `docs/.vitepress/config.ts` under the right section.
4. If it's a primary concept, also add a nav entry.
5. If it affects behavior documented in `faq.md`, update the FAQ **and** mirror the change in the `faqs` array in `config.ts`.
6. If it adds or changes a Ministry-facing term, cross-check the main app's `docs/ses-schema-reference.md`.

### Assets

- Drop images into `docs/public/` and reference them as `/name.png` (root-relative).
- `og-image.png` is 1200×630 and referenced in `config.ts` head. If you replace it, keep the dimensions.
- Do not inline base64 images in markdown.

## Things not to do

- Don't introduce alternative UI components, Vue widgets, or custom theme overrides beyond the brand tokens in `custom.css`. Plain markdown + default theme stays.
- Don't add client-side JS or analytics scripts beyond the existing Umami snippet.
- Don't duplicate legal content from the marketing site. Link to it.
- Don't translate to English or add other locales. This site is `es-ES` only.
- Don't remove `::: info` notes about Cataluña / País Vasco until those integrations actually ship in the app.
- Don't change the `.vitepress/config.ts` title/description without also updating the OG meta block right below it.
