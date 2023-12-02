import { ContentLayout, MainLayout } from '@/components/Layout';
import { OtherWorkCard } from '../components/OtherWork';
import { otherWorks } from '@/constants/otherWorks';

export const OtherWorks = () => {
  return (
    <MainLayout>
      <ContentLayout title="Other work">
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          {otherWorks.map((otherWork) => (
            <OtherWorkCard item={otherWork} />
          ))}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
