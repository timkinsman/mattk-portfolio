import { caseStudies } from '@/constants/caseStudies';
import { CaseStudy } from '@/types';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { methods } from '@/constants';
import { Checkbox } from '@/components/Elements';
import { onlyUnique } from '@/utils/onlyUnique';
import parse from 'html-react-parser';
import clsx from 'clsx';

type Filter = 'capability' | 'industry' | 'client' | 'method' | 'output';
const filters = ['capability', 'industry', 'client', 'method', 'output'] as Filter[];

const capability = caseStudies
  .map((caseStudy) => caseStudy.capability)
  .flat()
  .filter(onlyUnique);
const industry = caseStudies
  .map((caseStudy) => caseStudy.industry)
  .flat()
  .filter(onlyUnique);
const client = caseStudies.map((caseStudy) => caseStudy.title);
const method = methods.items;
const output = caseStudies
  .map((caseStudy) => caseStudy.output)
  .flat()
  .filter(onlyUnique);

export const CaseStudiesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState<Filter>();
  const [activeFilters, setActiveFilters] = useState<string[]>(Array.from(searchParams.values()));

  const [seeMoreCaseStudies, setSeeMoreProjects] = useState(false);

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
      <div className="flex justify-between gap-6 md:gap-8 flex-wrap">
        <div className="flex gap-6 md:gap-8 flex-wrap">
          <p>Filter by</p>
          <p>/</p>
          {filters.map((filter) => (
            <div>
              <button
                onClick={() => setShowFilter(filter === showFilter ? undefined : filter)}
                className={clsx('text-btn')}
                style={{ opacity: filter === showFilter ? 1 : undefined }}
              >
                {`${formatFilter(filter)} ${showFilter === filter ? '↑' : '↓'}`}
              </button>
            </div>
          ))}
        </div>

        {isFiltered && (
          <div>
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
        <div className="mt-12 grid md:grid-cols-4 gap-4 animate-fade-in" key={showFilter}>
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
        {filteredCaseStudies.splice(0, seeMoreCaseStudies ? 999 : 8).map((caseStudy) => (
          <CaseStudyCard item={caseStudy} />
        ))}
      </div>

      {filteredCaseStudies.length > 8 && (
        <div className="mt-8 flex justify-center">
          <button
            className="text-btn text-xl flex items-center gap-2"
            onClick={() => setSeeMoreProjects(!seeMoreCaseStudies)}
          >
            See {seeMoreCaseStudies ? 'less' : 'more'} case studies {seeMoreCaseStudies ? '↑' : '↓'}
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
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 w-full h-full p-12 flex items-center justify-center"
      >
        {parse(item.icon)}
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full p-4 flex flex-col">
        <h1 className="text-2xl">{item.title}</h1>

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
