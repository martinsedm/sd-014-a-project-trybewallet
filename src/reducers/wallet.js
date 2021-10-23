import { REQUISITAR_MOEDAS, FALHA_RESPOSTA_API, SALVAR_ESTADO_INPUT } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  // error: null,
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

export function salvarDespesas(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case SALVAR_ESTADO_INPUT:
    return { ...state, expenses: action.inputValue };
  default:
    return state;
  }
}
