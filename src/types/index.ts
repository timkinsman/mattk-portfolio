export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type CaseStudy = {
  id: 'port-phillip' | 'bank-vic' | 'lumea' | 'bupa';
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
  | { name: '(i.e.,)'; to: 'https://www.ie.com.au/' };

export type Output = 'Intranet' | 'Website';

export type Industry = 'Government' | 'Banking & Finance' | 'Sports & Entertainment';

export type Capability = 'Strategy' | 'UI/UX' | 'Branding';

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
  color: string;
  contrastTextColor: string;
  title: string;
  hero: string;
};
