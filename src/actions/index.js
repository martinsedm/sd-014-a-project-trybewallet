export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE'

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const removeUSDT = Object.keys(json).filter((coin) => coin !== 'USDT');
  dispatch(getCurrencies(removeUSDT));
};
