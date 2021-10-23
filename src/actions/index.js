import fetchCurrencies from '../services';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export const loginAction = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const walletAction = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const getCurrenciesActionThunk = () => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(walletAction(currencies));
};
