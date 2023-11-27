import { CaseStudy } from '@/types';
import { getContrastTextColor } from '@/utils/getContrastTextColor';

export const caseStudies: CaseStudy[] = [
  {
    id: 'port-phillip',
    title: 'City of Port Phillip',
    description:
      'A brand new digital ecosystem including multiple websites and customer facing online services.',
    hero: 'A brand new digital ecosystem including multiple websites and customer facing online services.',
    color: '#13676f',
    contrastTextColor: getContrastTextColor('#13676f'),
  },
  {
    id: 'bank-vic',
    title: 'Bank Vic',
    description:
      'A future-proof platform, with endless customisation and a personalised experience.',
    hero: 'BankVic is a 100% member owned bank focused on serving police, health, emergency and public services, as well as their family and friends. Their aim is to build healthy communities that are financially, socially and environmentally sustainable.',
    color: '#279cd0',
    contrastTextColor: getContrastTextColor('#279cd0'),
  },
  {
    id: 'lumea',
    title: 'Lumea',
    description:
      'A market first solution that’s accelerate Australia toward a smarter energy future.',
    hero: 'A market first solution that’s accelerate Australia toward a smarter energy future.',
    color: '#222f32',
    contrastTextColor: getContrastTextColor('#222f32'),
  },
  {
    id: 'bupa',
    title: 'Bupa',
    description:
      'A reimagined way of working and subsequently a platform to proper service its users needs.',
    hero: 'A reimagined way of working and subsequently a platform to proper service its users needs.',
    color: '#046ebc',
    contrastTextColor: getContrastTextColor('#046ebc'),
  },
];
