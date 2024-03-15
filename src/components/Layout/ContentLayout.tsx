import * as React from 'react';

import { Head } from '../Head';
import { FadeInSection } from '../FadeInSection';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="py-14 md:py-28 mt-16">
        <FadeInSection>
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 lg:px-24 py-10">
            <h1 className="text-[56px]">{title}</h1>
          </div>
        </FadeInSection>
        <div className="max-w-[1392px] mx-auto px-4 sm:px-6 lg:px-24">{children}</div>
      </div>
    </>
  );
};
