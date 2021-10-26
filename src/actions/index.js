export const SAVE_EMAIL = 'SAVE_EMAIL';
export const EXPENSE_CONSTRUCTOR = 'EXPENSE_CONSTRUCTOR';

export const saveEmail = (targetEmail) => ({
  type: SAVE_EMAIL,
  payload: targetEmail,
});

export const expenseConstructor = (currentState) => ({
  type: EXPENSE_CONSTRUCTOR,
  payload: currentState,
});
