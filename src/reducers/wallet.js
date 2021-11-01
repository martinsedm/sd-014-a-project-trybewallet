import {
  SET_CURRENCIES,
  SAVE_EXPENSE,
  REQUEST_CURRECIES,
  REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
  case REQUEST_CURRECIES:
    return {
      ...state,
      loading: true,
    };
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: [...payload],
      loading: false,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== payload),
    };
  default:
    return state;
  }
};

export default wallet;
