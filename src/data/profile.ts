import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ashwini',
  lastName: 'Mathur',
  position: 'Assistant Professor @ FET Jain Deemed to be university, Bangalore, India',
  summary: [
    'Author of 100k ★️ javascript-algorithms repo on GitHub',
  ],
  avatar: {
    srcPath: 'profile/avatar_500x500.jpg',
    caption: 'Ashwini',
  },
  location: {
    name: 'Bangalore, India',
  },
  tags: [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Python' },
    { name: 'GO' },
    { name: 'Full Stack' },
  ],
  socialLinks,
};
