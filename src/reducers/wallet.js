import { REQUISITAR_MOEDAS, FALHA_RESPOSTA_API, SALVAR_ESTADO_INPUT,
  TOTAL_GASTOS } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  total: 0,
  // error: null,
};

function reducerWallet(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case REQUISITAR_MOEDAS:
    return {
      ...state, currencies: action.payload,
    };
  case FALHA_RESPOSTA_API:
    return {
      ...state, error: action.payload,
    };
  case SALVAR_ESTADO_INPUT:
    return { ...state,
      expenses: [...state.expenses,
        {
          ...action.inputValue,
          id: state.expenses.length,
          exchangeRates: state.currencies,
        }] };
  case TOTAL_GASTOS:
    return { ...state, total: action.total };
  default:
    return state;
  }
}

export default reducerWallet;
