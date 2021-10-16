export const LOG_USER = 'LOG_USER';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';

export const logUser = (payload) => ({
  type: LOG_USER,
  payload,
});

const fetchCurrenciesSuccess = (payload) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload,
});

const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesInfo = await response.json();
    dispatch(fetchCurrenciesSuccess(Object.keys(currenciesInfo)));
  } catch (error) {
    dispatch(fetchCurrenciesError(error));
  }
};
