// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCY, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies)
        .filter((i) => i !== 'USDT'),
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
