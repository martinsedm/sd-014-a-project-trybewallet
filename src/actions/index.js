import { fetchWithout } from '../services/fetchCurrencyAPI';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const EXPENSES = 'EXPENSES';
export const CURRENCIES = 'CURRENCIES';
export const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});
export const setCurrencies = () => async (dispatch) => {
  const currencies = await fetchWithout();
  return dispatch({ type: CURRENCIES, payload: currencies });
};
