export const USER = 'USER';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const GET_CURRENCY = 'GET_CURRENCY';
export const COINS = 'COINS';

export const userAction = (email) => ({
  type: USER,
  payload: {
    email,
  },
});

export const currenciesAction = (currencies) => ({
  type: CURRENCIES,
  payload: {
    currencies,
  },
});

export const expensesAction = (expenses) => ({
  type: EXPENSES,
  payload: {
    expenses,
  },
});

export const exchangeRatesAction = (coins) => ({
  type: COINS,
  payload: {
    coins,
  },
});

export function fetchAPI() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    dispatch(currenciesAction(Object.keys(json)));
  };
}

export function fetchExchangeRates() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    delete json.USDT;
    dispatch(exchangeRatesAction(json));
  };
}
