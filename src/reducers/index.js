import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({ userReducer: user, wallet }); // é o obejeto que define o formato do estado do redux.

export default rootReducer;
