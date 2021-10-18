import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
const rootReducer = combineReducers({
  userReducer,
  walletReducer,
});

export default rootReducer;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
