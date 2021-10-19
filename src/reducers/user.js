import { USER } from '../actions';

const INICIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.email.email,
      password: action.email.password,
    };
  default:
    return state;
  }
}

export default userReducer;
