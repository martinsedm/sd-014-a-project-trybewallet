// Coloque aqui suas actions

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_WALLET_CURRENCIES = 'SET_WALLET_CURRENCIES';
export const SET_WALLET_EXPENSES = 'SET_WALLET_EXPENSES';

export const userEmail = (email) => ({
  type: SET_USER_EMAIL,
  email,
});
