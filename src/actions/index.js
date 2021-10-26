export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const saveExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});
