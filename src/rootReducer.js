import { combineReducers } from 'redux';

import menu from './Layout/reducer';
import movies from './Movies/reducer';

const rootReducer = combineReducers({
  menu,
  movies,
});

export default rootReducer;