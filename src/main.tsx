import './styles/main.css';
import { hydrate } from 'preact';
import { App } from './components/app.tsx';
import { applyColorMode, readColorMode } from './lib/color-mode.ts';

if (typeof window !== 'undefined') {
  // index.html applies the stored mode before first paint; this re-applies it
  // so the `<meta name="theme-color">` stays in sync too.
  applyColorMode(readColorMode());

  const root = document.getElementById('app');
  if (root) {
    hydrate(<App />, root);
  }
}

/** Called by @preact/preset-vite at build time to prerender the page. */
export async function prerender() {
  const { renderToString } = await import('preact-render-to-string');
  return { html: renderToString(<App />) };
}
