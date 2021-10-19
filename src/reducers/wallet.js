// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CUR, GET_CUR, EXCHANGE_RATES, REQUEST_COTA, DELETE_BTN } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  isFetchingCota: false,
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CUR:
    return { ...state, isFetching: true };
  case GET_CUR:
    return { ...state, currencies: action.moedas, isFetching: false };
  case REQUEST_COTA:
    return { ...state, isFetchingCota: true };
  case EXCHANGE_RATES:
    return {
      ...state,
      expenses: [...state.expenses, action.allCurrencies],
      isFetchingCota: false };
  default:
    return state;
  case DELETE_BTN:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.id)],
    };
  }
};

export default wallet;
