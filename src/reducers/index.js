// Esse reducer combina todos os outros

import { combineReducers } from 'redux';

import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
