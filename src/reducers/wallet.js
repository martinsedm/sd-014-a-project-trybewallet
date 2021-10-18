import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
  GET_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

export default function wallet(
  state = INITIAL_STATE,
  { type, currencies, expenses, error },
) {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      isLoading: false,
      error,
    };
  case GET_EXPENSES:
    expenses.id = state.expenses.length;
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };
  default:
    return state;
  }
}
