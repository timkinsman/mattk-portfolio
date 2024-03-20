import { Head } from '@/components/Head';
import { MainLayout } from '@/components/Layout';
import { RecentTrack } from '@/features/recentTrack';
import parse from 'html-react-parser';
import { awards, landingIds, socialItems, testimonials } from '@/constants';
import { caseStudies } from '@/constants/caseStudies';
import CircleFilledIcon from '@/assets/circle-filled.svg?react';
import { ThemeToggle } from '@/features/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import ArrowDownIcon from '@/assets/arrow-down.svg?react';
import clsx from 'clsx';
import { CaseStudiesList, Panel } from '@/features/caseStudies';
import { SelectedClients } from '@/features/caseStudies';
import { isScrolledIntoView } from '@/utils/isScrolledIntoView';
import { logger } from '@/utils/logger';
import { Link } from 'react-router-dom';
import { FadeInSection } from '@/components/FadeInSection';
import { CaseStudy } from '@/types';
import memojiWEBM from '@/assets/videos/memoji_1.webm';

const caseStudy1 = caseStudies.find((caseStudy) => caseStudy.id === landingIds[1]);
const caseStudy2 = caseStudies.find((caseStudy) => caseStudy.id === landingIds[2]);
const caseStudy3 = caseStudies.find((caseStudy) => caseStudy.id === landingIds[3]);
const caseStudy4 = caseStudies.find((caseStudy) => caseStudy.id === landingIds[4]);

logger.info({ caseStudy1, caseStudy2, caseStudy3, caseStudy4 });

