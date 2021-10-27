// Esse reducer será responsável por tratar as informações da pessoa usuária

import { REDUX_ACTION } from '../actions/index';

const INITIAL_STATE = { email: '' };

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REDUX_ACTION:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}
