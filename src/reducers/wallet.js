// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ERROR, SET_CURRENCIES, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default wallet;
