import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './state/store';

import App from './components/app';
import './scss/index.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
