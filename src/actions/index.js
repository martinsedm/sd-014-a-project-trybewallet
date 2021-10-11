export const LOGIN = 'LOGIN';

export const loginUser = (email) => ({
  type: LOGIN,
  email,
});
