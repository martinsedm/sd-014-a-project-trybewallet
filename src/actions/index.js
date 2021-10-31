import fetchApi from '../services/api';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const setUserEmail = (payload) => ({ type: SET_USER_EMAIL, payload });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const removeExpense = (payload) => ({ type: REMOVE_EXPENSE, payload });

const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetchApi();
  const currencies = Object.keys(response).filter(
    (currency) => currency !== 'USDT',
  );
  dispatch(getCurrencies(currencies));
};
