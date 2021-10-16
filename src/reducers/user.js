// Esse reducer será responsável por tratar as informações da pessoa usuária

import { GET_EMAIL_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EMAIL_USER:
    return {
      ...state,
      email: action.payload.email,
    };

  default:
    return state;
  }
}

export default user;
