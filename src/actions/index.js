// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const actionLogin = (payload) => (
  {
    type: LOGIN,
    payload,
  }
);

export const WALLET = 'WALLET';

export const actionWallet = (payload) => (
  {
    type: WALLET,
    payload,
  }
);
