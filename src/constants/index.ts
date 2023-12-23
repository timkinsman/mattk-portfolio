// ’

import { CaseStudy, Method, NavigationItem, SocialItem } from '@/types';

export const navigation: NavigationItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Case studies', to: '/case-studies' },
  { name: 'About me', to: '/about-me' },
  { name: 'What I do', to: '/what-i-do' },
  { name: 'Other work', to: '/other-work' },
  { name: 'Contact', to: '/contact' },
];

export const socialItems: SocialItem[] = [
  {
    name: 'Email',
    to: 'mailto:mskinsm@gmail.com',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_19503)">
<path d="M3.60151 9.6V14.5C3.60151 15.2 4.4015 15.5 4.9015 15L7.2015 12.3L11.9015 15.8C12.3015 16.1 12.9015 15.9 13.0015 15.4L16.0015 0.9C16.1015 0.3 15.6015 -0.1 15.0015 0.0999996L0.501505 5.9C0.00150541 6.1 -0.0984946 6.8 0.301505 7.2L1.90151 8.4L6.5015 6.2C6.9015 6 7.20151 6.5 6.9015 6.7L3.60151 9.6Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_461_19503">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    name: 'Facebook',
    to: 'https://www.facebook.com/mskinsm/',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_19514)">
<path d="M16 8.048C16.0003 6.51909 15.5625 5.02209 14.7385 3.73428C13.9144 2.44646 12.7385 1.42176 11.3501 0.781504C9.96173 0.141247 8.41893 -0.0877481 6.90442 0.121632C5.38991 0.331013 3.96712 0.969999 2.80451 1.96293C1.6419 2.95586 0.788165 4.26115 0.344396 5.72425C-0.0993733 7.18735 -0.114591 8.74697 0.300544 10.2184C0.71568 11.6899 1.54378 13.0116 2.68679 14.027C3.82981 15.0425 5.23986 15.7091 6.75 15.948V10.36H4.719V8.048H6.75V6.285C6.70627 5.87345 6.7536 5.45731 6.88863 5.06609C7.02366 4.67487 7.24309 4.31814 7.53136 4.02118C7.81964 3.72422 8.1697 3.49431 8.55674 3.34773C8.94379 3.20115 9.35833 3.1415 9.771 3.173C10.371 3.18088 10.9696 3.23302 11.562 3.329V5.3H10.554C10.3823 5.27755 10.2077 5.29399 10.0432 5.34812C9.87874 5.40224 9.72853 5.49266 9.6037 5.61269C9.47887 5.73271 9.38263 5.87927 9.3221 6.04152C9.26157 6.20376 9.23829 6.37754 9.254 6.55V8.05H11.473L11.118 10.362H9.25V15.953C11.1322 15.6552 12.8464 14.6954 14.0838 13.2462C15.3213 11.797 16.0008 9.95364 16 8.048Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_461_19514">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    name: 'Behance',
    to: 'https://www.behance.net/matthewkinsman',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_19506)">
<path d="M6.5 7.4C6.5 7.4 8 7.3 8 5.5C8 3.7 6.6 3 5 3H0V13H5C5 13 8.3 12.9 8.3 9.9C8.3 9.9 8.5 7.4 6.5 7.4ZM2.3 4.6H4.8H5.2C5.2 4.6 5.9 4.6 5.9 5.6C5.9 6.6 5.5 6.8 5 6.8H2.3V4.6ZM5 11H2.3V8.4H5.2C5.2 8.4 6.2 8.4 6.2 9.8C6.2 10.9 5.4 11 5 11Z" fill="currentColor"/>
<path d="M12.5002 5.4C8.7002 5.4 8.7002 9.2 8.7002 9.2C8.7002 9.2 8.4002 13 12.5002 13C12.5002 13 15.9002 13.2 15.9002 10.4H14.2002C14.2002 10.4 14.3002 11.5 12.6002 11.5C12.6002 11.5 10.9002 11.6 10.9002 9.8H16.0002C16.0002 9.7 16.5002 5.4 12.5002 5.4ZM14.1002 8.4H10.8002C10.8002 8.4 11.0002 6.9 12.5002 6.9C14.1002 6.8 14.1002 8.4 14.1002 8.4Z" fill="currentColor"/>
<path d="M15 3H10V4H15V3Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_461_19506">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    name: 'Twitter',
    to: 'https://twitter.com/MatthewKinsman',
  },
  {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/matthew-kinsman/',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_19511)">
<path d="M15.3 0H0.7C0.3 0 0 0.3 0 0.7V15.4C0 15.7 0.3 16 0.7 16H15.4C15.8 16 16.1 15.7 16.1 15.3V0.7C16 0.3 15.7 0 15.3 0ZM4.7 13.6H2.4V6H4.8V13.6H4.7ZM3.6 5C2.8 5 2.2 4.3 2.2 3.6C2.2 2.8 2.8 2.2 3.6 2.2C4.4 2.2 5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5ZM13.6 13.6H11.2V9.9C11.2 9 11.2 7.9 10 7.9C8.8 7.9 8.6 8.9 8.6 9.9V13.7H6.2V6H8.5V7C8.8 6.4 9.6 5.8 10.7 5.8C13.1 5.8 13.5 7.4 13.5 9.4V13.6H13.6Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_461_19511">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
  },
  {
    name: 'Spotify',
    to: 'https://open.spotify.com/user/mskinsm',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_461_19517)">
