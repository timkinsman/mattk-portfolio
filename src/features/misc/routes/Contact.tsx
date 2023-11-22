import { ContentLayout, MainLayout } from '@/components/Layout';
import { details, getInTouch, socials } from '@/constants';
import clsx from 'clsx';
import parse from 'html-react-parser';

export const Contact = () => {
  return (
    <MainLayout>
      <ContentLayout title="Contact">
        <div className="mt-24">
          <h3 className="text-2xl">{getInTouch.title}</h3>
          <p className="text-xl mt-10">{getInTouch.description}</p>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl">{details.title}</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {details.items.map((detailItem) => (
              <div>
                <h4 className="text-4xl">{detailItem.icon}</h4>
                <p className="mt-4">{detailItem.title}</p>
                <div className="mt-6">{parse(detailItem.link)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl">{socials.title}</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 mt-10 gap-8 md:gap-y-16">
            {socials.items.map((item) => (
              <div
                className={clsx(
                  'relative group w-full h-20 flex items-center justify-center gap-2',
                  {
                    ['hidden md:block']: item.name === 'The Dots',
                  }
                )}
              >
                <div className="absolute opacity-100 group-hover:opacity-0 transition-opacity top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {parse(item.icon)}
                </div>

                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <a href={item.to} target="_blank" className="whitespace-nowrap">
                    {item.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
