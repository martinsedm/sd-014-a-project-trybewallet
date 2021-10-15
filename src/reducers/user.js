// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: action.email };
  default:
    return { state };
  }
};

export default user;
