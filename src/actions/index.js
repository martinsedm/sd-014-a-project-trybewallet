// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADDCURRENCIES';

export const setUserEmail = (payload) => ({
  type: ADD_USER,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addCurrencies = (payload) => ({ // action assincrono
  type: ADD_CURRENCIES,
  payload,
});
