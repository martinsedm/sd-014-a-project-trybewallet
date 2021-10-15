import { USER_INPUT } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INPUT:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default user;
