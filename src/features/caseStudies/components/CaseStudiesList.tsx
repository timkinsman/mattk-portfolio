import { caseStudies } from '@/constants/caseStudies';
import { Capability, CaseStudy, Industry, Output } from '@/types';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// import ArrowSmDown from '@/assets/arrow-sm-down.svg?react';
import { useEffect, useState } from 'react';
import { methods } from '@/constants';
import { Checkbox } from '@/components/Elements';

type Filter = 'capability' | 'industry' | 'client' | 'method' | 'output';
const filters = ['capability', 'industry', 'client', 'method', 'output'] as Filter[];

const capability = ['Strategy', 'UI/UX', 'Branding'] as Capability[];
const industry = ['Government', 'Banking & Finance', 'Sports & Entertainment'] as Industry[];
const client = caseStudies.map((caseStudy) => caseStudy.title);
const method = methods.items;
const output = ['Intranet', 'Website'] as Output[];

export const CaseStudiesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState<Filter>();
  const [activeFilters, setActiveFilters] = useState<string[]>(Array.from(searchParams.values()));

  const [seeMoreProjects, setSeeMoreProjects] = useState(false);

  useEffect(() => {
    setSearchParams({ q: activeFilters });
  }, [setSearchParams, activeFilters]);

  const getFilter = (filter: Filter) => {
    switch (filter) {
      case 'capability':
        return capability;
      case 'industry':
        return industry;
      case 'client':
        return client;
      case 'method':
        return method;
      case 'output':
        return output;
      default:
        return [];
    }
  };

  const formatFilter = (filter: Filter) => {
    switch (filter) {
      case 'capability':
        return 'Capability';
      case 'industry':
        return 'Industry';
      case 'client':
        return 'Client';
      case 'method':
        return 'Method';
      case 'output':
        return 'Output';
    }
  };

  const isFiltered = activeFilters.length > 0;

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    if (isFiltered) {
      // we're filtering
      return activeFilters.some((activeFilter) =>
        [
          caseStudy.title,
          ...caseStudy.capability,
          ...caseStudy.industry,
          ...caseStudy.method,
          ...caseStudy.output,
        ].includes(activeFilter)
      );
    } else {
      return caseStudy;
    }
  });

  return (
    <div>
      <div className="flex gap-8 flex-wrap">
        <p>Filter by</p>
        <p>/</p>
        {filters.map((filter) => (
          <button
            onClick={() => setShowFilter(filter === showFilter ? undefined : filter)}
            className="text-btn"
          >
            {formatFilter(filter)} {showFilter === filter ? '↑' : '↓'}
          </button>
        ))}

        {isFiltered && (
          <div className="ml-auto">
            <button
              onClick={() => {
                setShowFilter(undefined);
                setActiveFilters([]);
              }}
              className="text-btn"
            >
              Clear ✕
            </button>
          </div>
        )}
      </div>

      {showFilter !== undefined && (
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {getFilter(showFilter).map((filter) => (
            <Checkbox
              checked={activeFilters.includes(filter)}
              label={filter}
              onCheckedChange={(checked) => {
                if (checked) {
                  setActiveFilters([...activeFilters, filter]);
                } else {
                  setActiveFilters(activeFilters.filter((activeFilter) => activeFilter !== filter));
                }
              }}
            />
          ))}
        </div>
      )}

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {filteredCaseStudies.map((caseStudy) => (
          <CaseStudyCard item={caseStudy} />
        ))}
      </div>

      {filteredCaseStudies.length > 8 && (
        <div className="mt-8 flex justify-center">
          <button
            className="text-btn text-xl flex items-center gap-2"
            onClick={() => setSeeMoreProjects(!seeMoreProjects)}
          >
            See more projects ↓{/* <ArrowSmDown /> */}
          </button>
        </div>
      )}
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
      className="aspect-video rounded-xl relative group overflow-hidden cursor-pointer"
      onClick={() => navigate(`/case-studies/${item.id}`)}
    >
      <div
        style={{ backgroundColor: item.color, color: item.contrastTextColor }}
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity w-full h-full p-4 flex items-center justify-center"
      >
        icon
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity w-full h-full p-4 flex flex-col">
        <h1 className="text-2xl">{item.title}</h1>

        {/* todo: dynamic groupings */}
        <h3 className="text-xl mt-2">
          {item.industry.join(', ')} • {item.capability.join(', ')}
        </h3>

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
