import { fetchWithout } from '../services/fetchCurrencyAPI';

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const EXPENSES = 'EXPENSES';
export const CURRENCIES = 'CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const setLogin = (payload) => ({
  type: LOGIN,
  payload,
});
export const setCurrencies = () => async (dispatch) => {
  const currencies = await fetchWithout();
  return dispatch({ type: CURRENCIES, payload: currencies });
};
export const setExpenses = (payload) => ({ type: EXPENSES, payload });

export const deleteExpense = (expenseId, expenseValue) => ({
  type: DELETE_EXPENSE,
  expenseId,
  expenseValue,
});
