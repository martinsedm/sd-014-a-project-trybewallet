import {
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
  GET_EXPENSES,
  REMOVE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

export default function wallet(
  state = INITIAL_STATE,
  { type, currencies, expenses, error, expenseId },
) {
  switch (type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error,
    };
  case GET_EXPENSES:
    expenses.id = state.expenses.length;
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== expenseId),
      // ref https://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
    };
  default:
    return state;
  }
}
