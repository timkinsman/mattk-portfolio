// import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { caseStudies } from '@/constants';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
// import { useCallback, useEffect, useRef } from 'react';

type PanelProps = {
  id: 'port-phillip' | 'bank-vic' | 'lumea' | 'bupa';
};

export const Panel = ({ id }: PanelProps) => {
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  //   const ref = useRef<HTMLDivElement>(null);

  //   const onScroll = useCallback(() => {
  //     if (ref.current && isScrolledIntoView(ref.current)) {
  //       document.getElementById('container')?.classList.add(`bg-[#13676f]`, `dark:bg-[#13676f]`);
  //     } else {
  //       document.getElementById('container')?.classList.remove(`bg-[#13676f]`, `dark:bg-[#13676f]`);
  //     }
  //   }, [ref]);

  //   useEffect(() => {
  //     window.addEventListener('scroll', onScroll);

  //     return () => {
  //       window.removeEventListener('scroll', onScroll);
  //     };
  //   }, [onScroll]);

  return (
    <div
      //   ref={ref}
      className={clsx('px-4 sm:px-6 lg:px-24 w-full flex items-end')}
      style={{ backgroundColor: caseStudy?.color }}
    >
      <div className="py-8 md:py-28 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl">{caseStudy?.title}</h2>
          <p className="text-4xl mt-6">{caseStudy?.description}</p>
          <div className="mt-6">
            <Link to={`/case-studies/${id}`}>View case study →</Link>
          </div>
        </div>
        <div>{/* gif */}</div>
      </div>
    </div>
  );
};
