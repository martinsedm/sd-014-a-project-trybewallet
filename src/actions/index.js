// Coloque aqui suas actions
import fetchAPI from '../services/awesomeapi';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const CURRENCY_ERROR = 'CURRENCY_ERROR';
export const EXPENSE_CONSTRUCTOR = 'EXPENSE_CONSTRUCTOR';

export const saveEmail = (currentEmail) => ({
  type: SAVE_EMAIL,
  payload: currentEmail,
});

export const currencySuccess = (payload) => ({
  type: CURRENCY_SUCCESS,
  payload,
});

export const currencyError = (payload) => ({
  type: CURRENCY_ERROR,
  payload,
});

export const expenseConstructor = (currentState) => ({
  type: EXPENSE_CONSTRUCTOR,
  payload: currentState,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await fetchAPI();
    dispatch(currencySuccess(response));
  } catch (error) {
    dispatch(currencyError(error));
  }
};
