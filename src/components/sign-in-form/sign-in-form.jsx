import styles from './sign-in-form.module.scss';

import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import { postToSignIn } from '../../services/blog-service';

import { useDispatch } from 'react-redux';
import { setToken, setUserData } from '../../state/actions';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const SignInForm = () => {
  const {
    setError,
    clearErrors,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => postToSignIn(formData),
    onSuccess: (data) => {
      if (!data?.user.token) {
        throw new Error('No token recieved');
      }

      localStorage.setItem('authToken', data.user.token);
      dispatch(setToken(data.user.token));
      dispatch(setUserData(data.user));
      navigate('/');
    },
    onError: (error) => {
      try {
        const errorData = JSON.parse(error.message);

        if (errorData?.body?.errors) {
          setError('invalidAuth', {
            type: 'manual', // Указываем, что ошибка устанавливается вручную
            message: 'Email or password is invalid',
          });
        }

        console.error('Status:', errorData.status);
        console.error('Server errors:', errorData.body.errors);
      } catch (error) {
        console.error('Unexpected error format:', error);
      }
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const email = watch('email');
  const password = watch('password');
  useEffect(() => {
    if (errors.invalidAuth) {
      clearErrors('invalidAuth');
    }
  }, [email, password, clearErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['sign-in-form']}>
      <h1 className={styles['heading']}>Sign in</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Email address
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: 'Incorrect email',
              },
            })}
            className={`${styles['input-field']} ${errors.email ? styles['input-field--error'] : ''}`}
            type="email"
            placeholder="Email address"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label className={styles['label']}>
          Password
          <input
            {...register('password', {
              required: 'Password is required',
            })}
            className={`${styles['input-field']} ${errors.password ? styles['input-field--error'] : ''}`}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
      </div>
      {errors.invalidAuth && <p> {errors.invalidAuth.message}</p>}
      <footer className={styles['footer']}>
        <button className={styles['submit-button']} type="submit">
          Login
        </button>
        <span className={styles['sign-up-group']}>
          Don&apos;t have an account?{' '}
          <Link to="/sign-up" className={styles['sign-up-link']}>
            Sign Up
          </Link>
        </span>
      </footer>
    </form>
  );
};
