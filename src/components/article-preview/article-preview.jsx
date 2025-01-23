import styles from './article-preview.module.scss';

export const ArticlePreview = () => {
  return (
    <div className={styles['article-preview']}>
      <div className={styles['article-wrapper']}>
        <header className={styles['header']}>
          <a className={styles['header__title']}>Some article title</a>
          <span className={styles['header__rating']}>
            <button className={styles['header__button']}>
              <img className={styles['header__heart']} src="src/assets/heart.svg" alt="Like this article" />
            </button>
            12
          </span>
        </header>
        <span className={styles['tag']}>Tag1</span>
        <p className={styles['paragraph']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
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
    </div>
  );
};
