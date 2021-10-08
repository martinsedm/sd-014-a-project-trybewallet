import {
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES,
  SET_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE } from '../actions';

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
      expenses: [...state.expenses, {
        id: action.id ? action.id : state.expenses.length,
        ...action.expense }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [action.expense,
        ...state.expenses.filter((expense) => expense.id !== action.expense.id)],
    };
  default:
    return state;
  }
};

export default walletReducer;
