import { USER } from '../actions';

const INICIAL_STATE = {
  email: '',
};

export default function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
