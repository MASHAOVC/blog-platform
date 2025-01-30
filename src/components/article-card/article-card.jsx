import styles from './article-card.module.scss';
import ReactMarkdown from 'react-markdown';
import { Spin, Alert, Image } from 'antd';
import { format } from 'date-fns';
import { avatarFallback } from '../../assets/avatar-fallback';

import PopConfirm from '../pop-confirm';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { getAnArticle } from '../../services/blog-service';

export const ArticleCard = () => {
  const { slug } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ['article', 'global'],
    queryFn: () => getAnArticle(slug),
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

  const { author, body, createdAt, favoritesCount, tagList, title, description } = data.article;

  return (
    <article className={styles['article-card']}>
      <header className={styles['header']}>
        <div className={styles['wrapper']}>
          <div className={styles['title-line']}>
            <a className={styles['title-line__title']}>{title}</a>
            <span className={styles['title-line__rating']}>
              <button className={styles['title-line__button']}>
                <img className={styles['title-line__heart']} src="src/assets/heart.svg" alt="Like this article" />
              </button>
              {favoritesCount}
            </span>
          </div>
          <div className={styles['tags-wrapper']}>
            {[...new Set(tagList)]
              .filter((tag) => tag.trim())
              .map((tag) => (
                <span key={tag} className={styles['tags-wrapper__tag']}>
                  {tag}
                </span>
              ))}
          </div>
          <p className={styles['preview-paragraph']}>{description}</p>
        </div>
        <div className={styles['user-wrapper']}>
          <div className={styles['user-wrapper__wrapper']}>
            <div className={styles['info']}>
              <span className={styles['info__user-name']}>{author.username}</span>
              <span className={styles['info__publication-date']}>{format(new Date(createdAt), 'MMMM d, yyyy')}</span>
            </div>
            <Image
              className={styles['user-avatar']}
              src={author.image}
              width={46}
              height={46}
              fallback={avatarFallback}
              alt="User Avatar"
            />
          </div>
          {/* <div className={styles['buttons-group']}>
            <button className={`${styles['buttons-group__button-delete']} ${styles['buttons-group__button']}`}>
              Delete
            </button>
            <button className={`${styles['buttons-group__button-edit']} ${styles['buttons-group__button']}`}>
              Edit
            </button>
          </div> */}
          {/* <PopConfirm/> */}
        </div>
      </header>
      <main className={styles['main']}>
        <ReactMarkdown></ReactMarkdown>
      </main>
    </article>
  );
};
