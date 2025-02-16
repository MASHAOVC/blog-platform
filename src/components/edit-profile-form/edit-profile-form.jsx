import styles from './edit-profile-form.module.scss';

import { useEffect } from 'react';

import { Mutation, useMutation } from '@tanstack/react-query';
import { putToUpdateCurrentUser } from '../../services/blog-service';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../state/actions';

export const EditProfileForm = () => {
  const dispatch = useDispatch();
  const currentUsername = useSelector((state) => state.user.user.username);
  const currentUserEmail = useSelector((state) => state.user.user.email);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (currentUsername && currentUserEmail) {
      // Когда данные загружены, устанавливаем их как начальные значения
      reset({
        username: currentUsername,
        email: currentUserEmail,
      });
    }
  }, [currentUsername, currentUserEmail, reset]); // Перезапускаем эффект, если данные изменятся

  const mutation = useMutation({
    mutationFn: (formData) => {
      console.log('Sending data to server:', formData);
      putToUpdateCurrentUser(formData);
    },
    onSuccess: (data) => {
      console.log('You updated your profile successfully!', data);

      // dispatch(setUserData(data.user.username));
      // navigate('/');
    },
    onError: (error) => {
      console.error('Error updating profile:', error);
    },
  });

  const onSubmit = (data) => {
    const { newPassword, ...filteredData } = data;
    console.log(filteredData);
    mutation.mutate(filteredData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['edit-profile-form']}>
      <h1 className={styles['heading']}>Edit Profile</h1>
      <div className={styles['fields-group']}>
        <label className={styles['label']}>
          Username
          <input
            {...register('username', {
              required: 'Username is required',
            })}
            className={`${styles['input-field']} ${styles['filled']} ${errors.username ? styles['input-field--error'] : ''}`}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </label>
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
            className={`${styles['input-field']} ${styles['filled']} ${errors.email ? styles['input-field--error'] : ''}`}
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label className={styles['label']}>
          New password
          <input
            {...register('newPassword', {
              minLength: {
                value: 6,
                message: 'Your password must contain at least 6 characters',
              },
              maxLength: {
                value: 40,
                message: 'Your password cannot be longer than 40 characters',
              },
            })}
            className={`${styles['input-field']} ${errors.newPassword ? styles['input-field--error'] : ''}`}
            type="password"
            placeholder="New password"
          />
          {errors.newPassword && <p>{errors.newPassword.message}</p>}
        </label>
        <label className={styles['label']}>
          Avatar image (url)
          <input
            {...register('image', {
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: 'Please enter a valid URL starting with http://, https://, or ftp://',
              },
            })}
            className={`${styles['input-field']} ${errors.image ? styles['input-field--error'] : ''}`}
            placeholder="Avatar image"
          />
          {errors.image && <p>{errors.image.message}</p>}
        </label>
      </div>
      <button className={styles['submit-button']} type="submit">
        Save
      </button>
    </form>
  );
};
