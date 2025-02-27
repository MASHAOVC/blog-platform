const getResource = async (url) => {
  const authToken = localStorage.getItem('authToken');

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${authToken}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }

  return await response.json();
};

const postResource = async (url, body, withAuth) => {
  const authToken = localStorage.getItem('authToken');

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: withAuth ? `Token ${authToken}` : '',
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify({ status: response.status, body: data }));
  }

  return data;
};

const putResource = async (url, body) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('Authorization token is missing');
  }

  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${authToken}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify({ status: response.status, body: data }));
  }

  return data;
};

const deleteResource = async (url) => {
  const authToken = localStorage.getItem('authToken');

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(JSON.stringify({ status: response.status, body: response.statusText }));
  }
};

export const getRecentArticlesGlobally = async (page) => {
  const result = await getResource(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${(page - 1) * 5}`);

  return result;
};

export const getAnArticle = async (slug) => {
  const safeSlug = encodeURIComponent(slug);

  const result = await getResource(`https://blog-platform.kata.academy/api/articles/${safeSlug}`);

  return result;
};

export const getCurrentUser = async () => {
  const result = await getResource(`https://blog-platform.kata.academy/api/user`);

  return result;
};

export const postToSignUp = async (formData) => {
  const result = await postResource(`https://blog-platform.kata.academy/api/users`, { user: formData });

  return result;
};

export const postToSignIn = async (formData) => {
  const result = await postResource(`https://blog-platform.kata.academy/api/users/login`, { user: formData });

  return result;
};

export const putToUpdateCurrentUser = async (formData) => {
  const result = await putResource(`https://blog-platform.kata.academy/api/user`, { user: formData });

  return result;
};

export const postToCreateAnArticle = async (formData) => {
  const result = await postResource(`https://blog-platform.kata.academy/api/articles`, { article: formData }, true);

  return result;
};

export const deleteArticle = async (slug) => {
  const result = await deleteResource(`https://blog-platform.kata.academy/api/articles/${slug}`);

  return result;
};

export const putToUpdateAnArticle = async (slug, formData) => {
  const result = await putResource(`https://blog-platform.kata.academy/api/articles/${slug}`, { article: formData });

  return result;
};

export const postToLikeAnArticle = async (slug) => {
  const result = await postResource(`https://blog-platform.kata.academy/api/articles/${slug}/favorite`, null, true);

  return result;
};

export const deleteToUnlikeAnArticle = async (slug) => {
  const result = await deleteResource(`https://blog-platform.kata.academy/api/articles/${slug}/favorite`);

  return result;
};
