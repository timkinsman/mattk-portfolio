import { MainLayout } from '@/components/Layout';
import { caseStudies } from '@/constants/caseStudies';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const CaseStudy = () => {
  const { id } = useParams();

  const refPanel = useRef<HTMLDivElement>(null);

  const caseStudy = caseStudies.find((cs) => cs.id === id);

  const onScroll = useCallback(() => {
    const container = document.getElementById('container');

    if (!container) {
      return;
    }

    if (refPanel.current && isScrolledIntoView(refPanel.current, 'majority')) {
      container.style.backgroundColor = caseStudy?.color ?? '';
      container.style.color = caseStudy?.contrastTextColor ?? '';
    } else {
      container.style.backgroundColor = '';
      container.style.color = '';
    }
  }, [caseStudy?.color, caseStudy?.contrastTextColor]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <MainLayout>
      <div ref={refPanel} className="px-4 sm:px-6 lg:px-24 h-screen flex">
        <div className="m-auto">
          <h2 className="text-3xl sm:text-4xl">{caseStudy?.hero}</h2>
        </div>
      </div>
    </MainLayout>
  );
};
