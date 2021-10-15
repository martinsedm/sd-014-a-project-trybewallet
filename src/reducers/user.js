// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions/index';

const initialState = {
  email: '',
};

export default function user(
  state = initialState, { payload, type },
) {
  switch (type) {
  case EMAIL:
    return ({
      ...state,
      email: payload,
    });

  default:
    return (state);
  }
}
