export const LOGIN_INFO = 'LOGIN_INFO';
export const WALLET_INFO = 'WALLET_INFO';

export const sendLoginInfo = (payload) => ({
  type: LOGIN_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});
