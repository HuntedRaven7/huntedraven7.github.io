# quinn.tarxz.zip

Personal site of Quinn — container nerd, Linux desktop tinkerer, open source enjoyer.

Built with **SvelteKit 5** + **Svelte 5** (runes), **Tailwind CSS v4**, and deployed as a fully
static build to **GitHub Pages** via Actions.

## Stack

- **SvelteKit** with `adapter-static` (fully prerendered output in `build/`)
- **Tailwind CSS v4** via the Vite plugin, with theme tokens in `src/app.css`
- **Fonts** self-hosted through Fontsource: Space Grotesk (display), Inter (body), Caveat (handwritten accents)
- Light/dark themes driven by a `.dark` class on `<html>` (no-FOUC inline script in `src/app.html`)
- **Discord status** powered by the [Lanyard](https://lanyard.rest) API (`src/lib/components/DiscordCard.svelte`)
- **Comments** via utterances + GitHub issues (modal, `src/lib/components/CommentsModal.svelte`)

## Commands

```sh
npm run dev      # dev server
npm run build    # static build → ./build
npm run preview  # preview the production build
npm run check    # svelte-check
```

## Editing content

All copy, links, projects, FAQs, and stats live in **`src/lib/content.ts`** — tune it there.
Items marked `TODO` (project links, blog URL) need real values.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys `./build` to GitHub Pages on every
push to `main`. The custom domain lives in `static/CNAME` (`quinn.tarxz.zip`).

Design direction: [ArtCraft](https://getartcraft.com/) × [Outcrowd](https://www.outcrowd.io/) —
card-driven layout, numbered sections, chips/pills, marquee, floating hero shapes, and a lot of
coral pink.
