import types from '../types';

const {
  LOADING_API,
  GET_WALLET_API_SUCCESS,
  GET_WALLET_API_FAILED,
  GET_EXPENSES,
  LOGIN_INFO,
  WALLET_INFO,
  DELETE_EXPENSE } = types;

export const sendLoginInfo = (payload) => ({
  type: LOGIN_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});

export const walletAPISuccess = (payload) => ({
  type: GET_WALLET_API_SUCCESS,
  payload,
});

export const loadingAPI = () => ({
  type: LOADING_API,
});

export const ERROR = (payload) => ({
  type: GET_WALLET_API_FAILED,
  payload,
});

export const sendExpensesInfo = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
