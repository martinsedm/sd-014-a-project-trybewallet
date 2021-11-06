import { LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const START_STATE = {
  email: '',
};

const user = (state = START_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
