import React, { useEffect } from 'react';
import MenuIcon from '@/assets/menu.svg?react';
import ArrowUpIcon from '@/assets/arrow-up.svg?react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ThemeToggle } from '@/features/theme';

type NavigationItem = {
  name: string;
  to: string;
};

const navigation: NavigationItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Case studies', to: '/case-studies' },
  { name: 'About me', to: '/about-me' },
  { name: 'What I do', to: '/what-i-do' },
  { name: 'Other work', to: '/other-work' },
  { name: 'Contact', to: '/contact' },
];

type SocialItem = {
  name: string;
  to: string;
  // icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const social: SocialItem[] = [
  { name: 'Email', to: 'https://google.com' },
  { name: 'Facebook', to: 'https://google.com' },
  { name: 'Behance', to: 'https://google.com' },
  { name: 'Twitter', to: 'https://google.com' },
  { name: 'LinkedIn', to: 'https://google.com' },
  { name: 'Spotify', to: 'https://google.com' },
];

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
    <div className="bg-white dark:bg-[#0F0E10] text-black dark:text-white transition-all">
      <div className="min-h-screen flex overflow-hidden">
        {/* <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {/* <Sidebar /> */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <nav className="fixed z-10 flex-shrink-0 flex items-center h-16 left-0 right-0 px-4 sm:px-6 lg:px-8 justify-between">
            <Link to="/">Matthew Kinsman</Link>

            {/* if mobile */}
            <button
              className="text-gray-500 focus:outline-none md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon aria-hidden="true" />
            </button>

            {/* if desktop */}
            <div className="flex-1 justify-end hidden md:flex">
              <ul className="flex items-center gap-8">
                {navigation
                  .filter((item) => item.to !== '/')
                  .map((item) => (
                    <Link key={item.name} to={item.to}>
                      {item.name}
                    </Link>
                  ))}
              </ul>
            </div>
          </nav>
          <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
        </div>

        <div className={clsx('navbar-menu relative z-50', { ['hidden']: !sidebarOpen })}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-[#0F0E10] overflow-y-auto">
            <div className="flex items-center mb-8">
              <div className="ml-auto">
                <button className="navbar-close" onClick={() => setSidebarOpen(false)}>
                  <svg
                    className="h-6 w-6  cursor-pointer opacity-60 hover:opacity-100"
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
            <div>
              <ul className='flex flex-col gap-6 items-center'>
                {navigation.map((item) => (
                  <div className='w-fit'>
                    <Link
                      key={item.name}
                      to={item.to}
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
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <hr className="pb-28 opacity-40" />
      <div className="pb-28 grid md:grid-cols-footer items-start gap-20">
        <div>
          <div>
            <h4 className="text-2xl">Go to</h4>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-8">
            {navigation.map((item) => (
              <div>
                <Link key={item.name} to={item.to}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-2xl">Get in touch</h4>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-8">
            {social.map((item) => (
              <div>
                <a key={item.name} href={item.to} target="_blank">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUpIcon className={clsx('w-5 h-5')} />
          </button>
        </div>
      </div>
      <div className="pb-28 grid md:grid-cols-footer items-center gap-8">
        <p>© {new Date().getFullYear()} Matthew Kinsman, Melbourne, Australia</p>
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
