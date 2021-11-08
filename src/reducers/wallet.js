// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default: return state;
  }
};
export default wallet;
