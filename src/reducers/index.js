import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const reducerGlobal = combineReducers({ user, wallet });

export default reducerGlobal;
