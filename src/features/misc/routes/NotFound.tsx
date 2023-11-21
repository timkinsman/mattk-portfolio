import { ContentLayout, MainLayout } from '@/components/Layout';

export const NotFound = () => {
  return (
    <MainLayout>
      <ContentLayout title="Not found">
        <div>Sorry, that page could not be found</div>
      </ContentLayout>
    </MainLayout>
  );
};
