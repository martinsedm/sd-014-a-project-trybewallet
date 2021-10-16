import { getCurrencyAPI } from '../services/fetchAPI';

// Coloque aqui suas actions
export const SET_EMAIL_USER = 'SET_EMAIL_USER';
export const DATA_CURRENCY = 'DATA+CURRENCY';

export const setEmailUser = (email) => ({
  type: SET_EMAIL_USER,
  payload: email,
});

export const dataCurrency = (data) => ({
  type: DATA_CURRENCY,
  payload: data,
});

export function fetchAPI() {
  return async (dispatch) => {
    const data = await getCurrencyAPI();
    dispatch(dataCurrency(data));
  };
}
