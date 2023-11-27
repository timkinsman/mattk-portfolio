import { caseStudies } from '@/constants/caseStudies';
import { CaseStudy } from '@/types';
import { Link, useNavigate } from 'react-router-dom';

export const CaseStudiesList = () => {
  return (
    <div>
      <div className="flex gap-8">
        <p>Filter by</p>
        <p>/</p>
        <button className="text-btn">Capability ↓</button>
        <button className="text-btn">Industry ↓</button>
        <button className="text-btn">Client ↓</button>
        <button className="text-btn">Method ↓</button>
        <button className="text-btn">Output ↓</button>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard item={caseStudy} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="text-btn text-xl">See more</button>
      </div>
    </div>
  );
};

type CaseStudyCardProps = {
  item: CaseStudy;
};

const CaseStudyCard = ({ item }: CaseStudyCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-80 w-full rounded-xl relative group overflow-hidden cursor-pointer"
      onClick={() => navigate(`/case-studies/${item.id}`)}
    >
      <div
        style={{ backgroundColor: item.color, color: item.contrastTextColor }}
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity w-full h-full p-4 flex items-center justify-center"
      >
        ha
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity w-full h-full p-6 flex flex-col">
        <h1 className="text-2xl">{item.title}</h1>

        {/* todo: dynamic groupings */}
        <h3 className="text-xl mt-2">Govt & Local Govt • UI/UX, Branding</h3>

        <p className="mt-4">{item.description}</p>
        <div className="mt-auto">
          <Link onClick={(e) => e.stopPropagation()} to={`/case-studies/${item.id}`}>
            View case study →
          </Link>
        </div>
      </div>
    </div>
  );
};
