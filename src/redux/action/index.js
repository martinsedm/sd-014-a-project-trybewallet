export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionWallet = (payload) => ({
  type: WALLET,
  payload,
});
