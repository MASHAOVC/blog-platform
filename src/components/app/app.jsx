import styles from './app.module.scss';
import { ConfigProvider, Spin } from 'antd';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

// import Header from '../header';
// import ArticlesList from '../articles-list';
// import ArticleCard from '../article-card';
// import CreateAccountForm from '../create-account-form';
// import SignInForm from '../sign-in-form';
// import EditProfileForm from '../edit-profile-form';
// import { CreateArticleForm } from '../article-forms/create-article-form';
// import { EditArticleForm } from '../article-forms/edit-article-form';
// import { RequireAuth } from '../../hoc/requireAuth';

// Ленивый импорт компонентов
const Header = lazy(() => import('../header'));
const ArticlesList = lazy(() => import('../articles-list'));
const ArticleCard = lazy(() => import('../article-card'));
const CreateAccountForm = lazy(() => import('../create-account-form'));
const SignInForm = lazy(() => import('../sign-in-form'));
const EditProfileForm = lazy(() => import('../edit-profile-form'));
const CreateArticleForm = lazy(() =>
  import('../article-forms/create-article-form').then((module) => ({ default: module.CreateArticleForm }))
);
const EditArticleForm = lazy(() =>
  import('../article-forms/edit-article-form').then((module) => ({ default: module.EditArticleForm }))
);
const RequireAuth = lazy(() => import('../../hoc/requireAuth').then((module) => ({ default: module.RequireAuth })));

import { setToken, setUserData } from '../../state/actions';

import { getCurrentUser } from '../../services/blog-service';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      dispatch(setToken(token));

      getCurrentUser()
        .then((data) => dispatch(setUserData(data.user)))
        .catch((err) => console.error(err));
    }
  }, [dispatch]);

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
      <BrowserRouter>
        <div className={styles['app']}>
          <Suspense fallback={<Spin size="large" />}>
            <Header />
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/articles" element={<ArticlesList />} />

              <Route path="/articles/:slug" element={<ArticleCard />} />
              <Route path="/sign-up" element={<CreateAccountForm />} />
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/profile" element={<EditProfileForm />} />
              <Route
                path="/new-article"
                element={
                  <RequireAuth>
                    <CreateArticleForm />
                  </RequireAuth>
                }
              />
              <Route path="/articles/:slug/edit" element={<EditArticleForm />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
};
