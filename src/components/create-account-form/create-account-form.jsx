import styles from './create-account-form.module.scss';

import { useMutation } from '@tanstack/react-query';
import { postToSignUp } from '../../services/blog-service';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const CreateAccountForm = () => {
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({
    mutationFn: (formData) => postToSignUp(formData),
    onSuccess: (data) => {
      console.log('Account created successfully!', data);
    },
    onError: (error) => {
      console.error('Error creating account:', error);
    },
  });

  const onSubmit = (data) => {
    const { repeatPassword, ...filteredData } = data;
    mutation.mutate(filteredData);
    console.log(filteredData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['create-account-form']}>
      <h1 className={styles['heading']}>Create new account</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Username
          <input className={styles['input-field']} {...register('username')} placeholder="Username" />
        </label>
        <label className={styles['label']}>
          Email address
          <input className={styles['input-field']} {...register('email')} type="email" placeholder="Email address" />
        </label>
        <label className={styles['label']}>
          Password
          <input className={styles['input-field']} {...register('password')} type="password" placeholder="Password" />
        </label>
        <label className={styles['label']}>
          Repeat password
          <input
            className={styles['input-field']}
            {...register('repeatPassword')}
            type="password"
            placeholder="Password"
          />
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
          Already have an account?{' '}
          <Link to="/sign-in" className={styles['sign-in-link']}>
            Sign In
          </Link>
        </span>
      </footer>
    </form>
  );
};
