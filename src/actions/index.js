export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINISH_EDIT = 'FINISH_EDIT';

export const login = (value) => ({ type: LOGIN, value });
export const addExpense = (value) => ({ type: ADD_EXPENSE, value });
export const removeExpense = (value) => ({ type: REMOVE_EXPENSE, value });
export const editExpense = (value) => ({ type: EDIT_EXPENSE, value });
export const finishEdit = (value) => ({ type: FINISH_EDIT, value });
