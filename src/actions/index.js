// Coloque aqui suas actions
import getCurrenciesFromApi from '../services/currenciesAPI';

const maximunCharacter = 4;

export const SET_INFO = 'SET_INFO';
export const SET_CURRENCIES_SUCCESS = 'SET_CURRENCIES_SUCCESS';
export const SET_CURRENCIES_FAIL = 'SET_CURRENCIES_FAIL';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setInfo = (email) => ({
  type: SET_INFO, email,
});

export const getApiSuccess = (payload) => ({
  type: SET_CURRENCIES_SUCCESS, payload,
});

export const getApiError = (payload) => ({
  type: SET_CURRENCIES_FAIL, payload,
});

export const getApiCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await getCurrenciesFromApi();
    const currencies = Object.keys(response)
      .filter((currencie) => currencie.length < maximunCharacter);
    dispatch(getApiSuccess(currencies));
  } catch (error) {
    dispatch(getApiError(error));
  }
};

export const setExpenses = (expenses) => ({
  type: SET_EXPENSES, expenses,
});
