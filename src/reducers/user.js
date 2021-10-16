// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_ACTION } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  console.log(action.state);
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      email: action.state.email,
    };
  default:
    return state;
  }
}

export default user;
