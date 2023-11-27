import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ENABLE_MSW } from './config/index.ts';

async function enableMocking() {
  if (!ENABLE_MSW) {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
