// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL_TYPE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case USER_EMAIL_TYPE:
    return { ...state, email: payload };
  default:
    return state;
  }
};
export default user;
