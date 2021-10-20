// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RECEIVE_MOEDAS, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_MOEDAS:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSES:
    return { expenses:
      [...state.expenses, { ...action.payload, id: state.expenses.length }] };
  default:
    return state;
  }
}

export default wallet;
