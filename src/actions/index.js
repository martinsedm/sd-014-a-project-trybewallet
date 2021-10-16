// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const GET_CURRENCY_SUCKSEX = 'GET_CURRENCY_SUCKSEX';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const CHANGE_EDIT_STATE = 'CHANGE_EDIT_STATE';
export const SET_EDITED_EXPENSE = 'SET_EDITED_EXPENSE';

export function USER_EMAIL(payload) {
  return {
    type: EMAIL,
    payload,
  };
}

export function getCurrencySuckSex(payload) {
  return {
    type: GET_CURRENCY_SUCKSEX,
    payload,
  };
}

export function getCurrencyError(payload) {
  return {
    type: GET_CURRENCY_ERROR,
    payload,
  };
}

export const getCurrencyThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    dispatch(getCurrencySuckSex(await response.json()));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

export function addExpense(payload) {
  return {
    type: ADD_EXPENSE,
    payload,
  };
}

export function removeExpense(payload) {
  return {
    type: REMOVE_EXPENSE,
    payload,
  };
}

export function changeEditState(payload) {
  return {
    type: CHANGE_EDIT_STATE,
    payload,
  };
}

export function setEditedExpense(payload) {
  return {
    type: SET_EDITED_EXPENSE,
    payload,
  };
}
