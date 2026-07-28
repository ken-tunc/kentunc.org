import { facebookIcon, githubIcon, mailIcon, xIcon } from './icons.ts';
import type { TemplateResult } from 'lit';

export type ExternalLink = {
  label: string;
  /** Shown under the label; also what the link resolves to. */
  handle: string;
  url: string;
  icon: () => TemplateResult;
};

export const externalLinks: readonly ExternalLink[] = [
  {
    label: 'GitHub',
    handle: '@ken-tunc',
    url: 'https://github.com/ken-tunc',
    icon: githubIcon,
  },
  {
    label: 'X',
    handle: '@ken_tunc',
    url: 'https://x.com/ken_tunc',
    icon: xIcon,
  },
  {
    label: 'Facebook',
    handle: '田口 健介',
    url: 'https://www.facebook.com/people/%E7%94%B0%E5%8F%A3-%E5%81%A5%E4%BB%8B/100006489850788/',
    icon: facebookIcon,
  },
  {
    label: 'Email',
    handle: 'tunc.adfuisses.53@gmail.com',
    url: 'mailto:tunc.adfuisses.53@gmail.com',
    icon: mailIcon,
  },
];

/** `mailto:` must open in the same tab; web links open in a new one. */
export function linkTarget(link: ExternalLink): '_blank' | '' {
  return link.url.startsWith('mailto:') ? '' : '_blank';
}
