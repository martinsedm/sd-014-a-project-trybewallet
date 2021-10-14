import { LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INFO:
    return {
      ...state,
      email: action.payload.email,
      senha: action.payload.senha,
    };
  default:
    return state;
  }
};

export default loginReducer;
