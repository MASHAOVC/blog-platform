import styles from './article-preview.module.scss';
import { Image } from 'antd';
import { avatarFallback } from '../../assets/avatar-fallback';
import { format } from 'date-fns';
import unlikedHeart from '../../assets/heart.svg';
import likedHeart from '../../assets/heart2.svg';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postToLikeAnArticle, deleteToUnlikeAnArticle } from '../../services/blog-service';

export const ArticlePreview = (props) => {
  const { author, title, description, favoritesCount, tagList, createdAt, slug, favorited, page } = props;
  const safeSlug = encodeURIComponent(slug);
  const isAuthorised = useSelector((state) => state.user.user.token);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newLike) => (newLike ? postToLikeAnArticle(slug) : deleteToUnlikeAnArticle(slug)),
    onSuccess: (data) => {
      queryClient.setQueryData(['articles', page], (oldArticles) => {
        return {
          ...oldArticles,
          articles: oldArticles.articles.map((article) => {
            if (article.slug === data.article.slug) {
              return data.article;
            } else {
              return article;
            }
          }),
        };
      });
    },
    onError: (error) => {
      console.error('Like/Unlike error:', error);
      try {
        const errorData = JSON.parse(error.message);
        console.error('Status:', errorData.status);
        console.error('Errors:', errorData.body);
      } catch (error) {
        console.error('Unexpected error format:', error.body);
      }
    },
  });

  const onToggleLike = () => {
    mutation.mutate(!favorited);
  };

  return (
    <div className={styles['article-preview']}>
      <div className={styles['article-wrapper']}>
        <header className={styles['header']}>
          <Link to={`/articles/${safeSlug}`} className={styles['header__title']}>
            {title}
          </Link>
          <span className={styles['header__rating']}>
            <button
              className={`${styles['header__button']} ${isAuthorised ? styles['header__button--active'] : ''}`}
              disabled={isAuthorised ? false : true}
              onClick={onToggleLike}
            >
              <img
                className={styles['header__heart']}
                src={favorited ? likedHeart : unlikedHeart}
                alt="Like this article"
              />
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
