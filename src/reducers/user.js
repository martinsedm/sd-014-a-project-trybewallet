import { LOGIN_TYPE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_TYPE:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};
export default user;
