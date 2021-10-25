import { getApiMoney } from '../services/getApiMoney';
// https://stackoverflow.com/questions/57519905/how-delete-item-from-redux-state
// Coloque aqui suas actions
export const LOG_USER = 'LOG_USER';
export const WALLET_USER = 'WALLET_USER';
export const GET_API_MONEY_SUCCESS = 'GET_API_MONEY_SUCCESS';
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const GET_API_MONEY_FAIL = 'GET_API_MONEY_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';

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

export const addNewExpense = (payload) => (
  {
    type: ADD_NEW_EXPENSE,
    payload: {
      ...payload,
    },
  });

export const deleteItem = (payload) => (
  {
    type: DELETE_ITEM,
    payload: {
      ...payload,
    },
  });

export const getApiMoneySuccess = (payload) => (
  {
    type: GET_API_MONEY_SUCCESS,
    payload,
  }
);

export const getApiMoneyFail = () => ({
  type: GET_API_MONEY_FAIL,
});

export function getApiMoneyThunk() {
  return async (dispatch) => {
    try {
      const response = await getApiMoney();
      const jsonResponse = Object.keys(response).filter((moeda) => moeda !== 'USDT');
      dispatch(getApiMoneySuccess(jsonResponse));
    } catch (error) {
      dispatch(getApiMoneyFail());
    }
  };
}
