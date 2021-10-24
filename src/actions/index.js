import fetchCurrencies from '../services';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const HANDLE_ERROR = 'HANDLE_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginAction = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const walletAction = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});

export const getCurrenciesActionThunk = () => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(walletAction(currencies));
};

export const addExpenseThunk = (expense) => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(addExpense({ ...expense, exchangeRates: currencies }));
};
