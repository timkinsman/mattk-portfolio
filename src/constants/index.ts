// ’

type NavigationItem = {
  name: string;
  to: string;
};

export const navigation: NavigationItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Case studies', to: '/case-studies' },
  { name: 'About me', to: '/about-me' },
  { name: 'What I do', to: '/what-i-do' },
  { name: 'Other work', to: '/other-work' },
  { name: 'Contact', to: '/contact' },
];

type SocialItem = {
  name: string;
  to: string;
  icon?: string;
};

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

// todo: see if i can get Link in there for about-me redirect
export const landingHero =
  'Hello, my name is <a href="/about-me">Matthew Kinsman</a>, I’m a senior product designer currently living in Melbourne and working at <a href="https://www.mindsethealth.com/" target="_blank">Mindset Health</a>.';

export const landingIds = ['hero', 'panel-1', 'panel-2', 'panel-3', 'panel-4', 'content'];

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
    'I’m Matt, a highly creative multidisciplinary designer who is driven to create products and services that are desirable for people, feasible for development and viable for business. I focus on championing a collaborative approach to validate solutions by employing Boxerse research methods and continuous improvement.\n\nI consider myself to be a rational thinker, attentive listener, measured speaker and team player.',
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

export const selectedClients = {
  title: 'Selected clients',
  items: [
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#F7B500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
    '<svg width="70" height="70" fill="#590000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/></svg>',
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
    { title: 'A/B Testing', to: '/what-i-do?' },
    { title: 'Artefact Review', to: '' },
    { title: 'Competitor Analysis', to: '' },
    { title: 'Concept Usability Testing', to: '' },
    { title: 'Contextual Inquiry', to: '' },
    { title: 'Data Analytics Review', to: '' },
    { title: 'Accessibility Testing', to: '' },
    { title: 'Diary Studies', to: '' },
    { title: 'Heuristics Evaluation', to: '' },
    { title: 'IA: Card Sorting', to: '' },
    { title: 'IA: Tree Testing', to: '' },
    { title: 'Journey Mapping', to: '' },
    { title: 'Online Surveys', to: '' },
    { title: 'Persona Development', to: '' },
    { title: 'Requirements Gathering', to: '' },
    { title: 'Roadmapping', to: '' },
    { title: 'Stakeholder Interviews', to: '' },
    { title: 'User Interviews', to: '' },
  ],
};

