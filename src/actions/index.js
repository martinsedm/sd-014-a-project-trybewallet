// Coloque aqui suas actions
export const actionUser = (payload) => ({
  type: 'EMAIL_USER',
  payload,
});

export const actionWallet = (payload) => ({
  type: 'WALLET_USER',
  payload,
});

export const getCoin = (json) => ({
  type: 'GET_COIN',
  payload: json.code,
});

export const requestAPI = () => ({
  type: 'REQUEST_API',

});
