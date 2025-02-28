import styles from './article-card.module.scss';
import ReactMarkdown from 'react-markdown';
import { Spin, Alert, Image } from 'antd';
import { format } from 'date-fns';
import { avatarFallback } from '../../assets/avatar-fallback';
import unlikedHeart from '../../assets/heart.svg';
import likedHeart from '../../assets/heart2.svg';

import PopConfirm from '../pop-confirm';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAnArticle, deleteArticle, postToLikeAnArticle, deleteToUnlikeAnArticle } from '../../services/blog-service';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const ArticleCard = () => {
  const [showPopConfirm, setShowPopConfirm] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();
  const currentUsername = useSelector((state) => state.user.user.username);
  const isAuthorised = useSelector((state) => state.user.user.token);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteArticle(slug),
    onSuccess: () => {
      queryClient.invalidateQueries(['articles']);
      queryClient.removeQueries(['article', slug]);
      navigate('/');
    },
    onError: (error) => {
      try {
        const errorData = JSON.parse(error.message);
        console.error('Status:', errorData.status);
        console.error('Errors:', errorData.body);
      } catch (error) {
        console.error('Unexpected error format:', error.body);
      }
    },
  });

  const mutationForLike = useMutation({
    mutationFn: (newLike) => (newLike ? postToLikeAnArticle(slug) : deleteToUnlikeAnArticle(slug)),
    onSuccess: (data) => {
      queryClient.removeQueries(['articles', page]);
      queryClient.setQueryData(['article', slug], data);
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

  const { data, error, isPending } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getAnArticle(slug),
    enabled: !!slug && mutation.isIdle,
  });

  if (isPending) {
    return (
      <ul className={styles['articles-list']}>
        <Spin size="large" />
      </ul>
    );
  }

  if (error || !data?.article) {
    return (
      <ul className={styles['articles-list']}>
        <Alert message="Something's gone terribly wrong!" type="error" style={{ fontFamily: "'Inter', sans-serif" }} />
      </ul>
    );
  }

  const { author, body, createdAt, favoritesCount, tagList, title, description, favorited, page } = data.article;

  const onDelete = () => {
    mutation.mutate();
  };

  const onToggleLike = () => {
    mutationForLike.mutate(!favorited);
  };

  return (
    <article className={styles['article-card']} onClick={() => setShowPopConfirm(false)}>
      <header className={styles['header']}>
        <div className={styles['wrapper']}>
          <div className={styles['title-line']}>
            <a className={styles['title-line__title']}>{title}</a>
            <span className={styles['title-line__rating']}>
              <button
                className={`${styles['title-line__button']} ${isAuthorised ? styles['title-line__button--active'] : ''}`}
                disabled={isAuthorised ? false : true}
                onClick={onToggleLike}
              >
                <img
                  className={styles['title-line__heart']}
                  src={favorited ? likedHeart : unlikedHeart}
                  alt="Like this article"
                />
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
          {author.username === currentUsername ? (
            <div className={styles['buttons-group']}>
              <button
                onClick={(event) => {
                  setShowPopConfirm(true);
                  event.stopPropagation();
                }}
                className={`${styles['buttons-group__button-delete']} ${styles['buttons-group__button']}`}
              >
                Delete
              </button>
              <Link
                to={`/articles/${slug}/edit`}
                className={`${styles['buttons-group__button-edit']} ${styles['buttons-group__button']}`}
              >
                Edit
              </Link>
            </div>
          ) : (
            ''
          )}
          {showPopConfirm && (
            <PopConfirm showPopConfirm={showPopConfirm} setShowPopConfirm={setShowPopConfirm} onDelete={onDelete} />
          )}
        </div>
      </header>
      <main className={styles['main']}>
        <ReactMarkdown>{body}</ReactMarkdown>
      </main>
    </article>
  );
};
