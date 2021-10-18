// Esse reducer será responsável por tratar as informações da pessoa usuária
import { actionTypes } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.SET_EMAIL_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
