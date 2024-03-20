import { ContentLayout, MainLayout } from '@/components/Layout';
import { aboutMeQuote, awards, bio, curriculumVitaeLink, education, experience } from '@/constants';
import portrait from '@/assets/images/portrait.png';
import parse from 'html-react-parser';
import { SelectedClients } from '@/features/caseStudies';
import { FadeInSection } from '@/components/FadeInSection';
import { useState } from 'react';
import clsx from 'clsx';

export const AboutMe = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <MainLayout>
      <ContentLayout title="About me">
        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h4 className="text-xl md:text-[28px] md:leading-10">{aboutMeQuote}</h4>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24 grid md:grid-cols-2 gap-8">
            <div className="order-last md:order-first">
              <h3 className="text-2xl">{bio.title}</h3>

              <p className="text-xl mt-8 whitespace-pre-line">{bio.description}</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                className={clsx('w-full transition-opacity opacity-100', {
                  ['!opacity-0']: !hasLoaded,
                })}
                src={portrait}
                alt="Portrait of Matthew Kinsman"
                onLoad={() => {
                  setHasLoaded(true);
                }}
              />

              {/* note: skeleton */}
              <div
                className={clsx(
                  'animate-pulse h-full w-full absolute bg-gray-300 dark:bg-gray-700 opacity-10 top-0 left-0',
                  {
                    ['hidden']: hasLoaded,
                  }
                )}
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{education.title}</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              {education.items.map((item) => (
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2">{item.cert}</p>
                  <p>{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{experience.title}</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              {experience.items.map((item) => (
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2">{item.position}</p>
                  <p>{item.period}</p>
                  <div className="mt-4">
                    <a href={item.to} target="_blank">
                      View website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <SelectedClients />
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">{awards.title}</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              {awards.items.map((item) => (
                <div className="flex items-center gap-4">
                  {parse(item.icon)}
                  <div>
                    <p className="mt-2">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 md:mt-24">
            <h3 className="text-2xl">Curriculum Vitae</h3>
            <div className="mt-8 text-xl">{parse(curriculumVitaeLink)}</div>
          </div>
        </FadeInSection>
      </ContentLayout>
    </MainLayout>
  );
};