export const tools = {
  title: 'Tools',
  items: [
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#00005B"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M29.7115 26.0074C30.7462 26.0074 31.7785 26.0173 32.8156 26.0021C33.17 25.9969 33.3696 26.0966 33.4989 26.4571C36.6586 35.2546 39.8253 44.05 42.9992 52.8432C43.2082 53.423 43.1563 53.4901 42.5296 53.4906C40.876 53.4906 39.2188 53.4784 37.5634 53.5C37.1234 53.5058 36.9196 53.3431 36.7844 52.9401C36.1607 51.0842 35.4987 49.2406 34.8786 47.3842C34.7539 47.0103 34.5762 46.889 34.184 46.8907C31.2181 46.9059 28.2521 46.9059 25.2862 46.8907C24.9123 46.8907 24.744 47.0074 24.6318 47.3637C24.053 49.198 23.4341 51.0201 22.86 52.8549C22.7195 53.304 22.4945 53.4866 22.0149 53.479C20.601 53.4568 19.1866 53.472 17.7727 53.4714C16.9146 53.4714 16.8791 53.4265 17.1561 52.6397C18.7972 47.9831 20.4394 43.3268 22.0828 38.6706C23.2215 35.443 24.3861 32.2235 25.4864 28.9836C25.751 28.2056 25.8626 27.3675 25.9636 26.5475C26.0144 26.1304 26.1408 25.9916 26.5542 26.0004C27.6072 26.022 28.6596 26.0074 29.7115 26.0074ZM29.6932 30.8605L26.3912 41.6819H33.0879C31.9469 38.0442 30.8206 34.4567 29.6932 30.8605Z" fill="#9999FF"/>
<path d="M50.4293 44.531C50.7016 46.2906 51.4511 47.6618 53.1307 48.4048C54.792 49.1397 56.5337 49.2318 58.299 48.9612C59.4801 48.7798 60.653 48.5139 61.8655 48.2794C61.8525 48.2602 61.9039 48.3016 61.9045 48.343C61.9128 49.7048 61.9358 51.0673 61.8974 52.4256C61.8921 52.6187 61.6192 52.8881 61.4072 52.9791C59.7364 53.6924 57.9564 53.9065 56.1604 53.98C54.5015 54.0476 52.8484 53.9403 51.2491 53.4551C48.6139 52.6531 46.6425 51.0224 45.5629 48.5308C43.8714 44.6231 44.0025 40.7078 46.1298 36.9891C47.8585 33.9651 50.5504 32.3565 54.1193 32.2649C55.6342 32.227 57.1136 32.3722 58.5269 32.9456C61.6441 34.2106 63.1229 36.6993 63.5771 39.8277C63.7702 41.1581 63.6024 42.5398 63.5948 43.8981C63.5948 44.3356 63.3249 44.4849 62.9197 44.486C61.7846 44.4895 60.6495 44.5053 59.5144 44.5047C56.5835 44.5047 53.6524 44.5014 50.7211 44.4948C50.6532 44.496 50.5858 44.5111 50.4293 44.531ZM50.5102 40.6565C50.6073 40.6789 50.7061 40.6935 50.8055 40.7003C52.9423 40.6933 55.0791 40.7003 57.2158 40.6659C58.2251 40.6507 58.3432 40.4582 58.1035 39.4725C58.0952 39.4393 58.0816 39.4078 58.0722 39.3751C57.5206 37.3921 55.4877 36.3219 53.3699 36.8976C51.7115 37.3467 50.3472 39.1296 50.5091 40.6565H50.5102Z" fill="#9999FF"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="46.6667" height="28" fill="white" transform="translate(17 26)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Adobe After Effects',
      to: 'https://www.adobe.com/products/aftereffects.html',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1)">
<path d="M33.7171 27.1272C34.7933 27.1272 35.8688 27.1369 36.945 27.1217C37.2367 27.1175 37.3743 27.215 37.4724 27.4912C39.8808 34.278 42.2952 41.0623 44.7155 47.8442C45.4938 50.0297 46.2721 52.215 47.0505 54.4001C47.2332 54.9126 47.1723 54.9956 46.612 54.9956H41.5881C41.1064 54.9956 41.0364 54.9465 40.8829 54.5019C40.2209 52.5859 39.5546 50.6712 38.9024 48.7522C38.8104 48.482 38.6843 48.3839 38.3871 48.3851C35.3225 48.3972 32.2571 48.3972 29.1909 48.3851C28.862 48.3851 28.7177 48.4772 28.6172 48.7946C28.0252 50.6839 27.407 52.5617 26.7956 54.4395C26.6305 54.9471 26.5562 54.9992 26.0093 54.9992H21.5342C20.9952 54.9992 20.9039 54.8744 21.0842 54.3577C22.3022 50.8622 23.5219 47.3672 24.7432 43.8729C26.0741 40.0636 27.4046 36.2545 28.7347 32.4456C29.077 31.4649 29.446 30.4902 29.7244 29.4914C29.9004 28.859 29.9461 28.1872 30.0197 27.53C30.0599 27.1702 30.066 27.1284 30.429 27.1278C31.5253 27.1266 32.6213 27.1264 33.7171 27.1272ZM33.7037 31.9531L33.627 31.9477C33.5527 32.2554 33.4936 32.5667 33.4017 32.869C32.4089 36.1461 31.4124 39.4221 30.412 42.6972C30.2975 43.0727 30.3036 43.0994 30.6878 43.0994C32.7179 43.0994 34.746 43.0994 36.772 43.0994C36.902 43.0902 37.0313 43.072 37.1587 43.0449C35.9985 39.3183 34.8511 35.6354 33.7037 31.9531Z" fill="#FF9A00"/>
<path d="M55.9183 44.4572C55.9183 47.7884 55.9183 51.12 55.9183 54.452C55.9183 54.9868 55.9024 55.0026 55.3756 55.0026C53.7727 55.0026 52.1689 55.0026 50.5643 55.0026C50.1417 55.0026 50.0625 54.9257 50.0625 54.5119C50.0625 47.7902 50.0625 41.0683 50.0625 34.3462C50.0625 33.9476 50.1106 33.8979 50.5235 33.8973C52.1675 33.8949 53.8118 33.8949 55.4566 33.8973C55.8744 33.8973 55.9183 33.947 55.9183 34.3777C55.9187 37.7371 55.9187 41.097 55.9183 44.4572Z" fill="#FF9A00"/>
<path d="M56.2873 28.2561C56.389 29.8535 55.1332 31.5926 53.0314 31.5611C51.0673 31.532 49.7567 30.1945 49.7598 28.1647C49.7598 26.3608 51.1946 25.0269 53.0875 25.0009C55.3232 24.97 56.3902 26.76 56.2873 28.2561Z" fill="#FF9A00"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="35.2941" height="30" fill="white" transform="translate(21 25)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Adobe Illustrator',
      to: 'https://www.adobe.com/products/illustrator.html',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#001E36"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M21 39.7718V26.6121C21 26.1719 21.0186 26.1589 21.4489 26.1506C24.0515 26.1039 26.6536 26.0432 29.2562 26.0027C30.7866 25.9788 32.3041 26.1122 33.7833 26.5327C35.7911 27.1037 37.5294 28.1009 38.8059 29.8031C39.8243 31.1617 40.3379 32.7102 40.4822 34.3906C40.6198 35.9874 40.4713 37.5572 39.8801 39.0559C38.9042 41.5264 37.0753 43.1149 34.615 43.9953C32.8239 44.6364 30.9562 44.8077 29.0684 44.7973C28.3443 44.7937 27.6203 44.7755 26.8962 44.7454C26.6464 44.7356 26.5745 44.8171 26.575 45.0668C26.5833 47.6971 26.5802 50.327 26.5802 52.9574C26.5802 53.3856 26.5124 53.4531 26.0873 53.4531H21.4598C21.0672 53.4531 21.0005 53.3851 21.0005 52.9813C21.0002 48.5788 21 44.1756 21 39.7718ZM26.6308 39.9275C27.4341 39.9275 28.2083 39.9228 28.9826 39.9275C30.0706 39.9427 31.1525 39.7617 32.1769 39.3933C33.352 38.9656 34.2772 38.2424 34.692 37.0023C34.9144 36.3368 34.9636 35.6417 34.8989 34.9502C34.7613 33.384 34.0078 32.2295 32.5337 31.6123C31.6798 31.2574 30.7638 31.0772 29.8396 31.0822C28.9431 31.0802 28.0466 31.0831 27.1501 31.0911C26.9805 31.0911 26.8108 31.1165 26.6329 31.131L26.6308 39.9275Z" fill="#31A8FF"/>
<path d="M43.3259 50.1158C43.3259 49.3979 43.3259 48.6799 43.3259 47.9615C43.3259 47.5742 43.4216 47.5171 43.7495 47.7019C45.6218 48.7599 47.6456 49.2473 49.7796 49.2992C50.4949 49.3164 51.2097 49.2696 51.8909 49.0059C52.3424 48.8315 52.6434 48.5232 52.737 48.0399C52.8249 47.5836 52.6408 47.1989 52.2948 46.943C51.8754 46.628 51.4248 46.3573 50.9501 46.1352C49.9084 45.6607 48.8295 45.2709 47.7951 44.7814C46.6945 44.2622 45.6683 43.6185 44.8211 42.7075C42.5827 40.3014 43.043 36.3358 45.4583 34.3061C46.6438 33.3104 48.0211 32.7565 49.537 32.5634C51.5443 32.3075 53.5444 32.4165 55.5263 32.8141C55.9623 32.9018 56.3864 33.0586 56.809 33.2045C57.1845 33.3343 57.2465 33.4334 57.2481 33.8368C57.2522 34.9269 57.2481 36.0171 57.2481 37.1072C57.2481 37.358 57.2481 37.6092 57.2481 37.8599C57.2481 38.2841 57.0231 38.4149 56.6228 38.241C56.1651 38.0427 55.7141 37.82 55.2403 37.67C53.8025 37.2049 52.2939 36.9992 50.7846 37.0626C50.3805 37.0842 49.9808 37.1571 49.595 37.2796C48.6868 37.563 48.4473 38.6033 49.1129 39.288C49.6074 39.7973 50.2508 40.0626 50.8802 40.3387C51.7941 40.74 52.736 41.08 53.6437 41.4948C54.6398 41.9496 55.6148 42.4562 56.4511 43.183C57.9163 44.4564 58.4837 46.0968 58.2913 47.9926C57.9908 50.9573 56.2039 52.6621 53.4813 53.5067C51.8443 54.0139 50.1561 54.0601 48.4644 53.9526C47.1641 53.8701 45.8783 53.6707 44.6396 53.2497C44.3226 53.1417 44.0143 53.0057 43.7035 52.8796C43.4449 52.7758 43.3197 52.5915 43.3243 52.2982C43.3331 51.5693 43.3259 50.8426 43.3259 50.1158Z" fill="#31A8FF"/>
</svg>
`,
      name: 'Adobe Photoshop',
      to: 'https://www.adobe.com/products/photoshop.html',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M60.0006 41.6185V48.907C60.0006 49.5191 59.7919 49.8217 59.2229 50.0427C56.0729 51.2659 52.9227 52.4891 49.7721 53.7125C47.4641 54.6112 45.1561 55.5105 42.8478 56.4104C42.2524 56.642 41.7697 56.5473 41.5046 56.0981C41.3909 55.8955 41.3303 55.6673 41.3285 55.4349C41.317 52.5578 41.321 49.6807 41.321 46.8032C41.321 44.8068 41.321 42.8104 41.321 40.8139C41.321 40.2084 41.5214 39.9111 42.0837 39.6927C47.5825 37.553 53.0812 35.4138 58.5799 33.2753C59.3233 32.9864 59.9997 33.4462 60.0002 34.2442C60.0022 36.701 60.0024 39.1591 60.0006 41.6185Z" fill="#37CCF4"/>
<path d="M39.9772 37.8081C39.1947 37.8178 38.4557 37.6293 37.7335 37.3417C32.8668 35.404 27.9988 33.4698 23.1292 31.5391C22.6932 31.3665 22.3805 31.1071 22.3431 30.6108C22.3096 30.1563 22.5342 29.7969 22.9799 29.6084C23.8708 29.2319 24.7661 28.8664 25.6597 28.496C29.7113 26.8146 33.7639 25.1333 37.8176 23.4522C39.2396 22.863 40.6744 22.8436 42.0982 23.4293C45.5118 24.8344 48.9222 26.2474 52.3293 27.6681L56.8165 29.5283C56.898 29.5622 56.9794 29.5952 57.0583 29.634C57.444 29.8251 57.6435 30.1338 57.6308 30.5676C57.618 31.0014 57.4026 31.3053 57.0054 31.4669C56.2255 31.7848 55.4411 32.0922 54.6581 32.4036C50.4794 34.0656 46.3001 35.7277 42.1202 37.3897C41.4319 37.6649 40.7206 37.8191 39.9772 37.8081Z" fill="#FED200"/>
<path d="M32.4277 43.8353C31.723 44.1788 31.0215 44.5254 30.3138 44.8649C27.4016 46.2668 24.4892 47.6671 21.5764 49.0658C20.9304 49.3741 20.2086 49.0803 20.0351 48.4351C20.0115 48.3355 20.0008 48.2332 20.0034 48.1308C20.0013 43.5235 20.0003 38.9161 20.0003 34.3087C19.9968 34.1657 20.0262 34.0237 20.0864 33.8939C20.1466 33.7641 20.2359 33.6498 20.3473 33.5601C20.6071 33.7943 20.8612 34.0352 21.1277 34.2616C21.8398 34.8671 22.5576 35.4661 23.2728 36.0672C23.8092 36.5188 24.3455 36.9704 24.8816 37.4223C25.4787 37.9267 26.0752 38.4317 26.6709 38.9372C27.1268 39.3251 27.5835 39.7132 28.0409 40.1016C28.6428 40.6116 29.2447 41.1211 29.8465 41.6302C30.3873 42.0882 30.9277 42.5465 31.4676 43.0051C31.7909 43.2795 32.1084 43.5583 32.4277 43.8353Z" fill="#F24A5C"/>
<path d="M32.43 43.8354C32.1107 43.5583 31.7932 43.2796 31.4712 43.0052C30.9322 42.5454 30.3918 42.0866 29.8502 41.6286C29.248 41.1192 28.6461 40.6096 28.0446 40.1C27.5863 39.7142 27.1291 39.3271 26.6732 38.9386C26.0775 38.4331 25.481 37.9281 24.8839 37.4237C24.3481 36.971 23.8118 36.5193 23.2751 36.0686C22.5599 35.4666 21.8421 34.8677 21.13 34.263C20.8635 34.0367 20.6094 33.7958 20.3496 33.5615C20.6988 33.2228 21.0983 33.1651 21.5444 33.3413L36.0689 39.1104C36.4653 39.2676 36.859 39.4244 37.2553 39.5772C37.686 39.7432 37.9494 40.0449 37.971 40.5122C37.9926 40.9794 37.7398 41.2934 37.3249 41.4929C35.7466 42.2527 34.1692 43.014 32.5929 43.7768C32.541 43.7988 32.4846 43.8151 32.43 43.8354Z" fill="#C03847"/>
</svg>
`,
      name: 'Airtable',
      to: 'https://airtable.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#FF5065"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M39.8 60C39.8 57.9452 39.7442 56.2783 39.8203 54.6242C39.8634 53.6739 39.5311 53.3528 38.623 53.2835C36.5684 53.1294 34.4961 53.0267 32.477 52.6311C27.7793 51.7424 24.776 48.9454 23.8045 44.1322C22.7413 38.9324 22.7318 33.5681 23.7766 28.3645C24.776 23.315 27.9441 20.4922 32.8498 19.6524C38.0092 18.7688 43.1965 18.7072 48.3228 19.9375C52.2875 20.8929 54.961 23.4357 55.935 27.5066C57.2642 33.0647 57.4012 38.7282 56.0517 44.2554C54.4892 50.6534 50.2481 55.0429 44.5484 58.0043C43.1153 58.7517 41.5654 59.268 39.8 60ZM42.33 36.0989C40.7031 35.8054 39.0258 35.8163 37.4041 36.1375C36.4533 36.3259 35.5132 36.536 34.6026 36.8429C33.0807 37.3566 32.652 38.5715 33.0807 40.1434C33.8594 42.9199 36.6318 44.9849 39.6605 45.0439C42.9174 45.1056 45.8167 43.2255 46.7375 40.4541C47.3361 38.6562 46.877 37.3463 45.0938 36.7607C44.2053 36.4622 43.2798 36.2703 42.33 36.0989ZM36.8906 29.9826C36.8855 30.3991 36.9621 30.8124 37.1158 31.1987C37.2694 31.585 37.4972 31.9366 37.7859 32.2333C38.0746 32.5299 38.4185 32.7656 38.7978 32.9269C39.177 33.0881 39.584 33.1716 39.9953 33.1726C40.413 33.1684 40.8258 33.0809 41.2102 32.9152C41.5945 32.7494 41.9428 32.5086 42.2352 32.2066C42.5276 31.9045 42.7585 31.5471 42.9145 31.1547C43.0705 30.7623 43.1486 30.3427 43.1445 29.9197C43.1403 29.4967 43.0539 29.0787 42.8902 28.6896C42.7265 28.3004 42.4887 27.9477 42.1904 27.6516C41.8921 27.3555 41.5391 27.1218 41.1516 26.9639C40.7641 26.8059 40.3496 26.7268 39.9319 26.731C39.5212 26.742 39.1168 26.8348 38.7416 27.0042C38.3664 27.1736 38.0279 27.4163 37.7454 27.7183C37.463 28.0203 37.2421 28.3757 37.0954 28.7643C36.9487 29.1528 36.8791 29.5668 36.8906 29.9826Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="34" height="41" fill="white" transform="translate(23 19)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Askable',
      to: 'https://www.askable.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#01333E"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M59.8828 25.1494C57.6487 27.826 55.4146 30.5027 53.1736 33.1725C51.5601 35.095 49.9397 37.004 48.3262 38.9266C46.7954 40.754 45.2715 42.5883 43.7476 44.4225C43.0374 45.2785 42.3203 46.1277 41.6101 46.9836C41.5894 46.9836 41.5687 46.9904 41.548 46.9904C41.5411 46.97 41.5342 46.9497 41.5273 46.9293C41.5342 46.7934 41.548 46.6575 41.548 46.5217C41.548 39.504 41.548 32.4931 41.548 25.4755C41.548 25.3396 41.5549 25.2037 41.5618 25.0679C47.5608 25.0679 53.5666 25.0679 59.5656 25.0679C59.669 25.0747 59.7794 25.1222 59.8828 25.1494Z" fill="white"/>
<path d="M20.1172 54.8639C21.0963 53.6887 22.0755 52.5134 23.0546 51.3381C24.7922 49.2593 26.5368 47.1805 28.2813 45.1017C30.3499 42.6289 32.4254 40.1629 34.494 37.69C35.7697 36.1683 37.0453 34.6465 38.3141 33.1248C38.3485 33.084 38.3968 33.0501 38.4382 33.0161C38.4382 33.118 38.4451 33.2199 38.4451 33.3218C38.4451 40.4346 38.4451 47.5406 38.4451 54.6533C38.4451 54.7417 38.4382 54.8368 38.4313 54.9251C32.4185 54.9251 26.4127 54.9319 20.3999 54.9251C20.3103 54.9319 20.2137 54.8843 20.1172 54.8639Z" fill="white"/>
<path d="M38.4382 25.0679C38.4934 26.0801 38.2865 27.0584 37.9555 28.0027C37.1281 30.3464 35.5835 32.0787 33.3287 33.1997C32.3082 33.7024 31.2325 33.9877 30.0948 34.11C25.8886 34.5652 21.9376 31.9225 20.5447 28.1317C20.2344 27.2893 20.0758 26.4266 20 25.5434C20.0345 25.394 20.0621 25.2445 20.1034 25.0679C26.2127 25.0679 32.3289 25.0679 38.4382 25.0679Z" fill="white"/>
<path d="M41.5532 54.9322C41.5325 53.0776 42.1738 51.4335 43.2357 49.939C44.6975 47.8873 46.711 46.5966 49.2209 46.2026C53.3512 45.5572 57.316 47.5001 59.1502 51.3724C59.626 52.3778 59.9087 53.424 59.9501 54.5382C59.9569 54.6672 59.9845 54.7963 60.0052 54.9254C53.8477 54.9322 47.7039 54.9322 41.5532 54.9322Z" fill="white"/>
<path d="M41.5488 46.9902C41.5695 46.9902 41.5902 46.9834 41.6109 46.9834C41.604 47.0038 41.5902 47.0174 41.5833 47.0377C41.5764 47.0174 41.5626 47.0038 41.5488 46.9902Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="30" fill="white" transform="translate(20 25)"/>
</clipPath>
</defs>
</svg>

`,
      name: 'Zendesk',
      to: 'https://www.zendesk.com/au/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#222222"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M23 37.6529C23 34.5375 23 31.4081 23 28.2926C23.0142 24.1434 26.1955 21 30.4135 21C36.8045 21 43.1955 21 49.5865 21C53.8045 21 57 24.1434 57 28.2787C57 34.5654 57 40.8522 57 47.139C57 51.2882 53.8045 54.4316 49.6007 54.4316C48.2799 54.4316 46.9449 54.3897 45.6241 54.4596C45.1838 54.4875 44.6583 54.6971 44.3317 54.9904C43.0393 56.1779 41.7895 57.4353 40.5539 58.6787C40.142 59.0838 39.858 59.0978 39.4461 58.6787C38.2673 57.4772 37.0175 56.3316 35.853 55.1022C35.3559 54.5713 34.8162 54.3897 34.1061 54.4037C32.5297 54.4176 30.9248 54.4735 29.3626 54.3199C25.7694 53.9566 23.0426 50.8971 23.0142 47.3346C23 44.1213 23 40.8801 23 37.6529ZM32.7569 37.7228C32.7569 39.8882 32.7711 42.0537 32.7427 44.2191C32.7427 44.7081 32.8989 44.8618 33.396 44.8618C37.7987 44.8478 42.2013 44.8478 46.5898 44.8618C47.0869 44.8618 47.2431 44.7081 47.2431 44.2191C47.2289 39.8882 47.2289 35.5574 47.2431 31.2404C47.2431 30.7515 47.0869 30.5978 46.5898 30.5978C42.1871 30.6118 37.7845 30.6118 33.396 30.5978C32.8989 30.5978 32.7427 30.7515 32.7427 31.2404C32.7711 33.3919 32.7569 35.5574 32.7569 37.7228Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="34" height="38" fill="white" transform="translate(23 21)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'dScout',
      to: 'https://dscout.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="black"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M33.1452 20H39.9922V33.0539C39.9922 33.1446 39.9913 33.2352 39.991 33.3259C39.9676 33.3259 39.9442 33.3278 39.9209 33.3278H33.3763C33.34 33.3278 33.3036 33.3291 33.2671 33.3299C33.1589 33.3235 33.0496 33.325 32.9427 33.3094C32.6506 33.267 32.355 33.2368 32.0693 33.1654C31.7352 33.0824 31.4002 32.9858 31.0826 32.8523C29.5278 32.1988 28.3801 31.0959 27.6395 29.5437C27.304 28.8385 27.0979 28.0761 27.0312 27.2944C27.0234 27.2093 27.0104 27.1248 27 27.04V26.912C27.0075 26.8909 27.0128 26.869 27.0156 26.8467C27.0169 26.7302 27.0169 26.6138 27.0156 26.4974C27.0128 26.4751 27.0076 26.4531 27 26.432V26.304C27.0106 26.2109 27.0195 26.1176 27.0323 26.025C27.0682 25.764 27.0869 25.4987 27.1475 25.2438C27.2235 24.9156 27.3205 24.5929 27.4378 24.2778C28.0461 22.6757 29.1082 21.4888 30.596 20.703C31.0476 20.4631 31.5283 20.2859 32.0255 20.176C32.2694 20.1224 32.5169 20.0851 32.7635 20.0451C32.8899 20.0251 33.0179 20.0149 33.1452 20Z" fill="#F14E1E"/>
<path d="M40.0078 20H46.8548C46.871 20.0064 46.8878 20.0112 46.9049 20.0141C47.3059 20.0381 47.7038 20.1012 48.0932 20.2024C49.1636 20.4817 50.104 21.0067 50.9144 21.7776C51.6261 22.4496 52.1806 23.2778 52.5365 24.2005C52.7993 24.8707 52.951 25.5814 52.9852 26.303V27.041C52.9797 27.0909 52.9749 27.1406 52.9696 27.1904C52.937 27.4566 52.9228 27.7272 52.8682 27.9885C52.4437 29.9917 51.361 31.4995 49.6203 32.512C48.7625 33.0098 47.8315 33.264 46.8505 33.3304L46.1419 33.3312L45.9346 33.3323C45.9009 33.3323 45.8672 33.3304 45.8336 33.3304H40.1095C40.0758 33.3304 40.042 33.3293 40.0083 33.3286C40.008 28.8857 40.0078 24.4428 40.0078 20Z" fill="#FE7262"/>
<path d="M39.9947 46.672C39.9968 46.704 40.0008 46.736 40.0008 46.767C40.0008 48.9324 40.0003 51.0973 39.9993 53.2619C40.0003 53.527 39.9868 53.7919 39.959 54.0555C39.7718 55.7356 39.0682 57.1453 37.848 58.2846C36.9496 59.1232 35.894 59.6526 34.7007 59.8846C34.4355 59.936 34.1638 59.9525 33.8953 59.9856C33.8788 59.9891 33.8627 59.9942 33.8471 60.0006H33.192C33.1702 59.9957 33.1486 59.9888 33.1266 59.986C32.8406 59.9526 32.5511 59.9381 32.2688 59.8822C31.8658 59.8049 31.4716 59.6851 31.0925 59.5249C29.3717 58.7889 28.1522 57.5395 27.4517 55.7657C27.1926 55.1119 27.0451 54.4172 27.0156 53.712V52.944C27.0166 52.9094 27.0156 52.8747 27.0189 52.8401C27.0782 52.0693 27.2536 51.3277 27.5648 50.6226C28.1387 49.3212 29.0254 48.3066 30.2252 47.5787C31.1686 47.0067 32.1936 46.7158 33.2867 46.6706C33.3023 46.6706 33.3179 46.6728 33.3335 46.6728H39.8997C39.9256 46.6728 39.9515 46.6709 39.9777 46.6699L39.9947 46.672Z" fill="#0ACE83"/>
<path d="M52.9996 40.3362C52.9903 40.4143 52.9784 40.4922 52.9719 40.5705C52.8627 41.8586 52.4304 43.0213 51.6617 44.0442C50.6582 45.3785 49.3445 46.2119 47.733 46.5445C47.513 46.5922 47.2899 46.6232 47.0655 46.6375C46.7111 46.6562 46.3538 46.677 46.0012 46.6503C45.3953 46.6059 44.7992 46.4703 44.2318 46.2479C42.699 45.6455 41.541 44.6043 40.7579 43.1244C40.4067 42.4609 40.1851 41.7508 40.0729 41.005C40.0505 40.8562 40.0392 40.7057 40.0221 40.5561C40.0189 40.5414 40.0141 40.5271 40.0079 40.5135C40.0072 40.4334 40.0065 40.3534 40.0059 40.2735C40.0059 40.0914 40.0059 39.9094 40.0059 39.7274C40.0066 39.6474 40.0073 39.5674 40.008 39.4874C40.0141 39.4737 40.0189 39.4595 40.0224 39.4449C40.0662 39.1477 40.0896 38.8457 40.1559 38.554C40.5804 36.6876 41.5985 35.2566 43.1931 34.2614C43.9155 33.8105 44.7024 33.5337 45.5387 33.4063C45.6923 33.383 45.8469 33.3666 46.0012 33.3471L46.1365 33.3438H46.8545C46.9003 33.3495 46.9462 33.3562 46.9922 33.3609C47.1469 33.3769 47.3029 33.3834 47.4563 33.4071C48.5859 33.5818 49.6034 34.027 50.5018 34.7521C51.481 35.5424 52.1843 36.5383 52.6119 37.7397C52.7416 38.1017 52.8379 38.4752 52.8997 38.8556C52.9329 39.0623 52.9449 39.2727 52.9684 39.4813C52.9753 39.5429 52.9886 39.6037 52.9996 39.665V40.3362Z" fill="#1ABBFD"/>
<path d="M40.009 20C40.009 24.4429 40.009 28.8855 40.009 33.328C40.0065 33.3305 40.0034 33.3325 40 33.3336L39.9922 33.3254C39.9922 33.2347 39.9936 33.1442 39.9936 33.0534V20H40.009Z" fill="#FA8B77"/>
<path d="M27.0156 53.7119H27V52.9438H27.0156V53.7119Z" fill="#5EDEAD"/>
<path d="M52.9863 26.3032C52.9912 26.3055 52.9968 26.3058 53.0019 26.3042V27.0402L52.9944 27.0394L52.9871 27.0411L52.9863 26.3032Z" fill="#FEA49A"/>
<path d="M27 39.6318C27.0052 39.6331 27.0106 39.6328 27.0156 39.6309V40.3688L27.0083 40.3672L27 40.3679V39.6318Z" fill="#C293FE"/>
<path d="M27 26.4321C27.0076 26.4533 27.0128 26.4752 27.0156 26.4976C27.0168 26.6139 27.0168 26.7304 27.0156 26.8469C27.0128 26.8691 27.0075 26.891 27 26.9121V26.4321Z" fill="#F47B58"/>
<path d="M27.0156 40.369V39.6311C27.0478 38.9045 27.2028 38.2053 27.4647 37.5306C27.8102 36.6325 28.3451 35.8239 29.0309 35.1626C29.9085 34.312 30.9371 33.7427 32.1227 33.488C32.4104 33.4263 32.7055 33.3997 32.9976 33.36C33.087 33.348 33.1779 33.3469 33.2681 33.3408C33.2993 33.3408 33.3305 33.3434 33.3617 33.3434H39.9952C39.9978 33.5005 40.0027 33.6576 40.0028 33.8147C40.0028 35.6003 40.0028 37.3859 40.0028 39.1715C40.0028 39.2754 40 39.3795 39.9985 39.4831C39.9969 39.5648 39.9953 39.6465 39.9936 39.7282V40.2704C39.9954 40.3521 39.997 40.4339 39.9986 40.5157C40 40.7661 40.0027 41.0167 40.0028 41.2677C40.0028 43.0347 40.0028 44.8018 40.0028 46.569C40.0028 46.6032 39.9977 46.6375 39.9949 46.6715L39.9769 46.669C39.9446 46.6627 39.9119 46.6585 39.879 46.6565C37.7682 46.6565 35.6581 46.6565 33.5485 46.6565C33.4601 46.6565 33.3718 46.6575 33.2834 46.6581C32.5893 46.6443 31.9191 46.5047 31.2683 46.2605C30.3412 45.9162 29.5043 45.3566 28.823 44.6255C27.9393 43.6815 27.3669 42.5663 27.1265 41.2789C27.0707 40.9789 27.0512 40.672 27.0156 40.369Z" fill="#A159FE"/>
<path d="M39.9991 40.5163C39.9974 40.4346 39.9957 40.3528 39.9941 40.271C39.9983 40.2713 40.0025 40.272 40.0066 40.2729C40.0072 40.3529 40.0079 40.4329 40.0086 40.5129C40.0057 40.5147 40.0025 40.5158 39.9991 40.5163Z" fill="#CFAAFE"/>
<path d="M39.9968 33.3442H33.3631C33.3319 33.3442 33.3007 33.3425 33.2695 33.3417C33.2708 33.3379 33.2708 33.3339 33.2695 33.3302C33.3057 33.3302 33.3421 33.3281 33.3787 33.3281H39.9225C39.9458 33.3281 39.9693 33.3268 39.9926 33.3262C39.9949 33.3289 39.9976 33.3316 40.0002 33.3343C39.9996 33.3378 39.9984 33.3411 39.9968 33.3442Z" fill="#C874C5"/>
<path d="M46.8498 33.3306C46.8515 33.3346 46.8531 33.3387 46.8548 33.3429H46.1367C46.1384 33.339 46.1401 33.335 46.142 33.3312L46.8498 33.3306Z" fill="#89CEEE"/>
<path d="M46.1409 33.3311C46.139 33.3349 46.1373 33.3389 46.1356 33.3427L46.0002 33.3461L45.9336 33.3322L46.1409 33.3311Z" fill="#FEDAD6"/>
<path d="M33.2832 46.6579C33.3715 46.6579 33.4598 46.6562 33.5484 46.6562C35.6584 46.6562 37.7686 46.6562 39.8788 46.6562C39.9117 46.6583 39.9444 46.6624 39.9768 46.6687C39.9509 46.6697 39.925 46.6716 39.8988 46.6716H33.3325C33.3169 46.6716 33.3013 46.6702 33.2857 46.6694C33.2855 46.6654 33.2846 46.6615 33.2832 46.6579Z" fill="#A97FF6"/>
<path d="M40.0066 40.2731C40.0025 40.2722 39.9983 40.2715 39.9941 40.2712C39.9941 40.0904 39.9941 39.9097 39.9941 39.729C39.9983 39.7287 40.0024 39.728 40.0065 39.7271C40.0066 39.9091 40.0066 40.0912 40.0066 40.2731Z" fill="#89B0FE"/>
<path d="M40.0065 39.7271C40.0024 39.7281 39.9983 39.7287 39.9941 39.729C39.9959 39.6473 39.9976 39.5656 39.9991 39.4839C40.0025 39.4842 40.0057 39.4852 40.0086 39.4868C40.0079 39.567 40.0072 39.6471 40.0065 39.7271Z" fill="#CFABFE"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="26" height="40" fill="white" transform="translate(27 20)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Figma',
      to: 'https://www.figma.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M48.0527 23.9737V55.2369C48.0527 58.7351 50.4685 60.6843 53.0265 60.6843C55.3949 60.6843 58.0002 59.0264 58.0002 55.2369V24.2105C58.0002 21.0037 55.6317 19 53.0265 19C50.4212 19 48.0527 21.2097 48.0527 23.9737Z" fill="#F9AB00"/>
<path d="M35.0273 39.8419V55.2366C35.0273 58.7348 37.4432 60.684 40.0011 60.684C42.3695 60.684 44.9748 59.0261 44.9748 55.2366V40.0787C44.9748 36.8719 42.6063 34.8682 40.0011 34.8682C37.3958 34.8682 35.0273 37.0779 35.0273 39.8419Z" fill="#E37400"/>
<path d="M26.9737 60.6837C29.7206 60.6837 31.9474 58.4569 31.9474 55.71C31.9474 52.9631 29.7206 50.7363 26.9737 50.7363C24.2268 50.7363 22 52.9631 22 55.71C22 58.4569 24.2268 60.6837 26.9737 60.6837Z" fill="#E37400"/>
</svg>
`,
      name: 'Google Analytics',
      to: 'https://analytics.google.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 19C25.3431 19 24 20.3431 24 22V58C24 59.6569 25.3431 61 27 61H52.92C54.5769 61 55.92 59.6569 55.92 58V31.18L43.74 19H27Z" fill="#764EBE"/>
<path d="M55.9202 42.94L44.1602 29.5L55.9202 31.18V42.94Z" fill="url(#paint0_linear_4409_4212)"/>
<mask id="mask0_4409_4212" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="43" y="19" width="13" height="13">
<path d="M55.9202 31.18L43.7402 19V31.18H55.9202Z" fill="#AE0606"/>
</mask>
<g mask="url(#mask0_4409_4212)">
<rect x="43.7402" y="-10.8198" width="31.92" height="42" rx="3" fill="#BAA6DE"/>
</g>
<rect x="37.0195" y="40.8398" width="1.68" height="10.92" transform="rotate(-90 37.0195 40.8398)" fill="white"/>
<rect x="37.0195" y="46.2998" width="1.68" height="10.92" transform="rotate(-90 37.0195 46.2998)" fill="white"/>
<rect x="37.0195" y="51.7598" width="1.68" height="10.92" transform="rotate(-90 37.0195 51.7598)" fill="white"/>
<circle cx="33.6605" cy="39.9998" r="1.68" fill="white"/>
<circle cx="33.6605" cy="45.4598" r="1.68" fill="white"/>
<circle cx="33.6605" cy="50.9202" r="1.68" fill="white"/>
<defs>
<linearGradient id="paint0_linear_4409_4212" x1="47.5202" y1="29.5" x2="55.9202" y2="42.94" gradientUnits="userSpaceOnUse">
<stop stop-color="#6C48B8"/>
<stop offset="1" stop-color="#6C48B8" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
      name: 'Google Forms',
      to: 'https://www.google.com/forms/about/',
    },

    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 19C25.3431 19 24 20.3431 24 22V58C24 59.6569 25.3431 61 27 61H52.92C54.5769 61 55.92 59.6569 55.92 58V31.18L43.74 19H27Z" fill="#25A667"/>
