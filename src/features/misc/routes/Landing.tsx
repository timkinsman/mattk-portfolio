import { Head } from '@/components/Head';
import { MainLayout } from '@/components/Layout';
import { RecentTrack } from '@/features/recentTrack';
import parse from 'html-react-parser';
import { awards, landingHero, landingIds, socialItems, testimonials } from '@/constants';
import CircleFilledIcon from '@/assets/circle-filled.svg?react';
import { ThemeToggle } from '@/features/theme';
import { useEffect, useState } from 'react';
import ArrowDownIcon from '@/assets/arrow-down.svg?react';
import clsx from 'clsx';
import { Panel } from '@/features/caseStudies';
import { SelectedClients } from '@/features/caseStudies/components/SelectedClients';

export const Landing = () => {
  const [ticking, setTicking] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => ticking && setTestimonialIndex((testimonialIndex + 1) % 3),
      6000
    );
    return () => clearTimeout(timer);
  }, [testimonialIndex, ticking]);

  return (
    <>
      <Head description="Hello, my name is Matthew Kinsman, I’m a senior product designer currently living in Melbourne and working at Mindset Health." />
      <MainLayout>
        <div className="relative">
          {/* max-w-7xl mx-auto */}
          <div id={landingIds[0]} className="px-4 sm:px-6 lg:px-24 h-screen grid md:grid-cols-2">
            <div className="m-auto order-1 md:order-none">
              <h2 className="text-3xl sm:text-4xl">{parse(landingHero)}</h2>
            </div>

            <div className="m-auto text-9xl">{/* 😐 */}</div>
          </div>

          <div className="absolute bottom-0 h-16 flex items-center justify-between w-full px-4 sm:px-6 lg:px-24">
            <RecentTrack />

            <div className="flex gap-4">
              <ThemeToggle />
              <button
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                onClick={() =>
                  document.getElementById(landingIds[1])?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <ArrowDownIcon className={'w-5 h-5'} />
              </button>
            </div>
          </div>
        </div>

        <div id={landingIds[1]} className="h-screen flex">
          <Panel id="port-phillip" />
        </div>

        <div id={landingIds[2]} className="h-screen flex">
          <Panel id="bank-vic" />
        </div>

        <div id={landingIds[3]} className="h-screen flex">
          <Panel id="lumea" />
        </div>

        <div id={landingIds[4]} className="h-screen flex">
          <Panel id="bupa" />
        </div>

        <div id={landingIds[5]} className="py-8 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24">
            {/* case studies */}

            <SelectedClients />

            <div className="mt-24">
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

            <div className="mt-24">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl">{testimonials.title}</h3>
                <div className="flex gap-2">
                  {Array.from({ length: testimonials.items.length }, (_v, i) => i).map((index) => (
                    <button
                      className={clsx(
                        'transition-opacity text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5',
                        {
                          ['opacity-60 hover:opacity-100 ']: index !== testimonialIndex,
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
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <h3 className="text-2xl">{testimonials.items[testimonialIndex].quote}</h3>
                  <p className="mt-4 opacity-60">{testimonials.items[testimonialIndex].author}</p>
                  <p className="opacity-60">{testimonials.items[testimonialIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed left-0 lg:flex flex-col gap-2 z-10 inset-y-0 my-auto h-fit hidden w-24 items-center">
          {socialItems.map((item) =>
            typeof item.icon === 'string' ? (
              <a
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 border-none"
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
              className="opacity-60 hover:opacity-100 transition-opacity text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
              onClick={() =>
                document.getElementById(landingId)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {/* <span className="sr-only">Open sidebar</span> */}
              <CircleFilledIcon fill="currentColor" height={10} width={10} />
            </button>
          ))}
        </div>
      </MainLayout>
    </>
  );
};
