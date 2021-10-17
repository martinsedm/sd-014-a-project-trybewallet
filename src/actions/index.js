export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const makeLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export const requestCurrencies = (currencies) => ({
  type: REQUEST_CURRENCIES,
  payload: currencies,
});

export const fetchCurrencies = () => (
  async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const objects = await response.json();
      const currencies = Object.values(objects);
      const filteredCurrencies = currencies.filter((curr) => curr.codein !== 'BRLT');
      return dispatch(requestCurrencies(filteredCurrencies));
    } catch (error) {
      return null;
    }
  }
);

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});
