// Coloque suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const SUBMIT_WALLET = 'SUBIMIT_WALLET';

export const actionLoginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const actionSetExpenses = (payload) => ({
  type: SUBMIT_WALLET,
  payload,
});
