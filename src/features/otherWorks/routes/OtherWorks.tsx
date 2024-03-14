import { ContentLayout, MainLayout } from '@/components/Layout';
import { OtherWorkCard } from '../components/OtherWork';
import { otherWorks } from '@/constants/otherWorks';
import { FadeInSection } from '@/components/FadeInSection';

export const OtherWorks = () => {
  return (
    <MainLayout>
      <ContentLayout title="Other work">
        <FadeInSection>
          <div className="mt-14 md:mt-24 grid md:grid-cols-2 gap-4 md:gap-6">
            {otherWorks.map((otherWork) => (
              <OtherWorkCard item={otherWork} />
            ))}
          </div>
        </FadeInSection>
      </ContentLayout>
    </MainLayout>
  );
};
