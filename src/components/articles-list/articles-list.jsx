import styles from './articles-list.module.scss';
import { Spin, Alert } from 'antd';

import { useQuery } from '@tanstack/react-query';
import { getRecentArticlesGlobally } from '../../services/blog-service';

import Pagination from '../pagination';
import ArticlePreview from '../article-preview';

import { useState } from 'react';

export const ArticlesList = () => {
  const [page, setPage] = useState(1);

  const { data, error, isPending } = useQuery({
    queryKey: ['articles', 'global', page],
    queryFn: () => getRecentArticlesGlobally(page),
  });

  console.log(data);

  if (isPending) {
    return (
      <ul className={styles['articles-list']}>
        <Spin size="large" />
      </ul>
    );
  }

  if (error) {
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
