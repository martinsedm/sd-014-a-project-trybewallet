export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_WALLET_DATA = 'SET_WALLET_DATA';

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const setWalletData = (payload) => ({
  type: SET_WALLET_DATA,
  payload,
});
