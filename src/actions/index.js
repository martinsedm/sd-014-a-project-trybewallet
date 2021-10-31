import { fetchCurrencies } from '../utils/currencyAPI';

export const FETCH_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function emailAction(newEmail) {
  return {
    type: 'NEW_EMAIL',
    newEmail,
  };
}

export const fetchCurrenciesSuccess = (payload) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload,
});

export const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

export const expensesAction = (payload) => ({
  type: NEW_EXPENSE,
  payload,
});

export const deleteExpenseAction = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

// referencia código live lecture 15.4
export const fetchCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await fetchCurrencies();
    const payload = Object.keys(response);
    dispatch(fetchCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(fetchCurrenciesError(error));
  }
};
