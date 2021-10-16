import { SUBMIT_WALLET, SUBMIT_WALLET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload,
        exchangeRates: action.result }],
    };
  case SUBMIT_WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
