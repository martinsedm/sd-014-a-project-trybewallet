import { ADD_DESPESA, ADD_MOEDAS, ADD_MODEDA_ERROR } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  error: null,
};

function wallet(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case ADD_MOEDAS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_DESPESA:
    // state.expenses.length
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ADD_MODEDA_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
