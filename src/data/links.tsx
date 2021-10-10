import { FontAwesomeIconProps } from '@/components/FontAwesomeIcon';

export type ExternalLink = Pick<
  FontAwesomeIconProps,
  'stylePrefix' | 'iconName'
> & {
  label: string;
  url: string;
};

export const externalLinks: ExternalLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/ken-tunc',
    stylePrefix: 'fab',
    iconName: 'fa-github',
  },
  {
    label: 'Blog',
    url: 'https://ken-tunc.hatenablog.com/',
    stylePrefix: 'fas',
    iconName: 'fa-blog',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/ken_tunc',
    stylePrefix: 'fab',
    iconName: 'fa-twitter',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/people/%E7%94%B0%E5%8F%A3-%E5%81%A5%E4%BB%8B/100006489850788/',
    stylePrefix: 'fab',
    iconName: 'fa-facebook',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ken_tunc/',
    stylePrefix: 'fab',
    iconName: 'fa-instagram',
  },
  {
    label: 'Keybase',
    url: 'https://keybase.io/ken_tunc',
    stylePrefix: 'fab',
    iconName: 'fa-keybase',
  },
  {
    label: 'Email',
    url: 'mailto:tunc.adfuisses.53@gmail.com',
    stylePrefix: 'fas',
    iconName: 'fa-envelope',
  },
  {
    label: 'Apple Music',
    url: 'https://music.apple.com/profile/ken_tunc',
    stylePrefix: 'fab',
    iconName: 'fa-apple',
  },
];
