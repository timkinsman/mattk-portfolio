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
};
