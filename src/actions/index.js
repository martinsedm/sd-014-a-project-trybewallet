import { getApi } from '../helper';

export const SET_EMAIL = 'SET_EMAIL';
export const ADD_EXPENSE = 'SAVE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await getApi();
  const currencies = Object.keys(response).filter((currency) => currency !== 'USDT');
  dispatch(getCurrencies(currencies));
};

export const setEmail = (payload) => ({ type: SET_EMAIL, payload });
