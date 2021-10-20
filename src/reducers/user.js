import { USER } from '../actions';

const INICIAL_STATE = {
  email: '',
};

function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
