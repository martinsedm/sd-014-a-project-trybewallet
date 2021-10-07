import { combineReducers } from 'redux';

import walletReducer from './wallet';
import userReducer from './user';

const rootReducer = combineReducers({ user: userReducer, wallet: walletReducer });

export default rootReducer;
