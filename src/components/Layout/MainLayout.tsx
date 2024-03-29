import React, { useEffect } from 'react';
import MenuIcon from '@/assets/menu.svg?react';
import ArrowUpIcon from '@/assets/arrow-up.svg?react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ThemeToggle } from '@/features/theme';
import { navigation, socialItems } from '@/constants';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div
      id="container"
      className="bg-[#F5F5F5] dark:bg-[#0b0b0c] text-black dark:text-white transition-all duration-300"
    >
      <div className="min-h-screen flex overflow-hidden">
        {/* <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {/* <Sidebar /> */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <nav className="absolute z-10 flex-shrink-0 flex items-center h-[120px] left-0 right-0 px-4 sm:px-6 lg:px-24 justify-between text-xl md:text-2xl">
            <Link to="/" className={clsx({ 'opacity-100': location.pathname === '/' })}>
              Matthew Kinsman
            </Link>

            {/* if mobile */}
            <button
              className="focus:outline-none min-[1200px]:hidden opacity-40 hover:opacity-100"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon aria-hidden="true" />
            </button>

            {/* if desktop */}
            <div className="flex-1 justify-end hidden min-[1200px]:flex">
              <ul className="flex items-center gap-10">
                {navigation
                  .filter((item) => item.to !== '/')
                  .map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={clsx({ 'opacity-100': location.pathname === item.to })}
                    >
                      {item.name}
                    </Link>
                  ))}
              </ul>
            </div>
          </nav>
          <main className="flex-1 relative focus:outline-none animate-fade-in">{children}</main>
        </div>

        <div
          className={clsx('relative z-50 animate-fade-in', {
            ['hidden']: !sidebarOpen,
          })}
        >
          <div className="fixed inset-0 bg-gray-800 opacity-25"></div>

          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full px-4 bg-[#F5F5F5] dark:bg-[#0F0E10] text-black dark:text-white overflow-y-auto justify-between">
            <div className="flex items-center h-[120px]">
              <Link
                to="/"
                className={clsx('text-xl md:text-2xl', {
                  'opacity-100': location.pathname === '/',
                })}
                onClick={() => setSidebarOpen(false)}
              >
                Matthew Kinsman
              </Link>
              <div className="ml-auto flex">
                <button
                  className="opacity-40 hover:opacity-100"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg
                    className="h-6 w-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="py-6">
              <ul className="flex flex-col gap-8">
                {navigation
                  .filter((item) => item.to !== '/')
                  .map((item) => (
                    <div className="w-fit">
                      <Link
                        key={item.name}
                        to={item.to}
                        className={clsx('text-3xl', {
                          'opacity-100': location.pathname === item.to,
                        })}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  const location = useLocation();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-24">
      <hr className="pb-14 md:pb-24 opacity-10 border-inherit" />
      <div className="pb-14 md:pb-24 grid md:grid-cols-footer items-start gap-14">
        <div>
          <div>
            <h4 className="text-2xl">Go to</h4>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-8">
            {navigation.map((item) => (
              <div>
                <Link
                  key={item.name}
                  to={item.to}
                  className={clsx({ 'opacity-100': location.pathname === item.to }, 'text-xl')}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-2xl">Social</h4>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-8">
            {socialItems.map((item) => (
              <div>
                <a key={item.name} href={item.to} target="_blank" className="text-xl">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            className="opacity-40 hover:opacity-100 transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-1"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
      <div className="pb-8 md:pb-28 grid md:grid-cols-footer items-center gap-4 md:gap-8 md:text-xl">
        <p className="md:-order-none order-1">
          © {new Date().getFullYear()} Matthew Kinsman, Melbourne, Australia
        </p>
        <p>
          Developed by{' '}
          <a href="https://timkinsman.com" target="_blank">
            Tim Kinsman
          </a>
        </p>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
