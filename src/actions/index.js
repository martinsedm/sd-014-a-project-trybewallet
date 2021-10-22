// Coloque aqui suas actions
export const LOGIN_SAVE_ACTION = 'LOGIN_SAVE_ACTION';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const loginSave = (payload) => ({
  type: LOGIN_SAVE_ACTION,
  payload,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});

export const addExpense = (expenses, payload) => ({
  type: ADD_EXPENSES,
  expenses,
  payload,
});

export function fetchCurrencyAPI(expenses) {
  return async (dispatch) => {
    try {
      const response = await (await
      fetch('https://economia.awesomeapi.com.br/json/all')).json();
      dispatch(addExpense(expenses, response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function requestCurrency() {
  return async (dispatch) => {
    const resolve = await (await
    fetch('https://economia.awesomeapi.com.br/json/all')).json();
    const result = Object.keys(resolve)
      .filter((moeda) => moeda !== 'USDT');
    dispatch(addCurrencies(result));
  };
}
