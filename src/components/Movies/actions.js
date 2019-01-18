/* eslint func-names: 0 */

import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';
export const GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES';
export const CHECK_IF_FAVORITES = 'CHECK_IF_FAVORITES';
export const ADD_MOVIE_TO_FAVORITES = 'ADD_MOVIE_TO_FAVORITES';
export const REMOVE_MOVIE_FROM_FAVORITES = 'REMOVE_MOVIE_FROM_FAVORITES';

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

export const getSearchMovies = query => async function (dispatch) {
  const result = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return dispatch({
    type: 'GET_SEARCH_MOVIES',
    data: result.data.results,
  });
};

export const resetMovie = () => ({
  type: 'RESET_MOVIE',
});

export const checkIfFavorites = (movies, favorites) => {
  let moviesUpdated = [];

  const moviesID = movies.map(movie => movie.id);

  const favoritesID = favorites.map(movie => movie.id);

  const favoriteMoviesIDs = moviesID.filter(movieID => favoritesID.indexOf(movieID) !== -1);

  moviesUpdated = movies.map((movie) => {
    if (favoriteMoviesIDs.includes(movie.id)) {
      return {
        ...movie,
        isFavorite: true,
      };
    }
    return {
      ...movie,
      isFavorite: false,
    };
  },
  );

  return {
    type: 'CHECK_IF_FAVORITES',
    data: moviesUpdated,
  };
};

export const addToFavorites = movie => ({
  type: 'ADD_MOVIE_TO_FAVORITES',
  data: {
    ...movie,
    isFavorite: true,
  },
});

export const removeFromFavorites = movie => ({
  type: 'REMOVE_MOVIE_FROM_FAVORITES',
  data: {
    ...movie,
    isFavorite: false,
  },
});