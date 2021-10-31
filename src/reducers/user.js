// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ATT_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ATT_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
