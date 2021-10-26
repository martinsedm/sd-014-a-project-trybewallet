// Coloque aqui suas actions
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_TOTAL_VALUE = 'UPDATE_TOTAL_VALUE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const GET_ERROR = 'GET_ERROR';

export const setUserInfoAction = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const addExpenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const removeExpenseAction = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const editExpenseAction = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const updateTotalValueAction = () => ({
  type: UPDATE_TOTAL_VALUE,
});

export const setCurrenciesAction = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});

export const getErrorAction = (payload) => ({
  type: GET_ERROR,
  payload,
});

export const fetchCurrenciesAction = () => async (dispatch) => {
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await (await fetch(URL)).json();
    delete response.USDT;
    dispatch(setCurrenciesAction(Object.keys(response)));
  } catch (error) {
    dispatch(getErrorAction(error));
  }
};
