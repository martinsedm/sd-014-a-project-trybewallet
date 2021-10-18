// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_CASE } from '../actions';

const INICIAL_STATE = {
  email: '',
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER_CASE:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
