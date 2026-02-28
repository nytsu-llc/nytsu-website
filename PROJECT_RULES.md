# Nytsu Website — Project Rules

**Single source of truth for AI assistants** (Cursor, GitHub Copilot, Claude, etc.).  
Edit this file to change rules; point your IDE or prompt at it so any model follows the same conventions.

---

## Tech Stack

- **React** (Vite), **TypeScript**
- **Tailwind CSS** for all styling (utility classes only; no inline styles or extra CSS files except `index.css` for Tailwind directives)
- **Framer Motion** for animations
- **react-i18next** for i18n (English + Spanish)
- **React Hook Form** for form validation
- **Radix UI** (unstyled primitives) for accessible UI patterns (e.g. dropdowns, dialogs). Style with Tailwind and brand tokens.
- **pnpm** for package management

## Brand (Nytsu Guidelines v2)

- **Colors:** Use the studio palette from `tailwind.config.js`: `ink`, `studio`, `graphite`, `mist`, `paper`, `white`. Product accents only on project cards: `amber` (JustIn), `green` (Zutto).
- **Typography:** Space Grotesk (primary), Space Mono (labels, CTAs, section tags, captions). Load both from Google Fonts.
- **Logo:** Use the `Logo` component (mark + wordmark or mark-only). Mark is monochrome only (ink or paper).
- **Section tags:** Space Mono, small size, uppercase, letter-spacing; optional short line before the label (see Projects section).
- **Product cards:** Include product accent bar (amber/green) and "Designed by Nytsu" with small mark at bottom. See `.cursor/docs/BRAND_IMPLEMENTATION_NOTES.md` for full details.

## Code Conventions

- **Imports:** Use the **`@` alias** for paths under `src/`. Example: `import Logo from '@/components/logo'`, `import { Project } from '@/types'`, `import '@/index.css'`. Do not use relative paths like `../components/logo` or `./contexts/theme-context` when an `@/` path is available.
- Prefer **functional components** and hooks.
- Use **Tailwind** classes only; no new CSS files unless strictly necessary.
- Keep **animations subtle** (scale, shadow, opacity); support theme color transitions.
- **i18n:** All user-facing strings go in `src/i18n/locales/en/translation.json` and `es/translation.json`; use `useTranslation()` and `t('key')`.
- **Accessibility:** Semantic HTML, ARIA where needed, sufficient contrast (brand palette is chosen for this).

## File Layout

- Components in `src/components/`
- i18n in `src/i18n/` (config + `locales/en`, `locales/es`)
- Types in `src/types/`
- Data (e.g. projects) in `src/data/`
- Brand reference: `.cursor/docs/BRAND_IMPLEMENTATION_NOTES.md`

## File naming & conventions

- **File names: kebab-case** — Use lowercase with hyphens for all new files (e.g. `my-component.tsx`, `use-auth.ts`, `project-card.tsx`). Apply to components, hooks, utils, and any new source files.
- **React components:** One main component per file; filename matches component name in kebab-case (e.g. `NytsuLogo` → `nytsu-logo.tsx`).
- **Hooks:** Prefix file with `use-` when it’s a custom hook (e.g. `use-theme.ts`).
- **Other rules:** Add more naming or style rules here as needed (e.g. test files `*.test.tsx`, constants in `kebab-case.ts`).

## Do Not

- Don’t use Montserrat or other fonts; use Space Grotesk + Space Mono.
- Don’t use raw `#000` / `#FFF` as primary UI; use `ink` / `paper`.
- Don’t add product colors (amber/green) to global header, footer, or layout; only in product-related blocks (e.g. project cards).

---

## Using this file with different tools

| Tool | How to use |
|------|------------|
| **Cursor** | Rules in `.cursor/rules/` reference this file. You can also `@PROJECT_RULES.md` in chat. |
| **GitHub Copilot** | Copilot reads `.github/copilot-instructions.md`; that file points here and summarizes key rules. |
| **Claude (Code / other)** | Add this file to context, or paste its path in your project/workspace instructions. |
| **Other assistants** | Include this file in the conversation or in “project rules” / “custom instructions” if the tool supports it. |

**Rule of thumb:** Keep all project rules in **this file** so one edit applies everywhere.
