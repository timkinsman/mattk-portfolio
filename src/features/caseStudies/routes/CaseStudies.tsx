import { FadeInSection } from '@/components/FadeInSection';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { caseStudiesHero } from '@/constants';
import { CaseStudiesList } from '@/features/caseStudies';

export const CaseStudies = () => {
  return (
    <MainLayout>
      <ContentLayout title="Case studies">
        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h4 className="text-xl">{caseStudiesHero}</h4>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <CaseStudiesList />
          </div>
        </FadeInSection>
      </ContentLayout>
    </MainLayout>
  );
};
