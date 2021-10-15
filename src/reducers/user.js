// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, { type, email }) {
  switch (type) {
  case LOGIN:
    return email;
  default:
    return state;
  }
}
