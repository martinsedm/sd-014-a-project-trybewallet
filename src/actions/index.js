// Coloque aqui suas actions ye

export const USER_REG = 'USER_REG';
export const QUERY_CURRENCY = 'QUERY_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const OVERWRITE_EXPENSES = 'OVERWRITE_EXPENSES';

export const regUser = (payload) => ({
  type: USER_REG,
  payload,
});

export const currQuery = (payload) => ({
  type: QUERY_CURRENCY,
  payload,
});

export const addExpense = (payload) => (
  {
    type: ADD_EXPENSE,
    payload,
  }
);

export const overwriteXpenses = (payload) => (
  {
    type: OVERWRITE_EXPENSES,
    payload,
  }
);
