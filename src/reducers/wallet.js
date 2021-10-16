// Esse reducer será responsável por tratar
// todas as informações relacionadas as despesas

import { FETCH_CURRENCIES_ERROR, FETCH_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      error: null,
    };
  case FETCH_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
