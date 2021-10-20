// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RECEIVE_MOEDAS, REQUEST_MOEDAS } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_MOEDAS:
    return { ...state, wallet: action.payload };
  case RECEIVE_MOEDAS:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
