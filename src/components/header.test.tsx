import { cleanup, fireEvent, render, screen } from '@testing-library/preact';
import { afterEach, beforeEach, expect, it } from 'vite-plus/test';
import { Header } from './header.tsx';
import { STORAGE_KEY, THEME } from '../lib/color-mode.ts';

function toggleButton(): HTMLElement {
  return screen.getByRole('button');
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

afterEach(cleanup);

it('renders the site title', () => {
  render(<Header />);
  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('kentunc.org');
});

it('labels the toggle with the mode it switches to', () => {
  render(<Header />);
  expect(toggleButton().getAttribute('aria-label')).toBe('Switch to light mode');
});

it('switches the document to light mode on click', () => {
  render(<Header />);
  fireEvent.click(toggleButton());

  expect(document.documentElement.dataset['theme']).toBe(THEME.light);
  expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  expect(toggleButton().getAttribute('aria-label')).toBe('Switch to dark mode');
});

it('switches back on a second click', () => {
  render(<Header />);
  fireEvent.click(toggleButton());
  fireEvent.click(toggleButton());

  expect(document.documentElement.dataset['theme']).toBe(THEME.dark);
  expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
});

it('starts from the stored mode', () => {
  localStorage.setItem(STORAGE_KEY, 'light');
  render(<Header />);
  expect(toggleButton().getAttribute('aria-label')).toBe('Switch to dark mode');
});
