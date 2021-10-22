// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES_FAIL, SET_CURRENCIES_SUCCESS, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case SET_CURRENCIES_SUCCESS:
    return ({
      ...state,
      currencies: action.payload,
    });
  case SET_CURRENCIES_FAIL:
    return ({
      ...state,
      error: action.payload.error,
    });
  default:
    return state;
  }
};

export default wallet;
