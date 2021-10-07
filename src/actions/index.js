export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  email,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  const currenciesArray = Object.keys(currencies).map((key) => key);
  currenciesArray.splice(currenciesArray.indexOf('USDT'), 1);
  dispatch(receiveCurrencies(currenciesArray));
};

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  expense,
});
