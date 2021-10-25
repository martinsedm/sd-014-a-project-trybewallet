// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_EXPENSES, GET_CURRENCIES_OK } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case GET_EXPENSES:
    payload.id = state.expenses.length;
    return { ...state, expenses: [...state.expenses, payload] };

  case GET_CURRENCIES_OK:
    return { ...state, currencies: payload };

  default:
    return state;
  }
}

export default wallet;
