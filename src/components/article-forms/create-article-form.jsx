import styles from './article-forms.module.scss';

export const CreateArticleForm = () => {
  return (
    <form className={styles['create-article-form']}>
      <h1 className={styles['heading']}>Create new article</h1>
      <label className={styles['label']}>
        Title
        <input className={styles['input-field']} placeholder="Title" />
      </label>
      <label className={styles['label']}>
        Short description
        <input className={styles['input-field']} placeholder="Title" />
      </label>
      <label className={styles['label']}>
        Text
        <textarea className={`${styles['input-field']} ${styles['article-text']}`} placeholder="Text" />
      </label>
      <div className={styles['tags-wrapper']}>
        <h2 className={styles['tags-wrapper__heading']}>Tags</h2>
        <div className={styles['tags-wrapper__input-group-wrapper']}>
          <input className={styles['tags-wrapper__input-field']} value="programming"></input>
          <button
            className={`${styles['tags-wrapper__button-delete']} ${styles['tags-wrapper__button']}`}
            type="button"
          >
            Delete
          </button>
        </div>
        <div className={styles['tags-wrapper__input-group-wrapper']}>
          <input className={styles['tags-wrapper__input-field']}></input>
          <button
            className={`${styles['tags-wrapper__button-delete']} ${styles['tags-wrapper__button']}`}
            type="button"
          >
            Delete
          </button>
          <button className={`${styles['tags-wrapper__button-add']} ${styles['tags-wrapper__button']}`} type="button">
            Add tag
          </button>
        </div>
      </div>
      <button className={styles['submit-button']} type="submit">
        Send
      </button>
    </form>
  );
};
