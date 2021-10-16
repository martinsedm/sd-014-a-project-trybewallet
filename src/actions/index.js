// Coloque aqui suas actions
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_WALLET = 'SUBMIT_WALLET';

export const actionSubmitLogin = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionSetWallet = (payload) => ({
  type: SUBMIT_WALLET,
  payload,
});
