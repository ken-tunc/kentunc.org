import { afterEach, beforeEach, expect, it } from 'vite-plus/test';
import './app-header.ts';
import type { AppHeader } from './app-header.ts';
import { STORAGE_KEY } from '../lib/color-mode.ts';

async function render(): Promise<AppHeader> {
  const el = document.createElement('app-header');
  document.body.append(el);
  await el.updateComplete;
  return el;
}

function toggleButton(el: AppHeader): HTMLElement {
  const button = el.shadowRoot?.querySelector<HTMLElement>('md-icon-button');
  if (!button) {
    throw new Error('theme toggle not rendered');
  }
  return button;
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

afterEach(() => {
  document.body.replaceChildren();
});

it('renders the site title', async () => {
  const el = await render();
  expect(el.shadowRoot?.querySelector('h1')?.textContent).toBe('kentunc.org');
});

it('labels the toggle with the mode it switches to', async () => {
  const el = await render();
  expect(toggleButton(el).getAttribute('aria-label')).toBe('Switch to light mode');
});

it('switches the document to light mode on click', async () => {
  const el = await render();
  toggleButton(el).click();
  await el.updateComplete;

  expect(document.documentElement.dataset['theme']).toBe('light');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(toggleButton(el).getAttribute('aria-label')).toBe('Switch to dark mode');
});

it('switches back on a second click', async () => {
  const el = await render();
  toggleButton(el).click();
  await el.updateComplete;
  toggleButton(el).click();
  await el.updateComplete;

  expect(document.documentElement.dataset['theme']).toBe('dark');
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
});

it('starts from the stored mode', async () => {
  localStorage.setItem(STORAGE_KEY, 'light');
  const el = await render();
  expect(toggleButton(el).getAttribute('aria-label')).toBe('Switch to dark mode');
});
