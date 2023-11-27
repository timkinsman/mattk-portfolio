import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from '@/components/Elements';
import { Notifications } from '@/components/Notifications/Notifications';
import { queryClient } from '@/lib/react-query';

const ErrorFallback = () => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-white dark:bg-[#0F0E10] text-black dark:text-white"
      role="alert"
    >
      <div className="text-center flex flex-col items-center animate-fade-in">
        <h2 className="text-xl">Sorry, an unexpected error occurred.</h2>
        <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
          Refresh
        </Button>
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
        <div className="flex items-center justify-center w-screen h-screen bg-white dark:bg-[#0F0E10] text-black dark:text-white">
          <div className="text-center animate-fade-in">
            <h3 className="text-xl">Matthew Kinsman Portfolio</h3>
            <p className="mt-2">© {new Date().getFullYear()}, Melbourne, Australia</p>
          </div>
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
