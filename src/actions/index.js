// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const GET_CURRENCY_SUCKSEX = 'GET_CURRENCY_SUCKSEX';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';

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
    const json = await response.json();
    const payload = Object.entries(json);
    dispatch(getCurrencySuckSex(payload));
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
