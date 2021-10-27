export const SET_USER = 'SET_USER';

export const SET_CURRENCIES = 'SET_CURRENCIES';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setUser = (email) => ({
  type: SET_USER,
  email,
});

export const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await response.json();
  delete responseJSON.USDT;
  dispatch(setCurrencies(responseJSON));
};
