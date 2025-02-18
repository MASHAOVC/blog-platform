import styles from './articles-list.module.scss';
import { Spin, Alert } from 'antd';

import { useQuery } from '@tanstack/react-query';
import { getRecentArticlesGlobally } from '../../services/blog-service';

import Pagination from '../pagination';
import ArticlePreview from '../article-preview';

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ArticlesList = () => {
  // const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const page = Number(new URLSearchParams(location.search).get('page'));
  const setPage = (p) => navigate(`?page=${p}`);

  const invalidPage = !page || page <= 0;

  useEffect(() => {
    if (invalidPage) {
      setPage(1);
    }
  }, [invalidPage, setPage]);

  const { data, error, isPending } = useQuery({
    queryKey: ['articles', 'global', invalidPage ? 1 : page],
    queryFn: () => getRecentArticlesGlobally(invalidPage ? 1 : page),
  });

  if (isPending) {
    return (
      <ul className={styles['articles-list']}>
        <Spin size="large" />
      </ul>
    );
  }

  if (error) {
    console.log(error);
    return (
      <ul className={styles['articles-list']}>
        <Alert message="Something's gone terribly wrong!" type="error" style={{ fontFamily: "'Inter', sans-serif" }} />
      </ul>
    );
  }

  const previews = (data?.articles ?? []).map((article) => {
    return (
      <li key={article.slug}>
        <ArticlePreview {...article} />
      </li>
    );
  });

  return (
    <div>
      <ul className={styles['articles-list']}>{previews}</ul>
      <Pagination page={page} setPage={setPage} articlesCount={data.articlesCount} />
    </div>
  );
};
