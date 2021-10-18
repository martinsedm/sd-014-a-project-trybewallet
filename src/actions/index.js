import currencyAPI from '../services/currencyAPI';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const GET_EXPENSES = 'GET_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const login = (email) => ({ type: LOGIN, email });

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
  isLoading: true,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  isLoading: false,
  currencies,
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  isLoading: false,
  error,
});

export const getExpenses = (expenses) => ({ type: GET_EXPENSES, expenses });

export const removeExpense = (expenseId) => ({ type: REMOVE_EXPENSE, expenseId });

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(getCurrencies());
    const response = await currencyAPI();
    const currencies = Object.keys(response).filter((currency) => currency !== 'USDT');
    dispatch(getCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
