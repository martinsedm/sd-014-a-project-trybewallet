// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const RESPONSE_API = 'RESPONSE_API';
const ERROR_API = 'ERROR_API';
const ADICIONAR_GASTOS = 'ADICIONAR_GASTOS';

const INITIALSTATE_API = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIALSTATE_API, action) => {
  switch (action.type) {
  case RESPONSE_API:
    return { ...state, currencies: action.payload };
  case ADICIONAR_GASTOS:
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }] };
  default:
    return state;
  }
};

export { RESPONSE_API, ERROR_API, wallet, ADICIONAR_GASTOS };
