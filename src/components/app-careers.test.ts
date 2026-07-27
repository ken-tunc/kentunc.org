import { afterEach, expect, it } from 'vite-plus/test';
import './app-careers.ts';
import type { AppCareers } from './app-careers.ts';
import { careers } from '../lib/careers.ts';

async function render(): Promise<AppCareers> {
  const el = document.createElement('app-careers');
  document.body.append(el);
  await el.updateComplete;
  return el;
}

afterEach(() => {
  document.body.replaceChildren();
});

it('renders one entry per career', async () => {
  const el = await render();
  expect(el.shadowRoot?.querySelectorAll('li')).toHaveLength(careers.length);
});

it('highlights only the ongoing entry', async () => {
  const el = await render();
  const current = el.shadowRoot?.querySelectorAll('li.current');
  expect(current).toHaveLength(1);
  expect(current?.[0]?.textContent).toContain(careers.at(-1)?.label);
});

it('shows each label and formatted period', async () => {
  const el = await render();
  const text = el.shadowRoot?.textContent ?? '';
  expect(text).toContain('Keio University');
  expect(text).toContain('2013/04 ~ 2017/03');
  expect(text).toContain('2022/05 ~ Present');
});
