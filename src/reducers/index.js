// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// combina todos os objetos necessarios para a aplicação retornando um objeto
const rootReducer = combineReducers({ user, wallet });

export default rootReducer;
