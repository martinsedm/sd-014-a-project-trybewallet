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
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
}

export default userReducer;
