# HuntedRaven7 Website - Plan

## 1. Concept
Personal homepage for **huntedraven7**, styled in the spirit of **omarchy.org**:
text-first and editorial. Big display type, monospace labels, hairline borders,
ASCII-chart accents, a light/dark theme, and zero decoration you don't need.

## 2. Visual Design System

### Colors (CSS variables — Mocha default, Latte for light via `[data-theme="light"]`)
| Role | Latte (light) | Mocha (dark) | Notes |
|------|-------|------|-------|
| Paper (bg) | `#eff1f5` | `#1e1e2e` | base |
| Ink (text) | `#4c4f69` | `#cdd6f4` | text |
| Muted | `#8c8fa1` | `#6c7086` | labels, secondary text |
| Line (borders) | `rgba(76,79,105,.16)` | `rgba(205,214,244,.14)` | hairlines |
| Accent | `#8839ef` | `#cba6f7` | mauve — the one loud color |

Themes are **Catppuccin Mocha** (default) ↔ **Latte** (toggled with `T`).

### Typography
- **Display/Headings**: `Space Grotesk` (bold, tight leading)
- **Mono labels**: `IBM Plex Mono` (uppercase, letter-spaced, tabular)
- **Body**: `Inter`

### Effects
- Theme toggle via `T` key or button; persisted in `localStorage`.
- Nav underline slides in on hover (accent).
- Project / journal rows reveal an accent arrow on hover.
- Nothing glows, nothing floats, nothing is animated for its own sake.

## 3. Tech Stack
- **Framework**: Astro 7 (static)
- **Styling**: Tailwind CSS (v4, vite plugin) + custom CSS variables
- **Fonts**: Google Fonts (Space Grotesk, IBM Plex Mono, Inter)
- **Deploy**: GitHub Pages via Actions

## 4. Page Architecture
Single scrolling page with anchored sections (no constellation, no SPA zones):

| Anchor | Label | Section |
|--------|-------|---------|
| `#home` | HOME | Hero + tagline + CTAs |
| — | — | Stats strip (ASCII sparklines) |
| `#work` | WORK | Project list rows |
| `#about` | ABOUT | Bio + ASCII skill bars |
| `#journal` | JOURNAL | Post log (date + title) |
| `#lab` | LAB | Experiment cards |
| `#contact` | CONTACT | Channel links |

Sticky top bar: brand + mono nav + theme toggle (T).

## 5. Components
- `Header.astro` — top bar, nav, theme toggle
- `index.astro` — all sections in one editorial page

## 6. File Structure
```
huntedraven7.github.io/
├── src/
│   ├── components/
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro    (fonts, theme boot, meta)
│   ├── pages/
│   │   └── index.astro     (hero, work, about, journal, lab, contact)
│   └── styles/
│       └── global.css      (theme tokens, base, helpers)
├── public/
├── astro.config.mjs
└── package.json
```

## 7. Status
- [x] Astro + Tailwind scaffold
- [x] Theme tokens (light/dark) + base styles
- [x] Top bar with brand, nav, theme toggle (`T`)
- [x] Hero, stats strip, work, about, journal, lab, contact, footer
- [x] Landscape builds clean (`npm run build`)
- [ ] Browser QA (light/dark, mobile, focus, reduced motion)
- [ ] Deploy config for GitHub Pages