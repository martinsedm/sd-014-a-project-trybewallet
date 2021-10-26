import fetchApi from '../services/api';

export const ADD_EXPENSE = 'SAVE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetchApi();
  const currencies = Object.keys(response).filter(
    (currency) => currency !== 'USDT',
  );
  dispatch(getCurrencies(currencies));
};

export const setUserEmail = (payload) => ({ type: SET_USER_EMAIL, payload });
