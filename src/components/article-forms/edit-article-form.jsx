import styles from './article-forms.module.scss';
import { Spin, Alert } from 'antd';

import { ArticleForm } from './article-form';

import { useParams, useNavigate } from 'react-router-dom';

import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { getAnArticle } from '../../services/blog-service';
import { putToUpdateAnArticle } from '../../services/blog-service';

export const EditArticleForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData) => putToUpdateAnArticle(slug, formData),
    onSuccess: () => {
      queryClient.removeQueries(['articles']);
      navigate('/');
    },
    onError: (error) => {
      try {
        const errorData = JSON.parse(error.message);

        console.error('Status:', errorData.status);
        console.error('Errors:', errorData.body.errors);
      } catch (error) {
        console.error('Unexpected error format:', error);
      }
    },
  });

  const cachedArticle = queryClient.getQueryData(['article', slug]); // Попытка достать статью из кэша

  const { data, error, isPending } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getAnArticle(slug),
    enabled: !cachedArticle,
  });

  if (isPending) {
    return (
      <form className={styles['create-article-form']}>
        <Spin size="large" />
      </form>
    );
  }

  if (error || !data?.article) {
    return (
      <form className={styles['create-article-form']}>
        <Alert message="Something's gone terribly wrong!" type="error" style={{ fontFamily: "'Inter', sans-serif" }} />
      </form>
    );
  }

  const { title, description, body, tagList } = data.article;

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return <ArticleForm title={title} description={description} body={body} tagList={tagList} onSubmit={onSubmit} />;
};
