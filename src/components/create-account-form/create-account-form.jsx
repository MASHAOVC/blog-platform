import styles from './create-account-form.module.scss';

import { useMutation } from '@tanstack/react-query';
import { postToSignUp } from '../../services/blog-service';

import { useDispatch } from 'react-redux';
import { setToken } from '../../state/actions';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const CreateAccountForm = () => {
  const {
    setError,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const allValues = watch();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => postToSignUp(formData),
    onSuccess: (data) => {
      console.log('Account created successfully!', data);

      if (!data?.user.token) {
        throw new Error('No token recieved');
      }

      localStorage.setItem('authToken', data.user.token);
      dispatch(setToken(data.user.token));
      navigate('/');
    },
    onError: (error) => {
      try {
        const errorData = JSON.parse(error.message);

        if (errorData?.body?.errors?.username) {
          setError('username', {
            type: 'manual', // Указываем, что ошибка устанавливается вручную
            message: 'Username is already taken',
          });
        }

        if (errorData?.body?.errors?.email) {
          setError('email', {
            type: 'manual',
            message: 'Email is already taken',
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
    const { repeatPassword, ...filteredData } = data;
    mutation.mutate(filteredData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['create-account-form']}>
      <h1 className={styles['heading']}>Create new account</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Username
          <input
            className={`${styles['input-field']} ${errors.username ? styles['input-field--error'] : ''}`}
            {...register('username', {
              required: true,
              minLength: {
                value: 3,
                message: 'The username must contain at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'The username cannot be longer than 20 characters',
              },
            })}
            placeholder="Username"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
        <label className={styles['label']}>
          Email address
          <input
            className={`${styles['input-field']} ${errors.email ? styles['input-field--error'] : ''}`}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: 'Incorrect email',
              },
            })}
            type="email"
            placeholder="Email address"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label className={styles['label']}>
          Password
          <input
            className={`${styles['input-field']} ${errors.password ? styles['input-field--error'] : ''}`}
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters.',
              },
              maxLength: {
                value: 40,
                message: 'Your password cannot be longer than 40 characters',
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <label className={styles['label']}>
          Repeat password
          <input
            className={`${styles['input-field']} ${errors.repeatPassword ? styles['input-field--error'] : ''}`}
            {...register('repeatPassword', {
              required: true,
              validate: (value) => value === allValues.password || 'Passwords must match',
            })}
            type="password"
            placeholder="Password"
          />
          {errors.repeatPassword?.message && <p>{errors.repeatPassword.message}</p>}
        </label>
      </div>
      <div className={styles['agreement-group']}>
        <div className={styles['line']}></div>
        <label className={styles['check']}>
          <input
            className={`${styles['check__input']} ${errors.agree ? styles['check__input--error'] : ''}`}
            {...register('agree', { required: true })}
            type="checkbox"
            defaultChecked
          />
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
