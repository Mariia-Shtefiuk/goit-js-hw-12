import axios from 'axios';

const DEFAULT_PER_PAGE = 15;
const API_KEY = '50948492-7a2c95c1e3ac536ddbec900a1';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: DEFAULT_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
