export const USER = 'USER';
export const WALLET = 'WALLET';

export const userAction = (email) => ({
  type: USER,
  payload: { email },
});

export const walletAction = (currencies, expenses) => ({
  type: WALLET,
  payload: { currencies, expenses },
});
