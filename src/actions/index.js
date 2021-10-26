export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const actionRegisterUser = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const actionAddExpenses = (exchangeRates, state) => ({
  type: ADD_EXPENSES,
  payload: {
    ...state,
    exchangeRates,
  },
});

export const actionAddCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

// Referência para ajudar a entender: https://github.com/tryber/sd-014-a-project-trybewallet/pull/35/commits/86d6c9e8959aa1ecb8f3366a3e6074f87c0547e6#

export function fetchCurrencyAPI() {
  return async (dispatch) => {
    const currencyFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyJSON = await currencyFetch.json();
    const currencyKeys = Object.keys(currencyJSON);
    const currencyList = currencyKeys.filter((currency) => currency !== 'USDT');
    dispatch(actionAddCurrencies(currencyList));
  };
}

export function fetchExpense(state) {
  return async (dispatch) => {
    const currencyFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyJSON = await currencyFetch.json();
    dispatch(actionAddExpenses(currencyJSON, state));
  };
}

export function converted(expenses) {
  if (expenses.length === 0) {
    return 0;
  }
  const total = expenses.reduce((acc, curr) => {
    const rates = curr.exchangeRates[curr.currency];
    return acc + Number(curr.value) * rates.ask;
  }, 0);
  return Math.round(total * 100) / 100;
}
