// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const EXPENSE_ADD = 'EXPENSE_ADD';

export const saveEmail = (targetEmail) => ({
  type: SAVE_EMAIL,
  payload: targetEmail,
});

export const expenseAdd = (currentState) => ({
  type: EXPENSE_ADD,
  payload: currentState,
});
