import { describe, expect, it } from 'vite-plus/test';
import { careers, formatMonth, formatPeriod, isOngoing } from './careers.ts';

describe('formatMonth', () => {
  it('formats a month as YYYY/MM', () => {
    expect(formatMonth(new Date(2013, 3))).toBe('2013/04');
  });

  it('pads single-digit months', () => {
    expect(formatMonth(new Date(2022, 8))).toBe('2022/09');
  });

  it('handles December, the highest month index', () => {
    expect(formatMonth(new Date(2019, 11))).toBe('2019/12');
  });
});

describe('formatPeriod', () => {
  it('renders a closed period', () => {
    expect(
      formatPeriod({
        label: 'x',
        description: '',
        since: new Date(2019, 3),
        until: new Date(2022, 3),
      }),
    ).toBe('2019/04 ~ 2022/04');
  });

  it('renders an ongoing period as Present', () => {
    expect(formatPeriod({ label: 'x', description: '', since: new Date(2022, 4) })).toBe(
      '2022/05 ~ Present',
    );
  });
});

describe('careers', () => {
  it('is ordered oldest first', () => {
    const timestamps = careers.map((career) => career.since.getTime());
    expect(timestamps).toStrictEqual([...timestamps].sort((a, b) => a - b));
  });

  it('marks only the latest entry as ongoing', () => {
    expect(careers.filter(isOngoing)).toStrictEqual([careers.at(-1)]);
  });

  it('never ends a role before it starts', () => {
    for (const career of careers) {
      if (career.until) {
        expect(career.until.getTime()).toBeGreaterThan(career.since.getTime());
      }
    }
  });
});
