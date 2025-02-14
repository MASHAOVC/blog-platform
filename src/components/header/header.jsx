import styles from './header.module.scss';
import { avatarFallback } from '../../assets/avatar-fallback';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../state/actions';

export const Header = () => {
  const isAuthorised = useSelector((state) => Boolean(state.user.user.token));
  const username = useSelector((state) => state.user.user.username);
  const userAvatar = useSelector((state) => state.user.user.image);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    dispatch(logOut());
    setTimeout(() => {
      navigate('/');
    }, 0); // Пытаемся дать время на обновление состояния
  };

  return (
    <header className={styles['header']}>
      <Link to="/" className={`${styles['heading']} ${styles['link']}`}>
        Realworld Blog
      </Link>
      <div className={styles['links-groups-wrapper']}>
        {isAuthorised ? (
          <div className={styles['links-authorized']}>
            <Link to="/new-article" className={`${styles['links-authorized__create-article']} ${styles['link']}`}>
              Create article
            </Link>
            <Link to="/profile" className={`${styles['links-authorized__user']} ${styles['link']}`}>
              {username}
              <img
                className={styles['links-authorized__avatar']}
                src={userAvatar || avatarFallback}
                alt="User Avatar"
              />
            </Link>
            <Link className={`${styles['links-authorized__log-out']} ${styles['link']}`} onClick={handleLogOut}>
              Log Out
            </Link>
          </div>
        ) : (
          <div className={styles['links-not-authorized']}>
            <Link to="/sign-in" className={`${styles['links-not-authorized__sign-in']} ${styles['link']}`}>
              Sign In
            </Link>
            <Link to="/sign-up" className={`${styles['links-not-authorized__sign-up']} ${styles['link']}`}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
