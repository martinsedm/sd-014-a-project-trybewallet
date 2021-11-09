// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
      // total: Number(state.total) + (action.payload.value * Number(action.payload.exchangeRates[action.payload.currency].ask).toFixed(2)),
      total: (Number(state.total)
      + (Number(action.payload.value)
       * Number(action.payload.exchangeRates[action.payload.currency].ask))).toFixed(2),
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => +expense.id !== +action.expenseId),
      total: (+state.total - +action.expenseValue).toFixed(2),
    };
  default: return state;
  }
};
export default wallet;
