import { describe, expect, it } from 'vite-plus/test';
import { externalLinks, linkTarget } from './links.ts';

describe('linkTarget', () => {
  it('opens web links in a new tab', () => {
    expect(
      linkTarget({
        label: 'x',
        handle: '',
        url: 'https://example.com',
        icon: () => {
          throw new Error('unused');
        },
      }),
    ).toBe('_blank');
  });

  it('keeps mailto links in the same tab', () => {
    expect(
      linkTarget({
        label: 'x',
        handle: '',
        url: 'mailto:someone@example.com',
        icon: () => {
          throw new Error('unused');
        },
      }),
    ).toBe('');
  });
});

describe('externalLinks', () => {
  it('only uses https or mailto URLs', () => {
    for (const link of externalLinks) {
      expect(link.url).toMatch(/^(https:\/\/|mailto:)/);
    }
  });

  it('has a unique label per entry', () => {
    const labels = externalLinks.map((link) => link.label);
    expect(new Set(labels).size).toBe(labels.length);
  });
});
