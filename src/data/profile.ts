import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Ashwini',
  lastName: 'Mathur',
  position: 'Assistant Professor @ FET Jain -Deemed to be university',
  summary: [
    'Educator ★️ Virtualization Technologies, Cloud Computing, Full Stack Web Devolepment, Enterprise Network Engineering, Linux, Amazon Web Services',
  ],
  avatar: {
    srcPath: 'profile/Ashwini_500x500.JPG',
    caption: 'Ashwini M',
  },
  location: {
    name: 'Bangalore, India',
  },
  tags: [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Image Processing' },
    { name: 'Virtualization' },
    { name: 'Full Stack Web Devolepment' },
  ],
  socialLinks,
};
