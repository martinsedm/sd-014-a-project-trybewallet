// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_ACTION } from '../actions/index';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_ACTION:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
