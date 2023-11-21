import { ContentLayout, MainLayout } from '@/components/Layout';

export const OtherWork = () => {
  return (
    <MainLayout>
      <ContentLayout title="Other work">
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
          <div className="bg-slate-700 h-80 w-full rounded-xl"></div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
