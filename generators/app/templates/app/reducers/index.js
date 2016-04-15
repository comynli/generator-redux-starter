import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import * as utils from './utils';
import global from './global';


const rootReducer = combineReducers({
  global,
  router
});

export default rootReducer;
