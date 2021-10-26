import { LOGIN, WALLET } from '../action';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function reducerLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: action.payload,
    };
  case WALLET:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
}

export default reducerLogin;
