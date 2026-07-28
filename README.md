# kentunc.org

Personal site. Built with [Lit](https://lit.dev/) and
[Material Web](https://github.com/material-components/material-web) (Material 3)
on the [Vite+](https://viteplus.dev/) toolchain, deployed to GitHub Pages.

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
`vite.config.ts`.

## Layout

```
src/
  components/   Lit custom elements (<app-root> and its children)
  lib/          Data and logic, unit tested alongside the source
  styles/       Material 3 color tokens and page-level CSS
```

### Theming

`src/styles/theme.css` holds the Material 3 `--md-sys-color-*` tokens for both
modes. They were generated with `@material/material-color-utilities`
(`SchemeTonalSpot`, seed `#1976D2`) rather than hand-picked, so regenerate them
from the same seed if the palette ever needs to change.

Dark is the default. The chosen mode is stored in `localStorage` and applied by
an inline script in `index.html` before the first paint.

### Icons

The site only needs a handful of icons, so they are inlined as SVG in
`src/lib/icons.ts` instead of loading an icon webfont. Material Symbols are
Apache-2.0 (© Google); brand marks come from Simple Icons (CC0-1.0).
