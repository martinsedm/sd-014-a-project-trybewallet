export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export function setUserEmail(payload) {
  return {
    type: SET_USER_EMAIL,
    payload,
  };
}
