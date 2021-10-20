// Coloque aqui suas actions
export const ACTION_SAVE_EMAIL = 'ACTION_EMAIL';
export const ACTION_API_SUCCESS = 'ACTION_API_SUCCESS';
export const ACTION_API_REJECT = 'ACTION_API_REJECT';
export const ACTION_GET_EXPENSES = 'ACTION_GET_EXPENSES';

export const saveEmail = (email) => ({
  type: ACTION_SAVE_EMAIL,
  email,
});

export const actionSucess = (payload) => ({
  type: ACTION_API_SUCCESS,
  payload,
});

export const actionReject = (error) => ({
  type: ACTION_API_REJECT,
  error,
});

export const actionGetExpenses = (expenses, data) => ({
  type: ACTION_GET_EXPENSES,
  expenses,
  data,
});
