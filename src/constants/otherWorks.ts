import { OtherWork } from '@/types';
import { getContrastTextColor } from '@/utils/getContrastTextColor';
import aGentlemansTonic from '@/assets/images/a-gentlemans-tonic.png';
import enduro from '@/assets/images/enduro.png';
import distill from '@/assets/images/distill.png';
import local from '@/assets/images/local.png';
import logosAndSymbols from '@/assets/images/logos-and-symbols.png';
import illustrations from '@/assets/images/illustrations.png';

export const otherWorks: OtherWork[] = [
  {
    id: 'a-gentlemans-tonic',
    img: aGentlemansTonic,
    title: 'A Gentleman’s Tonic',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#4f5543',
    contrastTextColor: getContrastTextColor('#4f5543'),
  },
  {
    id: 'enduro',
    img: enduro,
    title: 'Enduro',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#68e0e0',
    contrastTextColor: getContrastTextColor('#68e0e0'),
  },
  {
    id: 'distill',
    img: distill,
    title: 'Distill',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#191919',
    contrastTextColor: getContrastTextColor('#191919'),
  },
  {
    id: 'logos-and-symbols',
    img: logosAndSymbols,
    title: 'Logos & Symbols',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#000000',
    contrastTextColor: getContrastTextColor('#000000'),
  },
  {
    id: 'local',
    img: local,
    title: 'Local',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#5cad66',
    contrastTextColor: getContrastTextColor('#5cad66'),
  },
  {
    id: 'illustration',
    img: illustrations,
    title: 'Illustration',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#111111',
    contrastTextColor: getContrastTextColor('#111111'),
  },
];
