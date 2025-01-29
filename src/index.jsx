import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './state/store';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';

import App from './components/app';
import './scss/index.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
