import {
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES,
  SET_EXPENSE,
  REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.expense }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  default:
    return state;
  }
};

export default walletReducer;
