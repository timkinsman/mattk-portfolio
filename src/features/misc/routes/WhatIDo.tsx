import { ContentLayout, MainLayout } from '@/components/Layout';
import { methods, principles, process, tools, whatIDoHeroItems } from '@/constants';
import clsx from 'clsx';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

export const WhatIDo = () => {
  return (
    <MainLayout>
      <ContentLayout title="What I do">
        <div className="mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            {whatIDoHeroItems.map((whatIDoHeroItem) => (
              <div>
                <h4 className="text-4xl">{whatIDoHeroItem.icon}</h4>
                <h3 className="mt-6 text-2xl">{whatIDoHeroItem.title}</h3>
                <p className="mt-6">{whatIDoHeroItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">{principles.title}</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-14 md:gap-y-20">
            {principles.items.map((item) => (
              <div>
                <h4 className="text-4xl">{item.icon}</h4>
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">{process.title}</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-14 md:gap-y-20">
            {process.items.map((item) => (
              <div>
                <h4 className="text-4xl">{item.icon}</h4>
                <h3 className="mt-6 text-xl">{item.title}</h3>
                <p className="mt-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">{methods.title}</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {methods.items.map((item) => (
              <div>
                <Link to={item.to}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">{tools.title}</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 mt-10">
            {tools.items.map((item) => (
              <div
                className={clsx('relative group w-full h-36 flex items-center justify-center gap-2', {
                  ['hidden md:block']: item.name === 'dScout',
                })}
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
