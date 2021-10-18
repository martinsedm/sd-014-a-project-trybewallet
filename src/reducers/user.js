// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOG_IN } from '../actions';

const INITIAL_STATE_USER = {
  email: '',
};

const user = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
