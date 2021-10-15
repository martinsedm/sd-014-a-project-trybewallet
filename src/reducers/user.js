import { APPLICATION } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case APPLICATION:
    return {
      ...state,
      user: action.payload.user,
    };
  default:
    return state;
  }
}

export default user;
