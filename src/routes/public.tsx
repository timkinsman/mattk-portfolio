import { AboutMe, CaseStudies, Contact, OtherWork, WhatIDo } from '@/features/misc';

export const publicRoutes = [
  { path: '/about-me', element: <AboutMe /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/contact', element: <Contact /> },
  { path: '/other-work', element: <OtherWork /> },
  { path: '/what-i-do', element: <WhatIDo /> },
];
