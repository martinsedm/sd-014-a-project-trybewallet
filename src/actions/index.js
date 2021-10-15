export const USER_LOGIN = 'USER_LOGIN';

export const loginAction = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

// export const walletAction = (email) => ({
//   type:
//   payload: email,
// });
