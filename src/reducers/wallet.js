// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_SUCKSEX, GET_CURRENCY_ERROR, ADD_EXPENSE,
  REMOVE_EXPENSE } from '../actions/index';

const initialState = {
  total: 0,
  currencies: [],
  error: null,
  expenses: [],
};

function attTotal(expenses) {
  console.log(expenses);
  return expenses.reduce((acc, ele) => Math
    .round((acc + (ele.value * ele.exchangeRates[ele.currency].ask)) * 100) / 100, 0);
}

export default function wallet(
  state = initialState, { payload, type },
) {
  switch (type) {
  case GET_CURRENCY_SUCKSEX:
    return ({
      ...state,
      currencies: payload,
    });
  case GET_CURRENCY_ERROR:
    return ({
      ...state,
      error: payload,
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, payload],
      total: attTotal([...state.expenses, payload]),
    });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      total: attTotal(state.expenses.filter((expense) => expense.id !== payload.id)),
    });
  default:
    return (state);
  }
}
