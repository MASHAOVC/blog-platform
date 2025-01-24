import styles from './create-article-form.module.scss';

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
    </form>
  );
};
