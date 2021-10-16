// Coloque aqui suas actions
export const LOG_USER = 'LOG_USER';
export const WALLET_USER = 'WALLET_USER';

export const logUser = (payload) => (
  {
    type: LOG_USER, payload,
  }
);

export const walletUser = (payload) => (
  {
    type: WALLET_USER, payload,
  }
);
