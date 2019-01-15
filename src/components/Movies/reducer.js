import { GET_MOVIES, GET_MOVIE } from './actions';

const initialState = {
  movies: [],
  isMoviesLoaded: false,
  movie: {},
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
      };
    default:
      return state;
  }
}