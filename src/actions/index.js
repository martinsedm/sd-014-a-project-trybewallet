// Coloque aqui suas actions
import requestFetch from '../services/requestAPI';

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

export const walletExpenses = (payload, currencies) => ({
  type: 'ADD_EXPENSE',
  payload,
  currencies,
});

export const walletAddExpenses = (expenses) => async (dispatch) => {
  const callApi = await requestFetch();
  return dispatch(walletExpenses(expenses, callApi));
};