<path d="M55.9202 42.94L44.1602 29.5L55.9202 31.18V42.94Z" fill="url(#paint0_linear_4409_12261)"/>
<mask id="mask0_4409_12261" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="43" y="19" width="13" height="13">
<path d="M55.9202 31.18L43.7402 19V31.18H55.9202Z" fill="#AE0606"/>
</mask>
<g mask="url(#mask0_4409_12261)">
<rect x="43.7402" y="-10.8198" width="31.92" height="42" rx="3" fill="#8ED1B1"/>
</g>
<rect x="31.9805" y="38.3198" width="1.68" height="14.28" fill="white"/>
<rect x="31.9805" y="52.6001" width="1.68" height="15.96" transform="rotate(-90 31.9805 52.6001)" fill="white"/>
<rect x="31.9805" y="40" width="1.68" height="15.96" transform="rotate(-90 31.9805 40)" fill="white"/>
<rect x="31.9805" y="44.2002" width="1.68" height="15.96" transform="rotate(-90 31.9805 44.2002)" fill="white"/>
<rect x="31.9805" y="48.3999" width="1.68" height="15.96" transform="rotate(-90 31.9805 48.3999)" fill="white"/>
<rect x="39.1211" y="38.3198" width="1.68" height="14.28" fill="white"/>
<rect x="46.2598" y="38.3198" width="1.68" height="14.28" fill="white"/>
<defs>
<linearGradient id="paint0_linear_4409_12261" x1="47.5202" y1="29.5" x2="55.9202" y2="42.94" gradientUnits="userSpaceOnUse">
<stop stop-color="#208E5B"/>
<stop offset="1" stop-color="#208E5B" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
      name: 'Google Sheets',
      to: 'https://www.google.com/sheets/about/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#E84C3D"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M19.1384 37.362C19.8632 37.2069 20.5406 37.0207 21.2302 36.9261C21.9517 36.8291 22.6855 36.9308 23.3555 37.2207C24.3615 37.65 24.8469 38.493 24.878 39.5468C24.9408 41.6693 24.925 43.7979 24.9408 45.9186C24.9404 45.9788 24.9355 46.0388 24.9262 46.0982C24.844 46.6754 24.6022 46.8994 24.0317 46.9089C23.6108 46.9161 23.1906 46.9125 22.7698 46.9089C22.0889 46.9041 21.8148 46.6269 21.8078 45.9228C21.8007 45.2546 21.8078 44.5858 21.8078 43.9176C21.8078 42.7998 21.8078 41.6825 21.8078 40.5647C21.8078 39.839 21.445 39.4444 20.7372 39.5055C20.2805 39.5456 19.8345 39.7216 19.3872 39.8438C19.1853 39.8983 19.1378 40.045 19.1384 40.2527C19.146 42.0885 19.1431 43.9242 19.1431 45.7611C19.1431 45.8809 19.1431 46.0006 19.1343 46.1204C19.0867 46.6167 18.8273 46.8862 18.3378 46.9041C17.8295 46.9221 17.32 46.9215 16.8117 46.9041C16.3451 46.8862 16.1174 46.6646 16.0446 46.2006C16.0158 46.0229 16.0009 45.8431 16 45.663C16 41.6314 16 37.5999 16 33.5684C16 32.5685 16.2277 32.3391 17.2103 32.3403C17.5331 32.3403 17.8559 32.3403 18.1787 32.3403C18.8449 32.3463 19.1313 32.6265 19.1348 33.3049C19.1425 34.5718 19.1378 35.8388 19.1384 37.1063V37.362Z" fill="white"/>
<path d="M30.6182 47.247C29.9596 47.1236 29.2829 47.0638 28.6472 46.8644C27.4088 46.477 26.6963 45.5418 26.394 44.2898C26.0424 42.8424 26.0354 41.3302 26.3734 39.8794C26.7338 38.3054 27.6988 37.345 29.2629 37.0366C30.2813 36.8265 31.3329 36.8521 32.3403 37.1115C33.6497 37.4533 34.4937 38.3089 34.8512 39.6178C35.2822 41.1814 35.2877 42.8352 34.867 44.4018C34.4439 46.0088 33.3504 46.8566 31.7727 47.0907C31.3971 47.1464 31.015 47.1542 30.6358 47.1841L30.6182 47.247ZM29.2254 42.0283L29.3005 42.0343C29.3005 42.3726 29.2888 42.7115 29.3052 43.0486C29.3216 43.237 29.3568 43.4231 29.4103 43.6042C29.5928 44.3167 29.9514 44.6113 30.6258 44.6143C31.3243 44.6173 31.7257 44.3299 31.8807 43.615C32.1097 42.5725 32.1078 41.4911 31.8754 40.4495C31.7193 39.7495 31.3266 39.4669 30.6399 39.4663C29.9626 39.4663 29.5658 39.7621 29.4202 40.4656C29.314 40.9775 29.2876 41.5068 29.2254 42.0283Z" fill="white"/>
<path d="M55.0864 46.2144C54.1807 46.9533 53.1636 47.1993 52.0501 47.1628C49.8691 47.0922 48.8402 45.4684 49.0708 43.5829C49.2581 42.055 50.0099 41.3077 51.5829 41.0269C52.4082 40.8808 53.2469 40.8066 54.0815 40.7227C54.3005 40.7012 54.3861 40.6533 54.3832 40.4102C54.3744 39.7282 54.1702 39.4618 53.4905 39.4983C52.7275 39.5396 51.9644 39.6714 51.2014 39.7642C50.9514 39.7953 50.7002 39.8624 50.4519 39.8528C50.0082 39.8342 49.703 39.569 49.6554 39.1241C49.6244 38.7582 49.6355 38.3899 49.6883 38.0266C49.73 37.6937 49.9583 37.4698 50.2694 37.3758C51.8846 36.8878 53.5216 36.7118 55.1791 37.1213C56.5455 37.459 57.3208 38.4326 57.3461 39.8677C57.3819 41.8508 57.3854 43.835 57.3983 45.8186C57.4069 45.9783 57.3888 46.1382 57.3449 46.2917C57.2862 46.4527 57.204 46.6335 57.0778 46.7353C56.5966 47.1227 55.5395 46.9149 55.2038 46.3916C55.1715 46.3425 55.1386 46.2941 55.0864 46.2144ZM54.3768 42.4124C53.7311 42.5471 53.1207 42.6262 52.5426 42.8094C52.117 42.9435 51.9198 43.4446 51.9732 43.947C52.0319 44.4936 52.2878 44.8511 52.7556 44.9373C53.2698 45.0325 53.7699 44.9487 54.2095 44.6379C54.2864 44.5834 54.3674 44.4697 54.3697 44.3817C54.3856 43.7668 54.3768 43.1477 54.3768 42.4124Z" fill="white"/>
<path d="M40.2621 37.18C40.7856 37.18 41.254 37.1764 41.7224 37.18C42.3199 37.186 42.6028 37.4722 42.6157 38.0781C42.6216 38.3775 42.6245 38.6768 42.6157 38.9762C42.5957 39.4917 42.3715 39.7546 41.8685 39.7977C41.4313 39.8336 40.9881 39.8288 40.5503 39.8216C40.3343 39.818 40.2568 39.8893 40.2615 40.1126C40.2697 41.2598 40.2615 42.407 40.2685 43.5536C40.2738 44.235 40.6101 44.5715 41.2857 44.605C42.4009 44.6649 42.5024 44.7744 42.5054 45.9222C42.5054 46.7006 42.277 47.0341 41.5434 47.1197C40.6477 47.2251 39.7473 47.2029 38.8822 46.8802C37.7864 46.4713 37.2581 45.6067 37.1994 44.4799C37.1255 43.0578 37.1407 41.6298 37.1407 40.2048C37.1407 39.8959 37.055 39.8121 36.7628 39.8216C35.8008 39.8546 35.4873 39.6342 35.5337 38.5787C35.5648 37.8835 35.7027 37.6692 36.3701 37.4841C37.1331 37.2734 37.1331 37.2734 37.1331 36.4615C37.1331 35.3999 37.2305 35.264 38.2319 34.9886C38.5981 34.8868 38.9673 34.7736 39.3418 34.7317C39.9516 34.6635 40.2521 34.9616 40.2633 35.5933C40.2691 36.1094 40.2621 36.6256 40.2621 37.18Z" fill="white"/>
<path d="M47.699 43.3374C47.699 45.0528 47.7178 46.7682 47.6919 48.483C47.6761 49.5416 47.3398 50.49 46.484 51.157C45.5619 51.8755 44.5037 52.1234 43.3627 51.9437C42.8655 51.8653 42.6484 51.5534 42.6425 51.0456C42.639 50.7564 42.636 50.4672 42.6425 50.1781C42.6548 49.705 42.8685 49.4081 43.328 49.35C44.4057 49.2147 44.6093 48.7051 44.6052 47.7274C44.5929 44.5762 44.6011 41.425 44.6023 38.2733C44.6011 38.1439 44.6087 38.0147 44.6252 37.8865C44.6839 37.4434 44.9245 37.2045 45.3641 37.1901C45.8924 37.1734 46.4206 37.1752 46.9489 37.1901C47.355 37.2021 47.601 37.4296 47.669 37.8392C47.7006 38.0357 47.7161 38.2346 47.7154 38.4337C47.7189 40.0703 47.7189 41.7068 47.7154 43.3434L47.699 43.3374Z" fill="white"/>
<path d="M61.1234 37.801C61.8417 37.2809 62.6883 36.9761 63.5674 36.9208C63.8397 36.9027 64.1131 36.9186 64.3815 36.9681C64.7489 37.0346 64.9491 37.2591 64.9773 37.6405C65.0043 38.0176 65.0043 38.3962 64.9773 38.7733C64.9438 39.2266 64.7237 39.4499 64.2729 39.5146C63.8222 39.5792 63.3831 39.6193 62.9382 39.6702C62.9284 39.671 62.9186 39.6724 62.9089 39.6744C61.9833 39.8972 61.9698 39.9139 61.9698 40.8719V45.8115C61.9698 46.6366 61.7039 46.912 60.9033 46.9126C60.5024 46.9126 60.101 46.9192 59.7001 46.9096C59.1431 46.8965 58.8432 46.5989 58.842 46.0337C58.8365 43.3693 58.8365 40.7049 58.842 38.0405C58.842 37.4812 59.1355 37.2022 59.6819 37.1837C59.7206 37.1837 59.76 37.1837 59.7993 37.1837C60.6292 37.2046 60.567 37.0406 61.1234 37.801Z" fill="white"/>
<path d="M47.0815 35.6493C47.5698 34.7374 47.7659 33.8693 47.4096 32.9484C47.3586 32.8058 47.278 32.676 47.1734 32.568C47.0687 32.4601 46.9425 32.3764 46.8033 32.3227C47.0181 33.046 47.0515 33.7268 46.3672 34.1644C45.8871 34.4716 45.4515 34.2417 45.0689 33.8417C44.8112 34.4943 44.9051 35.1093 45.1035 35.7254C44.1298 35.7152 43.2212 35.0829 42.8796 34.2046C42.511 33.2573 42.7287 32.3281 43.51 31.5701C43.703 31.3868 43.907 31.2161 44.121 31.0588C45.198 30.2481 45.3647 29.3284 44.6369 28.1908C44.6111 28.1513 44.5923 28.1076 44.5359 28.001C44.7455 28.0339 44.9033 28.0477 45.056 28.0842C46.2862 28.3806 47.4548 28.8111 48.3827 29.7361C49.7532 31.1007 50.2058 34.1165 47.5833 35.4517C47.4489 35.5194 47.3022 35.5631 47.0815 35.6493Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="49" height="24" fill="white" transform="translate(16 28)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Hotjar',
      to: 'https://www.hotjar.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M39.3538 30.1001C42.341 30.1001 45.3283 30.1001 48.3155 30.1001C48.6975 30.1001 49.0406 30.2061 49.3433 30.4417C49.7515 30.7595 49.9354 31.1886 49.9669 31.6935C49.9708 31.7556 49.9682 31.8182 49.9682 31.8806C49.9682 37.7772 49.9678 43.6738 49.9669 49.5705C49.9669 49.9017 49.9686 49.8842 49.6623 49.8767C48.9385 49.8597 48.2324 49.7347 47.5393 49.5273C46.4764 49.2091 45.5238 48.6857 44.6686 47.9834C44.126 47.5352 43.6441 47.0182 43.2351 46.4454C42.5152 45.4448 42.0379 44.3391 41.8204 43.126C41.7576 42.7757 41.709 42.4186 41.7013 42.0635C41.6783 40.9247 41.6773 39.7854 41.6686 38.6462C41.6666 38.3769 41.6686 38.3766 41.394 38.3766C40.3621 38.3766 39.3303 38.3766 38.2984 38.3766C36.9279 38.3766 35.6397 38.0477 34.4302 37.4068C33.5497 36.9407 32.7862 36.3206 32.1256 35.5775C31.406 34.7712 30.8565 33.828 30.5098 32.8044C30.2887 32.1528 30.14 31.4842 30.0961 30.7952C30.0861 30.637 30.0705 30.479 30.0671 30.3206C30.0625 30.1178 30.0776 30.1061 30.2734 30.1033C30.3244 30.1033 30.3754 30.1033 30.4264 30.1033H39.3543L39.3538 30.1001Z" fill="url(#paint0_linear_0_1)"/>
