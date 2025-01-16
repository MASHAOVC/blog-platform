import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['heading']}>Realworld Blog</h1>
      <div className={styles['button-groups-wrapper']}>
        <div className={styles['buttons-not-authorized']}>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
        <div className={styles['buttons-authorized']}>
          <button>Create article</button>
          <button>John Doe</button>
          <button>Log Out</button>
        </div>
      </div>
    </header>
  );
};
