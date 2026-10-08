import { useEffect, useState } from 'preact/hooks';
import {
  type ColorMode,
  DEFAULT_COLOR_MODE,
  otherColorMode,
  readColorMode,
  setColorMode,
} from '../lib/color-mode.ts';
import { darkModeIcon as DarkModeIcon, lightModeIcon as LightModeIcon } from '../lib/icons.tsx';

export function Header() {
  // Start from the default so the client's first render matches the
  // prerendered HTML, then pick up the stored mode once hydrated.
  const [mode, setMode] = useState<ColorMode>(DEFAULT_COLOR_MODE);
  useEffect(() => setMode(readColorMode()), []);

  const next = otherColorMode(mode);
  const label = `Switch to ${next} mode`;

  const toggle = () => {
    setMode(next);
    setColorMode(next);
  };

  return (
    <header class="flex flex-wrap items-center justify-between gap-4">
      <h1 class="text-3xl font-bold">kentunc.org</h1>
      <button
        type="button"
        class="btn btn-circle btn-ghost"
        aria-label={label}
        title={label}
        onClick={toggle}
      >
        {/* Driven by the theme rather than `mode` so the right icon shows
            from the first paint, before hydration. */}
        <LightModeIcon class="size-6 light:hidden" />
        <DarkModeIcon class="hidden size-6 light:block" />
      </button>
    </header>
  );
}
