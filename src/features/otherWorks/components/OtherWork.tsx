import { OtherWork } from '@/types';
import { Link, useNavigate } from 'react-router-dom';

type OtherWorkCardProps = {
  item: OtherWork;
};

export const OtherWorkCard = ({ item }: OtherWorkCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="aspect-video rounded-xl relative group overflow-hidden cursor-pointer"
      onClick={() => navigate(`/other-work/${item.id}`)}
    >
      <div
        style={{ backgroundColor: item.color, color: item.contrastTextColor }}
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 w-full h-full flex items-center justify-center"
      >
        <img className="w-full" src={item.img} alt={item.title} />
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full p-6 flex flex-col">
        <h1 className="md:text-3xl text-xl">{item.title}</h1>

        <div className="mt-auto">
          <Link
            className="md:text-xl text-sm"
            onClick={(e) => e.stopPropagation()}
            to={`/other-work/${item.id}`}
          >
            View work →
          </Link>
        </div>
      </div>
    </div>
  );
};
