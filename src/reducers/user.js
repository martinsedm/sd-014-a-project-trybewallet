import { actionTypes } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case actionTypes.SAVE_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default userReducer;
