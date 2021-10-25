import { fetchCurrencies } from '../services/api';

// Coloque aqui suas actions
export const GET_EMAIL_USER = 'GET_EMAIL_USER';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_CURRENCIES_OK = 'GET_CURRENCIES_OK';
export const getEmailUser = (email) => (
  {
    type: GET_EMAIL_USER,
    payload: { email },
  }
);

export const getExpenses = (expenses) => (
  {
    type: GET_EXPENSES,
    payload: expenses,
  }
);

export const getCurrenciesOK = (payload) => (
  {
    type: GET_CURRENCIES_OK,
    payload,
  }
);

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetchCurrencies();
  const coins = Object.keys(response);
  const payload = coins.filter((coin) => (coin !== 'USDT'));
  dispatch(getCurrenciesOK(payload));
};
