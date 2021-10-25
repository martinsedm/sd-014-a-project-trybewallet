// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_WALLET = 'SAVE_WALLET';

export const saveEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: {
    email: userEmail,
  },
});

export const saveExpenses = (expensesAct) => ({
  type: SAVE_WALLET,
  payload: {
    expenses: expensesAct,
  },
});
