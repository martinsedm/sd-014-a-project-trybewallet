import { getCurrentAPI } from '../services/fetchAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSE = 'SET_EXPENSE';
export const ERROR = 'ERROR';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const setExpenses = (expense, payload) => ({
  type: SET_EXPENSE,
  expense,
  payload,
});

export const setError = (payload) => ({
  type: ERROR,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const request = await getCurrentAPI();
    delete request.USDT;
    const SUCCES = Object.keys(request);
    dispatch(setCurrencies(SUCCES));
  } catch (error) {
    dispatch(setError(error));
  }
};
// expense é a informação do estado global.
export const setExpenseThunk = (expense) => async (dispatch) => {
  try {
    const request = await getCurrentAPI();
    dispatch(setExpenses(expense, request));
  } catch (error) {
    dispatch(setError(error));
  }
};
