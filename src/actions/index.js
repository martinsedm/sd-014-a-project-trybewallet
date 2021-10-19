// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_CUR = 'REQUEST_CUR';
export const GET_CUR = 'GET_CUR';
export const FAILED_REQ = 'FAILED_REQ';
export const EXCHANGE_RATES = 'EXCHANGE_RATES';
export const REQUEST_COTA = 'REQUEST_COTA';
export const DELETE_BTN = 'DELETE_BTN';

const addEmail = (email) => ({ type: ADD_EMAIL, email });
export default addEmail;

const requestCurrency = () => ({ type: REQUEST_CUR });

const requestCota = () => ({ type: REQUEST_COTA });

const getCurrency = (moedas) => ({ type: GET_CUR, moedas });

const getAllCurrency = (allCurrencies) => ({ type: EXCHANGE_RATES, allCurrencies });

export function fetchCur() {
  return async (dispatch) => {
    dispatch(requestCurrency());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const dataArray = Object.keys(data);
    dataArray.splice(dataArray.indexOf('USDT'), 1);
    dispatch(getCurrency(dataArray));
  };
}

export function fetchCota(
  { id, value, description, currency, method, tag },
) {
  return async (dispatch) => {
    dispatch(requestCota());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getAllCurrency({
      id, value, description, currency, method, tag, exchangeRates: data }));
  };
}

export const deleteBtn = (id) => ({ type: DELETE_BTN, id });
