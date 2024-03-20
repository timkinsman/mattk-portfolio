import { OtherWork } from '@/types';
import { getContrastTextColor } from '@/utils/getContrastTextColor';
import aGentlemansTonic from '@/assets/images/a-gentlemans-tonic.png';
import enduro from '@/assets/images/enduro.png';
import distill from '@/assets/images/distill.png';
import local from '@/assets/images/local.png';
import logosAndSymbols from '@/assets/images/logos-and-symbols.png';
import illustrations from '@/assets/images/illustrations.png';
import aGentlemansTonic0 from '@/assets/images/a-gentlemans-tonic-0.png';
import aGentlemansTonic1 from '@/assets/images/a-gentlemans-tonic-1.jpg';
import aGentlemansTonic2 from '@/assets/images/a-gentlemans-tonic-2.jpg';
import aGentlemansTonic3 from '@/assets/images/a-gentlemans-tonic-3.jpg';
import aGentlemansTonic4 from '@/assets/images/a-gentlemans-tonic-4.jpg';
import aGentlemansTonic5 from '@/assets/images/a-gentlemans-tonic-5.jpg';
import aGentlemansTonic6 from '@/assets/images/a-gentlemans-tonic-6.jpg';
import aGentlemansTonic7 from '@/assets/images/a-gentlemans-tonic-7.jpg';
import aGentlemansTonic8 from '@/assets/images/a-gentlemans-tonic-8.png';
import aGentlemansTonic9 from '@/assets/images/a-gentlemans-tonic-9.jpg';
import aGentlemansTonic10 from '@/assets/images/a-gentlemans-tonic-10.png';
import aGentlemansTonic11 from '@/assets/images/a-gentlemans-tonic-11.png';

export const otherWorks: OtherWork[] = [
  {
    id: 'a-gentlemans-tonic',
    img: aGentlemansTonic,
    title: 'A Gentleman’s Tonic',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#4f5543',
    contrastTextColor: getContrastTextColor('#4f5543'),
    otherImages: [
      aGentlemansTonic0,
      aGentlemansTonic1,
      aGentlemansTonic2,
      aGentlemansTonic3,
      aGentlemansTonic4,
      aGentlemansTonic5,
      aGentlemansTonic6,
      aGentlemansTonic7,
      aGentlemansTonic8,
      aGentlemansTonic9,
      aGentlemansTonic10,
      aGentlemansTonic11,
    ],
  },
  {
    id: 'enduro',
    img: enduro,
    title: 'Enduro',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#68e0e0',
    contrastTextColor: getContrastTextColor('#68e0e0'),
    otherImages: [],
  },
  {
    id: 'distill',
    img: distill,
    title: 'Distill',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#191919',
    contrastTextColor: getContrastTextColor('#191919'),
    otherImages: [],
  },
  {
    id: 'logos-and-symbols',
    img: logosAndSymbols,
    title: 'Logos & Symbols',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#000000',
    contrastTextColor: getContrastTextColor('#000000'),
    otherImages: [],
  },
  {
    id: 'local',
    img: local,
    title: 'Local',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#5cad66',
    contrastTextColor: getContrastTextColor('#5cad66'),
    otherImages: [],
  },
  {
    id: 'illustration',
    img: illustrations,
    title: 'Illustration',
    hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus erat nec orci tincidunt, eu posuere orci semper.',
    color: '#111111',
    contrastTextColor: getContrastTextColor('#111111'),
    otherImages: [],
  },
];
