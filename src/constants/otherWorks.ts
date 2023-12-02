import { OtherWork } from '@/types';
import { getContrastTextColor } from '@/utils/getContrastTextColor';

export const otherWorks: OtherWork[] = [
  {
    id: 'a-gentlemans-tonic',
    title: 'A Gentleman’s Tonic',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#4f5543',
    contrastTextColor: getContrastTextColor('#4f5543'),
  },
  {
    id: 'enduro',
    title: 'Enduro',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#68e0e0',
    contrastTextColor: getContrastTextColor('#68e0e0'),
  },
  {
    id: 'distill',
    title: 'Distill',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#191919',
    contrastTextColor: getContrastTextColor('#191919'),
  },
  {
    id: 'logos-and-symbols',
    title: 'Logos & Symbols',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#000000',
    contrastTextColor: getContrastTextColor('#000000'),
  },
  {
    id: 'local',
    title: 'Local',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#5cad66',
    contrastTextColor: getContrastTextColor('#5cad66'),
  },
  {
    id: 'illustration',
    title: 'Illustration',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#111111',
    contrastTextColor: getContrastTextColor('#111111'),
  },
];
