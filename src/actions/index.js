// Coloque aqui suas actions
export const GET_EMAIL_USER = 'GET_EMAIL_USER';
export const GET_EXPENSES = 'GET_EXPENSES';

export const getEmailUser = (email) => (
  {
    type: GET_EMAIL_USER,
    payload: { email },
  }
);

export const getExpenses = (payload) => (
  {
    type: GET_EXPENSES,
    payload,
  }
);
