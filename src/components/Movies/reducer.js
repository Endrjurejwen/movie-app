import {
  GET_MOVIES,
  GET_MOVIE,
  RESET_MOVIE,
  RESET_MOVIES,
  GET_SEARCH_MOVIES,
  CHECK_IF_FAVORITES,
  ADD_MOVIE_TO_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES,
  CHECK_IF_FAVORITE,
} from './actions';

const initialState = {
  movies: [],
  isMoviesLoaded: false,
  isMoviesChecked: false,
  movie: {},
  isMovieLoaded: false,
  isMovieChecked: false,
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
        isMoviesChecked: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        isMovieLoaded: true,
        isMovieChecked: false,
        // ...state,
        // movie: [...state.movies].find(movie => movie.id === data),
        // isMovieLoaded: true,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        isMovieLoaded: false,
        isMovieChecked: false,
      };
    case RESET_MOVIES:
      return {
        ...state,
        movies: [],
        isMovieLoaded: false,
        isMoviesSearchListLoaded: false,
      };
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        movies: data,
        isMoviesSearchListLoaded: true,
        isMoviesLoaded: false,
        isMoviesChecked: false,
      };
    case CHECK_IF_FAVORITES:
      return {
        ...state,
        movies: data,
        isMoviesChecked: true,
      };
    case CHECK_IF_FAVORITE:
      return {
        ...state,
        movie: data,
        isMovieChecked: true,
      };
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies, data],
        isMoviesChecked: false,
        isMovieChecked: false,
      };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies].filter(favMovie => favMovie.id !== data.id),
        isMoviesChecked: false,
        isMovieChecked: false,
      };
    default:
      return state;
  }
}