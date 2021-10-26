export const SET_EMAIL = 'SET_EMAIL';
export const ADD_EXPENSE = 'SAVE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload,
  };
}

export function addExpense(payload) {
  return {
    type: ADD_EXPENSE,
    payload,
  };
}
export function getCurrencies(payload) {
  return {
    type: GET_CURRENCIES,
    payload,
  };
}
