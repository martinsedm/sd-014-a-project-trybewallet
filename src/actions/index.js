// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_TOTAL_VALUE = 'SET_TOTAL_VALUE';

export const setUserInfoAction = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const setExpensesAction = (payload) => ({
  type: SET_EXPENSES,
  payload,
});

export const setTotalValueAction = (payload) => ({
  type: SET_TOTAL_VALUE,
  payload,
});
