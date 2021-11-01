import { fetchCurrency, URL } from '../services/awesomeAPI';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const REQUEST_CURRECIES = 'REQUEST_CURRENCIES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRECIES,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const fetchCurrencies = () => (
  (dispatch) => {
    dispatch(requestCurrencies());
    return fetchCurrency(URL)
      .then((currencies) => dispatch(setCurrencies(Object.keys(currencies))));
  }
);
