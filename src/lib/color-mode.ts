export type ColorMode = 'light' | 'dark';

/** Matches the previous site, which forced dark mode regardless of the OS. */
export const DEFAULT_COLOR_MODE: ColorMode = 'dark';

/** Keep in sync with the inline bootstrap script in index.html. */
export const STORAGE_KEY = 'color-mode';

/** `--md-sys-color-background` of each mode, mirrored into `<meta name="theme-color">`. */
const THEME_COLOR: Record<ColorMode, string> = {
  dark: '#111318',
  light: '#f9f9ff',
};

export function isColorMode(value: unknown): value is ColorMode {
  return value === 'light' || value === 'dark';
}

export function otherColorMode(mode: ColorMode): ColorMode {
  return mode === 'dark' ? 'light' : 'dark';
}

/**
 * Reads the stored preference, falling back to {@link DEFAULT_COLOR_MODE}.
 * Storage access throws in some privacy modes, so failures degrade to the
 * default rather than breaking the page.
 */
export function readColorMode(): ColorMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isColorMode(stored) ? stored : DEFAULT_COLOR_MODE;
  } catch {
    return DEFAULT_COLOR_MODE;
  }
}

/** Applies the mode to the document without persisting it. */
export function applyColorMode(mode: ColorMode): void {
  document.documentElement.dataset['theme'] = mode;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', THEME_COLOR[mode]);
  }
}

/** Applies the mode and persists it for the next visit. */
export function setColorMode(mode: ColorMode): void {
  applyColorMode(mode);
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // A stored preference is a nicety; ignore quota or privacy-mode errors.
  }
}
