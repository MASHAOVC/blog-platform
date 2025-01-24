import styles from './create-account-form.module.scss';

export const CreateAccountForm = () => {
  return (
    <form className={styles['create-account-form']}>
      <h1 className={styles['heading']}>Create new account</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Username
          <input className={styles['input-field']} placeholder="Username" />
        </label>
        <label className={styles['label']}>
          Email address
          <input className={styles['input-field']} type="email" placeholder="Email address" />
        </label>
        <label className={styles['label']}>
          Password
          <input className={styles['input-field']} type="password" placeholder="Password" />
        </label>
        <label className={styles['label']}>
          Repeat password
          <input className={styles['input-field']} type="password" placeholder="Password" />
        </label>
      </div>
      <div className={styles['agreement-group']}>
        <div className={styles['line']}></div>
        <label className={styles['check']}>
          <input className={styles['check__input']} type="checkbox" defaultChecked />
          <span className={styles['check__box']}></span>
          <span className={styles['check__text']}> I agree to the processing of my personal information</span>
        </label>
      </div>
      <footer className={styles['footer']}>
        <button className={styles['submit-button']} type="submit">
          Create
        </button>
        <span className={styles['sign-in-group']}>
          Already have an account? <a className={styles['sign-in-link']}>Sign In</a>
        </span>
      </footer>
    </form>
  );
};
