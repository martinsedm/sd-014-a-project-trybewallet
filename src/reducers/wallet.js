import { WALLET_ACTION } from '../actions/walletAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_ACTION:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
