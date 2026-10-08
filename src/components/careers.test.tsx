import { cleanup, render } from '@testing-library/preact';
import { afterEach, expect, it } from 'vite-plus/test';
import { Careers } from './careers.tsx';
import { careers } from '../lib/careers.ts';

afterEach(cleanup);

it('renders one entry per career', () => {
  const { container } = render(<Careers />);
  expect(container.querySelectorAll('li')).toHaveLength(careers.length);
});

it('highlights only the ongoing entry', () => {
  const { container } = render(<Careers />);
  const current = container.querySelectorAll('li[aria-current]');
  expect(current).toHaveLength(1);
  expect(current[0]?.textContent).toContain(careers.at(-1)?.label);
});

it('shows each label and formatted period', () => {
  const { container } = render(<Careers />);
  const text = container.textContent ?? '';
  expect(text).toContain('Keio University');
  expect(text).toContain('2013/04 ~ 2017/03');
  expect(text).toContain('2022/05 ~ Present');
});

it('only draws connectors between entries', () => {
  const { container } = render(<Careers />);
  expect(container.querySelector('li:first-child > hr:first-child')).toBeNull();
  expect(container.querySelector('li:last-child > hr:last-child')).toBeNull();
  expect(container.querySelectorAll('hr')).toHaveLength((careers.length - 1) * 2);
});
