// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_EXPENSES = 'SET_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const UPDATE_TOTAL_VALUE = 'UPDATE_TOTAL_VALUE';

export const setUserInfoAction = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const setExpensesAction = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const updateTotalValueAction = (payload) => ({
  type: UPDATE_TOTAL_VALUE,
  payload,
});
