import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { Notifications } from '@/components/Notifications/Notifications';
import { queryClient } from '@/lib/react-query';
import { FadeInSection } from '@/components/FadeInSection';

const ErrorFallback = () => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-[#F5F5F5] dark:bg-[#0F0E10] text-black dark:text-white"
      role="alert"
    >
      <div className="text-center flex flex-col items-center animate-fade-in">
        <h2 className="text-xl">Sorry, an unexpected error occurred.</h2>
        <a href="/" className='cursor-pointer mt-2'>Refresh</a>
      </div>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen bg-[#F5F5F5] dark:bg-[#0F0E10] text-black dark:text-white">
          <FadeInSection>
            <div className="text-center animate-fade-in">
              <h3 className="text-xl">Matthew Kinsman Portfolio</h3>
              <p className="mt-2">© {new Date().getFullYear()}, Melbourne, Australia</p>
            </div>
          </FadeInSection>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
            <Notifications />
            <Router>{children}</Router>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
