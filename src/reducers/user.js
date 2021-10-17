import { SET_USER_VALUE } from '../actions/index';

const initialUserState = {
  email: '',
};

const user = (state = initialUserState, { type, payload }) => {
  switch (type) {
  case SET_USER_VALUE:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default user;
