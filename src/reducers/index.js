import { combineReducers } from 'redux';
import user from './user';
// import wallet from './wallet';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
