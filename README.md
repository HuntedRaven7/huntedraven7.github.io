# huntedraven7.github.io — GNOME dashboard portfolio

SvelteKit + StyleX dashboard-style portfolio. Laravel-flavored hero up top, GNOME
shell (top bar, dock, windows) throughout, static deploy to GitHub Pages on the
custom domain `robin.tarxz.zip`.

## Develop

```sh
npm install
npm run dev -- --open
```

## Checks

```sh
npm run check      # svelte-check
npm run lint       # prettier + eslint (StyleX rules on)
npm run test:unit -- --run   # vitest
npx playwright test          # e2e (needs `npx playwright install`)
npm run build      # adapter-static -> ./build
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and ships `./build`
via GitHub Pages. `static/CNAME` keeps `robin.tarxz.zip`.

## Styling

All CSS via StyleX (`stylex.attrs()` spreads in Svelte, never `class`/`style`
alongside). Tokens in `src/lib/tokens.stylex.ts`, breakpoints in
`src/lib/constants.stylex.ts`, light/dark via `stylex.createTheme` in
`src/lib/themes.ts`. Vite aliases `$lib` for the StyleX compiler in
`vite.config.ts`.
