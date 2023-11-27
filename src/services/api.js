import axios from 'axios';

const API_KEY = 'f93b828bc55aa1a2a5d1df4ed8eca9ea';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//тренди
export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

//пошук фільмів в інпуті
export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

//опис фільму
export const getDetailsMovies = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

//акторський склад
export const getActorsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

//огляди по фильмам
export const getReviewsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
