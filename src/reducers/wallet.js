// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ERROR_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  error: null,
};

// const WALLET_EXPENSES = 'WALLET_EXPENSES';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ERROR_API:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
}
export default wallet;
