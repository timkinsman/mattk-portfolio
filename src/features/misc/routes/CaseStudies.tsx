import { ContentLayout, MainLayout } from '@/components/Layout';
import { caseStudiesHero } from '@/constants';

export const CaseStudies = () => {
  return (
    <MainLayout>
      <ContentLayout title="Case studies">
        <div className="mt-24">
          <h4 className="text-xl">{caseStudiesHero}</h4>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
