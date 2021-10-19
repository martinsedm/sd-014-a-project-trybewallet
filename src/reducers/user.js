// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_INFO:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
