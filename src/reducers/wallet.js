// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_EXPENSES, SET_CURRENCIES } from '../actions';

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
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
