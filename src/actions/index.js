// import { getApiMoney } from '../services/getApiMoney';

// Coloque aqui suas actions
export const LOG_USER = 'LOG_USER';
export const WALLET_USER = 'WALLET_USER';
export const GET_API_MONEY_SUCCESS = 'GET_API_MONEY_SUCCESS';
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';

export const logUser = (user) => (
  {
    type: LOG_USER, payload: user,
  }
);

export const walletUser = (payload) => (
  {
    type: WALLET_USER, payload,
  }
);

export const getApiMoneySuccess = (currencies) => (
  {
    type: GET_API_MONEY_SUCCESS,
    payload: {
      currencies,
    },
  }
);

export const addNewExpense = (payload) => (
  {
    type: ADD_NEW_EXPENSE,
    payload: {
      ...payload,
    },
  });

export function getApiMoneyThunk() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const jsonResponse = await response.json();
    delete jsonResponse.USDT;
    dispatch(getApiMoneySuccess(Object.keys(jsonResponse)));
  };
}
