// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_CASE } from '../actions';

const INICIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER_CASE:
    return {
      ...state,
      user: { email: action.payload },
    };
  default:
    return state;
  }
}

export default userReducer;
