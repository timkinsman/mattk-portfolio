import { MainLayout } from '@/components/Layout';

export const NotFound = () => {
  return (
    <MainLayout>
      <div className="px-4 sm:px-6 lg:px-24 h-[100dvh] flex">
        <div className="m-auto">
          <h2 className="text-3xl sm:text-4xl">404 Not Found.</h2>
        </div>
      </div>
    </MainLayout>
  );
};
