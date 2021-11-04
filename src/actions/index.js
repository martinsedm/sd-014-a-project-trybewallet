export const USER = 'USER';
export const WALLET = 'WALLET';
export const EXPENSE = 'EXPENSE';
export const DESCRIPTION = 'DESCRIPTION';
export const CURRENCIES = 'CURRENCIES';

export const loginAction = (data) => ({
  type: USER,
  payload: data,
});

export const addExpense = (data) => ({
  type: EXPENSE,
  payload: data,
});

export const addCurrencies = (data) => ({
  type: CURRENCIES,
  payload: data,
});
