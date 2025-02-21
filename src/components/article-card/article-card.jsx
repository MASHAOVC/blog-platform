import styles from './article-card.module.scss';
import ReactMarkdown from 'react-markdown';
import { Spin, Alert, Image } from 'antd';
import { format } from 'date-fns';
import { avatarFallback } from '../../assets/avatar-fallback';
import heartIcon from '../../assets/heart.svg';

import PopConfirm from '../pop-confirm';

import { useParams, Link, useNavigate } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query';
import { getAnArticle, deleteArticle } from '../../services/blog-service';
import { useSelector } from 'react-redux';

export const ArticleCard = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const currentUsername = useSelector((state) => state.user.user.username);

  const mutation = useMutation({
    mutationFn: () => deleteArticle(slug),
    onSuccess: () => {
      console.log('You deleted an article successfully!');
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

  const { data, error, isPending } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getAnArticle(slug),
  });

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

  const onDelete = () => {
    mutation.mutate();
  };

  return (
    <article className={styles['article-card']}>
      <header className={styles['header']}>
        <div className={styles['wrapper']}>
          <div className={styles['title-line']}>
            <a className={styles['title-line__title']}>{title}</a>
            <span className={styles['title-line__rating']}>
              <button className={styles['title-line__button']}>
                <img className={styles['title-line__heart']} src={heartIcon} alt="Like this article" />
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
                onClick={onDelete}
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
          {/* <PopConfirm/> */}
        </div>
      </header>
      <main className={styles['main']}>
        <ReactMarkdown>{body}</ReactMarkdown>
      </main>
    </article>
  );
};
