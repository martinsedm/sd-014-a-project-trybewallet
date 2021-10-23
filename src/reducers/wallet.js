// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES,
  ERROR_API,
  ADD_EXPENSES,
  ADD_COINS,
  TOT_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  error: null,
  coins: {},
};

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
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload.expenses,
          // exchangeRates: state.coins,
          id: state.expenses.length,
        },
      ],
    };
  case ADD_COINS:
    return {
      ...state,
      coins: action.payload.coins,
    };
  case TOT_EXPENSES:
    return {
      ...state,
      total: action.payload.tot,
    };
  default:
    return state;
  }
}
export default wallet;
