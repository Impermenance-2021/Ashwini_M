import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ashwini',
  lastName: 'Mathur',
  position: 'Asst. Prof. @FET-Jain',
  summary: [
    '★️ Educator',
    ],
  avatar: {
    srcPath: 'profile/Ashwini_500x500.JPG',
    caption: 'Ashwini M',
  },
  location: {
    name: 'Bangalore, India',
  },
  tags: [
    { name: 'Machine Learning' },
    { name: 'Cloud Computing' },
    { name: 'Image Processing' },
    { name: 'Linux' },
    { name: 'Virtualization Technologies' },
    { name: 'Full Stack Web Devolepment' },
  ],
  socialLinks,
};
