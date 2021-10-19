// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY, GET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXPENSE:
    action.payload.id = state.expenses.length;
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
