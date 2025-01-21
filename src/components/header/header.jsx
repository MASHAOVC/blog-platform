import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['heading']}>Realworld Blog</h1>
      <div className={styles['button-groups-wrapper']}>
        <div className={styles['buttons-not-authorized']}>
          <button className={`${styles['buttons-not-authorized__sign-in']} ${styles['button']}`}>Sign In</button>
          <button className={`${styles['buttons-not-authorized__sign-up']} ${styles['button']}`}>Sign Up</button>
        </div>
        <div className={styles['buttons-authorized']}>
          <button className={`${styles['buttons-authorized__create-article']} ${styles['button']}`}>
            Create article
          </button>
          <button className={`${styles['buttons-authorized__user']} ${styles['button']}`}>
            John Doe
            <img
              className={styles['buttons-authorized__avatar']}
              src="https://production-media-prisoner-of-payload.s3.amazonaws.com/media/imgbin_computer-icons-woman-avatar-png-1.png"
              alt="User Avatar"
            />
          </button>
          <button className={`${styles['buttons-authorized__log-out']} ${styles['button']}`}>Log Out</button>
        </div>
      </div>
    </header>
  );
};
