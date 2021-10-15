// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_LOGIN:
    return action.payload;

  default:
    return state;
  }
};

export default user;
