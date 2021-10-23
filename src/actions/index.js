// Coloque suas actions
import getCurrencyApi from '../services/currencyAPI';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const actionLoginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const getCurrencyApiSuccess = (payload) => ({
  type: API_SUCCESS,
  payload,
});

export const getCurrencyApiError = (payload) => ({
  type: API_ERROR,
  payload,
});

export const actionAddExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getCurrencyApiThunk = () => async (dispatch) => {
  try {
    const response = await getCurrencyApi();
    const payload = Object.keys(response);
    dispatch(getCurrencyApiSuccess(payload));
  } catch (error) {
    dispatch(getCurrencyApiError(error));
  }
};
