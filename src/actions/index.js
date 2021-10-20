export const SET_EMAIL = 'SET_EMAIL';
export const TAKE_CURRENCIES = 'TAKE_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

const takeCurrencies = () => ({
  type: TAKE_CURRENCIES,
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const setExpenses = (expense) => ({
  type: SET_EXPENSES,
  payload: expense,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(takeCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  const currenciesResponse = Object.keys(currencies).map((key) => key);
  currenciesResponse.splice(currenciesResponse.indexOf('USDT'), 1);
  dispatch(getCurrencies(currenciesResponse));
};
