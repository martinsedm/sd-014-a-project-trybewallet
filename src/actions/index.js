import { getExchangeRates } from '../utils/currenciesAPI';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const loginUser = (email) => ({
  type: LOGIN,
  email,
});

const expenseInfo = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export function addExpense(expense) {
  return async (dispatch) => {
    const exchangeRates = await getExchangeRates();
    dispatch(expenseInfo({ ...expense, exchangeRates }));
  };
}

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  id: expenseId,
});
