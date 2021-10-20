// Coloque aqui suas actions
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const EXPENSE_ACTION = 'EXPENSE_ACTION';
export const CURRENCY_ACTION = 'CURRENCY_ACTION';

export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  payload: email,
});

export const expenseAction = (payload) => ({
  type: EXPENSE_ACTION,
  payload,
});

const currencyAction = (payload) => ({
  type: CURRENCY_ACTION,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();

  const currencyArray = Object.keys(requestJson);
  const currencyArrayWithoutUSDT = currencyArray
    .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');

  dispatch(currencyAction(currencyArrayWithoutUSDT));
};
