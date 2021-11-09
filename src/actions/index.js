// Coloque aqui suas actions

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const loginInfo = (value) => (
  {
    type: LOGIN,
    value,
  });

export const addExpense = (value) => (
  { type: ADD_EXPENSE,
    value,
  });

export const removeExpense = (value) => ({
  type: DELETE_EXPENSE,
  value,
});
