// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_REG } from '../actions';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_REG:
    console.log(`USER_REG: ${action.payload}`);
    return { ...state, email: action.payload };

  default:
    return state;
  }
};

export default userReducer;
