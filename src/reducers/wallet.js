import { ADD_DESPESA, ADD_MOEDAS } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
};

function wallet(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case ADD_MOEDAS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_DESPESA:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
