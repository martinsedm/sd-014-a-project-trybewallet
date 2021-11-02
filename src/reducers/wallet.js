// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas no estado do usuario.

import { VALOR_MOEDAS } from '../actions/index';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case VALOR_MOEDAS:
    return {
      ...state,
      email: action.email,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
