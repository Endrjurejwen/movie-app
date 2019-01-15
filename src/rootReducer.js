import { combineReducers } from 'redux';

import menu from './components/Navigation/reducer';
import movies from './components/Movies/reducer';

const rootReducer = combineReducers({
  menu,
  movies,
});

export default rootReducer;