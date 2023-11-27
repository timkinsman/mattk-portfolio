// import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { caseStudies } from '@/constants';
import { CaseStudy } from '@/types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type PanelProps = {
  id: CaseStudy['id']
};

export const Panel = ({ id }: PanelProps) => {
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  return (
    <div
      id={id}
      className={clsx('px-4 sm:px-6 lg:px-24 w-full flex items-end')}
      // style={{ backgroundColor: caseStudy?.color }}
    >
      <div className="py-8 md:py-28 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl">{caseStudy?.title}</h2>
          <p className="text-3xl sm:text-4xl mt-6">{caseStudy?.description}</p>
          <div className="mt-6">
            <Link to={`/case-studies/${id}`}>View case study →</Link>
          </div>
        </div>
        <div>{/* gif */}</div>
      </div>
    </div>
  );
};
