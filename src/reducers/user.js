import { LOGIN } from '../actions/actionTypes';

const USER_INITIALSTATE = {
  user: {
    email: '',
    password: '',
  },
};

const user = (state = USER_INITIALSTATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { email: action.email };
  default:
    return state;
  }
};
export default user;
