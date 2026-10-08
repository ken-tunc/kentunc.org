# kentunc.org

Personal site. Built with [Preact](https://preactjs.com/) and
[daisyUI](https://daisyui.com/) on [Tailwind CSS](https://tailwindcss.com/) and
the [Vite+](https://viteplus.dev/) toolchain, deployed to GitHub Pages.

The page is prerendered to static HTML at build time; the client only hydrates
it to run the theme toggle.

## Setup

Install the `vp` CLI once, then let it handle the rest — it manages the Node.js
version (from `.tool-versions`) and the package manager (from `packageManager`).

```sh
curl -fsSL https://vite.plus | bash   # macOS / Linux
vp install
```

## Commands

| Command      | What it does                |
| ------------ | --------------------------- |
| `vp dev`     | Start the dev server        |
| `vp check`   | Format, lint and type check |
| `vp test`    | Run tests                   |
| `vp build`   | Build to `dist/`            |
| `vp preview` | Serve the production build  |

`vp check --fix` formats and applies autofixes. All tool configuration lives in
`vite.config.ts`. `pnpm-workspace.yaml` points `vite` at the Vite+ core so the
Preact and Tailwind plugins share it; bump it alongside `vite-plus`.

## Layout

```
src/
  components/   Preact components (<App> and its children)
  lib/          Data and logic, unit tested alongside the source
  styles/       Tailwind CSS and daisyUI setup
```

### Theming

The page uses daisyUI's built-in `dim` (dark) and `nord` (light) themes,
configured in `src/styles/main.css`. To switch themes, change them there, in
`THEME`/`THEME_COLOR` in `src/lib/color-mode.ts`, and in the inline script in
`index.html`.

Dark is the default. The chosen mode is stored in `localStorage` and applied by
an inline script in `index.html` before the first paint.

### Icons

The site only needs a handful of icons, so they are inlined as SVG in
`src/lib/icons.ts` instead of loading an icon webfont. Material Symbols are
Apache-2.0 (© Google); brand marks come from Simple Icons (CC0-1.0).
