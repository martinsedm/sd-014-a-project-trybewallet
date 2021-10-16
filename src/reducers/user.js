import { SET_USER } from '../actions';

const INITIAL_STATE = { email: '' };

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_USER:
    return { email: payload.email };
  default:
    return state;
  }
};

export default userReducer;
