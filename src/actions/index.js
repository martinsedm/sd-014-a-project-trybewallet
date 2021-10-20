export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const userEmailAction = (email) => ({
  type: USER_EMAIL,
  payload: {
    email,
  },
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: {
    currencies,
  },
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = {
    data,
  };
  dispatch(getCurrenciesSuccess(currencies));
};
