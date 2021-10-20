import { REQUISITAR_MOEDAS, FALHA_RESPOSTA_API } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  error: null,
};

function requisitarApi(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case REQUISITAR_MOEDAS:
    return {
      ...state, currencies: action.payload,
    };
  case FALHA_RESPOSTA_API:
    return {
      ...state, error: action.payload,
    };
  default:
    return state;
  }
}

export default requisitarApi;
