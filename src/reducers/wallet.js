// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_CASE, TOTAL_EXPENSE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    totalExpenses: 0,
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
  case TOTAL_EXPENSE:
    return {
      ...state,
      totalExpenses: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
