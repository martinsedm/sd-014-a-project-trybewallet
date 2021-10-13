import { getExchangeRates, getCurrencies } from '../utils/currenciesAPI';

export const LOGIN = 'LOGIN';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const IS_FETCHING = 'IS_FETCHING';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const loginUser = (email) => ({
  type: LOGIN,
  email,
});

const expenseInfo = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

const setCurrencyInfo = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

const setFetching = () => ({ type: IS_FETCHING });

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  id: expenseId,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

export function setCurrencies() {
  return async (dispatch) => {
    dispatch(setFetching());
    const currencies = await getCurrencies();
    dispatch(setCurrencyInfo(currencies));
  };
}

export function addExpense(expense) {
  return async (dispatch) => {
    dispatch(setFetching);
    const exchangeRates = await getExchangeRates();
    dispatch(expenseInfo({ ...expense, exchangeRates }));
  };
}