<path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.7 11.6C11.5 11.8 11.3 11.9 11 11.8C9.1 10.6 6.8 10.4 4 11C3.7 11.1 3.5 10.9 3.4 10.6C3.3 10.3 3.5 10.1 3.8 10C6.8 9.3 9.5 9.6 11.6 10.9C11.8 11 11.8 11.3 11.7 11.6ZM12.6 9.4C12.4 9.7 12 9.8 11.8 9.6C9.6 8.3 6.4 7.9 3.8 8.7C3.5 8.7 3.2 8.6 3.1 8.2C3 7.9 3.2 7.6 3.5 7.5C6.4 6.6 10 7.1 12.5 8.6C12.7 8.7 12.8 9.1 12.6 9.4ZM12.7 7.1C10.1 5.6 5.9 5.4 3.4 6.2C3 6.3 2.6 6.1 2.5 5.7C2.4 5.3 2.6 4.9 3 4.8C5.8 4 10.5 4.1 13.5 5.9C13.9 6.1 14 6.6 13.8 6.9C13.6 7.2 13.1 7.3 12.7 7.1Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_461_19517">
<rect width="16" height="16" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`,
  },
];

export const landingIds: [
  'hero',
  CaseStudy['id'],
  CaseStudy['id'],
  CaseStudy['id'],
  CaseStudy['id'],
  'content',
] = ['hero', 'city-of-port-phillip', 'bank-vic', 'lumea', 'bupa', 'content'];

export const testimonials = {
  title: 'Testimonials',
  items: [
    {
      quote:
        '“I worked with Matt extensively through the discovery and design phases of our website builds. Throughout the project Matt proved himself to be a creative thinking, problem solving and customer focused UX professional. He is well versed in UX, and he is a super talented artist. I would hire him any day given the opportunity.”',
      author: 'Ben Sylvan',
      position: 'Coordinator of Digital, City of Port Phillip',
    },
    {
      quote:
        '“I worked with Matt at Sweat and he was an absolute pleasure to work with. Professionally he’s smart, thoughtful, passionate and honest. He’s also really easy to work with, as he is a fun, sincere, authentic and easy going person. We worked together on a complex Design System documentation that I still use to this day.”',
      author: 'Edgar Anzaldua',
      position: 'Head of Product Design, Sniip',
    },
    {
      quote:
        '“We still talk about how glad we are that we settled on Matt to create our brand. We think it has been a major contributor to our early success with the clean, professional logo providing legitimacy to our new brand. Would work with Matt in the future and recommend to anyone looking for design strategy and creative work done.”',
      author: 'Panayioti Koutlakis',
      position: 'CEO, EatClub',
    },
  ],
};

export const caseStudiesHero =
  'With over six years of experience in the industry, I have been fortunate enough to work with 25+ brands. Endeavouring to create experiences through products and services that exist to solve genuine problems and serve user needs.';

export const aboutMeQuote =
  'In design, “intuitive” is a synonym for “matches the user’s mental model.” The closer an interface fits that image, the easier it will be to learn, use and navigate. This is a concept with a lot of practical value – Erika Hall';

export const bio = {
  title: 'Bio',
  description:
    'I’m Matt, a highly creative multidisciplinary designer who is driven to create products and services that are desirable for people, feasible for development and viable for business. I focus on championing a collaborative approach to validate solutions by employing diverse research methods and continuous improvement.\n\nI consider myself to be a rational thinker, attentive listener, measured speaker and team player.',
  image: '',
};

export const education = {
  title: 'Education',
  items: [
    {
      title: 'St. Michael’s College',
      cert: 'Year 8 - Year 12',
      period: 'January 2005 - December 2010',
    },
    {
      title: 'TAFE SA',
      cert: 'Certificate IV Visual Arts',
      period: 'January 2011 - December 2011',
    },
    {
      title: 'UniSA',
      cert: 'Bachelor of Design',
      period: 'March 2012 - November 2014',
    },
  ],
};

export const experience = {
  title: 'Experience',
  items: [
    {
      title: 'Collect',
      position: 'Intern Graphic Designer',
      period: 'March 2015 - May 2015',
      to: 'https://www.collectdesign.com.au/',
    },
    {
      title: 'SWEAT',
      position: 'Graphic Designer',
      period: 'July 2015 - January 2016',
      to: 'https://www.sweat.com/',
    },
    {
      title: 'SWEAT',
      position: 'Senior Graphic Designer',
      period: 'January 2016 - February 2018',
      to: 'https://www.sweat.com/',
    },
    {
      title: 'Homely',
      position: 'UX Designer',
      period: 'March 2018 - August 2018',
      to: 'https://www.homely.com.au/',
    },
    {
      title: 'EatClub',
      position: 'UI/UX Designer (Contract)',
      period: 'March 2018 - September 2018',
      to: 'https://eatclub.com.au/',
    },
    {
      title: 'AKQA',
      position: 'Senior Experience Designer (Contract)',
      period: 'September 2018 - December 2018',
      to: 'https://www.akqa.com/',
    },
    {
      title: '(i.e.,)',
      position: 'Senior Experience Designer',
      period: 'December 2018 - July 2019',
      to: 'https://www.ie.com.au/',
    },
    {
      title: 'VERSA Agency',
      position: 'Senior Experience Designer',
      period: 'August 2019 - July 2021',
      to: 'https://versa.agency/',
    },
    {
      title: 'Mindset Health',
      position: 'Senior Product Designer',
      period: 'July 2021 - Present',
      to: 'https://www.mindsethealth.com/',
    },
  ],
};

export const awards = {
  title: 'Awards & recognition',
  items: [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 24 24"><path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/></svg>',
      title: 'Apple Watch',
      description: 'App of the Year',
    },
  ],
};

export const curriculumVitaeLink =
  '<a href="mailto:mskinsm@gmail.com?subject=CV+request" target="_blank">Request to view</a>';

export const whatIDoHeroItems = [
  {
    icon: '👍',
    title: 'What I try to do',
    description:
      'Listen, have at least showered before my first zoom call, solve complex problems, have fun, question everything, create transformative and memorable experiences, enable meaningful conversations between a brand and their audience, tell a story, dissolve ego, communicate clearly, consider everyone for accessibility, make a positive impact in improving the livelihood of all beings.',
  },
  {
    icon: '🙅‍♂️',
    title: 'What I don’t try to do',
    description:
      'Make assumptions, ask leading questions, use too many buzzwords, go over budget, abbreviate things, bite off more than I can chew, worry about success, let my perfectionism seap in, take a ‘waterfall’ approach, take the easier path, make arbitrary decisions, add to the world’s noise.',
  },
];

export const principles = {
  title: 'Principles',
  items: [
    {
      icon: '♟️',
      title: 'Strategise',
      description:
        'If you’re trying to find somewhere new, the first thing you’ll need is a good map. Working in digital, things change; quickly and often. You need to be able to adapt. A strategy is a doable process that’s less a rigid plan, and more like a vision of what to achieve and ways in which you could start actioning it.',
    },
    {
      icon: '🔬',
      title: 'Research',
      description:
        'Understanding your target audience is the key to knowing how to best communicate with them. Reading, observing and listening are your superpowers here – use them. Absorb the critical information detailing what their needs, perceptions and behaviours are and where their pain points lie.',
    },
    {
      icon: '🔎',
      title: 'Analyse',
      description:
        'By this point you should have the lie of the land. You’ll then need to synthesise and distil the information so it can be easier managed and interpreted into insights, themes and opportunity areas. One or more problems should be defined and framed so that you can formulate a prioritized approach.',
    },
    {
      icon: '💡',
      title: 'Ideate',
      description:
        'Things will begin to take shape. You and your team using a divergent mindset will brainstorm concepts and potential solutions. This is where you will see utilising different perspectives thrives. The end-user is kept front of mind or may join in collaboration to ensure a level of confidence that output is desirable.',
    },
    {
      icon: '🏗️',
      title: 'Materialise',
      description:
        'After arriving at a point democratically whereby a solution has been amalgamated together and agreed upon. The concept becomes more tangible and realised. It’s higher fidelity and can be understood functionally as if it were a precursor for the final solution. Its feasibility and viability is assessed.',
    },
    {
      icon: '🧪',
      title: 'Test',
      description:
        'It’s ready to be released into the wild, preferably before it can fend for itself. By working in an agile manner you and your team work quickly to identify faults by getting it in front of relevant users. Incrementally working towards something that is ideally infallible. By working this way you reduce risk.',
    },
  ],
};

export const process = {
  title: 'Process',
  items: [
    {
      icon: '🤔',
      title: 'Be curious',
      description:
        'Ask many questions and then ask some more. At times it can be annoying, at times it might not be quite the right thing to ask. But you don’t get the knowledge you’re in search of without first having the appetite to obtain it.',
    },
    {
      icon: '🤿',
      title: 'First proactive, then reactive',
      description:
        'It’s always important to zoom out and not just focus on fixing problems caused by decisions that have already been made. This presents you with huge, often challenging constraints to work within. Dive deeper and reveal context.',
    },
    {
      icon: '🧠',
      title: 'Systems thinking',
      description:
        'Get out there and form a deep, holistic understanding for who you’re endeavouring to help. But go further, understand the ecosystem, the environment, the inter-relatedness of that person’s situation and their problem.',
    },
    {
      icon: '🔓',
      title: 'Unlock real value',
      description:
        'Not all solutions are good and not all good solutions retrieve genuine value. It will require more effort, but in the long term it will be much more rewarding for not only who you’re advocating for but also yourself.',
    },
    {
      icon: '🤝',
      title: 'Co-design',
      description:
        'You can’t do it alone and if you think you can, you’re wrong, regardless of how empathetic or worldly your view is. It’s proven time and time again that when people work cohesively together they achieve better results.',
    },
    {
      icon: '✅',
      title: 'Validation is essential',
      description:
        'Design is a step not the process. The following step is validation and doing it properly. Put your ego aside and gather relevant feedback. 99.9% of the time it’s not what you want but what someone else needs.',
    },
  ],
};

export const methods = {
  title: 'Methods',
  items: [
    'A/B Testing',
    'Artefact Review',
    'Competitor Analysis',
    'Concept Usability Testing',
    'Contextual Inquiry',
    'Data Analytics Review',
    'Accessibility Testing',
    'Diary Studies',
    'Heuristics Evaluation',
    'IA: Card Sorting',
    'IA: Tree Testing',
    'Journey Mapping',
    'Online Surveys',
    'Persona Development',
    'Requirements Gathering',
    'Roadmapping',
    'Stakeholder Interviews',
    'User Interviews',
  ] as Method[],
};

export const getInTouch = {
  title: 'Get in touch',
  description:
    'If you have any questions or want to collaborate please don’t hesitate to get in touch.',
};

export const details = {
  title: 'Get in touch',
  items: [
    {
      icon: '📝',
      title: 'Enquires',
      link: '<a href="https://www.google.com.au/forms/about/" target="_blank">Client brief form</a>',
    },
    {
      icon: '📱',
      title: 'Phone',
      link: '<a href="tel:+61 424 792 708" target="_blank">+61 424 792 708</a>',
    },
    {
      icon: '📥',
      title: 'Email',
      link: '<a href="mailto:hello@matthewkinsman.com" target="_blank">hello@matthewkinsman.com</a>',
    },
  ],
};

export const socials = {
  title: 'Socials',
  items: [
    {
      icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" rx="12" fill="#1769FF"/><rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/><path d="M20.0014 27.6266C23.7219 27.6336 27.4437 27.6011 31.1634 27.671C32.3706 27.6936 33.616 27.8405 34.7688 28.1822C37.1246 28.8818 38.7568 30.4412 39.1168 32.9404C39.4769 35.4395 38.6304 37.5291 36.4462 38.9693C36.3819 39.0117 36.3396 39.0865 36.2535 39.1811C38.6643 40.3579 39.8673 42.3347 39.981 44.9361C40.1405 48.5754 37.7063 51.4586 33.8016 52.2655C32.6961 52.4942 31.5461 52.5817 30.413 52.5959C26.9425 52.6403 23.4712 52.6185 20 52.622L20.0014 27.6266ZM25.0625 32.7801V37.628C26.4525 37.628 27.7819 37.6393 29.1105 37.6244C30.024 37.6139 30.9509 37.6583 31.8454 37.5136C33.3279 37.275 34.3015 36.2351 34.2909 35.0907C34.281 33.9788 33.335 32.9178 31.8299 32.8182C29.6025 32.6686 27.3548 32.7801 25.0625 32.7801ZM25.0279 47.6139C27.1705 47.6139 29.2206 47.6555 31.2665 47.5884C31.8758 47.5687 32.5281 47.3407 33.0681 47.0406C34.6354 46.1709 34.6799 44.3128 33.1811 43.3286C32.7977 43.0766 32.3339 42.8429 31.892 42.8027C30.6276 42.6876 29.3548 42.6615 28.084 42.6312C27.071 42.6064 26.0565 42.6262 25.0011 42.6262C25.0011 44.1793 25.0011 45.6181 25.0011 47.0561C25.0025 47.2171 25.0138 47.3788 25.0279 47.6139Z" fill="white"/><path d="M59.9987 44.2937H46.771C46.3312 46.7229 48.6715 49.1479 51.3054 48.8648C52.2232 48.766 53.0937 48.2294 53.9881 47.892C54.2098 47.808 54.4279 47.6421 54.6496 47.6392C56.231 47.6174 57.813 47.6272 59.5751 47.6272C59.2723 48.1871 59.0675 48.6862 58.7604 49.1098C57.0661 51.4536 54.6432 52.4377 51.8716 52.5746C50.5702 52.6406 49.2661 52.5174 48.0001 52.209C44.43 51.3201 42.2168 48.5584 41.8589 44.6904C41.6422 42.3396 41.8144 40.024 42.9009 37.8666C44.5437 34.605 48.1427 32.8443 52.0714 33.3618C56.6432 33.9633 59.1071 36.377 59.8681 41.001C59.885 41.1027 59.9542 41.1966 59.9987 41.294V44.2937ZM54.9645 40.9312C54.7336 38.3784 53.1614 37.1479 50.4117 37.2954C48.3361 37.407 46.8247 38.9424 46.8628 40.9312H54.9645Z" fill="white"/><path d="M45.0703 27.6455H56.6009V30.9064H45.0703V27.6455Z" fill="white"/></svg>',
      name: 'Behance',
      to: 'https://www.behance.net/matthewkinsman',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#6A5EF4"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M47.6528 52.4567C49.7854 51.2489 52.2332 50.6064 53.4278 48.2576C53.2391 47.9359 53.0315 48.1052 52.8295 48.2059C51.4368 48.8954 50.0723 49.6507 48.6455 50.2602C44.7569 51.9233 40.6908 52.2356 36.5275 51.7013C33.156 51.2677 30.1439 49.8793 27.2159 48.2557C27.0149 48.1597 26.793 48.1151 26.5704 48.1259C26.8888 49.0377 27.5201 49.808 28.3529 50.3007C29.4853 50.9714 30.6657 51.5621 31.8264 52.1867C31.9632 52.261 32.1038 52.3287 32.3124 52.436C32.0293 52.7953 31.7585 53.1311 31.4886 53.4632C31.1225 53.9137 30.7601 54.3671 30.3779 54.8036C30.2892 54.9052 30.1081 55.019 30.0005 54.9917C28.4397 54.6418 26.8601 54.3464 25.3343 53.8799C23.5414 53.3324 22.2401 52.0277 20.8719 50.8133C20.0094 50.0514 19.9443 49.2293 20.0264 48.1946C20.2501 45.3952 20.5775 42.6165 21.1795 39.8708C21.8957 36.6039 23.0856 33.512 24.5209 30.5104C24.8266 29.8708 25.356 29.4757 25.9363 29.1117C28.251 27.6405 30.8016 26.7948 33.4664 26.2436C33.8439 26.1646 34.2289 26.0828 34.6195 26C34.7913 26.3866 34.6846 26.5399 34.3147 26.6726C32.47 27.331 30.6138 27.9744 28.8087 28.7326C27.5886 29.2405 26.5704 30.1069 25.5674 30.9892C25.9448 31.3269 26.276 31.1425 26.6148 30.9704C28.6747 29.9169 30.7828 28.9837 33.0437 28.441C36.6455 27.5737 40.2813 27.442 43.9548 27.8869C47.281 28.2886 50.3563 29.4174 53.3098 30.944C53.876 31.2356 53.876 31.2262 54.4913 30.9168C54.3676 30.8584 54.2233 30.8227 54.1232 30.7371C52.5274 29.3571 50.6721 28.3073 48.6653 27.649C47.6481 27.3122 46.6394 26.966 45.6184 26.6538C45.2758 26.5493 45.2004 26.38 45.3221 26.0198C45.4797 26.0414 45.6448 26.0517 45.8052 26.0865C47.9416 26.5446 50.076 27.0272 52.0397 28.0233C52.889 28.457 53.7147 28.9508 54.5365 29.439C55.1669 29.8153 55.4311 30.4737 55.7283 31.0917C58.1157 36.0903 59.4217 41.3655 59.8208 46.8777C59.8831 47.7374 59.9501 48.5962 59.9982 49.4569C60.0067 49.6159 59.9869 49.8332 59.8888 49.9348C58.4733 51.4398 57.0362 52.9025 55.0857 53.7275C53.4495 54.4198 51.7104 54.6973 49.977 54.9983C49.9184 55.0037 49.8594 54.9963 49.804 54.9766C49.7486 54.957 49.6981 54.9255 49.6561 54.8845C48.9881 54.0915 48.337 53.291 47.6528 52.4567ZM37.4428 42.752C37.4452 42.2463 37.3472 41.7452 37.1544 41.2774C36.9616 40.8097 36.6779 40.3846 36.3196 40.0267C35.9613 39.6687 35.5355 39.3849 35.0667 39.1918C34.5979 38.9986 34.0954 38.8997 33.5881 38.901C31.4848 38.8944 29.7419 40.6496 29.7363 42.7802C29.7363 44.8449 31.5093 46.6143 33.5938 46.6199C35.7056 46.6256 37.4476 44.8769 37.4428 42.752ZM42.5233 42.7097C42.5147 43.2159 42.6066 43.7189 42.7937 44.1896C42.9808 44.6603 43.2594 45.0895 43.6136 45.4525C43.9677 45.8155 44.3903 46.1051 44.8571 46.3046C45.3239 46.5042 45.8257 46.6097 46.3336 46.6152C48.4096 46.6444 50.1817 44.9221 50.2336 42.8207C50.2855 40.7193 48.52 38.9113 46.3752 38.901C45.8713 38.8986 45.3719 38.9953 44.9055 39.1855C44.4392 39.3757 44.015 39.6557 43.6572 40.0094C43.2995 40.3631 43.0152 40.7837 42.8206 41.247C42.6261 41.7103 42.525 42.2074 42.5233 42.7097Z" fill="white"/>
</svg>
`,
      name: 'Discord',
      to: 'https://discord.com/users/755313011849166928/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#E42571"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M40.6717 60H39.3277C39.2702 59.9912 39.2132 59.9789 39.1553 59.9745C38.6766 59.937 38.1978 59.9131 37.7191 59.8628C36.6376 59.7494 35.5679 59.5427 34.5219 59.2452C31.7153 58.4477 29.2107 57.0843 26.9874 55.2022C25.1562 53.6522 23.6797 51.8084 22.5064 49.7209C21.0989 47.216 20.2954 44.526 20.0688 41.6633C19.9719 40.4834 19.9774 39.2973 20.0851 38.1184C20.1659 37.2 20.3109 36.2883 20.5188 35.3901C21.3765 31.7842 23.116 28.6592 25.6896 25.9979C26.9499 24.6947 28.3821 23.6073 29.9464 22.6918C32.5425 21.1625 35.4601 20.2602 38.4667 20.0568C39.8667 19.9536 41.2735 19.991 42.6661 20.1685C43.925 20.3269 45.1651 20.6096 46.3683 21.0123C49.1017 21.931 51.6053 23.427 53.709 25.3985C55.3072 26.8871 56.6093 28.6081 57.6462 30.5277C59.1072 33.2317 59.8951 36.119 59.9749 39.1958C59.9769 39.2756 59.9912 39.3533 60 39.4323V40.7115C59.9875 40.7682 59.9791 40.8258 59.9749 40.8837C59.9673 41.7813 59.8552 42.6694 59.7036 43.5518C59.3459 45.6025 58.6588 47.582 57.6689 49.4135C56.4194 51.7414 54.7885 53.7603 52.7407 55.4359C50.7308 57.0803 48.4939 58.3113 46.0116 59.0908C45.0354 59.397 44.0362 59.6244 43.0235 59.7707C42.295 59.8764 41.5622 59.9406 40.8269 59.9757C40.7748 59.9809 40.723 59.989 40.6717 60ZM42.769 42.3193C42.7401 42.3224 42.7115 42.3272 42.6832 42.3336C42.2328 42.4608 41.7752 42.5689 41.3328 42.72C39.8132 43.2384 38.426 44.0144 37.1239 44.9466C35.6051 46.034 34.2319 47.2857 32.9688 48.6582C31.849 49.8748 30.8683 51.1939 30.0716 52.6458C29.9827 52.8085 29.8989 52.9736 29.8075 53.1478C32.1845 54.9984 34.8411 56.1548 37.8264 56.5328C40.5925 56.8829 43.2787 56.554 45.8852 55.5459C45.3617 51.0314 44.316 46.5929 42.769 42.3193ZM40.5688 37.039C40.5069 37.0569 40.4563 37.0705 40.4064 37.0864C39.2981 37.4349 38.1779 37.7389 37.0457 37.9984C35.4833 38.3621 33.902 38.639 32.3089 38.8278C31.3878 38.9346 30.4646 39.0375 29.5398 39.0985C28.4918 39.1679 27.4414 39.2066 26.3913 39.2249C25.437 39.2413 24.4824 39.2118 23.5277 39.2026H23.3581C23.2277 41.6386 23.6007 43.9701 24.5151 46.2103C25.2332 47.9728 26.2497 49.5499 27.5247 50.985C27.5874 50.8654 27.638 50.7681 27.6907 50.6708C28.4387 49.2839 29.3663 48.0242 30.4147 46.8527C31.4065 45.7458 32.4953 44.7421 33.6462 43.8018C34.7537 42.8951 35.9202 42.0716 37.1661 41.3658C38.4228 40.6541 39.7362 40.0767 41.1341 39.7006C41.3276 39.6488 41.5227 39.6006 41.7257 39.5483C41.3595 38.695 40.9821 37.862 40.5688 37.039ZM39.1234 34.154C37.9265 32.0302 36.61 30.0169 35.1052 28.128C34.2795 27.0866 33.392 26.0958 32.4474 25.1609C30.0166 26.3914 28.0442 28.1352 26.4687 30.3363C25.262 32.0108 24.3725 33.8923 23.8444 35.8874C29.0427 36.1466 34.1278 35.6501 39.1234 34.154ZM56.5603 41.8368C53.1293 41.58 49.6983 41.5576 46.2498 41.8392C46.9267 43.8028 47.4965 45.8016 47.9569 47.8268C48.4151 49.8537 48.7651 51.9036 49.0054 53.9677C52.6545 51.7414 56.0436 47.1864 56.5603 41.8368ZM35.9282 23.8825C37.2235 25.2349 38.4147 26.6832 39.4916 28.2149C40.5688 29.7342 41.537 31.3192 42.4438 32.9505C42.5013 32.929 42.5468 32.9151 42.5895 32.8955C43.16 32.6315 43.736 32.3799 44.299 32.1C45.6582 31.4245 46.9444 30.6306 48.1289 29.6784C49.0274 28.9645 49.8444 28.1539 50.5653 27.2611C50.5904 27.2292 50.6115 27.1945 50.6391 27.1547C48.4049 25.31 45.8916 24.0843 43.0375 23.5814C40.6589 23.1643 38.298 23.2305 35.9282 23.8825ZM43.9072 35.7877C44.3616 36.8751 44.8092 37.9453 45.2636 39.0279C45.363 39.0216 45.4691 39.0152 45.5748 39.008C46.4365 38.9482 47.2975 38.8752 48.16 38.8314C49.6037 38.758 51.0486 38.7345 52.495 38.7608C53.8067 38.7827 55.1181 38.8282 56.4294 38.8629C56.4853 38.8629 56.5415 38.8629 56.6057 38.8629C56.3815 35.1943 55.0598 31.9943 52.6901 29.2015C52.6147 29.3079 52.5536 29.3949 52.4906 29.4806C52.4275 29.5663 52.3657 29.6536 52.3015 29.7386C51.3245 31.0381 50.1332 32.1136 48.8159 33.0558C47.4538 34.03 45.9921 34.8287 44.4737 35.5281C44.2862 35.6158 44.0967 35.7011 43.908 35.7877H43.9072Z" fill="white"/>
