export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const TOTAL_EXPENSES = 'TOTAL_EXPENSES';

export const saveEmailInState = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const replaceWithActionName = (payload) => ({
  type: TOTAL_EXPENSES,
  payload,
});
