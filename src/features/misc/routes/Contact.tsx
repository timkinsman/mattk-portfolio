import { ContentLayout, MainLayout } from '@/components/Layout';
import { details, getInTouch, socials } from '@/constants';

import parse from 'html-react-parser';
import { IconCard } from '../components/IconCard';
import clsx from 'clsx';
import { FadeInSection } from '@/components/FadeInSection';

export const Contact = () => {
  return (
    <MainLayout>
      <ContentLayout title="Contact">
        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{getInTouch.title}</h3>
            <p className="text-xl mt-10">{getInTouch.description}</p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
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
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{socials.title}</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 mt-10 gap-8 md:gap-y-16">
              {socials.items.map((item) => (
                <div
                  className={clsx({
                    ['hidden md:block']: item.name === 'The Dots',
                  })}
                >
                  <IconCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </ContentLayout>
    </MainLayout>
  );
};
