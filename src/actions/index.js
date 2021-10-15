// Coloque aqui suas actions
export const SET_USER_VALUE = 'SET_USER_VALUE';
export const SET_WALLET_VALUE = 'SET_WALLET_VALUE';
export const IN_PROGRESS = 'IN_PROGRESS';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const setUserValue = (payload) => ({
  type: SET_USER_VALUE,
  payload,
});

export const setWalletValue = (payload) => ({
  type: SET_WALLET_VALUE,
  payload,
});

export const inProgress = () => ({
  type: IN_PROGRESS,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  dispatch(inProgress());
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await (await fetch(URL)).json();
    const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
