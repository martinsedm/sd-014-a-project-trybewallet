import { getCurrencyAPI } from '../services/fetchAPI';
// Coloque aqui suas actions

export const actionTypes = {
  SET_EMAIL_USER: 'SET_EMAIL_USER',
  DATA_CURRENCY: 'DATA_CURRENCY',
  ADD_ITEM: 'ADD_ITEM',
};

export const setEmailUser = (email) => ({
  type: actionTypes.SET_EMAIL_USER,
  payload: email,
});

export const dataCurrency = (data) => ({
  type: actionTypes.DATA_CURRENCY,
  payload: data,
});

export const addItem = (expense) => ({
  type: actionTypes.ADD_ITEM,
  payload: expense,
});

export function fetchAPI() {
  return async (dispatch) => {
    const data = await getCurrencyAPI();
    dispatch(dataCurrency(data));
  };
}
