import { USER_ACTION } from '../actions/userAction';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_ACTION:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
