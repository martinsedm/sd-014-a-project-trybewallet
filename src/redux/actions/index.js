export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_PASSWORD = 'ADD_PASSWORD';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    email,
  };
}

export function addPassword(password) {
  return {
    type: ADD_PASSWORD,
    password,
  };
}

export function requestCurrencies() {
  return {
    type: REQUEST_CURRENCIES,
  };
}

export function getCurrencies(json) {
  return {
    type: GET_CURRENCIES,
    json,
  };
}

export function failedRequest(error) {
  return {
    type: FAILED_REQUEST,
    error,
  };
}

export function fetchCurrencies() {
  return async (dispatch) => {
    await dispatch(requestCurrencies());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await response.json();
      console.log(json);
      dispatch(getCurrencies(json));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
