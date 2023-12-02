import { OtherWork } from "@/types";
import { Link, useNavigate } from "react-router-dom";

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
        className="absolute opacity-100 group-hover:opacity-0 transition-opacity w-full h-full p-4 flex items-center justify-center"
      >
        icon
      </div>

      <div className="dark:bg-black bg-white absolute opacity-0 group-hover:opacity-100 transition-opacity w-full h-full p-4 flex flex-col">
        <h1 className="text-2xl">{item.title}</h1>

        <div className="mt-auto">
          <Link onClick={(e) => e.stopPropagation()} to={`/other-work/${item.id}`}>
            View work →
          </Link>
        </div>
      </div>
    </div>
  );
};
