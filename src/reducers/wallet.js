// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_CASE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE_CASE:
    return {
      ...state,
      wallet: {
        currencies: state.wallet.currencies,
        expenses: [...state.wallet.expenses, action.payload],
      }
    };
  default:
    return state;
  }
}

export default walletReducer;
