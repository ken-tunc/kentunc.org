import {
  Apple,
  Article,
  Email,
  Facebook,
  GitHub,
  Instagram,
  SvgIconComponent,
  Twitter,
  VpnKey
} from '@mui/icons-material';

export interface ExternalLink {
  icon: SvgIconComponent,
  label: string,
  url: string
}

export const externalLinks: ExternalLink[] = [
  {
    icon: GitHub,
    label: 'GitHub',
    url: 'https://github.com/ken-tunc'
  },
  {
    icon: Article,
    label: 'Blog',
    url: 'https://ken-tunc.hatenablog.com/'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    url: 'https://twitter.com/ken_tunc'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    url: 'https://www.facebook.com/people/%E7%94%B0%E5%8F%A3-%E5%81%A5%E4%BB%8B/100006489850788/'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/ken_tunc/'
  },
  {
    icon: VpnKey,
    label: 'Keybase',
    url: 'https://keybase.io/ken_tunc'
  },
  {
    icon: Email,
    label: 'Email',
    url: 'mailto:tunc.adfuisses.53@gmail.com'
  },
  {
    icon: Apple,
    label: 'Apple Music',
    url: 'https://music.apple.com/profile/ken_tunc'
  }
]