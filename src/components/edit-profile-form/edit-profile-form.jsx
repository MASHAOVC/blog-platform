import styles from './edit-profile-form.module.scss';

export const EditProfileForm = () => {
  return (
    <form className={styles['edit-profile-form']}>
      <h1 className={styles['heading']}>Edit Profile</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Username
          <input className={`${styles['input-field']} ${styles['filled']}`} value="John Doe" onChange={() => {}} />
        </label>
        <label className={styles['label']}>
          Email address
          <input
            className={`${styles['input-field']} ${styles['filled']}`}
            type="email"
            value="john@example.com"
            onChange={() => {}}
          />
        </label>
        <label className={styles['label']}>
          New password
          <input className={styles['input-field']} type="password" placeholder="New password" />
        </label>
        <label className={styles['label']}>
          Avatar image (url)
          <input className={styles['input-field']} placeholder="Avatar image" />
        </label>
      </div>
      <button className={styles['submit-button']} type="submit">
        Save
      </button>
    </form>
  );
};
