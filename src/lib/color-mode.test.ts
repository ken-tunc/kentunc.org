import { beforeEach, describe, expect, it } from 'vite-plus/test';
import {
  DEFAULT_COLOR_MODE,
  STORAGE_KEY,
  applyColorMode,
  isColorMode,
  otherColorMode,
  readColorMode,
  setColorMode,
} from './color-mode.ts';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  document.head.querySelector('meta[name="theme-color"]')?.remove();
});

describe('isColorMode', () => {
  it('accepts the two supported modes', () => {
    expect(isColorMode('light')).toBe(true);
    expect(isColorMode('dark')).toBe(true);
  });

  it('rejects anything else', () => {
    expect(isColorMode('sepia')).toBe(false);
    expect(isColorMode(null)).toBe(false);
  });
});

describe('otherColorMode', () => {
  it('flips the mode', () => {
    expect(otherColorMode('dark')).toBe('light');
    expect(otherColorMode('light')).toBe('dark');
  });
});

describe('readColorMode', () => {
  it('defaults to dark when nothing is stored', () => {
    expect(readColorMode()).toBe(DEFAULT_COLOR_MODE);
    expect(DEFAULT_COLOR_MODE).toBe('dark');
  });

  it('returns the stored mode', () => {
    localStorage.setItem(STORAGE_KEY, 'light');
    expect(readColorMode()).toBe('light');
  });

  it('ignores an unrecognised stored value', () => {
    localStorage.setItem(STORAGE_KEY, 'sepia');
    expect(readColorMode()).toBe(DEFAULT_COLOR_MODE);
  });
});

describe('applyColorMode', () => {
  it('sets data-theme on the document element', () => {
    applyColorMode('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('keeps the theme-color meta tag in sync', () => {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#000000';
    document.head.append(meta);

    applyColorMode('light');
    expect(meta.content).toBe('#f9f9ff');

    applyColorMode('dark');
    expect(meta.content).toBe('#111318');
  });

  it('does not persist the mode', () => {
    applyColorMode('light');
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});

describe('setColorMode', () => {
  it('applies and persists the mode', () => {
    setColorMode('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
    expect(readColorMode()).toBe('light');
  });
});