<path d="M48.3863 21C51.3735 21 54.3609 21 57.3485 21C57.7305 21 58.0736 21.1062 58.3763 21.3416C58.7845 21.6594 58.9684 22.0885 58.9999 22.5934C59.0038 22.6555 59.0012 22.7181 59.0012 22.7805C59.0012 28.6773 59.0008 34.5739 58.9999 40.4704C58.9999 40.8016 59.0016 40.7841 58.6952 40.7766C57.9715 40.7596 57.2654 40.6346 56.5723 40.4272C55.5094 40.1091 54.5568 39.5856 53.7016 38.8833C53.1589 38.4352 52.6771 37.9182 52.2681 37.3454C51.5476 36.3454 51.0704 35.2395 50.8528 34.0259C50.7901 33.6756 50.7414 33.3185 50.7338 32.9636C50.7106 31.8237 50.7098 30.6853 50.7011 29.5461C50.6991 29.2768 50.7011 29.2766 50.4264 29.2765C49.3946 29.2765 48.3627 29.2765 47.3309 29.2765C45.9604 29.2765 44.6721 28.9474 43.4627 28.3067C42.5809 27.8404 41.8174 27.2205 41.1568 26.4772C40.4373 25.6709 39.8877 24.7278 39.541 23.7042C39.3199 23.0527 39.1713 22.384 39.1274 21.695C39.1173 21.5367 39.1017 21.3787 39.0983 21.2203C39.0937 21.0175 39.1088 21.0058 39.3046 21.0031C39.3556 21.0031 39.4067 21.0031 39.4577 21.0031H48.3856L48.3863 21Z" fill="url(#paint1_linear_0_1)"/>
<path d="M30.2886 39.2202C33.2758 39.2202 36.2631 39.2202 39.2503 39.2202C39.6323 39.2202 39.9754 39.3264 40.2781 39.5618C40.6863 39.8796 40.8702 40.3087 40.9017 40.8136C40.9056 40.8757 40.903 40.9383 40.903 41.0008C40.903 46.8975 40.9026 52.7942 40.9017 58.6906C40.9017 59.0219 40.9034 59.0043 40.597 58.9968C39.8733 58.9798 39.1671 58.8548 38.4741 58.6474C37.4112 58.3293 36.4586 57.8058 35.6034 57.1035C35.0607 56.6554 34.5789 56.1384 34.1699 55.5656C33.4499 54.5656 32.9727 53.4598 32.7551 52.2461C32.6924 51.8958 32.6437 51.5387 32.6361 51.1838C32.613 50.044 32.6121 48.9055 32.6034 47.7663C32.6014 47.497 32.6034 47.4968 32.3287 47.4967C31.2969 47.4967 30.2651 47.4967 29.2332 47.4967C27.8627 47.4967 26.5745 47.1676 25.365 46.527C24.4833 46.0606 23.7198 45.4407 23.0592 44.6974C22.3396 43.8911 21.7901 42.948 21.4434 41.9244C21.2223 41.273 21.0736 40.6042 21.0297 39.9152C21.0197 39.757 21.004 39.5989 21.0006 39.4405C20.9961 39.2377 21.0112 39.226 21.207 39.2233C21.258 39.2233 21.309 39.2233 21.36 39.2233H30.2886V39.2202Z" fill="url(#paint2_linear_0_1)"/>
</g>
<defs>
<linearGradient id="paint0_linear_0_1" x1="38.2649" y1="41.7406" x2="49.4647" y2="30.5438" gradientUnits="userSpaceOnUse">
<stop stop-color="#2684FF"/>
<stop offset="1" stop-color="#0052CC"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="30812.3" y1="13555.6" x2="43833.3" y2="452.553" gradientUnits="userSpaceOnUse">
<stop stop-color="#2684FF"/>
<stop offset="1" stop-color="#0052CC"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="9615.65" y1="34757.7" x2="22636.7" y2="21655" gradientUnits="userSpaceOnUse">
<stop stop-color="#2684FF"/>
<stop offset="1" stop-color="#0052CC"/>
</linearGradient>
<clipPath id="clip0_0_1">
<rect width="38" height="38" fill="white" transform="translate(21 21)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Jira',
      to: 'https://www.atlassian.com/software/jira',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="white"/>
<path d="M15.7461 38.9189H64.2545C63.8119 40.3252 62.4928 41.3509 60.9461 41.3509H19.0545C17.5079 41.3509 16.1888 40.3252 15.7461 38.9189Z" fill="#2878FF"/>
<path d="M61.4414 20.2701L61.9819 37.4772H17.8379L18.3783 20.2701C18.3783 18.7839 19.5943 17.5679 21.0806 17.5679H22.7997V22.1172H23.8806V17.5679H58.7392C60.2254 17.5679 61.4414 18.7839 61.4414 20.2701Z" fill="#2878FF"/>
<path d="M50.9887 63.7711C50.9958 64.4484 50.4465 64.8644 49.7727 64.8644H29.7727C29.1007 64.8644 28.5496 64.4484 28.5567 63.7711C28.5638 63.1649 29.1132 62.7026 29.7194 62.7026H37.6554C38.2527 62.7026 38.738 62.2191 38.738 61.6217V42.7026H40.8998V61.6217C40.8998 62.2191 41.3834 62.7026 41.9807 62.7026H49.8278C50.434 62.7026 50.9834 63.1649 50.9887 63.7711Z" fill="#2878FF"/>
<path d="M39.9082 11.5981V12.1848C39.9082 13.2248 39.0566 14.0763 38.0166 14.0763H33.2415C32.2389 14.0763 31.4122 13.2852 31.3535 12.2968H35.3144V11.2159H31.3891C31.5686 10.3572 32.3331 9.70654 33.2415 9.70654H38.0166C39.0566 9.70654 39.9082 10.5581 39.9082 11.5981Z" fill="#2878FF"/>
<path d="M35.316 11.2158V12.2967H31.3551C31.3533 12.2594 31.3516 12.222 31.3516 12.1847V11.598C31.3516 11.4665 31.3658 11.3385 31.3907 11.2158H35.316Z" fill="#2878FF"/>
<path d="M25.5011 11.2158H31.3891C31.3642 11.3385 31.3499 11.4665 31.3499 11.598V12.1847C31.3499 12.222 31.3517 12.2594 31.3535 12.2967H25.5011C24.6068 12.2967 23.8797 13.0238 23.8797 13.918V17.5678H22.7988V13.918C22.7988 12.4283 24.0113 11.2158 25.5011 11.2158Z" fill="#2878FF"/>
<path d="M23.8797 17.5679H22.7988V22.1172H23.8797V17.5679Z" fill="#2878FF"/>
</svg>`,
      name: 'Keynote',
      to: 'https://www.apple.com/keynote/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#FFE01B"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M51.6104 30.4039C52.4998 31.3106 53.0167 32.4121 53.2691 33.6292C53.4313 34.4142 53.5034 35.2297 53.5515 36.033C53.5996 36.7876 53.5635 37.5482 53.5635 38.2663C54.3508 38.5402 55.0659 38.7593 55.7631 39.0331C56.1597 39.1913 56.5443 39.3921 56.9049 39.6295C58.4193 40.6153 58.852 42.3923 57.9626 43.9806C57.8484 44.1814 57.8304 44.3457 57.9145 44.5709C58.0888 45.0334 58.215 45.5141 58.3712 45.9827C58.4013 46.0679 58.4554 46.1896 58.5275 46.2079C59.4349 46.4513 59.7895 47.139 59.9397 47.9848C60.102 48.9342 59.9457 49.8653 59.7234 50.7781C58.6236 55.2266 55.9193 58.3423 51.8929 60.3323C50.1441 61.1964 48.2811 61.6772 46.346 61.878C42.9385 62.237 39.6393 61.8476 36.5022 60.4053C32.9866 58.7866 30.3724 56.2307 28.7378 52.6707C28.6957 52.5733 28.5756 52.4516 28.4854 52.4455C26.6525 52.3238 25.1381 51.5388 23.9061 50.1939C22.1933 48.3195 21.8508 46.1227 22.5419 43.725C22.608 43.4877 22.578 43.366 22.3917 43.2199C22.0191 42.9278 21.6705 42.6053 21.3099 42.301C20.4265 41.5586 20.0419 40.5788 20.0058 39.4408C19.9518 37.7917 20.4686 36.2703 21.1296 34.7976C22.3316 32.12 24.0022 29.7467 25.9013 27.5376C27.9686 25.1217 30.2522 22.9431 32.9145 21.1966C34.2967 20.2898 35.745 19.517 37.3736 19.164C38.5756 18.9023 39.7594 18.9084 40.8472 19.6143C41.0575 19.7482 41.2498 19.9125 41.4301 20.089C42.0311 20.6732 42.626 21.2574 43.209 21.8599C43.3652 22.0181 43.4854 22.0546 43.6957 21.9572C45.0299 21.3548 46.3881 20.8314 47.8364 20.5576C49.2066 20.302 50.5707 20.2107 51.9409 20.5819C54.1104 21.1722 55.1501 22.8883 54.6933 25.1095C54.3508 26.7526 53.5034 28.1218 52.4818 29.3998C52.1933 29.7406 51.9049 30.057 51.6104 30.4039ZM57.4397 47.4858C57.2174 46.713 56.995 45.9584 56.7667 45.1794C56.6645 45.2403 56.6405 45.2585 56.6164 45.2707C53.3352 47.6806 49.6212 48.4717 45.6489 48.3074C44.9818 48.283 44.3147 48.1917 43.6477 48.1735C43.227 48.1613 42.9626 48.4413 42.8724 48.8916C42.9566 48.922 43.0467 48.9646 43.1429 48.995C45.126 49.6401 47.1573 49.7861 49.2186 49.5914C49.3147 49.5853 49.4109 49.634 49.507 49.6583C49.4349 49.7375 49.3748 49.8348 49.2847 49.8896C49.2066 49.9444 49.0984 49.9626 49.0022 49.993C47.4097 50.4677 45.8051 50.4495 44.1945 50.133C43.7198 50.0417 43.251 49.9139 42.7462 49.7983C42.8063 50.1817 42.9866 50.4616 43.233 50.7051C43.6657 51.125 44.2006 51.344 44.7655 51.4901C46.5263 51.9465 48.2931 51.8796 50.0539 51.5144C52.2594 51.058 54.2967 50.1695 56.1897 48.9403C56.2619 48.8977 56.334 48.8612 56.4061 48.8186C56.4241 48.8368 56.4421 48.8551 56.4602 48.8733C56.4061 48.9707 56.364 49.0863 56.2919 49.1593C55.8171 49.6036 55.3784 50.1148 54.8436 50.4738C52.001 52.3907 48.858 53.0906 45.4806 52.7133C44.5131 52.6037 43.5876 52.2812 42.7883 51.6909C41.8268 50.9789 41.4782 50.0052 41.7066 48.8368C41.9109 47.7719 42.7282 47.0173 43.6717 47.0294C44.1585 47.0355 44.6453 47.1329 45.132 47.1694C46.8388 47.3033 48.5275 47.1694 50.1982 46.8043C52.0311 46.4087 53.7679 45.7576 55.3063 44.65C55.8953 44.224 56.4301 43.7311 56.7246 43.0373C57.0551 42.2645 56.8869 41.5342 56.2138 41.0474C55.8412 40.7796 55.4265 40.5606 54.9998 40.3962C54.3087 40.1346 53.5936 39.9338 52.8905 39.7208C52.4518 39.5869 52.2294 39.2826 52.1633 38.8505C52.1272 38.601 52.1092 38.3454 52.0912 38.0959C52.0251 36.9823 52.007 35.8687 51.8929 34.7611C51.8328 34.2012 51.6585 33.6292 51.4241 33.118C51.1296 32.4608 50.5527 32.1687 49.8256 32.2234C49.3328 32.26 48.9241 32.479 48.5635 32.7955C47.8484 33.4223 47.0671 33.9578 46.1056 34.0248C45.3003 34.0795 44.489 33.9943 43.6837 33.9578C42.9566 33.9274 42.2354 33.7813 41.5022 33.9639C39.6693 34.4203 38.2751 36.2642 38.227 38.2785C38.1969 39.739 38.7078 40.9865 39.6092 42.0941C39.9878 42.5566 40.3844 42.9947 40.751 43.4633C41.0395 43.8285 41.0155 44.0597 40.715 44.4066C40.5647 44.5831 40.4085 44.7535 40.2643 44.936C39.3087 46.1896 38.8099 47.6197 38.6897 49.1898C38.5094 51.6361 39.1825 53.7721 41.0155 55.4274C43.1489 57.3626 45.727 57.8981 48.5034 57.6668C50.2402 57.5208 51.8688 56.9792 53.3832 56.1211C55.5707 54.8797 57.2174 53.1392 58.0707 50.7172C58.3051 50.0478 58.4253 49.3297 58.5034 48.6177C58.5756 48.0031 58.2871 47.6258 57.8304 47.5102C57.6982 47.4919 57.5599 47.498 57.4397 47.4858ZM41.9049 22.864C41.3881 22.3163 40.8832 21.8112 40.4025 21.2818C39.8977 20.7158 39.2727 20.5454 38.5575 20.6124C38.3412 20.6306 38.1188 20.661 37.9025 20.7036C36.364 21.0079 34.9938 21.7138 33.7018 22.5658C29.2546 25.5112 25.7751 29.3815 23.209 34.0917C22.4037 35.5705 21.7366 37.1162 21.5623 38.8384C21.4241 40.2259 22.0732 41.449 23.3292 42.0698C23.3472 42.0576 23.3652 42.0515 23.3772 42.0332C24.2006 40.9318 25.2883 40.2441 26.6104 39.9216C26.7066 39.8972 26.8087 39.7634 26.8568 39.6599C27.1693 38.9479 27.4397 38.2176 27.7643 37.5117C29.477 33.7996 31.7787 30.5317 34.8736 27.8723C37.0491 26.0041 39.3688 24.3306 41.9049 22.864ZM31.8568 47.0051C31.8207 45.7332 31.7126 44.8265 31.37 43.9563C30.3724 41.4186 27.614 40.6153 25.4445 42.2341C23.9962 43.3112 23.3592 45.648 24.0683 47.4554C24.7775 49.2567 26.1056 50.3582 27.9686 50.7537C29.5972 51.1006 31.0155 50.2547 31.5203 48.6542C31.7246 48.0153 31.7967 47.3337 31.8568 47.0051ZM43.84 27.4281C44.0263 27.209 44.1405 27.0569 44.2727 26.923C44.4049 26.783 44.5491 26.6552 44.6873 26.5214C42.9385 26.6005 41.3941 27.2394 39.9337 28.1401C39.9037 28.1097 39.8736 28.0853 39.8436 28.0549C40.0119 27.6228 40.1741 27.1968 40.3424 26.7709C39.3087 27.0082 35.3784 30.27 35.0659 31.1707C38.9962 28.56 43.245 27.6046 47.8844 28.5539C46.6645 27.8115 45.3244 27.5255 43.84 27.4281Z" fill="black"/>
<path d="M51.0926 38.4491C51.0926 38.4795 51.0926 38.51 51.0926 38.5404C51.0865 39.3011 50.8822 39.4654 50.1431 39.2828C50.0709 39.2646 49.9928 39.1854 49.9507 39.1185C49.5301 38.3578 49.3498 37.5424 49.4039 36.6782C49.4219 36.3496 49.6383 36.1062 49.8907 36.0575C50.1911 35.9967 50.4495 36.1123 50.6298 36.447C50.9603 37.0616 51.0745 37.7432 51.0926 38.4491Z" fill="black"/>
<path d="M43.5104 38.729C44.2075 38.7838 44.8145 39.015 45.3313 39.4653C45.4816 39.5931 45.6138 39.7575 45.7159 39.9278C45.77 40.0191 45.752 40.153 45.77 40.2686C45.6558 40.2747 45.5417 40.3051 45.4395 40.2869C45.3253 40.2686 45.2111 40.2078 45.109 40.153C44.1354 39.6479 43.1378 39.6418 42.1162 39.9948C41.9299 40.0617 41.7376 40.1226 41.5393 40.1591C41.4431 40.1774 41.2869 40.153 41.2508 40.0922C41.2087 40.0252 41.2448 39.8731 41.2989 39.794C41.5813 39.3923 41.99 39.1428 42.4347 38.9907C42.7893 38.8568 43.1559 38.8081 43.5104 38.729Z" fill="black"/>
<path d="M45.3851 41.3398C44.5858 41.2181 43.8706 41.2851 43.1735 41.565C43.0894 41.6015 42.9752 41.5467 42.873 41.5346C42.8911 41.4311 42.873 41.3094 42.9271 41.2242C43.3718 40.4757 44.8803 40.2993 45.4933 40.9321C45.5594 40.9991 45.6255 41.139 45.6014 41.212C45.5714 41.2851 45.4271 41.3155 45.3851 41.3398Z" fill="black"/>
<path d="M48.8876 42.5325C48.4009 42.4838 48.1124 42.3256 47.9501 41.9909C47.7819 41.6562 47.9622 41.3214 48.3287 41.2788C48.6713 41.2362 48.9597 41.358 49.1821 41.6196C49.3323 41.7961 49.4465 42.0213 49.3023 42.2221C49.1941 42.3803 48.9778 42.4716 48.8876 42.5325Z" fill="black"/>
<path d="M51.2732 41.0231C51.2732 41.0657 51.2792 41.1022 51.2732 41.1448C51.2371 41.5099 50.9847 41.7899 50.7143 41.7899C50.4378 41.7838 50.1854 41.4978 50.1794 41.1326C50.1734 40.9561 50.1794 40.7432 50.2695 40.6093C50.3717 40.451 50.576 40.2685 50.7383 40.2746C50.8946 40.2746 51.0748 40.4754 51.201 40.6214C51.2792 40.7188 51.2732 40.8831 51.3032 41.0231C51.2912 41.017 51.2792 41.017 51.2732 41.0231Z" fill="black"/>
<path d="M27.7084 42.9825C28.8382 42.9156 30.1303 44.1692 29.6615 45.7028C29.5774 45.9705 29.4632 46.2322 29.373 46.5C29.3009 46.7069 29.2168 46.9199 29.1807 47.1328C29.1146 47.5406 29.4091 47.8509 29.8178 47.8266C29.8779 47.8205 29.938 47.7901 29.992 47.7962C30.1303 47.8205 30.2625 47.857 30.4007 47.8874C30.3286 48.0335 30.2985 48.2161 30.1843 48.3134C29.7216 48.709 28.9944 48.5873 28.6279 48.0639C28.2372 47.5101 28.3033 46.9077 28.4476 46.287C28.5317 45.9401 28.6339 45.575 28.5978 45.2281C28.5437 44.7047 28.1591 44.3944 27.6242 44.3031C27.1855 44.2301 26.6988 44.4613 26.4584 44.8812C26.3622 45.0455 26.3021 45.2281 26.23 45.4046C26.194 45.4898 26.194 45.5993 26.1339 45.6541C26.0197 45.7636 25.8815 45.8488 25.7553 45.9401C25.6831 45.8062 25.5449 45.6784 25.5449 45.5445C25.5449 45.2342 25.575 44.9177 25.6651 44.6195C25.9596 43.6033 26.7529 42.9765 27.7084 42.9825Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="43" fill="white" transform="translate(20 19)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Mailchimp',
      to: 'https://mailchimp.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#FFD02F"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M23 56.4087C23.2474 55.2994 23.4815 54.241 23.7211 53.1816C25.1847 46.7243 26.6491 40.2663 28.1142 33.8075C28.2562 33.1785 28.3882 32.5462 28.5524 31.9216C28.5935 31.7729 28.6016 31.617 28.5761 31.4648C28.5506 31.3127 28.4922 31.1679 28.4049 31.0408C26.7312 28.2755 25.0653 25.505 23.4071 22.7293C23.2862 22.5263 23.1708 22.32 23.0166 22.0515C23.2374 22.0327 23.3916 22.0094 23.5458 22.0083C24.785 22.0005 26.023 22.016 27.2622 22.0005C27.5929 21.992 27.9172 22.0935 28.1841 22.2889C31.2023 24.3893 34.2254 26.4827 37.2532 28.5691C37.3947 28.6804 37.5624 28.7537 37.7402 28.7821C35.9763 26.5633 34.2113 24.3446 32.3864 22.0515C32.6515 22.0304 32.8046 22.0083 32.961 22.0083C34.1991 22.0083 35.4383 21.9927 36.6763 22.0171C36.9841 22.0238 37.2868 22.0968 37.5638 22.2312C40.5347 23.72 43.4978 25.2265 46.4621 26.7297C46.6387 26.833 46.8362 26.8955 47.0401 26.9128L41.7761 22.0549C42.0202 22.0327 42.1555 22.0083 42.292 22.0083C43.5866 22.0083 44.8801 22.0016 46.1748 22.0083C46.3947 22.0088 46.6129 22.0463 46.8204 22.1192C50.0746 23.3306 53.3235 24.5476 56.5673 25.7701C56.7016 25.8201 56.8292 25.8899 57 25.9698C53.5121 36.1287 50.0287 46.2761 46.5497 56.4121H41.7595L47.3063 29.0639L47.2464 29.0472C46.7686 30.34 46.2905 31.632 45.812 32.9234C43.0016 40.5603 40.1912 48.1975 37.3808 55.8352C37.1389 56.4942 37.2698 56.4442 36.5399 56.4453C35.192 56.4453 33.8441 56.4453 32.3953 56.4453C32.971 53.5909 33.6156 50.7986 34.2157 48.0008C34.8296 45.1697 35.4468 42.3401 36.0673 39.5119C36.6774 36.7019 37.2876 33.8907 37.8101 31.0518L27.7847 56.4087H23Z" fill="#050038"/>
</svg>
`,
      name: 'Miro',
      to: 'https://miro.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#EB3463"/>
