import { ADD_MOVIE_TO_FAVORITES } from './actions';

const initialState = {
  favoritesMovies: [],
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies, data],
      };
    default:
      return state;
  }
}