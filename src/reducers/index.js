import { combineReducers } from 'redux';

import walletReducer from './wallet';
import userReducer from './user';
import editReducer from './editCondition';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  edit: editReducer });

export default rootReducer;
