// Esse reducer será responsável por tratar as informações da pessoa usuária

import { GET_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state, // retorna o estado antigo junto da atualização abaixo;
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
