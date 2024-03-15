import { FadeInSection } from '@/components/FadeInSection';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { otherWorks } from '@/constants/otherWorks';
import { NotFound } from '@/features/misc';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const OtherWork = () => {
  const { id } = useParams();

  const refPanel = useRef<HTMLDivElement>(null);

  const otherWork = otherWorks.find((cs) => cs.id === id);

  const onScroll = useCallback(() => {
    const container = document.getElementById('container');

    if (!container) {
      return;
    }

    if (refPanel.current && isScrolledIntoView(refPanel.current, 'majority')) {
      container.style.backgroundColor = otherWork?.color ?? '';
      container.style.color = otherWork?.contrastTextColor ?? '';
    } else {
      container.style.backgroundColor = '';
      container.style.color = '';
    }
  }, [otherWork?.color, otherWork?.contrastTextColor]);

  useEffect(() => {
    const container = document.getElementById('container');

    if (!container) {
      return;
    }

    container.style.backgroundColor = otherWork?.color ?? '';
    container.style.color = otherWork?.contrastTextColor ?? '';
  }, [otherWork?.color, otherWork?.contrastTextColor]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  if (!otherWork) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <div ref={refPanel} className="px-4 sm:px-6 lg:px-24 h-screen flex">
        <div className="m-auto">
          <h2 className="text-[28px]">{otherWork?.hero}</h2>
        </div>
      </div>

      <ContentLayout title={otherWork.title}>
        <FadeInSection>
          <div className="mt-24">
            <div
              className="aspect-video rounded-xl"
              style={{ backgroundColor: otherWork.color }}
            ></div>
          </div>
        </FadeInSection>
      </ContentLayout>
    </MainLayout>
  );
};
