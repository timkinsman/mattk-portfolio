import { ContentLayout, MainLayout } from '@/components/Layout';
import { Link, useNavigate } from 'react-router-dom';

const item = {
  id: 'string',
  color: 'string',
  contrastTextColor: 'string',
  title: 'string',
};

export const OtherWork = () => {
  return (
    <MainLayout>
      <ContentLayout title="Other work">
        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <OtherWorkCard item={item} />
          <OtherWorkCard item={item} />
          <OtherWorkCard item={item} />
          <OtherWorkCard item={item} />
          <OtherWorkCard item={item} />
          <OtherWorkCard item={item} />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

type OtherWorkCardProps = {
  // item: OtherWork;
  item: {
    id: string;
    color: string;
    contrastTextColor: string;
    title: string;
  };
};

const OtherWorkCard = ({ item }: OtherWorkCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="aspect-video rounded-xl relative group overflow-hidden cursor-pointer"
      onClick={() => navigate(`/other-work/${item.id}`)}
    >
      <div
        style={{ backgroundColor: item.color, color: item.contrastTextColor }}
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity w-full h-full p-4 flex items-center justify-center"
      >
        ha
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity w-full h-full p-4 flex flex-col">
        <h1 className="text-2xl">{item.title}</h1>

        <div className="mt-auto">
          <Link onClick={(e) => e.stopPropagation()} to={`/case-studies/${item.id}`}>
            View work →
          </Link>
        </div>
      </div>
    </div>
  );
};
