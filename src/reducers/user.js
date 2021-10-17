import { LOGIN_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOGIN_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default user;
