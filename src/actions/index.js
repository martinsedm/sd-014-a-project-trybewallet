export const LOGIN = 'LOGIN';

export const makeLogin = (email) => ({
  type: LOGIN,
  payload: email,
});
