import { CaseStudy } from '@/features/caseStudies';
import { AboutMe, CaseStudies, Contact, OtherWork, WhatIDo } from '@/features/misc';

export const publicRoutes = [
  { path: '/about-me', element: <AboutMe /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/case-studies/:id', element: <CaseStudy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/other-work', element: <OtherWork /> },
  { path: '/other-work/:id', element: <CaseStudy /> }, // reuse CaseStudy for other-work/...
  { path: '/what-i-do', element: <WhatIDo /> },
];
