import styles from './article-forms.module.scss';

import { useForm, useFieldArray } from 'react-hook-form';

export const ArticleForm = (props) => {
  const { title, description, body, tagList, onSubmit } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      title: title ? title : null,
      description: description ? description : null,
      body: body ? body : null,
      tagList: tagList ? tagList : [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList', // название массива в форме
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['create-article-form']}>
      <h1 className={styles['heading']}>{title ? 'Edit article' : 'Create new article'}</h1>
      <label className={styles['label']}>
        Title
        <input
          {...register('title', {
            required: 'Title is required',
            maxLength: {
              value: 80,
              message: 'Length of your title cannot be longer then 80 characters',
            },
          })}
          className={`${styles['input-field']} ${errors.title ? styles['input-field--error'] : ''}`}
          placeholder="Title"
        />
        {errors.title && <p>{errors.title.message}</p>}
      </label>
      <label className={styles['label']}>
        Short description
        <input
          {...register('description', {
            required: 'Short description is required',
            maxLength: {
              value: 200,
              message: 'Length of your short description cannot be longer then 200 characters',
            },
          })}
          className={`${styles['input-field']} ${errors.description ? styles['input-field--error'] : ''}`}
          placeholder="Title"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </label>
      <label className={styles['label']}>
        Text
        <textarea
          {...register('body', {
            required: 'Text is required',
            maxLength: {
              value: 10000,
              message: 'Length of your text cannot be longer then 10 000 characters',
            },
          })}
          className={`${styles['input-field']} ${styles['article-text']} ${errors.body ? styles['input-field--error'] : ''}`}
          placeholder="Text"
        />
        {errors.body && <p>{errors.body.message}</p>}
      </label>
      <div className={styles['tags-wrapper']}>
        <h2 className={styles['tags-wrapper__heading']}>Tags</h2>
        {fields.map((field, index) => (
          <div key={field.id} className={styles['tags-wrapper__input-group-wrapper']}>
            <input
              {...register(`tagList.${index}`)}
              className={styles['tags-wrapper__input-field']}
              placeholder="Tag"
            ></input>
            <button
              onClick={() => remove(index)}
              className={`${styles['tags-wrapper__button-delete']} ${styles['tags-wrapper__button']}`}
              type="button"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={() => append('')}
          className={`${styles['tags-wrapper__button-add']} ${styles['tags-wrapper__button']}`}
          type="button"
        >
          Add tag
        </button>
      </div>
      <button className={styles['submit-button']} type="submit">
        Send
      </button>
    </form>
  );
};
