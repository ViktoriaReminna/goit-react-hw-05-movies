import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';

const API_KEY = '8f4e15dd6d0ef7118335e8945f4e8ef2';

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMovies = () => {
  const response = api.get('/trending/movie/day');
  return response;
};

export const getMoviesByName = query => {
  const response = api.get(`/search/movie?query=${query}`);
  return response;
};

export const getMovieDetails = movieId => {
  const response = api.get(`/movie/${movieId}`);
  return response;
};

export const getMovieCard = movieId => {
  const response = api.get(`/movie/${movieId}/credits`);
  return response.data.credits;
};

export const getReviews = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const getCast = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieById = movieId => {
  const response = api.get(`/movie/${movieId}`);
  return response;
};
