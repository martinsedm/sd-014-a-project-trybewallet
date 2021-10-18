export const USER_LOGIN = 'USER_LOGIN';

export const saveLogin = (email) => (
  {
  type: USER_LOGIN,
  payload: { email },
  }
);
