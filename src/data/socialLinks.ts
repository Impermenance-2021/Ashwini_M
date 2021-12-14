// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/ashwini-mathur-596a3758/',
    secondary: false,
    caption: 'Ashwini Mathur on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/Impermenance-2021',
    secondary: false,
    caption: 'Ashwini Mathur on GitHub',
  },
  {
    type: socialLinkTypes.facebook,
    url: 'https://www.facebook.com/ashwini.mathur.3',
    secondary: true,
    caption: 'Ashwini Mathur on Facebook',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/91_ashu/',
    secondary: true,
    caption: 'Ashwini Mathur on Instagram',
  },
  
];
