import { combineReducers } from 'redux';

import menu from './components/Navigation/reducer';
import movies from './components/Movies/reducer';
import favorites from './components/Favorites/reducer';

const rootReducer = combineReducers({
  menu,
  movies,
  favorites,
});

export default rootReducer;