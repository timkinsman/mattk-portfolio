import clsx from 'clsx';
import parse from 'html-react-parser';

type IconCardProps = {
  item: {
    icon: string;
    name: string;
    to: string;
  };
};

export const IconCard = ({ item }: IconCardProps) => {
  return (
    <div
      className={clsx('relative group w-full h-20 flex items-center justify-center gap-2', {
        ['hidden md:block']: item.name === 'The Dots',
      })}
    >
      <div className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {parse(item.icon)}
      </div>

      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <a href={item.to} target="_blank" className="whitespace-nowrap">
          {item.name}
        </a>
      </div>
    </div>
  );
};
