import { AppProvider } from '@/providers/app';
import { delay } from './utils/delay';
import { lazyImport } from './utils/lazyImport';

const { AppRoutes } = lazyImport(() => delay(import('@/routes'), 3000), 'AppRoutes');

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
