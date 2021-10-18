// Coloque aqui suas actions
export const GET_USER_LOGIN = 'GET_USER_LOGIN';
export const GET_WALLET = 'GET_WALLET';

export const getUserLogin = (payload) => ({
  type: GET_USER_LOGIN,
  payload,
});

export const getWallet = (data) => ({
  type: GET_WALLET,
  data,
});
