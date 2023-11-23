import { useRoutes } from 'react-router-dom';

import { NotFound } from '@/features/misc';

const { Landing } = lazyImport(() => delay(import('@/features/misc')), 'Landing');

import { publicRoutes } from './public';
import { lazyImport } from '@/utils/lazyImport';
import { delay } from '@/utils/delay';

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '/', element: <Landing /> },
    { path: '*', element: <NotFound /> },
  ];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
