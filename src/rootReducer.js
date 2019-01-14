import { combineReducers } from 'redux';

import menu from './reducer';

const rootReducer = combineReducers({
  menu,
});

export default rootReducer;