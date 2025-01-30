import styles from './header.module.scss';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to="/" className={`${styles['heading']} ${styles['link']}`}>
        Realworld Blog
      </Link>
      <div className={styles['links-groups-wrapper']}>
        <div className={styles['links-not-authorized']}>
          <Link to="/sign-in" className={`${styles['links-not-authorized__sign-in']} ${styles['link']}`}>
            Sign In
          </Link>
          <Link to="/sign-up" className={`${styles['links-not-authorized__sign-up']} ${styles['link']}`}>
            Sign Up
          </Link>
        </div>
        <div className={styles['links-authorized']}>
          <Link to="/new-article" className={`${styles['links-authorized__create-article']} ${styles['link']}`}>
            Create article
          </Link>
          <Link to="/profile" className={`${styles['links-authorized__user']} ${styles['link']}`}>
            John Doe
            <img
              className={styles['links-authorized__avatar']}
              src="https://production-media-prisoner-of-payload.s3.amazonaws.com/media/imgbin_computer-icons-woman-avatar-png-1.png"
              alt="User Avatar"
            />
          </Link>
          <Link className={`${styles['links-authorized__log-out']} ${styles['link']}`}>Log Out</Link>
        </div>
      </div>
    </header>
  );
};
