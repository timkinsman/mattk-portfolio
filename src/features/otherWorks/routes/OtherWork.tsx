import { FadeInSection } from '@/components/FadeInSection';
import { ContentLayout, MainLayout } from '@/components/Layout';
import { otherWorks } from '@/constants/otherWorks';
import { NotFound } from '@/features/misc';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OtherWorkCard } from '../components/OtherWork';
import clsx from 'clsx';
import ArrowDownIcon from '@/assets/arrow-down.svg?react';

export const OtherWork = () => {
  const { id } = useParams();

  const refPanel = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const [seeMoreWorks, setSeeMoreWorks] = useState(false);

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

  const allOtherWorks = otherWorks.filter((item) => item.id !== otherWork.id);

  return (
    <MainLayout>
      <div className="relative">
        <div ref={refPanel} className="px-4 sm:px-6 lg:px-24 h-screen flex">
          <div className="m-auto">
            <h2 className="text-[28px] max-w-[1392px] px-4 sm:px-6 lg:px-24">{otherWork?.hero}</h2>
          </div>

          <div className="absolute bottom-0 left-0 h-[120px] flex items-center justify-between w-full px-4 sm:px-6 lg:px-24 gap-2">
            <div className="flex gap-2 ml-auto">
              <button
                type="button"
                className="opacity-40 hover:opacity-100 transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-1"
                onClick={() => refContent.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowDownIcon color="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={refContent}>
        <ContentLayout title={otherWork.title}>
          {otherWork.otherImages.map((otherImage) => (
            <FadeInSection>
              <div className="mt-4 md:mt-12">
                <div
                  className="aspect-video rounded-xl overflow-hidden"
                  style={{ backgroundColor: otherWork.color }}
                >
                  <img
                    className={clsx('w-full h-full object-cover object-center')}
                    src={otherImage}
                    alt={otherWork.title}
                  />
                </div>
              </div>
            </FadeInSection>
          ))}

          <hr className="mt-14 md:mt-28 opacity-10 border-inherit" />

          <div className="mt-14 md:mt-28 grid md:grid-cols-2 md:gap-6 gap-4">
            {allOtherWorks.slice(0, seeMoreWorks ? 999 : 2).map((otherWork) => (
              <div className="animate-fade-in">
                <OtherWorkCard item={otherWork} />
              </div>
            ))}
          </div>

          {allOtherWorks.length > 2 && (
            <div className="mt-8 flex justify-center">
              <button
                className="text-btn text-xl flex items-center gap-2"
                onClick={() => setSeeMoreWorks(!seeMoreWorks)}
              >
                See {seeMoreWorks ? 'less' : 'more'}
              </button>
            </div>
          )}
        </ContentLayout>
      </div>
    </MainLayout>
  );
};
