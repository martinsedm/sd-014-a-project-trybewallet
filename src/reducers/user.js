// Esse reducer será responsável por tratar as informações da pessoa usuária
import { RU1BSUw } from '../actions/index';

const initialState = {
  email: '',
};

export default function user(
  state = initialState, { payload, type },
) {
  switch (type) {
  case RU1BSUw:
    return ({
      ...state,
      email: payload,
    });

  default:
    return (state);
  }
}
