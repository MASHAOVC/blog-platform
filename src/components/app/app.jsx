import styles from './app.module.scss';
import { ConfigProvider } from 'antd';

import Header from '../header';
import ArticlesList from '../articles-list';
import ArticleCard from '../article-card';
import CreateAccountForm from '../create-account-form';
import SignInForm from '../sign-in-form';
import EditProfileForm from '../edit-profile-form';
import { CreateArticleForm } from '../article-forms/create-article-form';
import { EditArticleForm } from '../article-forms/edit-article-form';

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
        <ArticlesList />
        {/* <ArticleCard /> */}
        {/* <CreateAccountForm /> */}
        {/* <SignInForm/> */}
        {/* <EditProfileForm/> */}
        {/* <CreateArticleForm /> */}
        {/* <EditArticleForm/> */}
      </div>
    </ConfigProvider>
  );
};
