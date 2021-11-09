export const SALVAR_LOGIN = 'SALVAR_LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ERROR_API = 'ERROR_API';
export const AMOUNT_EXPENSES = 'AMOUNT_EXPENSES';
export const COIN = 'COIN';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const API_CURRENCY = 'https://economia.awesomeapi.com.br/json/all';

export const salvarLogin = (email) => ({
  type: SALVAR_LOGIN,
  payload: { email },
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: { expenses },
});

export const addCurrency = (currencies) => ({
  type: ADD_CURRENCY,
  payload: { currencies },
});

export const errorApi = (error) => ({
  type: ERROR_API,
  payload: { error },
});

export const amountExpenses = (amount) => ({
  type: AMOUNT_EXPENSES,
  payload: { amount },
});

export const coinAction = (coins) => ({
  type: COIN,
  payload: { coins },
});

export const removeDespesas = (remove) => ({
  type: REMOVE_EXPENSE,
  payload: { remove },
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

export const buscaMoeda = () => async (dispatch) => {
  try {
    const apiMoeda = await fetch(API_CURRENCY);
    const respostaMoeda = await apiMoeda.json();
    return dispatch(coinAction(respostaMoeda));
  } catch (error) {
    return dispatch(errorApi);
  }
};
