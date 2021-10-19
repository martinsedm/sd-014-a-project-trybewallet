export const REGEX_EMAIL_VALIDATION =  /\S+@\S+\.\S+/;

export const MIN_PASSWORD_LENGTH = 6; 

export const INPUT_EMAIL = 'INPUT_EMAIL';

export const USER_INITIAL_STATE = {
  email: '',
};

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE_START = 'EDIT_EXPENSE_START';
export const EDIT_EXPENSE_END = 'EDIT_EXPENSE_END';
export const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

