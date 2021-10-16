// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_SUCKSEX, GET_CURRENCY_ERROR, ADD_EXPENSE,
  REMOVE_EXPENSE, CHANGE_EDIT_STATE, SET_EDITED_EXPENSE } from '../actions/index';

const initialState = {
  total: 0,
  currencies: [],
  error: null,
  expenses: [],
  idToEdit: 0,
  editor: false,
  isFetching: false,
};

function attTotal(expenses) {
  return expenses.reduce((acc, ele) => Math
    .round((acc + (ele.value * ele.exchangeRates[ele.currency].ask)) * 100) / 100, 0);
}

function attEditedExpense(expenses,
  { id, value, description, tag, currency, method, exchangeRates }) {
  return expenses.map((exp) => {
    if (exp.id === id) {
      return { id, value, description, tag, currency, method, exchangeRates };
    }
    return exp;
  });
}

export default function wallet(
  state = initialState, { payload, type },
) {
  switch (type) {
  case GET_CURRENCY_SUCKSEX:
    return ({
      ...state,
      currencies: Object.keys(payload),
      toExchangeRates: payload,
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
  case CHANGE_EDIT_STATE:
    return ({
      ...state,
      idToEdit: payload.expense,
      editor: payload.load,
      isFetching: payload.newSet,
    });
  case SET_EDITED_EXPENSE:
    return ({
      ...state,
      expenses: attEditedExpense(state.expenses, payload),
      total: attTotal(attEditedExpense(state.expenses, payload)),
    });
  default:
    return (state);
  }
}