<g clip-path="url(#clip0_0_1)">
<path d="M48.498 41.1692C48.1565 41.6338 47.8048 42.0909 47.4764 42.5649C46.4688 44.0238 45.4613 45.4922 44.4538 46.9511C43.0997 48.9061 41.7335 50.8484 40.3894 52.814C40.1264 53.2006 39.9572 53.1774 39.7194 52.8308C38.8529 51.5668 37.9754 50.3028 37.1139 49.0388C35.6705 46.9131 34.2311 44.784 32.7957 42.6513C32.306 41.9276 31.8093 41.2114 31.238 40.3782C31.2108 40.6268 31.1836 40.7647 31.1836 40.9048C31.1796 45.4335 31.1766 49.9629 31.1746 54.493C31.1746 55.4926 30.6607 56.0035 29.7056 56.0056C27.6569 56.0056 25.6083 56.0056 23.5597 56.0056C22.5521 56.0056 22.0373 55.4716 22.0363 54.4256C22.0215 45.6927 22.0094 36.9639 22 28.2394C22 27.5895 22.0181 26.9406 22.0343 26.2918C22.0564 25.4343 22.4342 25.0204 23.2413 25.0162C25.2896 25.0046 27.3399 25.0141 29.3862 25.0077C29.8628 25.0077 30.1922 25.2047 30.4824 25.6155C32.2818 28.2067 34.1095 30.7769 35.9109 33.366C36.9547 34.8639 37.9734 36.3807 39.0081 37.886C39.2328 38.2125 39.4746 38.5253 39.7083 38.8456C39.8826 39.0857 40.0247 39.1026 40.2121 38.8319C41.002 37.6795 41.806 36.5377 42.609 35.3937C44.8759 32.1635 47.1429 28.9307 49.4098 25.6956C49.7423 25.2205 50.1342 24.9898 50.7196 24.9993C52.6833 25.0309 54.649 25.0088 56.6126 25.0109C57.6393 25.0109 57.8982 25.2911 57.9023 26.3413C57.9318 35.5201 57.9634 44.6994 57.997 53.8789C58.003 55.5906 57.7421 55.8603 56.1028 55.8613C54.0706 55.8613 52.0385 55.8308 50.0073 55.8771C49.2395 55.895 48.626 55.3336 48.633 54.4688C48.6693 50.1859 48.6481 45.903 48.6461 41.618C48.6461 41.4852 48.625 41.3525 48.6139 41.2198L48.498 41.1692Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="36" height="31" fill="white" transform="translate(22 25)"/>
</clipPath>
</defs>
</svg>

