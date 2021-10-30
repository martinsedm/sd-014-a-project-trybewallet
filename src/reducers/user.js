import { INPUT_EMAIL, INPUT_PASSWORD } from '../actions/actionsTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const saveInputLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};

export default saveInputLogin;
