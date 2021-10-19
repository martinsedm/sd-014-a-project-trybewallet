export const SET_EMAIL = 'SET_EMAIL';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export function setEmail(payload) {
  return {
    type: SET_EMAIL,
    payload,
  };
}
