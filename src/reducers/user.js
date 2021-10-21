// Esse reducer será responsável por tratar as informações da pessoa usuária

import { EMAIL as EMAIL_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_USER:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
}

export default user;
