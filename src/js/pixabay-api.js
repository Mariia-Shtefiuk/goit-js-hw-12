import axios from 'axios';

const DEFAULT_PER_PAGE = 15;

export const getImagesByQuery = async (query, page = 1) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      query: {
        key: 'TODO',
        q: query,
        page,
        per_page: DEFAULT_PER_PAGE,
      },
    });

    return response.hits;
  } catch (error) {
    console.error(`Failed to fetch images by query ${query}.`, error);
  }
};
