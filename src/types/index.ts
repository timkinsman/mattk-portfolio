export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type CaseStudy = {
  id:
    | 'city-of-port-phillip'
    | 'bank-vic'
    | 'lumea'
    | 'bupa'
    | 'beyond-blue'
    | 'childrens-court'
    | 'city-of-darebin'
    | 'click-frenzy'
    | 'homely'
    | 'eatclub'
    | 'frank-green'
    | 'transgrid'
    | 'nab'
    | 'mch'
    | 'open-courts'
    | 'ovic'
    | 'small-business-victoria'
    | 'stroke-foundation'
    | 'sweat'
    | 'victoria-police';
  icon: string;
  title: string;
  description: string;
  hero: string;
  color: string;
  contrastTextColor: string;
  visit: { name: string; to: string };
  representation: Representation;

  output: Output[];
  industry: Industry[];
  capability: Capability[];
  method: Method[];
};

export type NavigationItem = {
  name: string;
  to: string;
};

export type SocialItem = {
  name: string;
  to: string;
  icon?: string;
};

export type Representation =
  | { name: 'VERSA Agency'; to: 'https://versa.agency/' }
  | { name: '(i.e.,)'; to: 'https://www.ie.com.au/' }
  | { name: 'Homely'; to: 'https://www.homely.com.au/' }
  | { name: 'EatClub'; to: 'https://www.eatclub.com.au/' }
  | { name: 'AKQA'; to: 'https://www.akqa.com/' }
  | { name: 'SWEAT'; to: 'https://www.sweat.com/' };

export type Output = 'Intranet' | 'Website' | 'App' | 'Assets' | 'Portal' | 'eBooks';

export type Industry =
  | 'Government'
  | 'Banking & Finance'
  | 'Sports & Entertainment'
  | 'Legal'
  | 'Real Estate'
  | 'Food & Beverage'
  | 'Health'
  | 'Sports & Fitness';

export type Capability =
  | 'Strategy'
  | 'UI/UX'
  | 'Branding'
  | 'Animation & Motion Graphics'
  | 'Marketing'
  | 'Promotional'
  | 'Wayfinding & Signage'
  | 'Packaging'
  | 'Art Direction'
  | 'Print & Publishing';

export type Method =
  | 'A/B Testing'
  | 'Artefact Review'
  | 'Competitor Analysis'
  | 'Concept Usability Testing'
  | 'Contextual Inquiry'
  | 'Data Analytics Review'
  | 'Accessibility Testing'
  | 'Diary Studies'
  | 'Heuristics Evaluation'
  | 'IA: Card Sorting'
  | 'IA: Tree Testing'
  | 'Journey Mapping'
  | 'Online Surveys'
  | 'Persona Development'
  | 'Requirements Gathering'
  | 'Roadmapping'
  | 'Stakeholder Interviews'
  | 'User Interviews';

export type OtherWork = {
  id: string;
  img: string;
  color: string;
  contrastTextColor: string;
  title: string;
  hero: string;
};
