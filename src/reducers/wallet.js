import { APPLICATION } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case APPLICATION:
    return {
      ...state,
      currencies: action.payload.wallet.currencies,
      expenses: action.payload.wallet.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
