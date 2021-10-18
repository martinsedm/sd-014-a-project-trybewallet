// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_CASE, TOTAL_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE_CASE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case TOTAL_EXPENSE:
    return {
      ...state,
      totalExpenses: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
