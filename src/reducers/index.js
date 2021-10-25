// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';

import userReducer from './user';
import wallet from './wallet';

// src: https://github.com/tryber/sd-14a-live-lectures/tree/lecture/15.2Redux
const rootReducer = combineReducers({
  user: userReducer,
  wallet,
});

export default rootReducer;
