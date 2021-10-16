import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const reducer = combineReducers({ user: userReducer, wallet: walletReducer });
// console.log(userReducer.email);

export default reducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
