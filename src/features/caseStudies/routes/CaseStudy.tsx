import { MainLayout } from '@/components/Layout';
import { caseStudies } from '@/constants';
import { useParams } from 'react-router-dom';

export const CaseStudy = () => {
  const { id } = useParams();

  const caseStudy = caseStudies.find((cs) => cs.id === id);

  return (
    <MainLayout>
      <div
        className="px-4 sm:px-6 lg:px-24 h-screen flex"
        style={{ backgroundColor: caseStudy?.color }}
      >
        <div className="m-auto">
          <h2 className="text-3xl sm:text-4xl">{caseStudy?.hero}</h2>
        </div>
      </div>
    </MainLayout>
  );
};
