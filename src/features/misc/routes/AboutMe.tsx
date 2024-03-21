import { ContentLayout, MainLayout } from '@/components/Layout';
import { aboutMeQuote, awards, bio, curriculumVitaeLink, education, experience } from '@/constants';
import portrait from '@/assets/images/portrait.png';
import parse from 'html-react-parser';
import { SelectedClients } from '@/features/caseStudies';
import { FadeInSection } from '@/components/FadeInSection';
import { Image } from '@/components/Elements';

export const AboutMe = () => {
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

            <Image src={portrait} alt="Portrait of Matthew Kinsman" aspect="square" />
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
