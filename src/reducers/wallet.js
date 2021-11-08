// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { DELETE_EXPENSE, ERROR, SET_CURRENCIES, SET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  id: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.id,
        value: action.expense.despesa,
        description: action.expense.descrição,
        currency: action.expense.moeda,
        method: action.expense.pagamento,
        tag: action.expense.tag,
        exchangeRates: action.payload,
      }],
      id: state.id + 1,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  case ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default wallet;