</svg>
`,
      name: 'Dribble',
      to: 'https://dribbble.com/mskinsm',
    },
    {
      icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" rx="12" fill="#1877F2"/><rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/><path d="M49.6129 20.0024C49.7381 20.315 49.9657 20.6259 49.9714 20.9409C50.0061 22.7764 49.9674 24.6144 49.9997 26.4499C50.0118 27.1654 49.7001 27.3868 49.0462 27.377C47.9006 27.3583 46.7525 27.3395 45.6093 27.3925C44.1157 27.4625 43.6208 28.0143 43.6192 29.499C43.6192 30.7427 43.6281 31.9865 43.637 33.2302C43.637 33.2823 43.6773 33.3352 43.7403 33.4891C45.3937 33.4891 47.0884 33.4891 48.7838 33.4891C49.9569 33.4891 50.0885 33.647 49.9456 34.8492C49.7227 36.7295 49.4781 38.6065 49.2844 40.49C49.2198 41.12 48.9566 41.374 48.3341 41.3658C46.809 41.3455 45.284 41.3593 43.6176 41.3593V42.4272C43.6176 47.8808 43.6249 53.3279 43.6022 58.779C43.6022 59.186 43.3818 59.593 43.2648 60H35.3294C35.2107 59.593 34.9903 59.186 34.9887 58.779C34.9661 53.2978 34.9733 47.8173 34.9733 42.3369V41.2991C33.596 41.2991 32.3091 41.2714 31.0254 41.3089C30.2552 41.3284 29.9904 41.0175 30.0009 40.2556C30.0356 38.3599 30.0413 36.4633 30.0009 34.5676C29.9831 33.7674 30.2269 33.4419 31.0553 33.4752C32.3979 33.5281 33.7429 33.4891 35.1841 33.4891C35.1841 31.8359 35.335 30.2568 35.155 28.716C34.6447 24.3409 37.9395 20.9182 42.2451 20.1693C42.4704 20.1302 42.6891 20.057 42.9112 20L49.6129 20.0024Z" fill="white"/></svg>',
      name: 'Facebook',
      to: 'https://www.facebook.com/mskinsm',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#0077B7"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M34.0444 59.9992C33.923 59.6229 33.6956 59.2466 33.6946 58.8703C33.6752 50.5738 33.6885 42.2773 33.666 33.9859C33.666 33.1353 33.972 32.8171 34.8062 32.8283C36.9397 32.8569 39.0733 32.8375 41.2058 32.8385C42.6285 32.8385 42.6825 32.8936 42.7284 34.3377C42.7284 34.4499 42.7519 34.5611 42.7753 34.7742C45.17 32.9273 47.8746 32.4459 50.7516 32.5876C55.8325 32.8385 58.9594 35.6941 59.6488 40.7638C59.7712 41.6654 59.8823 42.5679 59.9996 43.4705V59.9992H51.1106C50.9464 59.5852 50.6517 59.1752 50.6394 58.7571C50.5864 56.954 50.6221 55.1488 50.6149 53.3437C50.6047 50.4453 50.6221 47.5448 50.5548 44.6474C50.5232 43.3114 50.3508 41.9428 49.1005 41.1024C47.0261 39.7103 43.9094 40.8882 43.3434 43.3114C43.1047 44.3313 43.0374 45.4184 43.0242 46.4729C42.9905 50.585 43.0242 54.697 42.9946 58.8132C42.9946 59.2099 42.7233 59.6046 42.5775 60.0003L34.0444 59.9992Z" fill="white"/>
<path d="M21.065 60.0003C20.9344 59.628 20.6917 59.2568 20.6907 58.8846C20.6682 50.5605 20.6815 42.2334 20.6621 33.9125C20.6621 33.0854 20.9966 32.8192 21.7737 32.8273C24.1439 32.8498 26.5137 32.8498 28.8831 32.8273C29.6603 32.8192 30.005 33.0843 30.005 33.9114C29.9815 42.2334 29.9927 50.5595 29.9723 58.8835C29.9723 59.2558 29.7286 59.628 29.5981 60.0003H21.065Z" fill="white"/>
<path d="M25.8662 20C26.7759 20.3906 27.7886 20.6384 28.5739 21.2014C30.4912 22.5751 31.1235 25.0126 30.3076 27.2185C29.4918 29.4245 27.3909 30.7798 24.9667 30.6707C22.8005 30.5728 20.8159 28.9543 20.1979 26.7861C20.1428 26.5954 20.0663 26.4098 20 26.2211V24.622C20.4192 23.7306 20.7312 22.7648 21.283 21.9642C22.105 20.772 23.4216 20.2886 24.8004 20H25.8662Z" fill="white"/>
</svg>
`,
      name: 'LinkedIn',
      to: 'https://www.linkedin.com/in/matthew-kinsman/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#E3514F"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M22.7852 43.5936C22.7654 43.5152 22.7393 43.4386 22.707 43.3645C22.6664 43.2979 22.6206 43.2347 22.5701 43.1755C22.5543 43.1552 22.5272 43.1387 22.5206 43.1162C22.4718 42.9469 22.3137 42.8612 22.2311 42.7184C22.2072 42.6771 22.1811 42.6381 22.1578 42.5969C22.0747 42.4513 22.0154 42.2914 21.8987 42.1651C21.8676 42.1241 21.8411 42.0799 21.8193 42.0332C21.7954 41.9925 21.7726 41.9519 21.7487 41.9112C21.7361 41.8938 21.7248 41.8754 21.715 41.8563C21.6624 41.7095 21.5948 41.5686 21.5135 41.4359C21.5018 41.4079 21.4934 41.3786 21.4885 41.3486C21.476 41.3117 21.4614 41.2755 21.4456 41.2387C21.4195 41.1793 21.3913 41.1216 21.3657 41.0623C21.3467 41.0189 21.3299 40.9738 21.3114 40.9299C21.2929 40.8859 21.2783 40.8403 21.2571 40.798C21.2013 40.6676 21.1536 40.5338 21.1142 40.3975C21.0762 40.2914 21.0403 40.187 21.0094 40.0777C20.9784 39.9683 20.9089 39.8579 20.8622 39.748C20.8383 39.6927 20.8226 39.6342 20.8155 39.5744C20.8051 39.4645 20.8198 39.3546 20.7323 39.2656C20.7265 39.2588 20.7229 39.2503 20.722 39.2414C20.6749 39.0249 20.6279 38.8081 20.5808 38.5908C20.571 38.5441 20.577 38.4848 20.5509 38.4518C20.4743 38.3573 20.4776 38.2491 20.4748 38.1397C20.4748 38.0848 20.4748 38.0254 20.4694 37.9683C20.4717 37.9376 20.4653 37.9069 20.4509 37.8798C20.3559 37.7699 20.3624 37.6353 20.3504 37.5057C20.3434 37.3924 20.3221 37.2805 20.2869 37.1727C20.2494 37.0688 20.2543 36.948 20.2451 36.8348C20.2358 36.7216 20.2418 36.615 20.1695 36.5205C20.1469 36.4732 20.1373 36.4206 20.1418 36.3683C20.1359 36.1529 20.138 35.9375 20.1283 35.7221C20.1182 35.6541 20.1012 35.5873 20.0777 35.5227C20.0582 35.4694 20.0444 35.4141 20.0365 35.3578C20.0002 34.4179 19.991 33.4776 20.0088 32.5369C20.0131 32.2776 20.0222 32.0186 20.0359 31.76C20.0462 31.6918 20.0626 31.6247 20.0848 31.5594C20.1057 31.4931 20.1201 31.4248 20.1277 31.3556C20.1364 31.1539 20.137 30.9517 20.1397 30.7512C20.136 30.6763 20.1566 30.6022 20.1983 30.5402C20.2216 30.4984 20.235 30.4518 20.2375 30.4039C20.2478 30.3259 20.2494 30.2462 20.2559 30.1677C20.2554 30.1366 20.2611 30.1058 20.2728 30.077C20.3461 29.955 20.345 29.8182 20.3602 29.6836C20.3625 29.6353 20.3781 29.5887 20.4053 29.549C20.4694 29.4754 20.4738 29.3907 20.4765 29.3028C20.473 29.1758 20.5018 29.05 20.5601 28.9374C20.6291 28.816 20.6541 28.6682 20.6976 28.5314C20.7017 28.501 20.7103 28.4713 20.7231 28.4435C20.7825 28.3567 20.8149 28.254 20.816 28.1484C20.8165 28.1264 20.8233 28.105 20.8355 28.0869C20.925 27.9584 20.9961 27.8178 21.0469 27.6693C21.0936 27.5539 21.1821 27.4539 21.2169 27.3363C21.2712 27.149 21.4494 27.0429 21.5032 26.8577C21.5151 26.8154 21.5629 26.7847 21.5912 26.7479C21.6683 26.6429 21.7362 26.5281 21.8221 26.433C21.9535 26.2852 22.0937 26.1473 22.236 26.0066C22.2903 25.9517 22.349 25.8967 22.4077 25.8473C22.4875 25.7775 22.5413 25.6698 22.6657 25.6638C22.7863 25.5495 22.9656 25.5297 23.0785 25.3989C23.1228 25.3643 23.1764 25.344 23.2323 25.3407C23.2969 25.3281 23.3616 25.3237 23.4088 25.2687C23.4175 25.2587 23.4285 25.2512 23.4409 25.2467C23.5854 25.2033 23.7304 25.1616 23.8755 25.1182C23.9455 25.0973 24.014 25.0726 24.0846 25.0522C24.1454 25.0284 24.2089 25.0123 24.2737 25.0044C24.6387 25 25.0038 25 25.3683 25C25.4163 24.9992 25.4637 25.0118 25.5052 25.0363C25.5805 25.0805 25.6653 25.1058 25.7523 25.1099C25.8478 25.1124 25.9412 25.139 26.0239 25.1874C26.0626 25.2072 26.105 25.2187 26.1483 25.2209C26.2141 25.2226 26.277 25.2488 26.3249 25.2945C26.3327 25.3052 26.3441 25.3126 26.3569 25.3154C26.4819 25.3204 26.5639 25.4187 26.672 25.4599C26.7032 25.4753 26.7329 25.4937 26.7606 25.5149C26.854 25.5742 26.9339 25.6489 27.0409 25.6962C27.1479 25.7434 27.2321 25.855 27.3255 25.9391C27.3451 25.9561 27.3581 25.9896 27.3798 25.994C27.5488 26.0314 27.6172 26.1891 27.7308 26.2913C27.806 26.355 27.8664 26.4348 27.9079 26.5248C27.9589 26.6391 28.0649 26.7286 28.1463 26.8297C28.1725 26.858 28.1951 26.8894 28.2137 26.9231C28.2864 27.0856 28.3786 27.2383 28.488 27.3781C28.5302 27.4276 28.5552 27.4897 28.5592 27.555C28.5579 27.5858 28.5638 27.6165 28.5764 27.6446C28.5891 27.6727 28.6081 27.6973 28.632 27.7165C28.6461 27.727 28.6573 27.741 28.6646 27.7572C28.708 27.8611 28.7428 27.9693 28.7939 28.0693C28.8547 28.193 28.897 28.3253 28.9194 28.4616C28.9422 28.5808 29.022 28.6885 29.0693 28.8045C29.0887 28.8576 29.1013 28.913 29.1068 28.9693C29.1093 29.0531 29.138 29.1339 29.1888 29.2001C29.2116 29.2325 29.2256 29.2704 29.2295 29.31C29.2343 29.3567 29.2365 29.4037 29.2361 29.4506C29.2334 29.4989 29.2359 29.5474 29.2437 29.5951C29.2898 29.76 29.3425 29.9248 29.392 30.0935C29.4127 30.1503 29.4278 30.209 29.4371 30.2688C29.4523 30.4265 29.4572 30.5847 29.4702 30.7424C29.4717 30.7905 29.4838 30.8376 29.5055 30.8803C29.5487 30.957 29.5698 31.0443 29.5663 31.1325C29.5707 31.4138 29.5745 31.6952 29.5778 31.9765C29.5739 32.0597 29.5947 32.1422 29.6375 32.2133C29.6656 32.2722 29.6778 32.3376 29.6728 32.4029C29.6761 33.0754 29.6775 33.7479 29.6772 34.4205C29.6772 34.5166 29.6772 34.6133 29.6772 34.71C29.6847 34.798 29.662 34.8859 29.6131 34.9589C29.5891 35.0054 29.5784 35.0577 29.5821 35.11C29.5761 35.3606 29.5772 35.6111 29.5701 35.8617C29.5658 36.01 29.5701 36.1606 29.4887 36.2969C29.4747 36.329 29.4678 36.3639 29.4686 36.3991C29.4582 36.548 29.4539 36.698 29.4403 36.8463C29.4289 36.9146 29.4134 36.9821 29.3941 37.0485C29.3762 37.1337 29.3615 37.2194 29.3398 37.304C29.3235 37.3754 29.3023 37.4458 29.2855 37.5161C29.2677 37.5699 29.2542 37.625 29.2453 37.6809C29.2366 37.7639 29.2393 37.8458 29.2366 37.9309C29.2418 38.0316 29.2164 38.1315 29.1638 38.2172C29.1187 38.2831 29.1198 38.382 29.1095 38.4711C29.0986 38.5809 29.097 38.6908 29.0351 38.7875C29.0199 38.8285 29.0095 38.8711 29.0041 38.9145C28.9867 38.9694 28.9606 39.0244 28.9438 39.0842C28.9231 39.15 28.9082 39.2175 28.8993 39.2859C28.89 39.3903 28.8993 39.4985 28.8156 39.581C28.81 39.5878 28.806 39.5959 28.8042 39.6046C28.7624 39.7551 28.7211 39.9062 28.6782 40.0573C28.6721 40.1005 28.6571 40.1419 28.6342 40.1788C28.5797 40.2424 28.5516 40.3249 28.5559 40.409C28.5584 40.442 28.554 40.4752 28.5428 40.5064C28.5317 40.5376 28.5141 40.566 28.4913 40.5898C28.4755 40.6042 28.4648 40.6235 28.4609 40.6447C28.456 40.7865 28.3658 40.8969 28.324 41.0249C28.3109 41.0571 28.2947 41.0878 28.2756 41.1167C28.2568 41.1404 28.2418 41.1669 28.2311 41.1953C28.2185 41.2726 28.1863 41.3453 28.1376 41.4063C28.0837 41.4745 28.0442 41.5533 28.0214 41.6376C27.9899 41.7672 27.866 41.853 27.8671 41.9942C27.7693 42.1156 27.7351 42.2782 27.6172 42.3865C27.5961 42.4022 27.5795 42.4235 27.5694 42.448C27.5412 42.5695 27.4445 42.6436 27.3793 42.7392C27.3603 42.7678 27.3478 42.8008 27.3304 42.831C27.309 42.8729 27.2848 42.9132 27.2582 42.9519C27.1528 43.0953 27.0447 43.2359 26.9387 43.3788C26.9211 43.4039 26.908 43.432 26.9002 43.4618C26.8752 43.5513 26.9061 43.5964 26.9914 43.6337C27.1164 43.6887 27.2381 43.7524 27.3608 43.8123C27.3684 43.8162 27.376 43.8244 27.3836 43.8244C27.6102 43.8299 27.7976 44.003 28.0323 43.9788C28.069 43.9745 28.1063 43.9776 28.1419 43.9881C28.1774 43.9986 28.2105 44.0162 28.2392 44.0398C28.2794 44.0651 28.3256 44.079 28.3729 44.0799C28.4549 44.0881 28.5358 44.0838 28.62 44.0909C28.6632 44.0899 28.7058 44.1007 28.7434 44.1222C28.8112 44.1709 28.8942 44.1932 28.9769 44.1849C29.5549 44.1849 30.1329 44.1816 30.7109 44.1849C30.8109 44.1832 30.9068 44.144 30.9798 44.075C31.0233 44.0398 31.0173 44.0085 30.9918 43.9623C30.892 43.7997 30.7743 43.6491 30.6409 43.5134C30.5612 43.4332 30.4983 43.3375 30.4562 43.2321C30.4198 43.1282 30.3388 43.0403 30.2964 42.9376C30.2454 42.814 30.1384 42.7178 30.1259 42.5755C30.1236 42.5537 30.117 42.5325 30.1063 42.5134C30.052 42.4156 29.9917 42.32 29.9433 42.2194C29.9266 42.1745 29.9183 42.1268 29.9189 42.0788C29.9207 41.9772 29.8931 41.8774 29.8396 41.7914C29.8138 41.7457 29.7998 41.6941 29.7988 41.6414C29.7896 41.5453 29.788 41.4486 29.7853 41.3519C29.7893 41.2639 29.7721 41.1762 29.7353 41.0964C29.7181 41.0516 29.7088 41.0042 29.7076 40.9562C29.6829 40.7201 29.6829 40.482 29.7076 40.2458C29.7062 40.2149 29.711 40.1841 29.7217 40.1551C29.7956 40.0304 29.7815 39.8925 29.7864 39.7573C29.7912 39.6222 29.7934 39.4799 29.8765 39.3529C29.9113 39.298 29.908 39.2183 29.914 39.1491C29.9249 39.0769 29.9461 39.0068 29.977 38.9408C30.0265 38.8117 30.1215 38.7013 30.134 38.5562C30.1339 38.5342 30.1395 38.5126 30.1503 38.4936C30.2524 38.359 30.2742 38.1782 30.3986 38.0573C30.4143 38.0419 30.4355 38.0254 30.4393 38.0068C30.4779 37.8216 30.6485 37.7364 30.7408 37.5925C30.7549 37.5705 30.7783 37.5546 30.7897 37.532C30.894 37.3254 31.0613 37.1754 31.2243 37.0216C31.2688 36.9798 31.3123 36.937 31.3601 36.8985C31.4079 36.8601 31.4595 36.8326 31.5057 36.7952C31.6094 36.7106 31.7105 36.6232 31.8126 36.537C31.8381 36.515 31.8615 36.476 31.8892 36.4727C32.0071 36.4584 32.0701 36.3562 32.1608 36.3078C32.2972 36.2408 32.4199 36.1375 32.5764 36.1155C32.6345 36.1022 32.6904 36.0808 32.7426 36.0518C32.8822 35.9914 33.0066 35.887 33.1772 35.8969C33.2451 35.9007 33.3157 35.8584 33.3847 35.8364C33.4244 35.8203 33.4651 35.8065 33.5064 35.7952C33.5577 35.7857 33.6096 35.7805 33.6618 35.7798C34.2484 35.7628 34.8346 35.7501 35.4207 35.7914C35.49 35.7951 35.5572 35.8162 35.6163 35.8529C35.6694 35.8811 35.728 35.897 35.788 35.8996C35.8678 35.911 35.9454 35.9345 36.0183 35.9694C36.1514 36.0243 36.2665 36.137 36.4257 36.1183C36.4433 36.1168 36.4609 36.1209 36.4762 36.1298C36.6088 36.2163 36.741 36.3031 36.8728 36.3903C36.894 36.4046 36.9114 36.4331 36.9336 36.437C37.0271 36.4524 37.0966 36.5155 37.1765 36.5535C37.2567 36.5956 37.33 36.6501 37.3937 36.715C37.585 36.8916 37.7724 37.0718 37.956 37.2557C38.075 37.3743 38.1858 37.5013 38.2993 37.6249C38.3118 37.6372 38.3201 37.6531 38.3232 37.6705C38.3314 37.7804 38.4226 37.8408 38.4808 37.92C38.5085 37.9579 38.5318 37.9991 38.5557 38.0392C38.5796 38.0793 38.6062 38.1293 38.6318 38.1738C38.6426 38.1925 38.6611 38.2095 38.6644 38.2287C38.6828 38.3491 38.7681 38.4276 38.8339 38.5183C38.8485 38.5346 38.8606 38.5532 38.8697 38.5733C38.9208 38.748 38.9697 38.9227 39.0196 39.0974C39.0294 39.131 39.043 39.1628 39.0544 39.1958C39.075 39.2573 39.0957 39.3189 39.1152 39.3804C39.122 39.4276 39.1365 39.4732 39.1582 39.5156C39.202 39.5763 39.2235 39.6505 39.219 39.7255C39.219 40.3145 39.219 40.9033 39.219 41.492C39.223 41.5271 39.2197 41.5626 39.2095 41.5964C39.1992 41.6301 39.1821 41.6614 39.1592 41.6881C39.1499 41.6974 39.1427 41.7087 39.1381 41.7211C39.0957 41.8711 39.0549 42.0222 39.012 42.1722C38.9941 42.2343 38.9718 42.2958 38.949 42.3563C38.9338 42.3969 38.9153 42.4359 38.8947 42.4749C38.8741 42.514 38.8496 42.5673 38.8257 42.6123C38.8176 42.6277 38.8034 42.6403 38.7964 42.6557C38.7513 42.7656 38.7236 42.8837 38.6584 42.9766C38.5807 43.0865 38.5497 43.2206 38.4558 43.3217C38.3618 43.4228 38.2961 43.5464 38.2129 43.6568C38.1624 43.7219 38.108 43.7837 38.05 43.842C38.0274 43.8629 38.0117 43.8902 38.005 43.9204C37.9983 43.9505 38.0009 43.9821 38.0125 44.0107C38.0342 44.0706 38.0902 44.075 38.1429 44.0788C38.1956 44.0827 38.2477 44.0788 38.2993 44.0854C38.3421 44.0867 38.3838 44.0986 38.421 44.12C38.4825 44.1619 38.5563 44.1812 38.6301 44.175H40.966C41.0401 44.1813 41.1139 44.16 41.1735 44.1151C41.2074 44.0955 41.244 44.0814 41.2822 44.0733C41.3517 44.0464 41.361 44.0184 41.3251 43.9546C41.299 43.9101 41.2784 43.8623 41.2529 43.8173C41.2371 43.787 41.2179 43.7586 41.1958 43.7326C41.0831 43.6186 40.9867 43.4891 40.9095 43.348C40.8293 43.2118 40.7406 43.081 40.6439 42.9563C40.6368 42.9458 40.6216 42.9398 40.6167 42.9288C40.5673 42.8096 40.4978 42.6942 40.4755 42.5695C40.4494 42.4255 40.3761 42.3074 40.3125 42.1848C40.2713 42.1186 40.2468 42.0431 40.2414 41.965C40.2386 41.8519 40.2414 41.7376 40.162 41.6403C40.1423 41.6013 40.1335 41.5576 40.1365 41.5139C40.0944 40.9132 40.0944 40.3102 40.1365 39.7095C40.1343 39.6614 40.1454 39.6137 40.1686 39.5716C40.237 39.4886 40.2381 39.3947 40.2403 39.2969C40.2424 39.1991 40.2403 39.1018 40.3239 39.0304C40.3326 39.0205 40.3388 39.0086 40.3419 38.9958C40.3875 38.865 40.432 38.7331 40.4788 38.6024C40.4901 38.5743 40.5041 38.5475 40.5206 38.5222C40.5342 38.4996 40.5613 38.4809 40.564 38.4579C40.5789 38.3671 40.6179 38.2822 40.677 38.2123C40.7232 38.1502 40.7591 38.0798 40.8009 38.0139C40.8742 37.8974 40.9465 37.7809 41.0231 37.6667C41.0622 37.609 41.11 37.5568 41.1524 37.5018C41.1861 37.4516 41.2224 37.4032 41.261 37.3568C41.3289 37.2853 41.4028 37.2194 41.4756 37.1529C41.4979 37.1326 41.5402 37.1232 41.5484 37.098C41.6065 36.9331 41.7722 36.8908 41.8852 36.7886C41.9748 36.7073 42.0617 36.6238 42.1568 36.5485C42.2498 36.479 42.3477 36.4164 42.4496 36.3611C42.5811 36.2886 42.7261 36.2436 42.8451 36.1469C42.87 36.1293 42.899 36.1189 42.9293 36.1166C42.9952 36.1149 43.0581 36.0885 43.1058 36.0425C43.1089 36.0393 43.1126 36.0369 43.1167 36.0353C43.2672 35.9903 43.4171 35.9408 43.5697 35.9023C43.6336 35.8935 43.6951 35.8724 43.7512 35.8403C43.7986 35.8102 43.8533 35.7939 43.9093 35.793C44.2651 35.7804 44.6214 35.7677 44.9772 35.7666C45.2489 35.7666 45.5243 35.7815 45.7981 35.7903C45.8676 35.7915 45.9351 35.8144 45.9915 35.8556C46.0404 35.8825 46.0949 35.8974 46.1506 35.8991C46.2162 35.8977 46.2801 35.9199 46.331 35.9617C46.3397 35.971 46.3527 35.9826 46.3636 35.982C46.5168 35.9793 46.6352 36.0853 46.777 36.1166C46.8103 36.1245 46.8422 36.1377 46.8715 36.1556C46.9671 36.2139 47.0551 36.2903 47.1572 36.3309C47.3861 36.4304 47.5958 36.5701 47.7765 36.7436C47.7913 36.7594 47.8079 36.7734 47.8259 36.7853C48.0682 36.9068 48.2507 37.1018 48.4039 37.315C48.5354 37.4996 48.6821 37.6683 48.8277 37.8392C48.8402 37.8515 48.8511 37.8653 48.8602 37.8804C48.9119 37.9903 48.9607 38.1002 49.014 38.2101C49.052 38.2875 49.0966 38.3617 49.1368 38.4381C49.1965 38.5524 49.2552 38.6672 49.3144 38.782C49.3144 38.7859 49.3204 38.7897 49.3204 38.7936C49.3204 38.9513 49.4209 39.0782 49.448 39.2277C49.4501 39.2715 49.4608 39.3144 49.4795 39.354C49.5599 39.47 49.5588 39.6024 49.5675 39.7332C49.5741 39.8299 49.5762 39.9266 49.5779 40.0233C49.577 40.0934 49.5958 40.1624 49.6322 40.2222C49.6571 40.2677 49.67 40.319 49.6697 40.3711C49.6751 40.5117 49.6697 40.6524 49.6729 40.7931C49.6803 40.8812 49.6581 40.9693 49.6099 41.0431C49.5867 41.0899 49.5755 41.1418 49.5773 41.1942C49.5664 41.3431 49.5654 41.4925 49.5507 41.6414C49.5382 41.7047 49.52 41.7667 49.4964 41.8266C49.4448 41.9964 49.3258 42.1447 49.3388 42.3354C49.3426 42.3616 49.3368 42.3884 49.3225 42.4107C49.2481 42.4909 49.2313 42.5975 49.1856 42.6909C49.1215 42.8228 49.058 42.9552 48.9895 43.0854C48.9596 43.1329 48.9271 43.1788 48.8923 43.2228C48.8298 43.3167 48.775 43.4162 48.7065 43.5046C48.6136 43.6244 48.511 43.7359 48.4137 43.8519C48.393 43.8741 48.3764 43.9 48.3648 43.9283C48.3586 43.9425 48.3556 43.9579 48.3562 43.9735C48.3567 43.989 48.3608 44.0042 48.3681 44.0179C48.3754 44.0316 48.3857 44.0434 48.3982 44.0525C48.4108 44.0615 48.4252 44.0675 48.4403 44.07C48.4828 44.079 48.5262 44.0831 48.5696 44.0821C48.6609 44.0821 48.7505 44.0849 48.8277 44.1513C48.8572 44.1699 48.8919 44.1783 48.9265 44.1755C49.5393 44.1781 50.1521 44.1781 50.7648 44.1755C50.8159 44.1726 50.8648 44.1533 50.9044 44.1206C50.9984 44.0458 50.9875 44.0447 50.9441 43.9283C50.9212 43.8531 50.909 43.775 50.9077 43.6964C50.9017 43.6123 50.9006 43.5315 50.8403 43.4618C50.8311 43.4521 50.825 43.4399 50.8229 43.4266C50.8229 43.2068 50.6806 43.0233 50.6958 42.8024C50.7023 42.7162 50.6991 42.6288 50.6247 42.559C50.5986 42.5348 50.597 42.4777 50.5942 42.4348C50.5828 42.2332 50.5736 42.0315 50.5654 41.8304C50.5662 41.756 50.5474 41.6826 50.5111 41.6178C50.4837 41.5673 50.4695 41.5106 50.4698 41.453C50.466 40.9584 50.4671 40.4683 50.4666 39.976C50.4654 39.8968 50.4861 39.8188 50.5263 39.7507C50.5493 39.7039 50.5628 39.6529 50.566 39.6007C50.5769 39.5178 50.5736 39.4332 50.5883 39.3513C50.6043 39.2935 50.6245 39.2369 50.6486 39.1821C50.667 39.1271 50.6812 39.0661 50.6996 39.0084C50.7181 38.9507 50.7387 38.8952 50.7594 38.8397C50.7713 38.8073 50.7855 38.7755 50.7996 38.7436C50.8208 38.6969 50.843 38.6502 50.8653 38.604C50.8707 38.5925 50.886 38.5826 50.886 38.5716C50.8914 38.4359 50.9875 38.3414 51.0489 38.2331C51.1309 38.0831 51.1902 37.915 51.3205 37.7936C51.3366 37.7789 51.3479 37.7598 51.3531 37.7386C51.3711 37.6469 51.4346 37.5859 51.4927 37.5188C51.5938 37.4057 51.6943 37.2908 51.8035 37.1859C52.0028 36.9936 52.2027 36.8013 52.4135 36.6232C52.5031 36.5469 52.621 36.5046 52.7237 36.4425C52.797 36.398 52.8666 36.3469 52.941 36.2985C52.9654 36.282 52.9883 36.2551 53.0154 36.2496C53.0878 36.2358 53.1547 36.2013 53.2083 36.1502C53.2392 36.121 53.2968 36.1216 53.3414 36.1056C53.3957 36.0859 53.45 36.0628 53.5043 36.0403C53.532 36.0293 53.5586 36.0133 53.5863 36.004C53.6141 35.9947 53.6445 36.0002 53.6613 35.9848C53.7645 35.8914 53.8927 35.898 54.0171 35.8853C54.0557 35.8835 54.0932 35.8716 54.1258 35.8507C54.2024 35.7995 54.2931 35.7739 54.3849 35.7776C54.9666 35.7474 55.5494 35.7496 56.1308 35.7842C56.1976 35.7975 56.2629 35.8171 56.3259 35.843C56.3999 35.8654 56.4754 35.8825 56.5518 35.8941C56.6301 35.9034 56.7067 35.904 56.7691 35.9655C56.7887 35.9848 56.8235 35.9875 56.8528 35.998C56.9848 36.0469 57.1065 36.126 57.2521 36.1353C57.3781 36.248 57.5595 36.2732 57.6725 36.4067C57.6805 36.4174 57.6915 36.4253 57.704 36.4293C57.8833 36.465 57.9718 36.6265 58.1049 36.726C58.1223 36.7386 58.1359 36.7644 58.1538 36.7677C58.3342 36.798 58.4146 36.9595 58.5341 37.0666C58.6786 37.1963 58.8057 37.3414 58.9426 37.4837C58.9597 37.497 58.9738 37.5139 58.9839 37.5331C59.0426 37.704 59.1838 37.8156 59.2799 37.959C59.3341 38.0425 59.3831 38.1293 59.4266 38.2189C59.4766 38.3205 59.519 38.4255 59.5651 38.5287C59.5738 38.5485 59.5782 38.5744 59.5934 38.587C59.6656 38.6474 59.6667 38.7304 59.6754 38.8145C59.6779 38.8622 59.6935 38.9082 59.7205 38.9474C59.7671 39.0055 59.7949 39.0767 59.7998 39.1513C59.8008 39.1952 59.8114 39.2384 59.8308 39.2777C59.8835 39.3693 59.9086 39.4745 59.903 39.5804C59.8964 39.6694 59.9166 39.7583 59.9612 39.8354C59.9841 39.8725 59.9967 39.9152 59.9976 39.959C60.0008 40.3854 60.0008 40.8117 59.9976 41.2381C59.9993 41.277 59.9888 41.3155 59.9677 41.348C59.9164 41.4198 59.8918 41.5075 59.8981 41.5958C59.9002 41.7188 59.8743 41.8406 59.8226 41.9519C59.777 42.042 59.7634 42.1491 59.6961 42.2337C59.6772 42.2636 59.6691 42.2991 59.6732 42.3343C59.6852 42.4859 59.6189 42.6024 59.5298 42.7145C59.4997 42.7617 59.4737 42.8116 59.4521 42.8634C59.4364 42.8936 59.4196 42.9238 59.4016 42.953C59.3828 42.9767 59.3664 43.0022 59.3527 43.0293C59.3038 43.1761 59.212 43.2975 59.1268 43.4222C59.0179 43.5835 58.9012 43.7392 58.7769 43.8887C58.6637 44.0202 58.5425 44.1444 58.414 44.2607C58.3392 44.3188 58.2606 44.3719 58.1788 44.4195C58.1468 44.4414 58.1212 44.4717 58.0903 44.4953C58.0093 44.5579 57.9507 44.6513 57.8382 44.6717C57.8083 44.6772 57.7839 44.709 57.7562 44.7321C57.5833 44.8961 57.3827 45.0275 57.1641 45.12C57.0945 45.1486 57.0402 45.2123 56.9772 45.2574C56.943 45.2816 56.9044 45.3178 56.8685 45.3184C56.7251 45.3184 56.6295 45.409 56.5252 45.4876C56.485 45.5178 56.434 45.5332 56.391 45.5607C56.2732 45.6354 56.1406 45.6651 56.0108 45.7052C55.8973 45.7409 55.7935 45.8151 55.6848 45.8645C55.644 45.8794 55.602 45.8908 55.5594 45.8986C55.5219 45.909 55.4741 45.9096 55.4507 45.9343C55.3861 45.9992 55.3051 45.9997 55.2264 46.0217C55.0591 46.0638 54.8956 46.1199 54.7375 46.1893C54.593 46.2563 54.5642 46.4091 54.6587 46.5382C54.6973 46.5954 54.7266 46.6584 54.7456 46.725C54.7757 46.8012 54.8121 46.8747 54.8543 46.9448C54.9135 47.0547 54.9748 47.1646 55.0346 47.2744C55.0471 47.2924 55.0564 47.3125 55.0618 47.3338C55.0721 47.4519 55.159 47.5255 55.2182 47.6151C55.2302 47.6332 55.2541 47.6475 55.2573 47.6668C55.2785 47.7931 55.3464 47.8992 55.3942 48.014C55.436 48.1038 55.4871 48.1887 55.5469 48.2673C55.574 48.3102 55.5983 48.3548 55.6197 48.4008C55.6414 48.442 55.6609 48.4849 55.6827 48.5267C55.6952 48.5492 55.7131 48.5695 55.724 48.5926C55.7745 48.6981 55.8212 48.8052 55.8744 48.9091C55.894 48.947 55.9288 48.9756 55.9527 49.0129C56.0369 49.1596 56.1156 49.3085 56.2009 49.4525C56.2267 49.4927 56.2554 49.5309 56.2867 49.5668C56.3992 49.7091 56.4606 49.8855 56.5877 50.0173C56.5988 50.0308 56.6073 50.0463 56.6127 50.0629C56.6829 50.2408 56.7851 50.404 56.9142 50.5443C56.931 50.564 56.9549 50.5838 56.9598 50.6069C56.9995 50.7899 57.1342 50.902 57.257 51.0234C57.2722 51.0388 57.2928 51.0547 57.2966 51.0734C57.3254 51.2053 57.4264 51.286 57.503 51.3849C57.5654 51.4621 57.6226 51.5434 57.6742 51.6283C57.7355 51.7344 57.8404 51.8146 57.9257 51.9064C58.0436 52.0333 58.1642 52.158 58.2766 52.291C58.3239 52.3459 58.345 52.424 58.3928 52.4783C58.4955 52.5954 58.6101 52.7042 58.7188 52.8163C58.803 52.9031 58.8894 52.9877 58.9714 53.0767C59.0377 53.1487 59.0257 53.3415 58.9518 53.4179C58.8432 53.5278 58.7345 53.6306 58.6259 53.7377C58.4597 53.9033 58.2945 54.0696 58.1305 54.2366C58.1086 54.2638 58.0892 54.2928 58.0723 54.3234C58.0131 54.4149 57.9371 54.4942 57.8485 54.5569C57.7654 54.6119 57.7127 54.7141 57.6367 54.785C57.5603 54.861 57.4751 54.9274 57.383 54.9828C57.3494 54.9997 57.311 55.0043 57.2744 54.9959C57.2377 54.9875 57.2051 54.9666 57.182 54.9366C57.0886 54.8339 56.9913 54.7344 56.8952 54.6339C56.799 54.5333 56.6915 54.4223 56.591 54.3152C56.4725 54.1892 56.3554 54.0624 56.2395 53.935C56.2168 53.9031 56.1963 53.8696 56.1781 53.835C56.1591 53.8064 56.1423 53.7652 56.1156 53.7558C56.0227 53.7234 55.9923 53.6459 55.9445 53.5712C55.8703 53.4696 55.7892 53.3734 55.7017 53.2833C55.6796 53.2628 55.6613 53.2387 55.6474 53.2119C55.5903 53.0542 55.4589 52.9542 55.3616 52.8273C55.3459 52.8069 55.3138 52.7932 55.3073 52.7723C55.2611 52.5921 55.1058 52.4937 55.0058 52.3542C54.9937 52.3416 54.9839 52.3269 54.977 52.3108C54.9433 52.1871 54.8423 52.1102 54.7771 52.0091C54.6788 51.8558 54.5897 51.697 54.4946 51.5415C54.4696 51.5014 54.4403 51.4657 54.411 51.4261C54.3297 51.3205 54.2571 51.2084 54.1937 51.091C54.1371 50.9641 54.0626 50.8462 53.9726 50.741C53.9619 50.7218 53.9551 50.7007 53.9525 50.6789C53.9471 50.6574 53.9525 50.6278 53.9367 50.6157C53.8129 50.5031 53.7928 50.3217 53.6722 50.2069C53.6494 50.1867 53.6325 50.1607 53.6233 50.1316C53.5987 50.0675 53.568 50.0061 53.5315 49.9481C53.477 49.8247 53.4023 49.7116 53.3104 49.6135C53.2867 49.5768 53.2737 49.5342 53.2729 49.4904C53.2635 49.4166 53.2325 49.3473 53.1838 49.2915C53.1306 49.2179 53.0844 49.1393 53.0458 49.0569C53.029 49.0267 53.0132 48.9959 52.9953 48.9668C52.9839 48.9486 52.9605 48.9338 52.9573 48.9151C52.9155 48.7003 52.7644 48.5382 52.6857 48.3393C52.6232 48.1816 52.5455 48.0256 52.4684 47.8712C52.4141 47.7613 52.3478 47.6624 52.2869 47.558C52.2791 47.5474 52.2737 47.5352 52.2712 47.5222C52.2614 47.2805 52.093 47.1019 52.0224 46.8838C52.0061 46.8283 51.972 46.7799 51.9255 46.7463C51.8789 46.7126 51.8226 46.6957 51.7654 46.6981C51.5308 46.7008 51.2961 46.6981 51.0592 46.7036C51.025 46.6998 50.9905 46.7086 50.962 46.7283C50.9012 46.7997 50.8235 46.7931 50.7447 46.7931C50.3884 46.7931 50.032 46.7931 49.6756 46.7931C49.6413 46.7967 49.6066 46.7932 49.5736 46.783C49.5406 46.7729 49.5099 46.7561 49.4833 46.7338C49.439 46.7078 49.3876 46.6969 49.3367 46.7025C48.9064 46.697 48.4762 46.6948 48.0459 46.6909C47.934 46.6909 47.8211 46.6992 47.7249 46.6151C47.6863 46.5948 47.6427 46.5862 47.5994 46.5904C47.487 46.5838 47.3734 46.5849 47.261 46.5766C47.1485 46.5684 47.0285 46.5651 46.9193 46.5063C46.862 46.4864 46.8017 46.4767 46.7411 46.4777C46.6538 46.4764 46.5689 46.4478 46.4983 46.3959C46.4583 46.3705 46.4119 46.3573 46.3647 46.358C46.2522 46.3503 46.1387 46.358 46.0262 46.3448C45.9684 46.3323 45.912 46.3139 45.8578 46.2898C45.8035 46.2653 45.7461 46.2483 45.6872 46.2393C45.4987 46.2327 45.3385 46.1486 45.1739 46.0695C45.0893 46.028 44.9966 46.0062 44.9026 46.0057C44.8086 46.0052 44.7156 46.0261 44.6307 46.0667C44.465 46.142 44.3047 46.2272 44.1179 46.2387C44.0434 46.2381 43.9712 46.2644 43.9141 46.3129C43.8819 46.3345 43.8442 46.3462 43.8055 46.3464C43.7322 46.353 43.6583 46.353 43.5844 46.3541C43.5065 46.3472 43.4288 46.3703 43.3671 46.4189C43.3307 46.4424 43.289 46.456 43.246 46.4585C43.1259 46.4772 43.0037 46.4805 42.8945 46.5453C42.8621 46.5587 42.8273 46.5651 42.7924 46.564C42.6712 46.5728 42.5495 46.5772 42.4284 46.5876C42.3811 46.5868 42.3344 46.5987 42.2931 46.6222C42.2259 46.6717 42.1434 46.695 42.0606 46.6882L40.7178 46.7008C40.6444 46.7008 40.5727 46.6975 40.5135 46.7624C40.4818 46.7846 40.4433 46.7947 40.4049 46.7909C40.0398 46.7931 39.6748 46.7931 39.3097 46.7909C39.2665 46.7927 39.2238 46.7814 39.187 46.7585C39.1231 46.7159 39.0469 46.6966 38.9707 46.7036C38.4927 46.7003 38.0147 46.6953 37.5372 46.6915C37.45 46.6994 37.363 46.6752 37.2922 46.6233C37.2505 46.6002 37.2033 46.589 37.1558 46.5909C37.039 46.581 36.9217 46.5755 36.8049 46.5695C36.6964 46.5701 36.5889 46.548 36.4893 46.5047C36.4225 46.4711 36.3366 46.4777 36.2595 46.464C36.2162 46.4633 36.1738 46.4522 36.1356 46.4316C36.0482 46.3525 35.9455 46.3569 35.8412 46.3552C35.7804 46.3552 35.719 46.3552 35.6587 46.3481C35.6159 46.3468 35.5742 46.3339 35.5381 46.3107C35.479 46.2652 35.4065 46.241 35.3322 46.242C35.2318 46.2425 35.1331 46.2158 35.0465 46.1645C35.0069 46.1468 34.9653 46.134 34.9226 46.1266C34.8526 46.1063 34.7837 46.0822 34.7162 46.0547C34.6687 46.033 34.617 46.0224 34.565 46.0235C34.5129 46.0247 34.4617 46.0376 34.4152 46.0612C34.3451 46.0931 34.2702 46.1162 34.1979 46.1398L34.0523 46.1915C34.0176 46.2086 33.9812 46.2218 33.9437 46.231C33.8481 46.2437 33.7563 46.2552 33.6791 46.3255C33.6449 46.3443 33.6061 46.3527 33.5672 46.3497C33.489 46.3547 33.4097 46.3497 33.3326 46.3596C33.2749 46.3726 33.2185 46.391 33.1642 46.4145C33.1212 46.4336 33.0766 46.4489 33.0311 46.4602C32.9116 46.4805 32.7893 46.4843 32.6796 46.5481C32.6475 46.5617 32.6128 46.568 32.578 46.5667C32.452 46.5761 32.3265 46.5805 32.201 46.592C32.1493 46.5908 32.0982 46.6033 32.0527 46.6283C31.9846 46.676 31.9023 46.6987 31.8197 46.6926L30.5941 46.7036C30.5246 46.7036 30.4583 46.7036 30.4029 46.764C30.3711 46.7862 30.3328 46.7967 30.2943 46.7937C29.9031 46.7959 29.512 46.7959 29.1209 46.7937C29.0778 46.7955 29.0351 46.784 28.9987 46.7607C28.9338 46.7156 28.8554 46.6948 28.777 46.7019C28.538 46.6992 28.299 46.6948 28.0605 46.692C27.9907 46.6952 27.922 46.6738 27.866 46.6316C27.8258 46.6067 27.78 46.5924 27.7329 46.5898C27.6683 46.5799 27.6026 46.581 27.5379 46.5739C27.3759 46.5485 27.2208 46.4892 27.0827 46.3997C27.0373 46.3755 26.9873 46.3614 26.936 46.3585C26.8209 46.3481 26.6986 46.3678 26.6101 46.2662C26.6036 46.26 26.5951 46.2564 26.5862 46.2563C26.3901 46.2376 26.226 46.1426 26.0663 46.0365C25.9294 46.0327 25.8409 45.9162 25.7138 45.8838C25.6356 45.8579 25.5621 45.8191 25.4965 45.7689C25.3476 45.6689 25.1705 45.6167 25.038 45.4871C24.9456 45.3981 24.7387 45.4156 24.6344 45.4942C24.5974 45.5228 24.5518 45.5382 24.5127 45.5645C24.3774 45.6552 24.2172 45.7014 24.0938 45.8151C24.0476 45.8465 23.9987 45.8737 23.9477 45.8964C23.8307 45.9685 23.702 46.0187 23.5675 46.0448C23.4778 46.064 23.3974 46.1272 23.3121 46.1689C23.2616 46.1937 23.21 46.2156 23.1589 46.2382C23.1388 46.247 23.1111 46.247 23.0986 46.2612C23.0101 46.3656 22.889 46.3519 22.7727 46.3558C22.7423 46.3535 22.7118 46.3575 22.683 46.3676C22.6542 46.3777 22.6278 46.3937 22.6054 46.4145C22.5913 46.4315 22.5723 46.4436 22.5511 46.4492C22.3566 46.47 22.1887 46.5986 21.9867 46.5871C21.916 46.5833 21.8463 46.6051 21.79 46.6486C21.7421 46.6777 21.6872 46.6927 21.6314 46.692C21.3755 46.6997 21.1191 46.7019 20.8627 46.7047C20.7929 46.7002 20.7237 46.7196 20.6661 46.7596C20.6293 46.782 20.5873 46.7943 20.5444 46.7953C20.4667 46.8014 20.3885 46.8003 20.3102 46.7992C20.1228 46.7992 20.0283 46.7047 20.0278 46.5178C20.0278 45.8101 20.0278 45.1024 20.0278 44.3947C20.0273 44.3683 20.0282 44.3419 20.0305 44.3156C20.0397 44.2338 20.0631 44.2057 20.1424 44.1964C20.1813 44.1919 20.2205 44.1899 20.2597 44.1903C20.4227 44.1903 20.59 44.1903 20.7552 44.1832C20.8132 44.1723 20.8701 44.1559 20.9252 44.1343C20.9905 44.1148 21.0571 44.1002 21.1245 44.0909C21.2403 44.0799 21.3565 44.0909 21.4586 44.0085C21.4961 43.9777 21.5673 43.9843 21.6216 43.9805C21.7476 43.9722 21.8747 43.975 21.9801 43.8859C21.9902 43.8773 22.0028 43.8722 22.016 43.8717C22.1703 43.8783 22.2876 43.7662 22.4305 43.737C22.451 43.7328 22.4698 43.7227 22.4848 43.7079C22.5331 43.6614 22.5964 43.6341 22.663 43.631C22.7046 43.6218 22.7455 43.6093 22.7852 43.5936ZM27.0914 33.5496C27.0914 33.0133 27.0914 32.477 27.0914 31.9413C27.0914 31.8627 27.0974 31.7732 27.0637 31.7083C26.9947 31.5754 27.0028 31.4375 26.992 31.2985C26.9888 31.2158 26.9724 31.1341 26.9436 31.0567C26.9121 30.9895 26.8936 30.9167 26.8893 30.8424C26.8842 30.7237 26.8768 30.6054 26.867 30.4875C26.8666 30.4478 26.857 30.4088 26.8388 30.3737C26.7714 30.2732 26.766 30.1605 26.7562 30.044C26.75 29.9877 26.7369 29.9323 26.7171 29.8792C26.6628 29.7292 26.6085 29.5803 26.5503 29.4309C26.5498 29.4265 26.5498 29.422 26.5503 29.4177C26.5541 29.2314 26.4009 29.0935 26.3966 28.9089C26.3966 28.8913 26.37 28.8754 26.358 28.8572C26.3045 28.7843 26.2565 28.7073 26.2146 28.627C26.1606 28.4998 26.0913 28.3799 26.0082 28.2699C25.8958 28.121 25.7663 27.9862 25.6225 27.8682C25.553 27.8133 25.5041 27.7253 25.4014 27.7165C25.3095 27.715 25.2205 27.684 25.1472 27.6281C25.1214 27.6117 25.0913 27.6034 25.0608 27.6045C24.9217 27.6045 24.7827 27.6001 24.6436 27.6045C24.6089 27.603 24.5746 27.6128 24.5458 27.6325C24.4785 27.6806 24.3994 27.7091 24.3171 27.7149C24.1929 27.748 24.0783 27.8108 23.983 27.8979C23.8281 28.0234 23.7009 28.1805 23.6098 28.3589C23.5865 28.4039 23.5381 28.4352 23.5142 28.4797C23.4474 28.6056 23.3887 28.7352 23.3241 28.8644C23.279 28.9534 23.2046 29.0352 23.1877 29.1281C23.1627 29.2727 23.1183 29.4132 23.0557 29.5457C23.0405 29.577 23.0389 29.6177 23.0177 29.6418C22.9634 29.7034 22.9634 29.7754 22.9531 29.8506C22.9493 29.9289 22.9326 30.006 22.9036 30.0787C22.8688 30.1441 22.8477 30.2161 22.8417 30.2902C22.8352 30.4001 22.8292 30.51 22.8205 30.6199C22.8167 30.6633 22.8205 30.7188 22.7961 30.7468C22.7075 30.8468 22.7227 30.9666 22.7124 31.0831C22.703 31.1561 22.6886 31.2285 22.6695 31.2996C22.6476 31.3648 22.6316 31.4319 22.6217 31.5001C22.6119 31.7149 22.6168 31.9309 22.6059 32.1457C22.5958 32.2633 22.5789 32.3801 22.5554 32.4957C22.5368 32.5577 22.523 32.6211 22.5141 32.6853C22.5109 33.2787 22.5109 33.8719 22.5141 34.465C22.5185 34.5208 22.5287 34.5761 22.5446 34.6298C22.5656 34.6913 22.5814 34.7546 22.5918 34.8188C22.6054 35.082 22.6092 35.3457 22.6211 35.6089C22.6273 35.6736 22.6391 35.7376 22.6565 35.8001C22.6785 35.8701 22.6966 35.9413 22.7108 36.0133C22.7222 36.1045 22.7151 36.198 22.7238 36.2881C22.7265 36.3403 22.7414 36.3912 22.7673 36.4364C22.8036 36.496 22.8225 36.5648 22.8216 36.6348C22.8281 36.7842 22.8357 36.9337 22.8471 37.0826C22.8448 37.1306 22.8557 37.1784 22.8786 37.2205C22.9487 37.3073 22.9455 37.4068 22.9536 37.5073C22.9522 37.577 22.9638 37.6464 22.9878 37.7117C23.0286 37.7978 23.0523 37.8911 23.0574 37.9864C23.0565 38.0429 23.0704 38.0986 23.0976 38.148C23.1386 38.2098 23.1609 38.2823 23.1617 38.3568C23.1716 38.4386 23.1875 38.5196 23.2095 38.5991C23.2296 38.6744 23.2638 38.7458 23.2844 38.8189C23.329 38.9639 23.3708 39.1101 23.4148 39.2551C23.4186 39.2678 23.4257 39.2792 23.4354 39.2881C23.4925 39.343 23.4957 39.4106 23.5017 39.4815C23.4998 39.5296 23.5111 39.5774 23.5343 39.6194C23.5892 39.6876 23.6232 39.7705 23.6321 39.8579C23.6423 39.8955 23.6575 39.9315 23.6772 39.965C23.6969 39.9987 23.7133 40.0342 23.7261 40.0711C23.7538 40.1909 23.8613 40.2755 23.8651 40.4051C23.8651 40.4189 23.8874 40.431 23.8967 40.4458C23.9178 40.473 23.935 40.5032 23.9477 40.5354C24.002 40.731 24.1563 40.8766 24.2009 41.076C24.2041 41.0909 24.2231 41.1019 24.2351 41.1145C24.2662 41.1443 24.2954 41.176 24.3225 41.2095C24.4258 41.353 24.5214 41.503 24.6311 41.6414C24.6836 41.6913 24.7426 41.7337 24.8066 41.7672C24.8946 41.7233 25.0065 41.7085 25.0554 41.6134C25.1361 41.4739 25.2331 41.3448 25.3444 41.2288C25.3656 41.2068 25.3839 41.182 25.3987 41.1551C25.453 41.0453 25.5003 40.9354 25.5508 40.8255C25.5562 40.8134 25.5665 40.804 25.5725 40.7931C25.6334 40.6784 25.694 40.5636 25.7545 40.4485C25.7655 40.4157 25.7808 40.3844 25.8001 40.3557C25.8437 40.3114 25.8706 40.2531 25.8762 40.1909C25.8832 40.1613 25.8941 40.1328 25.9088 40.1062C25.9307 40.0548 25.9552 40.0046 25.9821 39.9557C26.0503 39.8442 26.0899 39.7173 26.0973 39.5865C26.0972 39.5775 26.1005 39.5689 26.1065 39.5623C26.1961 39.476 26.2021 39.3606 26.2179 39.2474C26.2286 39.2146 26.243 39.183 26.2608 39.1535C26.3151 39.0205 26.3635 38.8875 26.4134 38.754C26.4168 38.7413 26.4183 38.7282 26.4178 38.715C26.421 38.5908 26.4308 38.47 26.5096 38.365C26.5265 38.3342 26.5357 38.2997 26.5362 38.2645C26.5433 38.2095 26.5444 38.1595 26.5498 38.1068C26.5693 37.9243 26.6753 37.7634 26.6785 37.5765C26.7698 37.4859 26.7513 37.3672 26.76 37.2546C26.7676 37.1634 26.76 37.0606 26.7997 36.9842C26.8659 36.8568 26.8725 36.7243 26.8822 36.5897C26.8904 36.4842 26.8855 36.3782 26.8942 36.2732C26.9023 36.2173 26.9152 36.1621 26.9328 36.1084C26.9561 36.0386 26.9742 35.9672 26.9871 35.8947C26.9985 35.7947 26.992 35.6925 26.9985 35.5919C26.9981 35.5395 27.0089 35.4876 27.03 35.4397C27.0764 35.3497 27.0977 35.2487 27.0914 35.1474V33.5496ZM57.4351 40.7381H57.4487C57.4417 40.5942 57.4335 40.4496 57.4281 40.3051C57.429 40.2215 57.4076 40.1391 57.3661 40.0667C57.34 40.0157 57.3261 39.9592 57.3254 39.9018C57.3167 39.7963 57.32 39.6908 57.2287 39.6128C57.2108 39.598 57.2102 39.5645 57.1983 39.5414C57.1757 39.495 57.1498 39.4504 57.1206 39.4079C57.0402 39.298 56.9473 39.2018 56.8762 39.0886C56.82 38.9853 56.735 38.9011 56.6317 38.8463C56.5949 38.824 56.5602 38.7985 56.5279 38.77C56.4655 38.7244 56.4046 38.676 56.3394 38.6342C56.2884 38.6034 56.2356 38.5757 56.1814 38.5513C56.1503 38.5371 56.1183 38.5248 56.0858 38.5145C56.0532 38.5029 56.0119 38.5024 55.9885 38.4815C55.9223 38.431 55.8426 38.4019 55.7598 38.398C55.7163 38.3954 55.6737 38.3844 55.6343 38.3656C55.5499 38.3194 55.454 38.299 55.3584 38.3068C55.2628 38.3068 55.1666 38.3068 55.0715 38.3068C54.8847 38.3018 54.7195 38.3908 54.5452 38.4375C54.4615 38.4601 54.3822 38.5123 54.2898 38.5216C54.2682 38.5245 54.2474 38.5321 54.229 38.5441C54.107 38.6176 53.9896 38.6987 53.8775 38.787C53.6814 38.9562 53.4679 39.1211 53.3604 39.3738C53.3549 39.3854 53.3435 39.3941 53.3376 39.4057C53.3126 39.4507 53.2887 39.4958 53.2653 39.5414C53.2419 39.587 53.2273 39.6194 53.2083 39.6584C53.1257 39.8266 53.0344 39.9881 53.0409 40.1892C53.0453 40.3139 53.0589 40.4442 53.0002 40.565C52.9377 40.6947 53.0746 40.8057 53.0388 40.9348C53.0371 40.948 53.0371 40.9612 53.0388 40.9744C53.042 41.1233 53.0518 41.2733 53.0464 41.4222C53.0361 41.6854 53.1186 41.931 53.1708 42.1826C53.1797 42.2073 53.1898 42.2315 53.2012 42.2552C53.2242 42.3112 53.2424 42.3691 53.2555 42.4282C53.2686 42.5151 53.2658 42.6041 53.2762 42.6909C53.2771 42.7388 53.29 42.7857 53.3136 42.8271C53.3616 42.8954 53.3862 42.9776 53.3837 43.0612C53.387 43.1222 53.3805 43.1936 53.4093 43.2414C53.4545 43.3257 53.4873 43.4162 53.5065 43.5101C53.5608 43.7096 53.7727 43.8107 53.927 43.7052C53.9966 43.6621 54.0758 43.6374 54.1573 43.6332C54.2334 43.6211 54.3085 43.6028 54.3816 43.5783C54.4468 43.5585 54.5088 43.5233 54.5745 43.5101C54.6394 43.5048 54.7012 43.4794 54.7516 43.4376C54.7713 43.4204 54.795 43.4086 54.8206 43.4035C54.9341 43.3755 55.0183 43.2772 55.1411 43.2711C55.1585 43.2711 55.1737 43.2431 55.1921 43.2321C55.2246 43.2109 55.2587 43.1925 55.2943 43.1772C55.4208 43.1332 55.5396 43.0692 55.6463 42.9876C55.6667 42.9714 55.6908 42.9606 55.7164 42.9563C55.8522 42.9299 55.9499 42.8315 56.0662 42.7684C56.1629 42.7134 56.2292 42.6101 56.3487 42.5914C56.3704 42.5881 56.3883 42.5596 56.4073 42.5425C56.516 42.448 56.6246 42.3568 56.7257 42.2574C56.818 42.1667 56.8973 42.0623 56.9897 41.9711C57.082 41.8799 57.1119 41.7398 57.1983 41.6414C57.2868 41.5379 57.3327 41.404 57.3265 41.2672C57.3344 41.2206 57.3492 41.1754 57.3705 41.1332C57.3935 41.0821 57.4117 41.0289 57.4248 40.9744C57.4335 40.8975 57.4297 40.8172 57.4351 40.7381ZM32.2673 40.5903H32.2716C32.2716 40.731 32.2684 40.8716 32.2716 41.0117C32.2692 41.0733 32.2807 41.1345 32.3053 41.1909C32.4102 41.3755 32.4656 41.5815 32.5796 41.765C32.674 41.9095 32.7813 42.0448 32.9001 42.1694C32.9985 42.2793 33.1131 42.3716 33.219 42.4738C33.2869 42.5392 33.3429 42.6184 33.451 42.6233C33.4754 42.6233 33.501 42.6563 33.5205 42.6782C33.6259 42.7997 33.7807 42.8431 33.9089 42.9299C34.0365 43.0093 34.1713 43.0763 34.3115 43.1299C34.438 43.1848 34.5771 43.2063 34.7031 43.1403C34.8933 43.0403 35.0747 42.9238 35.2589 42.814C35.3074 42.7847 35.3546 42.7539 35.4006 42.7216C35.4848 42.6634 35.5718 42.6079 35.6505 42.5425C35.7505 42.4596 35.8336 42.3519 35.9417 42.2837C36.0634 42.2074 36.1688 42.1304 36.2133 41.9859C36.2215 41.959 36.2508 41.9392 36.2676 41.9161C36.3192 41.853 36.3871 41.7964 36.4181 41.7238C36.4648 41.6139 36.5593 41.5205 36.5501 41.3876C36.5514 41.3744 36.5574 41.3621 36.567 41.353C36.6332 41.2843 36.6408 41.1975 36.6463 41.1084C36.6448 40.998 36.6537 40.8876 36.6729 40.7788C36.7098 40.6333 36.7098 40.4808 36.6729 40.3354C36.6574 40.2314 36.6474 40.1267 36.643 40.0216C36.6402 39.9779 36.6253 39.9358 36.6001 39.9002C36.5591 39.8436 36.5362 39.7758 36.5344 39.7057C36.53 39.6539 36.5146 39.6037 36.4893 39.5584C36.3969 39.4178 36.3029 39.2766 36.1976 39.1458C36.1134 39.0415 36.0197 38.9455 35.9178 38.859C35.82 38.7755 35.7048 38.7128 35.6016 38.6353C35.5071 38.5645 35.4137 38.498 35.2882 38.4991C35.2579 38.4965 35.2289 38.4855 35.2045 38.4672C35.0562 38.3656 34.871 38.382 34.7156 38.3079C34.7115 38.307 34.7073 38.307 34.7031 38.3079C34.5597 38.3079 34.4163 38.3079 34.2734 38.3079C34.2303 38.3113 34.188 38.3223 34.1485 38.3403C34.0089 38.3952 33.8535 38.4101 33.7242 38.4952C33.7165 38.4992 33.7079 38.5013 33.6992 38.5013C33.5205 38.5079 33.3934 38.6266 33.2522 38.7128C33.1902 38.7507 33.1403 38.8139 33.0751 38.8414C32.9621 38.8859 32.8706 38.973 32.8197 39.0842C32.8049 39.1156 32.7866 39.1453 32.7654 39.1727C32.6959 39.2606 32.6084 39.3375 32.5872 39.4562C32.5829 39.4793 32.5568 39.4974 32.5422 39.5189C32.5241 39.5428 32.5083 39.5684 32.4949 39.5952C32.4531 39.7189 32.403 39.8395 32.345 39.9562C32.2899 40.053 32.263 40.1634 32.2673 40.2749V40.5903ZM42.6131 40.5628H42.6093C42.6093 40.5892 42.6093 40.6178 42.6093 40.642C42.6093 40.7991 42.593 40.9595 42.6892 41.1002C42.7025 41.1233 42.7089 41.1499 42.7076 41.1766C42.7038 41.3249 42.8076 41.4337 42.8527 41.5612C42.8787 41.6381 42.9336 41.7134 42.9559 41.7975C42.9849 41.8797 43.0332 41.9536 43.0966 42.0129C43.1509 42.0738 43.2166 42.1255 43.2693 42.1876C43.416 42.3629 43.6023 42.487 43.7887 42.6112C43.8973 42.6832 44.0092 42.748 44.1146 42.8244C44.197 42.8959 44.2978 42.9422 44.4052 42.9579C44.4394 42.9607 44.4704 42.9969 44.5035 43.0167C44.5877 43.0667 44.6508 43.1513 44.7599 43.1612C44.8833 43.1728 45.0033 43.187 45.1054 43.0936C45.1206 43.0866 45.1364 43.081 45.1527 43.0771C45.2614 43.0222 45.37 42.9744 45.4727 42.9123C45.6259 42.8167 45.7736 42.7118 45.9225 42.6085C45.961 42.5821 45.9887 42.5326 46.0311 42.5178C46.1718 42.4673 46.2734 42.3645 46.3712 42.2618C46.4831 42.1447 46.627 42.0508 46.6716 41.8771C46.6802 41.8564 46.693 41.8377 46.7091 41.8222C46.7824 41.731 46.8677 41.6475 46.8775 41.52C46.8794 41.5023 46.8873 41.4858 46.8997 41.4733C46.985 41.3931 46.9883 41.287 46.9948 41.181C46.9914 41.1241 46.9994 41.0671 47.0182 41.0134C47.0986 40.8617 47.098 40.6997 47.0926 40.5376C47.0927 40.4458 47.0776 40.3546 47.048 40.2678C47.0167 40.191 46.9983 40.1095 46.9937 40.0266C46.9883 39.9211 46.9834 39.815 46.8976 39.7354C46.8846 39.7177 46.876 39.6972 46.8726 39.6755C46.8311 39.525 46.7579 39.3853 46.658 39.2661C46.6249 39.2271 46.5776 39.1991 46.5493 39.1562C46.4168 38.976 46.2397 38.843 46.0784 38.6925C46.056 38.6721 46.03 38.6562 46.0018 38.6458C45.8654 38.5963 45.753 38.487 45.5982 38.4848C45.5824 38.4848 45.5677 38.4678 45.5514 38.4628C45.3925 38.4108 45.2329 38.3595 45.0728 38.309C45.0599 38.307 45.0467 38.307 45.0337 38.309C44.9164 38.309 44.7991 38.3051 44.6817 38.309C44.626 38.3146 44.5713 38.3273 44.5188 38.3469C44.3672 38.3947 44.2059 38.4123 44.0684 38.5018C44.0642 38.5032 44.0596 38.5032 44.0554 38.5018C43.8897 38.4914 43.7686 38.604 43.6518 38.687C43.4301 38.846 43.2312 39.0351 43.0607 39.2491C43.0001 39.3166 42.9532 39.3956 42.9227 39.4815C42.8938 39.5733 42.8491 39.6592 42.7907 39.7354C42.7469 39.7948 42.7217 39.8662 42.7185 39.9403C42.7203 39.9925 42.7072 40.0442 42.681 40.0892C42.657 40.1173 42.6389 40.1501 42.6278 40.1855C42.6167 40.2209 42.6128 40.2583 42.6164 40.2953C42.6126 40.3848 42.6131 40.4749 42.6131 40.5628Z" fill="white"/>
