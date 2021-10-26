import { SET_USER } from '../actions';

const INICIAL_STATE = {
  email: '',
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SET_USER:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
