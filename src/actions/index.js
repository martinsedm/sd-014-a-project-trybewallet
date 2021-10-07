export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  email,
});
