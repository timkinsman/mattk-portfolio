import { ContentLayout, MainLayout } from '@/components/Layout';
import { caseStudies } from '@/constants/caseStudies';
import { NotFound } from '@/features/misc';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { FadeInSection } from '@/components/FadeInSection';
import ArrowDownIcon from '@/assets/arrow-down.svg?react';
import { CaseStudyCard } from '..';

export const CaseStudy = () => {
  const { id } = useParams();

  const refPanel = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const [seeMoreCaseStudies, setSeeMoreProjects] = useState(false);

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
    const container = document.getElementById('container');

    if (!container) {
      return;
    }

    container.style.backgroundColor = caseStudy?.color ?? '';
    container.style.color = caseStudy?.contrastTextColor ?? '';
  }, [caseStudy?.color, caseStudy?.contrastTextColor]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  if (!caseStudy) {
    return <NotFound />;
  }

  const otherCaseStudies = caseStudies.filter((item) => item.id !== caseStudy.id);

  return (
    <MainLayout>
      <div className="relative">
        <div ref={refPanel} className="px-4 sm:px-6 lg:px-24 h-[100dvh] flex">
          <div className="m-auto">
            <h2 className="text-[28px]">{caseStudy?.hero}</h2>
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
        <ContentLayout title={caseStudy.title}>
          <FadeInSection>
            <div className="mt-24">
              <div className="mt-8 grid md:grid-cols-3 gap-8 md:gap-12">
                <div>
                  <h3 className="text-2xl">Visit</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    <a href={caseStudy.visit.to} target="_blank">
                      {caseStudy.visit.name}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Representation</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    <a href={caseStudy.representation.to} target="_blank">
                      {caseStudy.representation.name}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Output</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    {caseStudy.output.map((output, i) => [
                      i > 0 && ', ',
                      <Link to={`/case-studies?q=${output}`}>{output}</Link>,
                    ])}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Industry</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    {caseStudy.industry.map((industry, i) => [
                      i > 0 && ', ',
                      <Link to={`/case-studies?q=${industry}`}>{industry}</Link>,
                    ])}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Capability</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    {caseStudy.capability.map((capability, i) => [
                      i > 0 && ', ',
                      <Link to={`/case-studies?q=${capability}`}>{capability}</Link>,
                    ])}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Method</h3>
                  <div className="mt-2 md:mt-6 text-xl">
                    {caseStudy.method.map((method, i) => [
                      i > 0 && ', ',
                      <Link to={`/case-studies?q=${method}`}>{method}</Link>,
                    ])}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-24">
              <div
                className="aspect-video rounded-xl flex items-center justify-center"
                style={{ backgroundColor: caseStudy.color }}
              >
                <div className="h-3/5 w-3/5">{parse(caseStudy.icon)}</div>
              </div>
            </div>
          </FadeInSection>

          <hr className="mt-14 md:mt-28 opacity-10 border-inherit" />

          <div className="mt-14 md:mt-28 grid md:grid-cols-2 md:gap-6 gap-4">
            {otherCaseStudies.slice(0, seeMoreCaseStudies ? 999 : 2).map((caseStudy) => (
              <div className="animate-fade-in">
                <CaseStudyCard item={caseStudy} />
              </div>
            ))}
          </div>

          {otherCaseStudies.length > 2 && (
            <div className="mt-8 flex justify-center">
              <button
                className="text-btn text-xl flex items-center gap-2"
                onClick={() => setSeeMoreProjects(!seeMoreCaseStudies)}
              >
                See {seeMoreCaseStudies ? 'less' : 'more'}
              </button>
            </div>
          )}
        </ContentLayout>
      </div>
    </MainLayout>
  );
};
