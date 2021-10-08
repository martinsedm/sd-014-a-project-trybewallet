export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EDIT_CONDITION = 'SET_EDIT_CONDITION';

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

export const setExpense = (expense, id = false) => ({
  type: SET_EXPENSE,
  id,
  expense,
});

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  expenseId,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const setEditCondition = (condition, expense = {}) => ({
  type: SET_EDIT_CONDITION,
  condition,
  expense,
});
