const getResource = async (url) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('Authorization token is missing');
  }

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

const postResource = async (url, body) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
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

export const getRecentArticlesGlobally = async (page) => {
  const result = await getResource(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${(page - 1) * 5}`);

  return result;
};

export const getAnArticle = async (slug) => {
  const result = await getResource(`https://blog-platform.kata.academy/api/articles/${slug}`);

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
