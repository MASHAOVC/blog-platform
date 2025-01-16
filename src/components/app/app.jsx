import styles from './app.module.scss';

import Header from '../header';

export const App = () => {
  return (
    <main className={styles['app']}>
      <Header />
    </main>
  );
};
