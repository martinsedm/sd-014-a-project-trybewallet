export const SET_EMAIL = 'SET_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload,
  };
}
