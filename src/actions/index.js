// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUEST_CUR = 'REQUEST_CUR';
export const GET_CUR = 'GET_CUR';
export const FAILED_REQ = 'FAILED_REQ';

const addEmail = (email) => ({ type: ADD_EMAIL, email });
export default addEmail;

const requestCurrency = () => ({ type: REQUEST_CUR });

const getCurrency = (moedas) => ({ type: GET_CUR, moedas });

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
