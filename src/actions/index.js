export const SALVAR_LOGIN = 'SALVAR_LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ERROR_API = 'ERROR_API';

const API_CURRENCY = 'https://economia.awesomeapi.com.br/json/all';

export const salvarLogin = (email) => ({
  type: SALVAR_LOGIN,
  payload: {
    email,
  },
});

export const addCurrency = (currencies) => ({
  type: ADD_CURRENCY,
  payload: {
    currencies,
  },
});

export const errorApi = (error) => ({
  type: ERROR_API,
  pauload: {
    error,
  },
});

export function buscaApi() {
  return async (dispatch) => {
    try {
      const response = await fetch(API_CURRENCY);
      const returnApi = await response.json();
      const arrayKey = Object.keys(returnApi);
      const arrayCurrencies = arrayKey.filter((curr) => curr !== 'USDT');
      return dispatch(addCurrency(arrayCurrencies));
    } catch (error) {
      return dispatch(errorApi);
    }
  };
}
