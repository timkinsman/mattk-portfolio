import { CaseStudy } from '@/features/caseStudies';
import { AboutMe, CaseStudies, Contact, OtherWorks, WhatIDo } from '@/features/misc';
import { OtherWork } from '@/features/otherWorks';

export const publicRoutes = [
  { path: '/about-me', element: <AboutMe /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/case-studies/:id', element: <CaseStudy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/other-work', element: <OtherWorks /> },
  { path: '/other-work/:id', element: <OtherWork /> }, // reuse CaseStudy for other-work/...
  { path: '/what-i-do', element: <WhatIDo /> },
];
