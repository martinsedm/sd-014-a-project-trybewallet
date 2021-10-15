import currenciesAPI from '../services/currenciesAPI';
// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const saveEmail = (currentEmail) => ({
  type: SAVE_EMAIL,
  payload: currentEmail,
});

export const getCurrenciesSuccess = (currentSuccess) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: currentSuccess,
});

export const getCurrenciesError = (currentError) => ({
  type: GET_CURRENCIES_ERROR,
  payload: currentError,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const payload = await currenciesAPI();
    dispatch(getCurrenciesSuccess(payload));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
