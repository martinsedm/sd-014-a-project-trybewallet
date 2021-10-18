import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import control from './control';

const rootReducer = combineReducers({
  user, wallet, control,
});

export default rootReducer;
