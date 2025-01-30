const getResource = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${response.status}`);
  }

  return await response.json();
};

export const getRecentArticlesGlobally = async (page) => {
  const result = await getResource(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${(page - 1) * 5}`);

  return result;
};

export const getAnArticle = async (slug) => {
  const result = await getResource(`https://blog-platform.kata.academy/api/articles/${slug}`);

  return result;
};
