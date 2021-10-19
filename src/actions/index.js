// Coloque aqui suas actions
export const SET_INFO = 'SET_INFO';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setInfo = (email) => ({
  type: SET_INFO, email,
});
