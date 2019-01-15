import { GET_MOVIES } from './actions';

const initialState = {
  movies: [],
  isMoviesLoaded: false,
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
    default:
      return state;
  }
}