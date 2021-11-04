import { SET_USER } from '../actions/index';

const INITIAL_USER_STATE = {
  email: '',
};

const user = (
  state = INITIAL_USER_STATE,
  action,
) => {
  switch (action.type) {
  case SET_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
