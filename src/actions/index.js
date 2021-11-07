import fetchCurrencies from '../services/curreciesAPI';

export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const userEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetchCurrencies();
  const currencies = Object.keys(response);
  const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');
  dispatch(getCurrencies(filteredCurrencies));
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const addExpensesThunk = (localState) => async (dispatch) => {
  const response = await fetchCurrencies();
  const payload = {
    ...localState,
    exchangeRates: response,
  };
  dispatch(addExpenses(payload));
};

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
