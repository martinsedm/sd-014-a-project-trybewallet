// Esse reducer será responsável por tratar as informações da pessoa usuária no estado
import { INFOR_USUARIO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INFOR_USUARIO:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
}

export default user;
