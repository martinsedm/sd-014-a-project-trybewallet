import { combineReducers } from 'redux';
import walletReducer from './wallet';
import userReducer from './user';

const rootReducer = combineReducers({ userReducer, walletReducer });

export default rootReducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
