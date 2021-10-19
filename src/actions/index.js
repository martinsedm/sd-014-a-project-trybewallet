export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const login = (value) => ({ type: LOGIN, value });
export const addExpense = (value) => ({ type: ADD_EXPENSE, value });
export const updateExpense = (value) => ({ type: UPDATE_EXPENSE, value });
