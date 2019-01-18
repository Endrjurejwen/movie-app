import {
  GET_MOVIES,
  GET_MOVIE,
  RESET_MOVIE,
  GET_SEARCH_MOVIES,
  CHECK_IF_FAVORITES,
  ADD_MOVIE_TO_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES,
} from './actions';

const initialState = {
  movies: [],
  isMoviesLoaded: false,
  isMoviesChecked: false,
  movie: {},
  isMovieLoaded: false,
  moviesSearchList: [],
  isMoviesSearchListLoaded: false,
  favoritesMovies: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        isMoviesLoaded: true,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        isMovieLoaded: true,
        isMoviesChecked: false,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        isMovieLoaded: false,
      };
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        moviesSearchList: data,
        isMoviesSearchListLoaded: true,
      };
    case CHECK_IF_FAVORITES:
      return {
        ...state,
        movies: data,
        isMoviesChecked: true,
      };
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies, data],
        isMoviesChecked: false,
      };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies].filter(favMovie => favMovie.id !== data.id),
        isMoviesChecked: false,
      };
    default:
      return state;
  }
}