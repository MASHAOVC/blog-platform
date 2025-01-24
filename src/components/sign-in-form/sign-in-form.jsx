import styles from './sign-in-form.module.scss';

export const SignInForm = () => {
  return (
    <form className={styles['sign-in-form']}>
      <h1 className={styles['heading']}>Sign in</h1>
      <div className={styles['form-group']}>
        <label className={styles['label']}>
          Email address
          <input className={styles['input-field']} type="email" placeholder="Email address" />
        </label>
        <label className={styles['label']}>
          Password
          <input className={styles['input-field']} placeholder="Password" />
        </label>
      </div>
      <footer className={styles['footer']}>
        <button className={styles['submit-button']} type="submit">
          Login
        </button>
        <span className={styles['sign-up-group']}>
          Don&apos;t have an account? <a className={styles['sign-up-link']}>Sign Up</a>
        </span>
      </footer>
    </form>
  );
};
