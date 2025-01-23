import styles from './article-card.module.scss';
import ReactMarkdown from 'react-markdown';

export const ArticleCard = () => {
  return (
    <article className={styles['article-card']}>
      <header className={styles['header']}>
        <div className={styles['wrapper']}>
          <div className={styles['title-line']}>
            <a className={styles['title-line__title']}>Some article title</a>
            <span className={styles['title-line__rating']}>
              <button className={styles['title-line__button']}>
                <img className={styles['title-line__heart']} src="src/assets/heart.svg" alt="Like this article" />
              </button>
              12
            </span>
          </div>
          <span className={styles['tag']}>Tag1</span>
          <p className={styles['preview-paragraph']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className={styles['user-wrapper']}>
          <div className={styles['info']}>
            <span className={styles['info__user-name']}>John Doe</span>
            <span className={styles['info__publication-date']}>March 5, 2020</span>
          </div>
          <img
            className={styles['user-avatar']}
            src="https://production-media-prisoner-of-payload.s3.amazonaws.com/media/imgbin_computer-icons-woman-avatar-png-1.png"
            alt="User Avatar"
          />
        </div>
      </header>
      <main className={styles['main']}>
        <ReactMarkdown></ReactMarkdown>
      </main>
    </article>
  );
};
