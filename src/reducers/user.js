import { SET_EMAIL } from '../actions';

const INITIAL = { email: '' };

const user = (state = INITIAL, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return {
      ...state,
      email: action.payload };
  default:
    return state;
  }
};

export default user;
