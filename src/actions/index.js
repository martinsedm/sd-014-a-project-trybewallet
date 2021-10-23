export const LOGIN = 'LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_COINS = 'ADD_COINS';
export const ERROR_API = 'ERROR_API';
export const TOT_EXPENSES = 'TOT_EXPENSES';

export const saveStateLogin = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export const totExpenses = (tot) => ({
  type: TOT_EXPENSES,
  payload: {
    tot,
  },
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
  },
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: {
    currencies,
  },
});

export const errorApi = (error) => ({
  type: ERROR_API,
  payload: {
    error,
  },
});

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export const coinsAction = (coins) => ({
  type: ADD_COINS,
  payload: {
    coins,
  },
});

export function fetchApi() {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      const arrayData = Object.keys(data);
      const arrayCurrencies = arrayData.filter((curren) => curren !== 'USDT');
      return dispatch(addCurrencies(arrayCurrencies));
    } catch (error) {
      return dispatch(errorApi);
    }
  };
}

export const newExpense = () => async (dispatch) => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await request.json();
    return dispatch(coinsAction(currencies));
  } catch (error) {
    return dispatch(errorApi);
  }
};
