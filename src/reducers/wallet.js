import { WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: 'BRL',
  expenses: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