export const Landing = () => {
  const [ticking, setTicking] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [isHoveringPanels, setIsHoveringPanels] = useState(false);
  const [gifSrc, setGifSrc] = useState(caseStudy1?.gifSrc);
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });

  const [hasLoaded, setHasLoaded] = useState(false);

  const refPanel1 = useRef<HTMLDivElement>(null);
  const refPanel2 = useRef<HTMLDivElement>(null);
  const refPanel3 = useRef<HTMLDivElement>(null);
  const refPanel4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(
      () => ticking && setTestimonialIndex((testimonialIndex + 1) % 3),
      6000
    );
    return () => clearTimeout(timer);
  }, [testimonialIndex, ticking]);

  const onScroll = useCallback(() => {
    const container = document.getElementById('container');

    if (!container) {
      return;
    }

    const applyCaseStudy = (caseStudy?: CaseStudy) => {
      container.style.backgroundColor = caseStudy?.color ?? '';
      container.style.color = caseStudy?.contrastTextColor ?? '';
      setGifSrc(caseStudy?.gifSrc);
    };

    if (refPanel1.current && isScrolledIntoView(refPanel1.current, 'majority')) {
      applyCaseStudy(caseStudy1);
    } else if (refPanel2.current && isScrolledIntoView(refPanel2.current, 'majority')) {
      applyCaseStudy(caseStudy2);
    } else if (refPanel3.current && isScrolledIntoView(refPanel3.current, 'majority')) {
      applyCaseStudy(caseStudy3);
    } else if (refPanel4.current && isScrolledIntoView(refPanel4.current, 'majority')) {
      applyCaseStudy(caseStudy4);
    } else {
      container.style.backgroundColor = '';
      container.style.color = '';
    }
  }, []);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    setMousePosition({
      mouseX: clientX,
      mouseY: clientY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <>
      <Head description="Hello, my name is Matthew Kinsman, I’m a senior product designer currently living in Melbourne and working at Mindset Health." />
      <MainLayout>
        <div className="relative">
          {/* max-w-7xl mx-auto */}
          <div
            id={landingIds[0]}
            className="px-4 sm:px-6 lg:px-24 h-screen grid min-[1200px]:grid-cols-2"
          >
            <div className="m-auto order-1 min-[1200px]:order-none max-w-[800px]">
              <h2 className="lg:text-[50px] lg:leading-[72px] text-[28px] leading-[40px]">
                Hello, my name is{' '}
                <Link to="/about-me" className="md:border-b-[3px]">
                  Matthew Kinsman
                </Link>
                , I’m a senior product designer currently living in Melbourne and working at{' '}
                <a
                  href="https://www.mindsethealth.com/"
                  target="_blank"
                  className="md:border-b-[3px]"
                >
                  Mindset Health
                </a>
                .
              </h2>
            </div>

            <div className="m-auto text-9xl w-full max-w-[700px] hidden min-[1200px]:block">
              <video
                onCanPlay={() => setHasLoaded(true)}
                src={memojiWEBM}
                autoPlay
                className={clsx('w-full transition-opacity opacity-100', {
                  ['!opacity-0']: !hasLoaded,
                })}
                loop
              />
            </div>
          </div>

          <div className="absolute bottom-0 h-[120px] flex items-center justify-between w-full px-4 sm:px-6 lg:px-24 gap-2">
            <RecentTrack />

            <div className="gap-2 ml-auto hidden md:flex">
              <ThemeToggle />
              <button
                type="button"
                className="opacity-40 hover:opacity-100 transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-1"
                onClick={() =>
                  document.getElementById(landingIds[1])?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <ArrowDownIcon color="currentColor" />
              </button>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHoveringPanels(true)}
          onMouseLeave={() => setIsHoveringPanels(false)}
        >
          <div id={landingIds[1]} ref={refPanel1} className="h-screen flex">
            <Panel id={landingIds[1]} />
          </div>

          <div id={landingIds[2]} ref={refPanel2} className="h-screen flex">
            <Panel id={landingIds[2]} />
          </div>

          <div id={landingIds[3]} ref={refPanel3} className="h-screen flex">
            <Panel id={landingIds[3]} />
          </div>

          <div id={landingIds[4]} ref={refPanel4} className="h-screen flex">
            <Panel id={landingIds[4]} />
          </div>
        </div>

        <div id={landingIds[5]} className="py-14 md:py-28">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 lg:px-24">
            <FadeInSection>
              <CaseStudiesList />
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
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl">{testimonials.title}</h3>
                  <div className="flex gap-2">
                    {Array.from({ length: testimonials.items.length }, (_v, i) => i).map(
                      (index) => (
                        <button
                          className={clsx(
                            'transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-2.5',
                            {
                              ['opacity-40 hover:opacity-100 ']: index !== testimonialIndex,
                            }
                          )}
                          onClick={() => {
                            setTicking(false);
                            setTestimonialIndex(index);
                          }}
                        >
                          <span className="sr-only">Select testimonial</span>
                          <CircleFilledIcon fill="currentColor" height={10} width={10} />
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div key={testimonialIndex} className="mt-8 animate-fade-in">
                  <div className="max-w-[1000px]">
                    <h3 className="text-xl md:text-[28px] md:leading-[40px]">
                      {testimonials.items[testimonialIndex].quote}
                    </h3>
                    <p className="mt-4 opacity-80">{testimonials.items[testimonialIndex].author}</p>
                    <p className="opacity-80">{testimonials.items[testimonialIndex].position}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        <div className="fixed left-0 lg:flex flex-col gap-2 z-10 inset-y-0 my-auto h-fit hidden w-24 items-center">
          {socialItems.map((item) =>
            typeof item.icon === 'string' ? (
              <a
                className="text-current focus:outline-none rounded-lg text-sm p-2.5 border-none"
                href={item.to}
              >
                {parse(item.icon)}
              </a>
            ) : (
              <></>
            )
          )}
        </div>

        <div className="fixed right-0 lg:flex flex-col gap-2 z-10 inset-y-0 my-auto h-fit hidden w-24 items-center">
          {landingIds.map((landingId) => (
            <button
              className="opacity-40 hover:opacity-100 transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-2.5"
              onClick={() =>
                document.getElementById(landingId)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {/* <span className="sr-only">Open sidebar</span> */}
              <CircleFilledIcon fill="currentColor" height={10} width={10} />
            </button>
          ))}
        </div>

        <img
          className={clsx('transition-opacity fixed max-w-3xl rounded-lg opacity-0 z-10 w-full', {
            ['opacity-100']: isHoveringPanels,
          })}
          style={{ top: mousePosition.mouseY + 16, left: mousePosition.mouseX + 16 }}
          src={gifSrc}
          alt="hover item"
        />
      </MainLayout>
    </>
  );
};