`,
      name: 'Mural',
      to: 'https://www.mural.co/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#FFD600"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M40.0349 51.9961C37.0082 51.9961 33.9815 51.9961 30.9547 51.9961C27.8094 52.0125 24.7666 50.9109 22.4003 48.899C20.0339 46.8871 18.5076 44.104 18.1093 41.0747C17.2686 34.9368 21.3578 29.0162 27.6029 27.4202C28.6598 27.1579 29.7464 27.0247 30.8373 27.0235C36.9978 26.987 43.1504 26.9992 49.3109 27.0068C54.5821 27.0068 59.4291 30.3508 61.2326 35.2149C63.0674 40.1581 61.5661 45.7032 57.5113 49.0062C55.058 51.002 52.2463 52.0204 49.0385 52.0052C46.0326 51.9855 43.0346 51.9961 40.0349 51.9961ZM40.0162 50.1113C42.9391 50.1113 45.8604 50.1113 48.7833 50.1113C49.3823 50.1091 49.9805 50.0695 50.5743 49.9927C56.3324 49.257 60.4013 44.3686 60.0193 38.6548C59.6561 33.2647 54.7903 28.8962 49.1355 28.8931C43.0565 28.8931 36.9774 28.8749 30.8999 28.9114C29.9107 28.9226 28.9271 29.0585 27.9739 29.3157C22.8169 30.6898 19.3978 35.5113 20.0647 40.6931C20.7755 46.2337 25.3735 50.1037 31.0158 50.1037L40.0162 50.1113Z" fill="#043241"/>
<path d="M50.21 42.0177C51.0648 39.537 51.846 37.263 52.6351 34.9906C53.0061 33.9266 53.4914 33.5526 54.1724 33.7882C54.8926 34.036 55.0178 34.5695 54.6264 35.6305C53.5827 38.4608 52.539 41.2927 51.4953 44.126C51.2652 44.7598 50.9944 45.304 50.1787 45.304C49.363 45.304 49.0828 44.7629 48.8683 44.123C48.1591 42.039 47.4311 39.9596 46.6953 37.8787C46.6499 37.7479 46.5732 37.6278 46.4355 37.3497C45.8906 38.8971 45.3975 40.297 44.9028 41.6985C44.5897 42.6105 44.2672 43.5225 43.9415 44.4224C43.7552 44.9438 43.4092 45.2721 42.8018 45.3025C42.1615 45.3344 41.7513 45.0335 41.5493 44.4802C40.394 41.3661 39.2459 38.249 38.1051 35.1289C37.8703 34.4829 38.1427 34.0406 38.7627 33.7958C39.3325 33.5709 39.9243 33.8551 40.1717 34.53C40.7212 36.0303 41.2284 37.5442 41.7513 39.0536C42.0801 40.0037 42.4041 40.9567 42.7799 42.0481C43.4499 40.0721 44.0762 38.2343 44.7008 36.3936C44.8965 35.819 45.0875 35.2414 45.2895 34.6683C45.4914 34.0953 45.8045 33.6849 46.5122 33.697C47.2198 33.7092 47.5126 34.1409 47.7036 34.7079C48.4425 36.8906 49.182 39.0724 49.9219 41.2531C49.983 41.4401 50.0597 41.6225 50.21 42.0177Z" fill="#043241"/>
<path d="M24.4824 39.5251C24.4824 36.0518 27.2879 33.3704 30.9184 33.375C32.5919 33.4069 34.1853 34.0767 35.3544 35.2397C36.5235 36.4028 37.1745 37.9656 37.1666 39.5908C37.1588 41.2159 36.4929 42.7728 35.3127 43.9252C34.1324 45.0775 32.5327 45.7329 30.8589 45.7496C27.2722 45.7405 24.484 43.0181 24.4824 39.5251ZM30.8699 35.2614C29.6982 35.2577 28.5727 35.7047 27.7395 36.5045C26.9063 37.3044 26.4332 38.392 26.4237 39.5296C26.4143 41.8598 28.3744 43.8207 30.7431 43.8496C31.9161 43.8659 33.0477 43.4291 33.889 42.6354C34.7303 41.8416 35.2124 40.7559 35.2292 39.617C35.246 38.4782 34.7962 37.3795 33.9787 36.5626C33.1611 35.7458 32.0429 35.2777 30.8699 35.2614Z" fill="#043241"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="44" height="25" fill="white" transform="translate(18 27)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Optimal Workshop',
      to: 'https://www.optimalworkshop.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#006DE4"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M26.4577 49C21.7814 48.9994 17.9945 45.1972 18 40.4978C18.0049 35.935 21.5815 32 26.465 32C31.2984 32 34.9111 35.8736 34.9258 40.5046C34.9404 45.1935 31.1328 49.0006 26.4577 49ZM26.4815 36.4392C24.35 36.3525 22.4012 38.1866 22.4012 40.4849C22.3972 41.0213 22.4989 41.5532 22.7005 42.0497C22.9021 42.5463 23.1996 42.9978 23.5757 43.378C23.9518 43.7582 24.3992 44.0597 24.8919 44.2649C25.3846 44.4701 25.9128 44.5751 26.4461 44.5737C28.7139 44.5737 30.5252 42.7783 30.5313 40.5231C30.5362 38.2192 28.6296 36.379 26.4815 36.4392Z" fill="white"/>
<path d="M43.8046 40.5089C43.8046 38.5315 43.7991 36.5542 43.8046 34.5768C43.8049 33.9846 44.0277 33.4144 44.4285 32.9805C44.8292 32.5466 45.3782 32.2812 45.9653 32.2374C46.5525 32.1936 47.1344 32.3747 47.5944 32.7444C48.0544 33.114 48.3584 33.645 48.4455 34.2307C48.4723 34.4139 48.4856 34.5988 48.4852 34.784C48.4877 38.6059 48.4877 42.4276 48.4852 46.2491C48.4852 47.3928 47.9497 48.2499 47.0212 48.6243C46.6686 48.7708 46.2855 48.8278 45.9059 48.7903C45.5262 48.7529 45.1614 48.6221 44.8438 48.4095C44.5262 48.1969 44.2654 47.9091 44.0844 47.5713C43.9034 47.2335 43.8077 46.8561 43.8059 46.4723C43.7949 44.4814 43.8053 42.4967 43.8046 40.5089Z" fill="white"/>
<path d="M37.0113 40.4774C37.0113 38.5203 37.0082 36.5633 37.0113 34.6062C37.0113 33.3968 37.7876 32.4739 38.9674 32.255C40.3122 32.006 41.6399 33.09 41.6613 34.474C41.679 35.6213 41.6668 36.7692 41.6668 37.9172C41.6668 40.7455 41.6668 43.5738 41.6668 46.4021C41.6668 47.6263 40.8825 48.5541 39.6899 48.7693C38.3378 49.0097 37.0229 47.9245 37.0113 46.5331C36.9972 44.5145 37.0076 42.496 37.0076 40.4774H37.0113Z" fill="white"/>
<path d="M57.3147 40.5283C57.3147 39.6374 57.3098 38.7452 57.3147 37.8562C57.3232 36.5926 58.1203 35.655 59.3576 35.441C60.5642 35.2326 61.8638 36.2403 61.9598 37.47C61.9922 37.9004 62.0008 38.3308 61.9989 38.7612C61.9934 40.3371 62.0038 41.9142 61.9592 43.4894C61.928 44.5961 60.9903 45.5301 59.912 45.6205C58.7127 45.7213 57.6503 44.9749 57.3954 43.8436C57.3446 43.6161 57.3391 43.3781 57.3134 43.1445C57.3122 43.124 57.3122 43.1035 57.3134 43.083C57.3139 42.2296 57.3143 41.378 57.3147 40.5283Z" fill="white"/>
<path d="M55.2181 40.5059C55.1692 41.0119 55.1802 41.5339 55.0591 42.0221C54.8042 43.0489 53.7051 43.7928 52.7014 43.6877C51.5192 43.5647 50.5937 42.6947 50.5356 41.556C50.4941 40.742 50.4812 39.9101 50.5968 39.1083C50.7704 37.9573 51.9263 37.1967 53.1489 37.3148C54.2241 37.4187 55.1545 38.4443 55.1728 39.5491C55.1783 39.8664 55.1728 40.1843 55.1728 40.5016L55.2181 40.5059Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="44" height="17" fill="white" transform="translate(18 32)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Otter',
      to: 'https://otter.ai/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#25184A"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M39.9664 21H39.9998C40.5117 21.5753 41.0247 22.1508 41.5387 22.7263C42.1842 23.4479 42.8315 24.1683 43.4806 24.8874C44.5617 26.0885 45.6429 27.2894 46.7243 28.4903C47.8094 29.6952 48.8945 30.9004 49.9794 32.1059C50.4425 32.6193 50.9013 33.1393 51.365 33.6535C51.5263 33.8325 51.6959 34.004 51.8615 34.1789L51.8732 34.2217C51.8716 34.2214 51.87 34.2215 51.8684 34.2219C51.8668 34.2223 51.8654 34.2231 51.8641 34.2241C51.8628 34.2251 51.8618 34.2264 51.8611 34.2279C51.8603 34.2294 51.8599 34.231 51.8599 34.2327C51.7824 34.2282 51.7049 34.2204 51.6261 34.2204C43.8719 34.2204 36.1174 34.2204 28.3627 34.2204C28.2796 34.2204 28.1958 34.2145 28.1133 34.2111C28.116 34.2035 28.1176 34.1956 28.118 34.1875C28.5355 33.7286 28.9525 33.2694 29.3687 32.81C30.0142 32.0946 30.6585 31.3781 31.3016 30.6606L34.5133 27.0933C35.1577 26.3769 35.8019 25.6603 36.4458 24.9435C37.4573 23.8207 38.4689 22.6986 39.4806 21.5772C39.6485 21.3906 39.8048 21.1927 39.9664 21Z" fill="#FDEDB6"/>
<path d="M28.6871 22.2694C28.7385 22.2458 28.7873 22.2074 28.8417 22.2009C29.3354 22.1429 29.8287 22.0884 30.3215 22.0373C30.7051 21.9969 31.0894 21.9633 31.4734 21.9223C31.9225 21.8743 32.3709 21.8196 32.8196 21.7706C33.1869 21.7299 33.5542 21.6912 33.9215 21.6505C34.4146 21.596 34.9071 21.5392 35.4003 21.4858C35.7565 21.4475 36.1128 21.4143 36.4687 21.3763C36.9362 21.3266 37.4003 21.2736 37.8664 21.2243C38.2507 21.1828 38.6343 21.1459 39.0196 21.1017C39.2687 21.073 39.5168 21.0333 39.7652 20.999H39.9656C39.8039 21.1917 39.6477 21.3896 39.4797 21.5762C38.4694 22.699 37.4578 23.8205 36.445 24.9408C35.7995 25.6565 35.1553 26.3731 34.5125 27.0906L31.3014 30.661C30.6559 31.3771 30.0116 32.0936 29.3686 32.8104C28.9536 33.2705 28.5372 33.7292 28.1191 34.1865C28.1278 34.0054 28.1362 33.8244 28.1452 33.6433C28.1786 32.9913 28.212 32.3391 28.2454 31.6869C28.2667 31.2789 28.2898 30.8708 28.3121 30.4624C28.3462 29.8047 28.3796 29.1469 28.4123 28.489C28.4337 28.0754 28.4567 27.6616 28.4791 27.2477C28.5125 26.5898 28.5489 25.9322 28.5792 25.2742C28.6053 24.718 28.6223 24.1614 28.6494 23.6051C28.663 23.3278 28.6981 23.0516 28.7095 22.7739C28.7161 22.6066 28.6954 22.4378 28.6871 22.2694Z" fill="#FCD131"/>
<path d="M40.2337 21C40.4885 21.0342 40.7432 21.0712 40.9983 21.1027C41.4785 21.1609 41.9586 21.2184 42.4391 21.2711C42.7953 21.3105 43.1526 21.3396 43.5075 21.3779C44.0995 21.443 44.6908 21.5148 45.2828 21.5799C45.6501 21.6196 46.0174 21.6463 46.3846 21.6863C46.8608 21.7384 47.3356 21.801 47.8114 21.8527C48.1836 21.8935 48.5576 21.9212 48.9299 21.9605C49.2908 21.9999 49.6504 22.0513 50.0114 22.092C50.2628 22.1208 50.5155 22.1382 50.7673 22.1653C50.9296 22.1831 51.0908 22.2087 51.2528 22.231C51.2631 22.3436 51.2778 22.4562 51.2838 22.5692C51.3185 23.2269 51.3519 23.8845 51.384 24.542C51.4053 24.9558 51.4284 25.3697 51.4508 25.7832C51.4848 26.4352 51.5182 27.0872 51.5509 27.7392C51.5726 28.1586 51.5953 28.5779 51.6177 28.9976C51.6518 29.6551 51.6851 30.3127 51.7179 30.9704C51.7392 31.3843 51.7619 31.7978 51.7846 32.2116C51.8189 32.8691 51.853 33.5267 51.8868 34.1844C51.8782 34.1839 51.8697 34.1822 51.8614 34.1796C51.6945 34.0047 51.5275 33.8332 51.3649 33.6542C50.9012 33.1407 50.4424 32.6214 49.9793 32.1065C48.8948 30.9004 47.8098 29.6952 46.7242 28.491C45.6431 27.2901 44.5618 26.0891 43.4805 24.8881C42.8329 24.1674 42.1858 23.4468 41.5389 22.7263C41.0249 22.1521 40.512 21.5767 40 21H40.2337Z" fill="#FCD131"/>
<path d="M51.886 34.1834C51.852 33.5259 51.8179 32.8683 51.7838 32.2106C51.7625 31.7968 51.7398 31.3833 51.7171 30.9694C51.683 30.3117 51.6496 29.6541 51.6169 28.9966C51.5955 28.5769 51.5728 28.1576 51.5501 27.7382C51.5161 27.0862 51.4827 26.4342 51.4499 25.7822C51.4286 25.3687 51.4055 24.9548 51.3832 24.541C51.3491 23.8833 51.3157 23.2257 51.283 22.5682C51.277 22.4552 51.2623 22.3426 51.252 22.23C51.482 22.5353 51.7164 22.8376 51.9414 23.1471C54.6126 26.8213 57.2828 30.4955 59.9521 34.1697C59.9665 34.1857 59.9824 34.2003 59.9995 34.2132V34.2474H59.9631C57.339 34.2474 54.7151 34.2468 52.0914 34.2454C52.0202 34.2418 51.9493 34.2342 51.879 34.2228C51.8817 34.2094 51.884 34.1964 51.886 34.1834Z" fill="#FCAC00"/>
<path d="M28.6875 22.2695C28.6958 22.4376 28.7165 22.6067 28.7098 22.7741C28.6985 23.0517 28.6634 23.328 28.6497 23.6053C28.6227 24.1615 28.6057 24.7181 28.5796 25.2744C28.5489 25.9323 28.5129 26.5899 28.4795 27.2479C28.4581 27.6617 28.4351 28.0756 28.4127 28.4891C28.3786 29.1471 28.3452 29.8049 28.3125 30.4626C28.2912 30.871 28.2681 31.279 28.2457 31.6871C28.2117 32.3391 28.1783 32.9912 28.1456 33.6434C28.1366 33.8245 28.1282 34.0056 28.1195 34.1867C28.1192 34.1948 28.1176 34.2027 28.1149 34.2103L28.1119 34.25C26.0175 34.25 23.9231 34.2489 21.8287 34.2466C21.2277 34.2466 20.6287 34.2493 20.0287 34.2507L20.0314 34.2531L20 34.2137V34.1795C20.1272 34.0172 20.2591 33.8587 20.3803 33.692C23.1255 29.916 25.8702 26.1394 28.6144 22.3623C28.6371 22.3305 28.6628 22.301 28.6875 22.2695Z" fill="#FCAC00"/>
<path d="M20 34.2134L20.0322 34.2537C20.0214 34.2527 20.0106 34.2509 20 34.2485V34.2134Z" fill="#F39100"/>
<path d="M28.1133 34.2497L28.1163 34.21C28.1994 34.2134 28.2832 34.2192 28.3657 34.2192C36.1204 34.2192 43.8749 34.2192 51.6291 34.2192C51.7066 34.2192 51.7841 34.2271 51.8629 34.2312C51.7627 34.4462 51.6705 34.6639 51.5657 34.8758C51.0475 35.9176 50.5286 36.9581 50.0091 37.9974C49.5034 39.012 48.9974 40.0263 48.4912 41.0403C47.945 42.1357 47.3996 43.2317 46.8552 44.3282C46.367 45.3073 45.8788 46.2861 45.3904 47.2646C44.8508 48.3455 44.3116 49.4265 43.7727 50.5078C43.2772 51.5019 42.7815 52.496 42.2856 53.4901C41.5871 54.8963 40.8898 56.3032 40.1937 57.7109C40.1687 57.7622 40.166 57.8249 40.1527 57.882L40.146 57.8765L40.1036 57.9481C40.0525 57.9885 40.0482 58.1682 39.9303 58.0094L39.8969 57.9707V57.9731C39.8952 57.9395 39.8889 57.9063 39.8782 57.8745C39.5861 57.2925 39.2909 56.7106 38.9994 56.1287C38.4875 55.1044 37.9764 54.0797 37.4662 53.0543C36.9418 51.9979 36.4173 50.9418 35.8929 49.8861C35.3847 48.8662 34.8762 47.8466 34.3674 46.8272C33.8485 45.7872 33.3299 44.747 32.8114 43.7066C32.2955 42.6714 31.7794 41.6365 31.2632 40.6017C30.727 39.5262 30.1911 38.4504 29.6555 37.3744C29.2041 36.4652 28.7543 35.5553 28.3063 34.6447C28.2412 34.5133 28.1767 34.3815 28.1133 34.2497Z" fill="#FCAC00"/>
<path d="M40.1543 57.8814C40.1677 57.8239 40.1703 57.7613 40.1954 57.7103C40.8912 56.3026 41.5885 54.8957 42.2872 53.4895C42.7816 52.4944 43.2768 51.5006 43.773 50.5079C44.3114 49.427 44.8498 48.3463 45.388 47.2657C45.8759 46.2867 46.3642 45.3079 46.8528 44.3293C47.3988 43.2339 47.9442 42.1379 48.4889 41.0414C48.9955 40.0267 49.5023 39.0121 50.0094 37.9974C50.5278 36.9575 51.0457 35.9173 51.563 34.8769C51.6678 34.665 51.7613 34.4472 51.8601 34.2323C51.8603 34.2306 51.8607 34.229 51.8615 34.2276C51.8622 34.2261 51.8632 34.2248 51.8645 34.2238C51.8658 34.2228 51.8672 34.222 51.8687 34.2216C51.8703 34.2212 51.8719 34.2211 51.8735 34.2213H51.8795C51.9498 34.2327 52.0207 34.2403 52.0919 34.2439C54.716 34.2455 57.3399 34.2462 59.9637 34.246C59.4167 34.9039 58.8696 35.5616 58.3222 36.2191C57.4074 37.3131 56.4912 38.4061 55.5737 39.4978C54.751 40.4772 53.9243 41.4532 53.1029 42.4336C52.4371 43.2277 51.7783 44.0277 51.1126 44.8223C50.2879 45.8061 49.4575 46.7851 48.6331 47.7696C47.7947 48.7702 46.9636 49.7767 46.1246 50.7776C45.4732 51.556 44.8154 52.3283 44.1636 53.1054C43.4869 53.9132 42.8144 54.7249 42.1386 55.5338C41.5067 56.2908 40.8736 57.0466 40.2394 57.8013C40.2129 57.83 40.1844 57.8568 40.1543 57.8814Z" fill="#E96C00"/>
<path d="M28.1141 34.25C28.1809 34.3818 28.2437 34.5136 28.3088 34.6451C28.7586 35.5549 29.2084 36.4648 29.658 37.3747C30.1922 38.4514 30.7281 39.5272 31.2657 40.6021C31.7817 41.637 32.2977 42.672 32.8139 43.7069C33.3321 44.7469 33.8503 45.7871 34.3685 46.8275C34.8756 47.8474 35.384 48.8671 35.8937 49.8865C36.4197 50.9417 36.9454 51.9972 37.4707 53.0529C37.9816 54.0778 38.4926 55.1026 39.0039 56.1273C39.2954 56.7092 39.5906 57.2912 39.8827 57.8731C39.8934 57.9049 39.8997 57.9381 39.9014 57.9717C39.4033 57.3816 38.9051 56.7912 38.4069 56.2006C36.8043 54.289 35.2024 52.377 33.6012 50.4643C31.8686 48.3972 30.136 46.3296 28.4036 44.2615C26.9505 42.5271 25.497 40.7927 24.043 39.0582C22.7308 37.4925 21.4186 35.9266 20.1064 34.3606C20.0777 34.3264 20.055 34.2873 20.0293 34.2507C20.6303 34.2507 21.2293 34.2463 21.8293 34.2466C23.9235 34.2475 26.0184 34.2487 28.1141 34.25Z" fill="#E96C00"/>
<path d="M40.1055 57.9475L40.1479 57.876L40.1055 57.9475Z" fill="#E96C00"/>
<path d="M39.8984 57.9707L39.9327 58.0104L39.8984 57.9707Z" fill="#E96C00"/>
<path d="M51.879 34.2226H51.873C51.869 34.2086 51.8653 34.1946 51.8613 34.1802C51.8696 34.1828 51.8781 34.1844 51.8867 34.185C51.884 34.1969 51.8817 34.21 51.879 34.2226Z" fill="#FCAC00"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="37.0732" fill="white" transform="translate(20 21)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Sketch',
      to: 'https://www.sketch.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#531755"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M29.4723 38.9364C27.6979 38.9364 25.9272 38.9402 24.1527 38.9326C23.5523 38.9288 22.9786 38.7996 22.4314 38.5337C21.9906 38.3209 21.584 38.0663 21.2459 37.713C20.6493 37.0975 20.2389 36.3832 20.0793 35.5246C19.9996 35.1028 19.992 34.6811 20.0223 34.2632C20.0565 33.8414 20.1781 33.4311 20.3529 33.0398C20.5467 32.6028 20.8013 32.2191 21.1243 31.8695C21.6258 31.33 22.2186 30.9425 22.9216 30.7183C23.2635 30.6119 23.6093 30.555 23.9703 30.5284C24.677 30.4752 25.3838 30.5018 26.0906 30.5018C28.9214 30.4942 31.7522 30.4942 34.583 30.5018C35.1682 30.5018 35.7457 30.5816 36.2891 30.8133C36.6805 30.9805 37.049 31.1933 37.3834 31.4668C37.847 31.8429 38.2042 32.2989 38.474 32.8232C38.6639 33.1955 38.8045 33.5869 38.8615 34.0086C38.8957 34.2632 38.9375 34.5177 38.9337 34.7761C38.9261 35.2738 38.8235 35.7563 38.6525 36.2236C38.4018 36.8999 37.9838 37.4622 37.4442 37.9296C36.9351 38.3703 36.3423 38.6666 35.6849 38.8186C35.3544 38.8946 35.02 38.9364 34.678 38.9364C32.9415 38.9326 31.2088 38.9364 29.4723 38.9364Z" fill="#66C1ED"/>
<path d="M50.5491 41.0718C52.2704 41.0718 53.9955 41.0718 55.7168 41.0718C56.8339 41.0718 57.818 41.4403 58.6426 42.1964C59.2581 42.7587 59.6609 43.454 59.8699 44.2633C59.9915 44.7344 60.0257 45.2131 59.9763 45.6919C59.8965 46.4783 59.6153 47.1926 59.1328 47.8233C58.6198 48.4882 57.9662 48.9708 57.1721 49.2481C56.8263 49.3697 56.4729 49.4533 56.1044 49.4647C55.6674 49.4761 55.2342 49.4951 54.7972 49.4951C51.6624 49.4989 48.5276 49.4989 45.3928 49.4951C44.4771 49.4951 43.626 49.2633 42.8698 48.72C42.0339 48.1197 41.4791 47.3294 41.2131 46.334C41.1143 45.9578 41.0535 45.5817 41.0687 45.1941C41.1067 44.2405 41.4107 43.3818 42.0187 42.6371C42.543 41.995 43.2004 41.5467 43.9869 41.2845C44.4011 41.1478 44.8305 41.0794 45.2675 41.0756C47.0305 41.0718 48.7898 41.0718 50.5491 41.0718Z" fill="#E2B625"/>
<path d="M30.5274 50.5432C30.5274 48.8145 30.5312 47.0858 30.5274 45.3571C30.5236 44.4528 30.7592 43.6284 31.2797 42.8875C31.8763 42.0402 32.6742 41.4817 33.6774 41.2158C34.0346 41.1208 34.3955 41.0638 34.7603 41.0752C35.7369 41.1018 36.6108 41.4095 37.3707 42.0326C38.0091 42.5531 38.4537 43.2066 38.7083 43.9855C38.845 44.3996 38.9172 44.829 38.9172 45.2659C38.9172 48.7841 38.9248 52.3062 38.9134 55.8244C38.9096 56.8768 38.5373 57.8039 37.8305 58.5941C37.2302 59.2666 36.4854 59.6884 35.6191 59.8935C35.0871 60.0189 34.5437 60.0265 34.0004 59.9277C33.0124 59.7492 32.1917 59.278 31.5381 58.522C31.0024 57.9027 30.668 57.1846 30.5692 56.3639C30.5426 56.1397 30.5274 55.9118 30.5274 55.6838C30.5274 53.9741 30.5274 52.2606 30.5274 50.5432Z" fill="#D3215B"/>
<path d="M49.4624 34.9886C49.4092 35.323 49.3902 35.6611 49.2725 35.9841C49.1585 36.2956 49.0293 36.5996 48.8621 36.8883C48.6227 37.3025 48.2921 37.6406 47.9387 37.9522C47.4828 38.3549 46.9432 38.6246 46.3504 38.7766C46.0959 38.8412 45.8375 38.8906 45.5753 38.9324C45.4651 38.9514 45.3473 38.921 45.2333 38.9286C44.8153 38.9476 44.4164 38.8298 44.0174 38.7234C43.6184 38.617 43.265 38.4119 42.9193 38.2029C42.7597 38.1079 42.6153 37.9825 42.4785 37.8534C42.2619 37.6444 42.0453 37.4354 41.8705 37.1847C41.6919 36.9225 41.5324 36.6528 41.4146 36.364C41.3044 36.098 41.2246 35.8207 41.1486 35.5471C41.1106 35.4066 41.1106 35.2546 41.0916 35.1064C41.0878 34.9658 41.0878 34.8253 41.084 34.6809C41.084 34.6353 41.0878 34.5935 41.0878 34.5479C41.0878 31.1816 41.0878 27.8154 41.0878 24.4491C41.0878 24.4035 41.084 24.3617 41.084 24.3161C41.0878 24.1604 41.0878 24.0084 41.0916 23.8526C41.1372 23.1421 41.3842 22.4962 41.7603 21.9073C42.1555 21.2918 42.6989 20.8207 43.3562 20.4825C43.7666 20.2698 44.1998 20.1406 44.652 20.0646C45.0851 19.9924 45.5107 20.0114 45.9439 20.0836C46.3846 20.152 46.7912 20.3002 47.1826 20.4901C47.46 20.6269 47.707 20.8207 47.9539 21.0107C48.3225 21.2956 48.5999 21.6528 48.8431 22.0403C49.1205 22.4848 49.3066 22.9673 49.4016 23.4803C49.432 23.6398 49.4396 23.8032 49.4548 23.9666C49.4548 24.0882 49.451 24.206 49.451 24.3275C49.451 27.7546 49.451 31.1816 49.451 34.6087C49.4586 34.7341 49.4624 34.8594 49.4624 34.9886Z" fill="#4CB77C"/>
<path d="M38.9341 28.4121C38.8467 28.4121 38.7783 28.4121 38.7099 28.4121C37.399 28.4121 36.088 28.4083 34.7771 28.4159C34.0476 28.4197 33.3598 28.2564 32.7252 27.9068C32.2541 27.6485 31.8399 27.3141 31.4979 26.8924C31.1217 26.4327 30.852 25.9273 30.6848 25.3612C30.6012 25.0763 30.548 24.7913 30.5366 24.495C30.5328 24.3962 30.5024 24.2974 30.5062 24.1986C30.51 24.0352 30.5176 23.8719 30.5442 23.7123C30.5822 23.4919 30.6316 23.2716 30.6886 23.055C30.8178 22.5459 31.0572 22.0861 31.3763 21.672C31.6803 21.2769 32.0413 20.9349 32.4593 20.6652C32.9 20.384 33.3788 20.1978 33.8956 20.0877C34.3325 19.9927 34.7771 19.9813 35.2103 20.0307C35.8942 20.1067 36.525 20.3498 37.1026 20.745C37.6877 21.1477 38.1323 21.6644 38.4629 22.2799C38.6415 22.6143 38.7783 22.9752 38.8467 23.3513C38.8923 23.6021 38.9303 23.8605 38.9303 24.115C38.9379 25.4828 38.9341 26.8506 38.9341 28.2184C38.9341 28.2716 38.9341 28.3247 38.9341 28.4121Z" fill="#66C2ED"/>
<path d="M41.07 51.5925C41.1498 51.5925 41.2068 51.5925 41.2638 51.5925C42.6203 51.5925 43.9731 51.5811 45.3296 51.5963C46.3061 51.6077 47.1762 51.9306 47.9362 52.5537C48.6619 53.1502 49.1369 53.9063 49.3573 54.8182C49.4181 55.0727 49.4447 55.3387 49.4637 55.6009C49.5169 56.3607 49.3535 57.0826 48.9925 57.7475C48.415 58.8075 47.541 59.518 46.3707 59.8486C45.8691 59.9892 45.36 60.031 44.8508 59.9778C43.9807 59.8866 43.2017 59.5522 42.533 58.9709C41.9402 58.4542 41.5222 57.8235 41.279 57.075C41.1878 56.7939 41.1194 56.5051 41.1004 56.2088C41.0852 55.939 41.0738 55.6654 41.07 55.3957C41.0662 54.1989 41.07 53.0021 41.07 51.8052C41.07 51.7369 41.07 51.6761 41.07 51.5925Z" fill="#E2B625"/>
<path d="M28.4045 41.0754C28.4045 41.1628 28.4045 41.2236 28.4045 41.2882C28.4045 42.6218 28.4121 43.9592 28.4007 45.2927C28.3931 46.2882 28.0701 47.181 27.428 47.9523C26.8314 48.6704 26.0791 49.1377 25.1785 49.3581C24.4604 49.5329 23.746 49.5139 23.0355 49.3087C22.2375 49.0769 21.5726 48.64 21.0292 48.0169C20.5618 47.4812 20.2616 46.8619 20.0983 46.178C19.9995 45.7525 19.9729 45.3117 20.0223 44.8786C20.1021 44.1453 20.3414 43.4728 20.7746 42.8687C21.223 42.238 21.7967 41.7631 22.5035 41.444C22.9215 41.2578 23.3546 41.1362 23.8106 41.102C24.012 41.0868 24.2134 41.0754 24.4148 41.0754C25.6725 41.0716 26.934 41.0754 28.1917 41.0754C28.2563 41.0754 28.3209 41.0754 28.4045 41.0754Z" fill="#D3225B"/>
<path d="M51.5938 38.9284C51.5938 38.4839 51.5938 38.066 51.5938 37.648C51.5938 36.7096 51.5938 35.7749 51.5938 34.8365C51.5938 34.2704 51.6849 33.7195 51.8939 33.1951C52.0725 32.7468 52.3233 32.3441 52.6387 31.9793C53.0111 31.5462 53.4518 31.2119 53.961 30.9649C54.7134 30.6002 55.4999 30.471 56.3283 30.5736C56.9932 30.6572 57.5936 30.8889 58.1446 31.2651C59.1287 31.9413 59.7177 32.8722 59.9381 34.0424C60.0065 34.4034 60.0179 34.7719 59.9761 35.1366C59.9077 35.7635 59.7177 36.3486 59.3871 36.892C59.2161 37.1731 59.0223 37.4353 58.7905 37.667C58.3232 38.1344 57.776 38.4915 57.1452 38.7005C56.6627 38.86 56.1687 38.9322 55.6595 38.9322C54.3752 38.9284 53.0909 38.9322 51.8065 38.9322C51.7381 38.9284 51.6773 38.9284 51.5938 38.9284Z" fill="#4CB77C"/>
<path d="M49.4628 34.9888C49.4628 34.8635 49.459 34.7343 49.459 34.6089C49.459 31.1818 49.459 27.7548 49.459 24.3277C49.459 24.2062 49.4628 24.0884 49.4628 23.9668C49.4742 23.9934 49.4932 24.02 49.4932 24.0504C49.4969 24.1264 49.4969 24.2024 49.4969 24.2783C49.4969 27.7396 49.4969 31.2008 49.4932 34.6621C49.4969 34.7685 49.5349 34.8824 49.4628 34.9888Z" fill="#BDD5C9"/>
<path d="M41.0966 23.8525C41.0928 24.0083 41.0928 24.1603 41.089 24.3161C41.051 24.1603 41.0434 24.0045 41.0966 23.8525Z" fill="#ACD2BE"/>
<path d="M41.0885 34.6772C41.0923 34.8178 41.0923 34.9584 41.0961 35.1028C41.0391 34.9622 41.0505 34.8216 41.0885 34.6772Z" fill="#ACD2BE"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Slack',
      to: 'https://slack.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="black"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M60.0003 39.629C59.9903 39.6657 59.9733 39.7019 59.9713 39.7391C59.9326 40.4665 59.7471 41.1602 59.4863 41.8345C59.1149 42.8022 58.5482 43.6819 57.8219 44.4182C56.9504 45.3038 56.0719 46.1817 55.1954 47.0628C52.9601 49.3107 50.7249 51.5588 48.4899 53.8069C48.1244 54.1757 47.7108 54.4704 47.2344 54.6736C46.7109 54.8969 46.1631 55.0117 45.5951 54.9862C44.6451 54.9436 43.8117 54.6054 43.1052 53.9596C43.0719 53.9296 43.0372 53.9022 43.0052 53.8745C43.0297 53.7982 43.0829 53.7639 43.1244 53.7219C44.2861 52.5518 45.4486 51.3823 46.6119 50.2134C49.3973 47.4124 52.1828 44.6117 54.9686 41.8114C55.3998 41.3782 55.7353 40.8857 55.9391 40.3066C56.7353 38.0501 55.3604 35.661 53.0974 35.2007C51.7419 34.9249 50.5474 35.2845 49.5664 36.2636C47.1581 38.6694 44.7569 41.0823 42.3629 43.5025C40.7012 45.1734 39.0392 46.8441 37.3769 48.5146C37.2846 48.6114 37.1851 48.7011 37.0794 48.7829C35.9056 49.6514 34.2492 48.9647 34.0304 47.5218C33.9366 46.9027 34.1137 46.3626 34.5304 45.9004C34.5714 45.855 34.6157 45.8124 34.6589 45.769C38.6976 41.7077 42.7357 37.6463 46.7732 33.5846C47.5126 32.8404 48.3511 32.2484 49.3171 31.8412C50.0347 31.5385 50.794 31.3473 51.5688 31.2741C55.3843 30.9087 58.7884 33.3774 59.7566 36.9756C59.8444 37.3046 59.9104 37.6391 59.9543 37.9768C59.9661 38.0652 59.9626 38.1555 59.9709 38.245C59.9744 38.2824 59.9901 38.3185 60.0003 38.3552V39.629Z" fill="white"/>
<path d="M34.6 23C34.6411 23.0131 34.683 23.0234 34.7255 23.0307C35.6032 23.1173 36.356 23.4774 36.9962 24.0827C37.0134 24.1019 37.0295 24.1221 37.0443 24.1432C37.0017 24.1893 36.9623 24.2344 36.9202 24.2774C35.5455 25.66 34.1706 27.0426 32.7953 28.4252C30.2182 31.0168 27.6408 33.6082 25.063 36.1995C24.5943 36.6703 24.2475 37.2141 24.0553 37.8533C23.384 40.0848 24.7573 42.3219 26.914 42.7817C28.2807 43.0732 29.4847 42.7166 30.4797 41.7328C31.874 40.3539 33.2483 38.9545 34.6312 37.5638C37.3143 34.8654 39.9973 32.1668 42.6802 29.4681C42.8745 29.2726 43.0852 29.1045 43.3383 28.9917C44.5005 28.4737 45.8467 29.2153 46.0228 30.4812C46.1048 31.0704 45.9503 31.6 45.5562 32.0513C45.5048 32.1099 45.4493 32.1649 45.3943 32.2202C41.3558 36.2821 37.3174 40.3442 33.2793 44.4065C32.4992 45.1921 31.61 45.8064 30.5822 46.2139C29.8008 46.5234 28.9745 46.7026 28.1358 46.7443C24.9917 46.9086 22.1118 45.1387 20.7792 42.3371C20.427 41.6009 20.1962 40.8121 20.0958 40.0013C20.0753 39.8352 20.0583 39.6686 20.0363 39.5026C20.032 39.4649 20.0127 39.4301 20 39.3944V38.6232C20.0123 38.5808 20.0305 38.5394 20.0362 38.4958C20.0582 38.3299 20.0753 38.1633 20.096 37.9971C20.2135 37.0532 20.5058 36.1398 20.9578 35.3041C21.3275 34.6157 21.7972 34.0042 22.3472 33.4517C25.4082 30.3754 28.4681 27.2984 31.527 24.2207C31.5545 24.193 31.5817 24.1652 31.6103 24.1379C32.27 23.4913 33.0528 23.1101 33.9748 23.0282C34.0062 23.0255 34.0365 23.0097 34.0673 23H34.6Z" fill="white"/>
<path d="M44.5319 23C44.5743 23.0099 44.6163 23.0256 44.6591 23.0285C46.1924 23.1314 47.5656 23.662 48.7904 24.5896C49.0801 24.8069 49.3515 25.0475 49.6021 25.3093C50.5688 26.3275 50.1688 28.0159 48.8453 28.4727C48.1228 28.7218 47.4668 28.5694 46.8934 28.062C46.7684 27.9513 46.6509 27.8313 46.5208 27.7267C45.7178 27.0874 44.7998 26.8108 43.7836 26.8954C42.8653 26.9729 42.0713 27.3442 41.4128 27.9954C40.9094 28.4924 40.4138 28.9973 39.9149 29.4989C36.3525 33.0807 32.7898 36.6627 29.2269 40.2447C29.1524 40.3197 29.0794 40.3973 28.9981 40.4643C28.4283 40.9337 27.7863 41.0656 27.0943 40.8154C26.3954 40.5626 25.9706 40.0443 25.8461 39.3092C25.7426 38.6967 25.9111 38.1473 26.3283 37.6818C26.3654 37.6404 26.4053 37.6014 26.4449 37.5618C30.5019 33.4819 34.5587 29.4016 38.6153 25.321C39.4486 24.4829 40.4134 23.8532 41.5244 23.4533C42.1163 23.2426 42.7311 23.1039 43.3558 23.0402C43.4274 23.0327 43.5003 23.0355 43.5724 23.0285C43.6151 23.0218 43.6572 23.0123 43.6986 23H44.5319Z" fill="white"/>
<path d="M35.997 55.0006C33.8231 54.948 31.997 54.2174 30.4873 52.7237C30.1175 52.3579 29.922 51.9082 29.9125 51.3897C29.8941 50.3896 30.585 49.632 31.4201 49.4565C32.0983 49.3142 32.6988 49.4849 33.198 49.9733C33.6688 50.434 34.2088 50.7818 34.8431 50.9518C36.2895 51.3394 37.5741 51.0246 38.655 49.9769C39.4628 49.1939 40.245 48.3844 41.0383 47.5863L50.8191 37.7501C50.8701 37.6988 50.92 37.6459 50.9733 37.5973C51.54 37.0811 52.1973 36.9199 52.9198 37.1653C53.6423 37.4107 54.076 37.9364 54.2031 38.6961C54.3013 39.2806 54.1428 39.8025 53.7665 40.2564C53.7133 40.3206 53.654 40.3799 53.5951 40.4393C49.5455 44.5118 45.4959 48.5847 41.4463 52.6578C40.563 53.5463 39.5393 54.2027 38.3518 54.5968C37.7827 54.7881 37.1925 54.9087 36.5943 54.9559C36.3736 54.972 36.1521 54.9882 35.997 55.0006Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="32" fill="white" transform="translate(20 23)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Squarespace',
      to: 'https://www.squarespace.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#00BE71"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M39.1731 28.9976C39.2987 28.7865 39.3587 28.7262 39.373 28.6571C39.7537 26.7194 40.9995 25.4908 42.5927 24.5502C42.9353 24.3464 43.2922 24.1689 43.6605 24.0191C43.7795 23.9714 44.0536 24.0191 44.0802 24.095C44.1525 24.2953 44.1383 24.5308 44.1392 24.7516C44.1392 24.7934 44.0498 24.8372 43.9993 24.8761C42.5879 25.9578 42.0835 27.4743 42.0007 29.1999C41.9845 29.5549 42.0959 29.7038 42.4642 29.7651C44.991 30.1824 47.3275 31.1065 49.3985 32.6589C52.3742 34.8872 54.3862 37.8145 55.4343 41.4408C55.5457 41.8299 55.7075 41.9612 56.1006 41.8951C59.957 41.2492 63.0967 45.1353 61.6339 48.9961C60.7174 51.4153 58.005 52.8189 55.5324 52.0651C55.0222 51.9094 54.8452 52.0651 54.6444 52.5086C54.2999 53.2703 53.8764 53.995 53.4871 54.7362C53.3415 55.0124 53.1711 55.0368 52.9161 54.8578C51.8025 54.0796 50.6862 53.3111 49.5546 52.5641C49.1967 52.3287 49.1634 52.1575 49.3899 51.7674C51.0564 48.9027 51.5989 45.8434 50.6367 42.6237C49.8801 40.0897 48.1041 38.6977 45.5525 38.3689C44.6198 38.2493 43.7186 38.507 42.8877 38.936C42.0207 39.3815 41.2127 39.9195 40.5702 40.6869C40.1382 41.2035 39.8907 41.185 39.4529 40.7045C38.2813 39.4175 36.8832 38.5177 35.1406 38.3854C34.5094 38.3445 33.8764 38.4267 33.2752 38.6277C30.8959 39.4204 29.554 41.1363 29.1485 43.6548C28.7621 46.0545 29.0143 48.3657 29.987 50.5845C30.1993 51.0373 30.4426 51.4742 30.7151 51.8919C30.8636 52.1322 30.8607 52.2936 30.6199 52.4561C29.4182 53.2719 28.2197 54.0926 27.0243 54.9181C26.7692 55.0951 26.6436 54.9589 26.5351 54.7586C26.1201 53.9755 25.6881 53.2022 25.3112 52.3987C25.1303 52.0096 24.9457 51.9347 24.5412 52.0534C21.0712 53.0757 17.7468 50.2781 18.0152 46.5778C18.2275 43.6499 20.9979 41.4126 23.8541 41.8873C24.2928 41.9603 24.506 41.8649 24.6326 41.3912C25.4996 38.1481 27.2717 35.5042 29.7786 33.3467C31.7736 31.6243 34.1644 30.4487 36.7262 29.9304C37.1412 29.8438 37.2497 29.6639 37.1069 29.2612C36.8509 28.5306 36.4987 27.8663 35.8973 27.377C35.6803 27.1999 35.6346 27.0667 35.7878 26.8167C35.941 26.5667 36.0733 26.4276 36.3864 26.5832C37.4067 27.0998 38.3851 27.66 39.0237 28.6697C39.0804 28.7756 39.1303 28.8851 39.1731 28.9976ZM55.9178 47.6741L55.8112 47.7189C55.9207 47.9611 55.9683 48.2879 56.1519 48.4309C56.7116 48.8638 57.6557 48.7305 58.1572 48.215C58.6588 47.6994 58.7207 46.6819 58.2933 46.0535C57.8993 45.4699 57.018 45.2131 56.3823 45.5351C56.2922 45.5878 56.2138 45.6592 56.1522 45.7446C56.0906 45.83 56.0471 45.9276 56.0244 46.0312C55.9511 46.5739 55.9483 47.1255 55.9178 47.6741ZM24.0911 47.6595C24.0616 47.1274 24.0673 46.5895 23.9845 46.0662C23.9585 45.95 23.9081 45.8411 23.8367 45.7468C23.7654 45.6526 23.6749 45.5754 23.5714 45.5205C23.2929 45.3965 22.9841 45.3621 22.6859 45.4217C22.3878 45.4812 22.1144 45.6321 21.9021 45.8541C21.6718 46.0925 21.5155 46.395 21.4527 46.7238C21.3899 47.0525 21.4234 47.3929 21.549 47.7023C21.6769 48.0006 21.8868 48.2545 22.1533 48.4331C22.4197 48.6117 22.7312 48.7072 23.0499 48.7081C23.8122 48.6858 24.132 48.3667 24.0911 47.6595Z" fill="white"/>
</svg>
`,
      name: 'Survey Monkey',
      to: 'https://www.surveymonkey.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#F4EAD5"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<path d="M32.0837 54.2151C31.7037 54.178 31.3223 54.1509 30.9441 54.0994C28.1369 53.7176 25.5524 52.7983 23.3735 50.9226C22.0664 49.7986 21.0937 48.417 20.3353 46.8764C19.2814 44.7357 18.556 42.4904 18.1971 40.1298C17.9558 38.5507 17.9006 36.973 18.2342 35.3964C18.642 33.4733 19.6536 31.9204 21.116 30.6367C22.5012 29.4212 24.0949 28.5542 25.7752 27.8298C27.6079 27.0399 29.5051 26.4675 31.4798 26.168C33.0252 25.9337 34.5699 25.92 36.099 26.284C37.8379 26.6977 39.2592 27.6415 40.4639 28.9363C41.8355 30.4091 42.7863 32.1369 43.5318 33.9882C44.1149 35.4372 44.5149 36.9352 44.6913 38.4902C44.6978 38.5277 44.7062 38.5648 44.7165 38.6014C45.3752 38.2901 46.0176 38.2508 46.6004 38.7245C47.1101 39.1386 47.2198 39.7195 47.1864 40.3711H44.8173C44.7717 40.5474 44.7897 40.7342 44.868 40.8986C44.9464 41.063 45.0802 41.1945 45.2459 41.2701C45.6937 41.4721 46.1489 41.2938 46.5273 40.7574L47.1123 40.995C46.884 41.4499 46.5933 41.8105 46.0844 41.9262C45.6047 42.0355 45.1413 41.9918 44.7339 41.746C44.5812 42.4596 44.4526 43.1691 44.2728 43.8657C44.1217 44.4442 43.9392 45.0141 43.726 45.5727C42.7815 48.0564 41.4385 50.2757 39.3681 51.9931C37.9907 53.136 36.3993 53.8117 34.6296 54.0653C34.2452 54.1205 33.8563 54.1439 33.4697 54.1832C33.4152 54.1887 33.3618 54.2036 33.3081 54.214L32.0837 54.2151ZM33.5664 26.2277C32.825 26.3052 32.077 26.3511 31.3423 26.4657C29.2942 26.7845 27.3388 27.4143 25.4505 28.2669C23.8669 28.9823 22.3767 29.8427 21.0867 31.0248C19.5364 32.4472 18.6156 34.1872 18.3569 36.2805C18.1923 37.6117 18.2776 38.9317 18.4874 40.247C18.8525 42.5304 19.5661 44.7016 20.5855 46.776C21.7409 49.1277 23.4054 50.9978 25.7452 52.2189C27.8878 53.3369 30.1757 53.9041 32.5934 53.9356C33.7425 53.9504 34.8735 53.8266 35.9782 53.4989C37.9977 52.8995 39.5984 51.6921 40.8954 50.0659C42.1627 48.4807 43.124 46.6736 43.7305 44.7368C44.0355 43.7689 44.2921 42.794 44.4188 41.7864C44.4459 41.618 44.4094 41.4455 44.3165 41.3023C43.8717 40.578 43.8591 39.8214 44.2932 39.0945C44.4159 38.8997 44.4611 38.666 44.42 38.4394C44.407 38.3479 44.3988 38.2541 44.3851 38.164C43.9938 35.5232 43.0306 32.9997 41.5627 30.7698C40.733 29.502 39.7196 28.4033 38.4384 27.5722C36.9575 26.6114 35.3087 26.2766 33.569 26.2288L33.5664 26.2277ZM46.4358 39.7621C46.3987 39.2628 45.998 38.9466 45.4935 39.0062C45.0946 39.0526 44.7591 39.4229 44.817 39.7621H46.4358Z" fill="#312F2A"/>
