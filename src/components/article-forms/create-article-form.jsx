import { Alert } from 'antd';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postToCreateAnArticle } from '../../services/blog-service';
import { ArticleForm } from './article-form';

export const CreateArticleForm = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData) => postToCreateAnArticle(formData),
    onSuccess: () => {
      queryClient.removeQueries(['articles']);
      navigate('/');
    },
    onError: (error) => {
      setIsError(true);
      try {
        const errorData = JSON.parse(error.message);

        console.error('Status:', errorData.status);
        console.error('Errors:', errorData.body.errors);
      } catch (error) {
        console.error('Unexpected error format:', error);
      }
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      {isError ? (
        <Alert
          message="Unexpected error occured, please, reload and try again or come back later!"
          type="error"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      ) : null}
      <ArticleForm onSubmit={onSubmit} />
    </div>
  );
};
