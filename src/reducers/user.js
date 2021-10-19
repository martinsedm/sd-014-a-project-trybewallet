import { INPUT_EMAIL, USER_INITIAL_STATE } from '../services/noMagicStuff';

export default function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case INPUT_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}
