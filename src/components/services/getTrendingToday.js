import axios from 'axios';
const API_KEY = '6d25a4756e0ff1ccca3eba13a74efa5c';
const MEDIA_TYPE = 'all';
const TIME_WINDOW = 'day';

axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get('', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async movieId => {
  const movies = await fetchTrendingToday();

  return movies.find(movie => movie.id === movieId);
};
