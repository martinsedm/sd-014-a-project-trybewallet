// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL, SAVE_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.payload };
  case SAVE_PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
};

export default reducerUser;
