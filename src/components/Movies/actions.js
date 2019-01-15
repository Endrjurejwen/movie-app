/* eslint func-names: 0 */

import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const getMovies = () => async function (dispatch) {
  const result = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  );
  return dispatch({
    type: 'GET_MOVIES',
    data: result.data.results,
  });
};

export const getMovie = id => async function (dispatch) {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US`,
  );
  return dispatch({
    type: 'GET_MOVIE',
    data: result.data,
  });
};