<path d="M61.9943 41.9082H61.2603V41.7035C61.2603 40.9688 61.2603 40.2341 61.2559 39.4994C61.2559 39.2877 61.1758 39.1102 60.9653 39.0253C60.7547 38.9404 60.5464 38.9756 60.3818 39.1343C60.2862 39.2262 60.189 39.3381 60.1464 39.4601C60.0615 39.7018 59.9763 39.9542 59.9611 40.207C59.9281 40.693 59.9425 41.182 59.9377 41.6694C59.9377 41.7436 59.9377 41.8147 59.9377 41.9H59.2234V41.692C59.2234 41.0003 59.2234 40.309 59.2234 39.6162C59.2234 39.2751 59.1144 39.0879 58.8898 39.0204C58.6188 38.9393 58.3589 39.0501 58.1832 39.33C58.0075 39.6099 57.9319 39.9231 57.9196 40.2449C57.9019 40.7268 57.9052 41.2087 57.8996 41.6906C57.8996 41.7628 57.8996 41.8355 57.8996 41.9182H57.1953V38.4303H57.9108V39.0023C58.204 38.6093 58.5139 38.3413 58.9769 38.3513C59.4399 38.3614 59.7553 38.5901 59.9221 39.0557C59.967 38.9923 60 38.9445 60.0333 38.8992C60.2839 38.5426 60.6124 38.3354 61.0628 38.3525C61.5447 38.371 61.8979 38.692 61.9628 39.1732C61.9724 39.2455 61.9876 39.317 61.9999 39.3889L61.9943 41.9082Z" fill="#312F2A"/>
<path d="M50.1914 40.1781C50.2081 39.3344 50.6162 38.699 51.2701 38.4651C52.4193 38.0529 53.5421 38.8217 53.5843 40.045C53.6029 40.5866 53.4772 41.0793 53.0965 41.4744C52.5846 42.0053 51.9496 42.0824 51.2872 41.8607C50.631 41.6416 50.3115 41.123 50.2122 40.4572C50.1973 40.3538 50.1966 40.2482 50.1914 40.1781ZM50.8909 40.1811C50.9765 40.4357 51.0258 40.7023 51.1504 40.9269C51.4469 41.4615 52.198 41.4941 52.5716 41.0096C52.919 40.5592 52.9338 39.8397 52.605 39.3759C52.2176 38.8295 51.4262 38.8677 51.1222 39.463C51.0114 39.6762 50.9706 39.9246 50.8909 40.1811Z" fill="#312F2A"/>
<path d="M48.2526 39.0557H47.8145V38.4255L48.25 38.4051C48.25 38.3006 48.2459 38.2039 48.25 38.1086C48.2871 37.3524 48.7623 36.9331 49.5152 36.9906C49.963 37.0247 49.986 37.0551 49.8829 37.4806C49.8655 37.5522 49.8481 37.6237 49.8277 37.7082C49.5812 37.6341 49.3261 37.5407 49.1108 37.7386C48.9173 37.9166 48.9625 38.1664 48.9566 38.4207H49.7146V39.0483H48.961V41.9215H48.2526V39.0557Z" fill="#312F2A"/>
<path d="M54.9908 41.9027H54.2969V38.429H54.9845V38.9783C55.0564 38.8923 55.0957 38.8427 55.1376 38.7952C55.4505 38.4364 55.8315 38.2785 56.3097 38.3826C56.4287 38.4086 56.458 38.4612 56.4339 38.575C56.3969 38.7359 56.3709 38.899 56.3383 39.0721C56.081 38.9891 55.8334 38.9487 55.5969 39.091C55.34 39.2467 55.1854 39.4899 55.115 39.7686C55.0467 40.0494 55.0061 40.3362 54.9938 40.6249C54.9764 41.0427 54.9908 41.4623 54.9908 41.9027Z" fill="#312F2A"/>
<path d="M40.8758 41.5906V43.3329H40.1797V38.4242H40.8666V38.7207C41.1064 38.6095 41.3292 38.4505 41.5746 38.3975C42.3957 38.2196 43.0763 38.6611 43.2846 39.4769C43.4067 39.9458 43.4016 40.4387 43.2698 40.9049C42.9732 41.9669 41.7825 42.3187 40.9344 41.6018C40.9255 41.5962 40.9111 41.5977 40.8758 41.5906ZM40.8577 40.1739C40.8506 40.4356 40.8966 40.7069 41.0508 40.9493C41.121 41.0646 41.2191 41.1604 41.3361 41.2277C41.453 41.295 41.5851 41.3317 41.7201 41.3344C41.855 41.3371 41.9885 41.3057 42.108 41.2431C42.2276 41.1806 42.3295 41.0888 42.4042 40.9764C42.6915 40.5534 42.693 39.7746 42.4072 39.3554C42.0735 38.8675 41.4308 38.856 41.0819 39.3302C40.9007 39.5759 40.8547 39.8573 40.8577 40.1739Z" fill="#312F2A"/>
<path d="M37.4826 40.9769C37.5323 40.8787 37.5668 40.8153 37.5972 40.7497C37.9308 40.0213 38.2703 39.294 38.598 38.5626C38.6499 38.4481 38.7115 38.4065 38.8345 38.4121C39.0417 38.4217 39.2493 38.4151 39.4803 38.4151C39.4462 38.5 39.4258 38.5571 39.4006 38.6119C38.7052 40.1318 38.0107 41.6522 37.3173 43.1733C37.2554 43.3097 37.1842 43.356 37.04 43.3468C36.8447 43.3345 36.6482 43.3438 36.4228 43.3438C36.464 43.2482 36.4936 43.1763 36.5259 43.1058C36.6849 42.7577 36.8524 42.4137 36.9989 42.0605C37.0359 41.961 37.0359 41.8515 36.9989 41.7521C36.554 40.7074 36.1018 39.6673 35.6514 38.6256C35.6251 38.5645 35.6025 38.5022 35.5684 38.4158C35.8278 38.4158 36.0599 38.4062 36.292 38.4232C36.3453 38.4273 36.4102 38.5163 36.4384 38.58C36.7631 39.3214 37.0819 40.0628 37.4022 40.8042C37.4244 40.8487 37.4448 40.8932 37.4826 40.9769Z" fill="#312F2A"/>
<path d="M33.1654 37.7658H31.6504V37.0615H35.4103V37.7621H33.9172V38.0053C33.9172 39.2468 33.9138 40.489 33.9213 41.73C33.9213 41.8972 33.8723 41.9465 33.7114 41.9343C33.535 41.9206 33.3571 41.931 33.1654 41.931V37.7658Z" fill="#312F2A"/>
</svg>
`,
      name: 'Typeform',
      to: 'https://www.typeform.com/',
    },
    {
      icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="12" fill="#21759B"/>
<rect x="16" y="16" width="48" height="48" fill="#590000" fill-opacity="0.01"/>
<g clip-path="url(#clip0_0_1)">
<path d="M38.8281 20H41.1719C41.2984 20.0234 41.4242 20.0523 41.5508 20.0695C42.4 20.1875 43.2609 20.25 44.0969 20.4273C48.2516 21.3117 51.7914 23.3078 54.6766 26.4273C57.4646 29.4414 59.1643 32.9831 59.7758 37.0523C59.8641 37.6414 59.9258 38.2344 60 38.8258V41.1695C59.9758 41.3086 59.9477 41.4477 59.9281 41.5875C59.8117 42.4234 59.7484 43.2711 59.5727 44.0945C58.6852 48.2625 56.682 51.8117 53.5445 54.7008C50.5362 57.4737 47.0034 59.1646 42.9461 59.7734C42.357 59.8617 41.7633 59.9234 41.1719 59.9977H38.8281C38.7016 59.9742 38.5758 59.9453 38.4492 59.9281C37.6 59.8102 36.7391 59.7477 35.9031 59.5703C31.7484 58.6859 28.2086 56.6898 25.3234 53.5703C22.5354 50.5562 20.8357 47.0146 20.2242 42.9453C20.1359 42.3562 20.0781 41.7633 20 41.1719V38.8281C20.0242 38.6891 20.0523 38.55 20.0719 38.4102C20.1883 37.5742 20.2516 36.7266 20.4273 35.9031C21.3148 31.7352 23.318 28.1859 26.4555 25.2969C29.4643 22.5245 32.9971 20.8336 37.0539 20.2242C37.643 20.1359 38.2367 20.0781 38.8281 20ZM40 22.5C30.3484 22.5 22.5164 30.3258 22.5 39.9812C22.4836 49.6367 30.3367 57.5 40 57.5C49.6508 57.5 57.4828 49.6742 57.5 40.0187C57.5172 30.3633 49.6633 22.5 40 22.5Z" fill="white"/>
<path d="M47.4637 48.785C45.6574 43.5506 43.8699 38.3756 42.073 33.16C42.5488 33.1202 42.9723 33.0889 43.3949 33.0483C43.5763 33.0365 43.7563 33.008 43.9324 32.9631C44.0599 32.9289 44.1707 32.8497 44.2444 32.7401C44.3181 32.6305 44.3496 32.498 44.3332 32.367C44.3082 32.0928 44.1629 31.8983 43.8902 31.8412C43.7366 31.8165 43.5806 31.8096 43.4254 31.8209C41.7996 31.8662 40.1746 31.9366 38.5496 31.9522C37.7184 31.96 36.8863 31.867 36.0551 31.8248C35.8871 31.8094 35.7179 31.8144 35.5512 31.8397C35.4163 31.8697 35.2962 31.946 35.2118 32.0553C35.1273 32.1646 35.0837 32.3001 35.0887 32.4381C35.0832 32.5703 35.1281 32.6996 35.2144 32.7999C35.3008 32.9001 35.422 32.9638 35.5535 32.978C36.0031 33.048 36.4561 33.0947 36.9105 33.1178C37.1449 33.1295 37.2512 33.217 37.3301 33.4303C38.0371 35.3436 38.7574 37.2522 39.4637 39.1662C39.5131 39.3094 39.5158 39.4644 39.4715 39.6092C38.4355 42.6597 37.3939 45.7084 36.3465 48.7553C36.334 48.792 36.3168 48.8272 36.2684 48.9483L30.8199 33.167C31.2762 33.128 31.684 33.0959 32.0902 33.0569C32.2717 33.045 32.4519 33.0189 32.6293 32.9787C32.9418 32.9006 33.0887 32.6866 33.0754 32.3819C33.0758 32.2437 33.0239 32.1106 32.9301 32.0091C32.8364 31.9077 32.7077 31.8455 32.5699 31.835C32.3878 31.8221 32.2049 31.8242 32.023 31.8412C30.6579 31.8892 29.2928 31.9371 27.9277 31.985C27.8043 31.9889 27.6793 31.9694 27.5371 31.96C32.3027 24.6655 43.1449 23.0733 50.0371 29.1912C49.7816 29.2219 49.5279 29.266 49.277 29.3233C47.8629 29.7233 47.0754 31.2225 47.5715 32.7139C47.7973 33.3959 48.1676 34.0381 48.5356 34.6623C48.9981 35.4475 49.4645 36.2248 49.7668 37.0912C50.2762 38.5483 50.2004 40.0108 49.7605 41.4662C49.0449 43.8295 48.3113 46.1866 47.584 48.5452C47.5483 48.6272 47.5081 48.7073 47.4637 48.785Z" fill="white"/>
<path d="M44.9516 53.7843C41.9047 54.7874 38.8703 54.878 35.7656 54.0077C37.2672 49.7702 38.7516 45.5624 40.2656 41.2788L44.9516 53.7843Z" fill="white"/>
<path d="M33.4457 53.125C25.7722 49.4469 23.1699 40.7133 26.3144 34.0977L33.4457 53.125Z" fill="white"/>
<path d="M53.2266 33.2153C56.7 39.1192 55.1797 48.1981 47.5625 52.5903C47.6172 52.4231 47.6508 52.313 47.6891 52.2044C49.2911 47.6981 50.8932 43.1929 52.4953 38.6888C53.0883 37.0153 53.3758 35.2942 53.2109 33.513C53.2039 33.4349 53.2008 33.3567 53.2008 33.2786C53.2056 33.2562 53.2143 33.2347 53.2266 33.2153Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="40" height="40" fill="white" transform="translate(20 20)"/>
</clipPath>
</defs>
</svg>
`,
      name: 'Wordpress',
      to: 'https://wordpress.com/',
    },
  ],
};

export const otherWorkItems = [{}];

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

export const caseStudies = [
  {
    id: 'port-phillip',
    title: 'City of Port Phillip',
    description:
      'A brand new digital ecosystem including multiple websites and customer facing online services.',
    hero: 'A brand new digital ecosystem including multiple websites and customer facing online services.',
    color: '#13676f',
  },
  {
    id: 'bank-vic',
    title: 'Bank Vic',
    description:
      'A future-proof platform, with endless customisation and a personalised experience.',
    hero: 'BankVic is a 100% member owned bank focused on serving police, health, emergency and public services, as well as their family and friends. Their aim is to build healthy communities that are financially, socially and environmentally sustainable.',
    color: '#279cd0',
  },
  {
    id: 'lumea',
    title: 'Lumea',
    description:
      'A market first solution that’s accelerate Australia toward a smarter energy future.',
    hero: 'A market first solution that’s accelerate Australia toward a smarter energy future.',
    color: '#222f32',
  },
  {
    id: 'bupa',
    title: 'Bupa',
    description:
      'A reimagined way of working and subsequently a platform to proper service its users needs.',
    hero: 'A reimagined way of working and subsequently a platform to proper service its users needs.',
    color: '#046ebc',
  },
];
