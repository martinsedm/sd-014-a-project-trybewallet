import fetchCurrencies from '../services/curreciesAPI';

export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetchCurrencies();
  dispatch(getCurrencies(response));
};
