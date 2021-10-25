export const VALID_EMAIL = 'VALID_EMAIL';
export const GET_EXPENSES = 'GET_EXPENSES';

export const saveLogin = (email) => (
  {
    type: VALID_EMAIL,
    email,
  }
);

export const getExpenses = (payload) => (
  {
    type: GET_EXPENSES,
    payload,
  }
);
