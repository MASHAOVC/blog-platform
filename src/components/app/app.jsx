import styles from './app.module.scss';
import { ConfigProvider } from 'antd';

import Header from '../header';
import ArticlesList from '../articles-list';
import ArticleCard from '../article-card';
import CreateAccountForm from '../create-account-form';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890FF',
          borderRadius: 4,
          fontFamily: 'inter, sans-serif',
          fontSize: 12,
          controlHeight: 24,
          colorText: 'rgba(0, 0, 0, 0.75)',
          colorBgContainer: '#EBEEF3',
          colorBorder: '#1890FF',
        },
      }}
    >
      <div className={styles['app']}>
        <Header />
        {/* <ArticlesList/> */}
        {/* <ArticleCard/> */}
        <CreateAccountForm />
      </div>
    </ConfigProvider>
  );
};