</svg>
`,
      name: 'Loop',
      to: 'https://www.theloop.com.au/kinsmm/portfolio/Graphic-Designer/Adelaide',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
<rect width="80" height="80" rx="12" fill="black"/>
</mask>
<g mask="url(#mask0_0_1)">
<rect width="80" height="80" rx="12" fill="black"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
</g>
<path d="M31.2574 51.658C25.1364 51.6911 19.9273 46.6316 20.0008 40.1939C20.0725 34.0316 25.0504 29.0026 31.3034 29C37.5232 28.9974 42.5699 34.0905 42.5583 40.3671C42.5467 46.6909 37.3904 51.7079 31.2574 51.658Z" fill="white"/>
<path d="M54.9214 40.3355C54.9334 42.2264 54.688 44.0834 54.1074 45.8871C53.6776 47.2227 53.0884 48.4798 52.1408 49.54C51.6036 50.1417 50.9805 50.6342 50.1966 50.8636C48.9636 51.2242 47.8931 50.8636 46.9554 50.0471C45.8733 49.1064 45.2119 47.885 44.7125 46.5687C44.0085 44.7125 43.7013 42.7825 43.6561 40.803C43.6089 38.7217 43.85 36.6812 44.4972 34.7005C44.9192 33.4074 45.4998 32.1942 46.4079 31.1597C46.8032 30.7098 47.2511 30.3204 47.7874 30.0497C49.1196 29.3775 50.3552 29.6083 51.4897 30.5121C52.418 31.2513 53.0369 32.2281 53.5246 33.29C54.4564 35.3146 54.8393 37.4613 54.9205 39.6723C54.9287 39.892 54.9214 40.1141 54.9214 40.3355Z" fill="white"/>
<path d="M60.0004 39.9586C59.9776 42.4276 59.8835 44.8102 59.3961 47.1588C59.2513 47.858 59.0807 48.5529 58.7515 49.1937C58.6627 49.3653 58.5536 49.5256 58.4266 49.6711C58.1632 49.972 57.837 49.9814 57.583 49.6711C57.3998 49.4436 57.2482 49.1923 57.1322 48.9242C56.7939 48.1464 56.6203 47.3195 56.4819 46.4884C56.0522 43.9064 55.9482 41.3046 56.0453 38.6926C56.1141 36.8347 56.2727 34.9859 56.6899 33.1681C56.8399 32.5135 57.0183 31.8659 57.3672 31.2814C57.7656 30.6144 58.213 30.6028 58.6294 31.2625C58.9891 31.8324 59.1576 32.4787 59.3093 33.1255C59.669 34.6602 59.8358 36.2219 59.9161 37.7931C59.9544 38.5404 59.9737 39.2891 60.0004 39.9586Z" fill="white"/>
</svg>`,
      name: 'Medium',
      to: 'https://medium.com/@matthewkinsman',
    },
    {
      icon: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" rx="12" fill="#EE1B22"/><rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/><path d="M56 34.1905C55.8775 35.1571 55.8029 36.1317 55.6252 37.0894C54.9722 40.6027 53.5676 43.7594 50.7439 46.1705C48.3299 48.2331 45.4886 49.1319 42.2762 48.8671C40.4167 48.7137 38.9054 47.863 37.3728 46.1474C37.0551 47.3574 36.6885 48.5309 36.4444 49.7285C35.6911 53.4246 34.0452 56.706 31.6378 59.6433C31.5107 59.7985 31.2905 59.8814 31.1137 60C31.0216 59.8163 30.8706 59.6433 30.8374 59.4471C30.5012 57.209 30.329 54.9556 30.6689 52.713C30.9102 51.1204 31.3136 49.5492 31.6903 47.978C32.4068 44.9632 33.1583 41.9564 33.8758 38.9415C33.9305 38.6739 33.9115 38.3971 33.8205 38.139C33.1012 36.0952 32.9631 34.0451 33.792 32.0076C34.3713 30.5809 35.3199 29.4555 36.9234 29.0534C39.1964 28.4764 41.0476 29.8978 40.985 32.2778C40.9537 33.4584 40.6258 34.6444 40.3255 35.8018C39.9046 37.422 39.3124 39.003 38.9229 40.6286C38.3785 42.8739 40.0419 44.874 42.4226 44.9543C44.4102 45.022 45.9178 44.1268 47.1336 42.6974C48.4985 41.0923 49.239 39.2063 49.6866 37.2C50.125 35.2382 50.3736 33.2426 50.055 31.2416C49.4554 27.467 47.1474 25.1343 43.3529 24.2863C39.6873 23.4722 36.1976 23.96 33.092 26.1527C29.6613 28.5781 27.8782 33.256 28.9024 37.0315C29.1343 37.9262 29.5826 38.7548 30.2102 39.4489C30.5943 39.8689 30.6983 40.304 30.5215 40.8399C30.3539 41.3464 30.2452 41.8708 30.108 42.387C29.8851 43.2244 29.4697 43.4205 28.6528 43.0567C26.6174 42.1507 25.3538 40.5715 24.698 38.5572C23.2548 34.1245 24.0791 30.0245 26.8965 26.3167C29.4845 22.9113 33.0671 21.0343 37.3185 20.3227C40.3578 19.8126 43.3971 19.8501 46.3378 20.8506C51.1777 22.4985 54.4058 25.6435 55.6675 30.5381C55.825 31.1516 55.8913 31.7865 56 32.4107V34.1905Z" fill="white"/></svg>',
      name: 'Pinterest',
      to: 'https://www.pinterest.com.au/mskinsm/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#9B907E"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M60 39.8698C60.0862 50.9628 51.1122 59.7955 40.4063 59.9998C29.0788 60.217 20.0763 50.9792 20.0005 40.1595C19.9246 29.1614 28.8909 20.2347 39.577 20.0046C50.413 19.771 59.9414 28.5243 60 39.8698ZM40.0209 21.7606C29.9262 21.7744 21.9832 29.901 21.7651 39.5974C21.5436 49.6154 29.5771 58.1782 39.9425 58.2481C49.8613 58.3144 58.1948 50.1283 58.2483 40.2785C58.3034 30.0303 50.2087 21.8106 40.0209 21.7606Z" fill="white"/>
<path d="M38.0592 28.4628C38.0566 28.208 38.1049 27.9551 38.2011 27.7191C38.2973 27.4831 38.4396 27.2686 38.6196 27.0881C38.7995 26.9077 39.0137 26.7648 39.2494 26.668C39.4852 26.5711 39.7379 26.5222 39.9928 26.5241C40.2522 26.5175 40.5104 26.5628 40.7521 26.6572C40.9939 26.7517 41.2144 26.8934 41.4006 27.0742C41.5869 27.2549 41.7352 27.471 41.8369 27.7098C41.9387 27.9486 41.9917 28.2052 41.993 28.4648C41.9942 28.7243 41.9437 28.9815 41.8443 29.2213C41.7449 29.461 41.5987 29.6786 41.4142 29.8611C41.2297 30.0436 41.0106 30.1875 40.7698 30.2843C40.529 30.3811 40.2712 30.4289 40.0117 30.4249C39.7531 30.43 39.4962 30.3826 39.2563 30.2857C39.0165 30.1888 38.7988 30.0443 38.6164 29.8609C38.4339 29.6776 38.2905 29.4592 38.1947 29.2189C38.0989 28.9786 38.0528 28.7214 38.0592 28.4628Z" fill="white"/>
<path d="M53.4808 39.9917C53.4843 40.3778 53.3734 40.7562 53.1621 41.0793C52.9508 41.4024 52.6485 41.6557 52.2934 41.8072C51.9383 41.9587 51.5462 42.0016 51.1668 41.9305C50.7873 41.8594 50.4374 41.6776 50.1612 41.4078C49.885 41.1381 49.6948 40.7926 49.6148 40.4149C49.5347 40.0372 49.5683 39.6443 49.7113 39.2857C49.8543 38.9271 50.1003 38.6189 50.4183 38.4C50.7363 38.181 51.112 38.0612 51.498 38.0555C51.7559 38.0505 52.0121 38.0968 52.2519 38.1918C52.4917 38.2867 52.7102 38.4284 52.8947 38.6086C53.0792 38.7887 53.2261 39.0038 53.3267 39.2413C53.4273 39.4787 53.4797 39.7338 53.4808 39.9917Z" fill="white"/>
<path d="M38.0588 34.2403C38.0588 33.1196 38.9019 32.2886 40.0217 32.2955C40.2767 32.2949 40.5292 32.3448 40.7648 32.4425C41.0003 32.5401 41.2141 32.6834 41.3939 32.8642C41.5737 33.0449 41.7159 33.2595 41.8123 33.4956C41.9086 33.7316 41.9573 33.9844 41.9553 34.2394C41.9557 34.4978 41.9047 34.7538 41.8053 34.9924C41.7059 35.2309 41.5601 35.4474 41.3763 35.6291C41.1926 35.8109 40.9746 35.9543 40.7349 36.0511C40.4953 36.1478 40.2388 36.196 39.9803 36.1928C39.7254 36.1926 39.4731 36.1417 39.238 36.0432C39.003 35.9446 38.7898 35.8003 38.6111 35.6186C38.4323 35.4369 38.2914 35.2215 38.1966 34.9849C38.1018 34.7482 38.0549 34.4951 38.0588 34.2403Z" fill="white"/>
<path d="M38.0589 40.0082C38.0542 39.7534 38.1003 39.5001 38.1945 39.2633C38.2888 39.0265 38.4292 38.8107 38.6077 38.6287C38.7861 38.4467 38.999 38.3021 39.234 38.2033C39.469 38.1044 39.7212 38.0534 39.9761 38.0531C40.3641 38.0457 40.7455 38.154 41.0717 38.3642C41.3979 38.5744 41.6541 38.8769 41.8078 39.2333C41.9614 39.5896 42.0055 39.9836 41.9344 40.3651C41.8633 40.7466 41.6803 41.0982 41.4086 41.3753C41.1369 41.6524 40.7888 41.8423 40.4088 41.9208C40.0288 41.9994 39.634 41.9631 39.2747 41.8164C38.9155 41.6698 38.608 41.4195 38.3914 41.0975C38.1749 40.7755 38.0592 40.3963 38.0589 40.0082Z" fill="white"/>
<path d="M39.9885 43.8186C40.2474 43.8114 40.5051 43.8559 40.7466 43.9495C40.9881 44.0431 41.2085 44.1839 41.3949 44.3636C41.5814 44.5434 41.7301 44.7585 41.8324 44.9965C41.9347 45.2344 41.9886 45.4903 41.9908 45.7493C41.9931 46.0083 41.9436 46.2651 41.8454 46.5048C41.7473 46.7444 41.6023 46.9621 41.419 47.1451C41.2356 47.328 41.0177 47.4726 40.7778 47.5703C40.538 47.6681 40.2811 47.717 40.0221 47.7143C39.7673 47.7209 39.5138 47.6765 39.2764 47.5837C39.0391 47.4908 38.8227 47.3514 38.6401 47.1736C38.4575 46.9958 38.3123 46.7832 38.2131 46.5484C38.1139 46.3137 38.0628 46.0614 38.0626 45.8065C38.0506 44.6884 38.8816 43.8272 39.9885 43.8186Z" fill="white"/>
<path d="M30.432 40.0228C30.4293 40.4105 30.3114 40.7886 30.0933 41.1091C29.8752 41.4296 29.5666 41.6779 29.207 41.8226C28.8473 41.9672 28.4527 42.0017 28.0734 41.9215C27.6941 41.8413 27.3473 41.6501 27.0769 41.3722C26.8066 41.0943 26.625 40.7423 26.5553 40.361C26.4856 39.9796 26.5309 39.5861 26.6854 39.2306C26.8399 38.875 27.0966 38.5734 27.423 38.3642C27.7494 38.155 28.1306 38.0476 28.5182 38.0556C29.0322 38.0647 29.5218 38.2765 29.8803 38.645C30.2387 39.0135 30.437 39.5087 30.432 40.0228Z" fill="white"/>
<path d="M36.1836 40.0003C36.1833 40.386 36.0684 40.7629 35.8537 41.0833C35.639 41.4037 35.334 41.6531 34.9773 41.8C34.6207 41.9469 34.2285 41.9846 33.8504 41.9084C33.4723 41.8322 33.1253 41.6455 32.8535 41.3719C32.5816 41.0983 32.397 40.7502 32.3232 40.3716C32.2493 39.9931 32.2895 39.6011 32.4386 39.2454C32.5877 38.8897 32.839 38.5863 33.1607 38.3735C33.4824 38.1607 33.86 38.0483 34.2457 38.0503C34.7612 38.0521 35.2549 38.2586 35.6183 38.6242C35.9816 38.9898 36.185 39.4848 36.1836 40.0003Z" fill="white"/>
<path d="M43.8145 40.0002C43.8259 39.4884 44.0374 39.0015 44.4036 38.6438C44.7698 38.2862 45.2616 38.0862 45.7735 38.0869C46.2854 38.0876 46.7766 38.2888 47.1419 38.6475C47.5072 39.0061 47.7173 39.4936 47.7274 40.0054C47.7257 40.2639 47.673 40.5196 47.5724 40.7577C47.4718 40.9958 47.3253 41.2118 47.1411 41.3933C46.9569 41.5747 46.7388 41.718 46.4992 41.8151C46.2596 41.9121 46.0032 41.961 45.7447 41.9588C45.4893 41.9571 45.2367 41.9051 45.0015 41.8057C44.7662 41.7063 44.5528 41.5616 44.3736 41.3796C44.1943 41.1977 44.0526 40.9823 43.9567 40.7456C43.8608 40.5089 43.8125 40.2556 43.8145 40.0002Z" fill="white"/>
<path d="M38.0594 51.511C38.0571 51.2561 38.1057 51.0034 38.2025 50.7676C38.2993 50.5318 38.4422 50.3177 38.623 50.138C38.8037 49.9582 39.0185 49.8164 39.2548 49.7209C39.4911 49.6254 39.7442 49.5781 39.999 49.5817C40.2551 49.5817 40.5087 49.6322 40.7453 49.7302C40.9818 49.8282 41.1968 49.9718 41.3779 50.1529C41.5589 50.3339 41.7026 50.5489 41.8006 50.7855C41.8986 51.0221 41.949 51.2756 41.949 51.5317C41.949 51.7878 41.8986 52.0414 41.8006 52.2779C41.7026 52.5145 41.5589 52.7295 41.3779 52.9106C41.1968 53.0916 40.9818 53.2353 40.7453 53.3333C40.5087 53.4313 40.2551 53.4817 39.999 53.4817C39.7407 53.4851 39.4845 53.4361 39.2456 53.3379C39.0067 53.2397 38.7901 53.0941 38.6089 52.91C38.4277 52.7259 38.2856 52.5071 38.1912 52.2667C38.0968 52.0263 38.0519 51.7692 38.0594 51.511Z" fill="white"/>
</svg>
`,
      name: 'The Dots',
      to: 'https://the-dots.com/users/matthew-kinsman-119260#team',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#1DA1F3"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M31.7863 48.8435C28.0057 48.4501 25.5169 46.5656 24.0876 43.0354H27.3811L27.4627 42.8418C23.604 41.5159 21.4444 38.9075 21.1765 34.7601L24.6013 35.7193L24.7255 35.5052C23.0575 34.2193 21.9218 32.5861 21.4657 30.5417C21.0061 28.4822 21.2998 26.5159 22.3796 24.5577C26.8851 29.8108 32.5262 32.737 39.2587 33.213C39.3936 31.7814 39.3288 30.3791 39.6801 29.0896C41.2941 23.1554 48.5349 21.0284 53.1309 25.0994C53.5958 25.5115 53.9942 25.642 54.5434 25.4342C55.7234 24.9902 56.907 24.5461 58.0853 24.095C58.3337 23.9991 58.5671 23.8658 58.9486 23.6811C58.3071 25.6092 57.1635 26.9422 55.7332 28.1704C56.4164 28.0239 57.1076 27.904 57.7819 27.7264C58.4784 27.5381 59.1589 27.2886 60 27.0159C59.0801 28.4411 57.9194 29.6952 56.5699 30.7219C56.12 31.0665 55.9639 31.42 55.9692 31.9928C56.0579 42.5762 48.9244 53.6748 36.3538 55.673C30.9682 56.5291 25.8177 55.7156 20.9937 53.0975C20.6377 52.9051 20.3044 52.6733 20 52.4066C24.2996 52.5735 28.2142 51.5602 31.7863 48.8435Z" fill="white"/>
</svg>
`,
      name: 'Twitter',
      to: 'https://twitter.com/MatthewKinsman',
    },
  ],
};
