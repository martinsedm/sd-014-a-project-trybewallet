import types from '../types';

export const sendLoginInfo = (payload) => ({
  type: types.LOGIN_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: types.WALLET_INFO,
  payload,
});

export const walletAPISuccess = (payload) => ({
  type: types.GET_WALLET_API_SUCCESS,
  payload,
});

export const loadingAPI = () => ({
  type: types.LOADING_API,
});

export const ERROR = (payload) => ({
  type: types.GET_WALLET_API_FAILED,
  payload,
});
