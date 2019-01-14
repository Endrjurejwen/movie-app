import { TOGGLE_MENU } from './actions';

const initialState = {
  menuOpen: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
}