import axios from 'axios';
const API_KEY = '6d25a4756e0ff1ccca3eba13a74efa5c';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get(`trending/${MEDIA_TYPE}/${TIME_WINDOW}`, {
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
  try {
    const movies = await fetchTrendingToday();
    return movies.find(movie => movie.id === Number(movieId));
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = async (genres = []) => {
  const response = await axios.get(`genre/${MEDIA_TYPE}/list`, {
    params: {
      api_key: API_KEY,
    },
  });
  const genreArray = response.data.genres;
  const genreResult = genreArray.reduce((previousValue, element) => {
    if (genres.includes(element.id)) {
      previousValue.push(element.name);
    }
    return previousValue;
  }, []);
  if (genreResult.length === 0) {
    return 'No Genres';
  } else {
    return genreResult.join(', ');
  }
};

export const getCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};
