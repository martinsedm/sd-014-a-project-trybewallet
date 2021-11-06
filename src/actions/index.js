export const USER = 'USER';
export const WALLET = 'WALLET';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const DESCRIPTION = 'DESCRIPTION';
export const CURRENCIES = 'CURRENCIES';

export const loginAction = (data) => ({
  type: USER,
  payload: data,
});

export const addExpense = (data) => ({
  type: ADD_EXPENSE,
  payload: data,
});

export const editExpense = (data) => ({
  type: EDIT_EXPENSE,
  payload: data,
});

export const deleteExpense = (data) => ({
  type: REMOVE_EXPENSE,
  payload: data,
});

export const addCurrencies = (data) => ({
  type: CURRENCIES,
  payload: data,
});
