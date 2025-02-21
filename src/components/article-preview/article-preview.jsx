import styles from './article-preview.module.scss';
import { Image } from 'antd';
import { avatarFallback } from '../../assets/avatar-fallback';
import { format } from 'date-fns';

import { Link } from 'react-router-dom';

export const ArticlePreview = (props) => {
  const { author, title, description, favoritesCount, tagList, createdAt, slug } = props;
  const safeSlug = encodeURIComponent(slug);

  return (
    <div className={styles['article-preview']}>
      <div className={styles['article-wrapper']}>
        <header className={styles['header']}>
          <Link to={`/articles/${safeSlug}`} className={styles['header__title']}>
            {title}
          </Link>
          <span className={styles['header__rating']}>
            <button className={styles['header__button']}>
              <img className={styles['header__heart']} src="src/assets/heart.svg" alt="Like this article" />
            </button>
            {favoritesCount}
          </span>
        </header>
        <div className={styles['tags-wrapper']}>
          {[...new Set(tagList)]
            .filter((tag) => tag.trim())
            .map((tag) => (
              <span key={tag} className={styles['tags-wrapper__tag']}>
                {tag}
              </span>
            ))}
        </div>
        <p className={styles['paragraph']}>{description}</p>
      </div>
      <div className={styles['user-wrapper']}>
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
    </div>
  );
};
