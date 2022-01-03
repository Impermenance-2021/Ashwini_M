import { Projects } from '../types/Project';

export const projects: Projects = {
  'self-parking-car-evolution': {
    id: 'self-parking-car-evolution',
    name: '🧬 Self-Parking Car Evolution',
    srcURL: { url: 'https://github.com/trekhleb/self-parking-car-evolution' },
    demoURL: { url: 'https://trekhleb.dev/self-parking-car-evolution' },
    cover: { srcPath: 'projects/self-parking-car-evolution/cover-00.jpg' },
    startDate: '2021-05-13',
    endDate: '2021-09-15',
    summary: [
      'Training the car to do self-parking using a genetic algorithm',
    ],
    tags: [
      { name: 'Genetic' },
      { name: 'Algorithms' },
      { name: 'Three.js' },
      { name: 'Cannon.js' },
      { name: 'TypeScript' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'self-parking-car-evolution',
    },
    achievements: [
      {
        title: 'Listed on Hacker News',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/00-hacker-news-2021-09-28.png' },
        date: '2021-09-28',
        link: { url: 'https://news.ycombinator.com/front?day=2021-09-28', caption: 'Hacker News archive' },
      },
      {
        title: 'Javascript SubReddit: Top 3 of the hot list',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/01-reddit-javascript-hot-list-2021-09-29.png' },
        date: '2021-09-29',
        link: { url: 'https://www.reddit.com/r/javascript/comments/px71z7/selfparking_car_in_500_lines_of_code_trekhleb/', caption: 'Reddit post' },
      },
      {
        title: 'Listed in JavaScript Weekly',
        image: { srcPath: 'projects/self-parking-car-evolution/achievements/04-javascript-weekly-newsletter-2021-10-01.png' },
        date: '2021-10-01',
        link: { url: 'https://javascriptweekly.com/issues/558', caption: 'JavaScript Weekly Newsletter' },
      },
    ],
  },
  
   
  

