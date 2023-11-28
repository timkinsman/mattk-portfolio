import { ContentLayout, MainLayout } from '@/components/Layout';
import { caseStudies } from '@/constants/caseStudies';
import { NotFound } from '@/features/misc';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { useCallback, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

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

  return (
    <MainLayout>
      <div ref={refPanel} className="px-4 sm:px-6 lg:px-24 h-screen flex">
        <div className="m-auto">
          <h2 className="text-3xl sm:text-4xl">{caseStudy?.hero}</h2>
        </div>
      </div>

      <ContentLayout title={caseStudy.title}>
        <div className="mt-24">
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl">Visit</h3>
              <div className="mt-2">
                <a href={caseStudy.visit.to} target="_blank">
                  {caseStudy.visit.name}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl">Representation</h3>
              <div className="mt-2">
                <a href={caseStudy.representation.to} target="_blank">
                  {caseStudy.representation.name}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl">Output</h3>
              <div className="mt-2">
                {caseStudy.output.map((output, i) => [
                  i > 0 && ', ',
                  <Link to={`/case-studies?q=${output}`}>{output}</Link>,
                ])}
              </div>
            </div>

            <div>
              <h3 className="text-xl">Industry</h3>
              <div className="mt-2">
                {caseStudy.industry.map((industry, i) => [
                  i > 0 && ', ',
                  <Link to={`/case-studies?q=${industry}`}>{industry}</Link>,
                ])}
              </div>
            </div>

            <div>
              <h3 className="text-xl">Capability</h3>
              <div className="mt-2">
                {caseStudy.capability.map((capability, i) => [
                  i > 0 && ', ',
                  <Link to={`/case-studies?q=${capability}`}>{capability}</Link>,
                ])}
              </div>
            </div>

            <div>
              <h3 className="text-xl">Method</h3>
              <div className="mt-2">
                {caseStudy.method.map((method, i) => [
                  i > 0 && ', ',
                  <Link to={`/case-studies?q=${method}`}>{method}</Link>,
                ])}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="aspect-video rounded-xl" style={{ backgroundColor: caseStudy.color }} />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
