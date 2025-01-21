import styles from './articles-list.module.scss';

import Pagination from '../pagination';
import ArticlePreview from '../article-preview';

export const ArticlesList = () => {
  return (
    <div className={styles['articles-list']}>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
      <Pagination />
    </div>
  );
};
