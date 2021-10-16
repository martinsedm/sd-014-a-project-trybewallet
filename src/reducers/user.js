// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOG_USER } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOG_USER:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};

export default user;
