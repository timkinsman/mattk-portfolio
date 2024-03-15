import { ContentLayout, MainLayout } from '@/components/Layout';
import { methods, process, principle, whatIDoHeroItems } from '@/constants';
import { tools } from '@/constants/tools';
import { Link } from 'react-router-dom';
import { IconCard } from '../components/IconCard';
import clsx from 'clsx';
import { FadeInSection } from '@/components/FadeInSection';

export const WhatIDo = () => {
  return (
    <MainLayout>
      <ContentLayout title="What I do">
        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <div className="grid md:grid-cols-2 gap-6">
              {whatIDoHeroItems.map((whatIDoHeroItem) => (
                <div>
                  <h4 className="text-4xl">{whatIDoHeroItem.icon}</h4>
                  <h3 className="mt-6 text-2xl">{whatIDoHeroItem.title}</h3>
                  <p className="mt-6 text-lg">{whatIDoHeroItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{process.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-14 md:gap-y-20">
              {process.items.map((item) => (
                <div>
                  <h4 className="text-4xl">{item.icon}</h4>
                  <h3 className="mt-6 text-xl">{item.title}</h3>
                  <p className="mt-6 text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{principle.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-14 md:gap-y-20">
              {principle.items.map((item) => (
                <div>
                  <h4 className="text-4xl">{item.icon}</h4>
                  <h3 className="mt-6 text-xl">{item.title}</h3>
                  <p className="mt-6 text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{methods.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-14 text-xl">
              {methods.items.map((item) => (
                <div>
                  <Link to={`/case-studies?q=${item}`}>{item}</Link>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{tools.title}</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 mt-10 gap-8 md:gap-y-16">
              {tools.items.map((item) => (
                <div
                  className={clsx({
                    ['hidden md:block']: item.name === 'dScout',
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
