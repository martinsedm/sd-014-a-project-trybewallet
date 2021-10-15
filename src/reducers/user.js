import { ACTION } from '../actions';
import users from '../data';

const INICIAL_STATE = {
  func: users,
  func2: users,
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default userReducer;
