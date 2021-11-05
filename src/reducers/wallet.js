// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas no estado do usuario.

import {
  VALOR_MOEDAS,
  ADICIONAR_DESPESAS, VALORAPI_SUCESSO, VALORAPI_ERROR } from '../actions/index';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case VALOR_MOEDAS:
    return {
      ...state,
      email: action.email,
      currencies: action.currencies,
    };
  case VALORAPI_SUCESSO:
    return {
      ...state,
      currencies: action.payload,
    };
  case VALORAPI_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case ADICIONAR_DESPESAS:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.payload,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
