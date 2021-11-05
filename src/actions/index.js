// Coloque aqui suas actions
export const ATT_EMAIL = 'ATT_EMAIL';
export const UPDATE_WALLET = 'UPDATE_WALLET';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const attEmail = (email) => ({
  type: ATT_EMAIL,
  payload: {
    email,
  },
});

export const uptdWallet = (expenses) => ({
  type: UPDATE_WALLET,
  payload: {
    expenses,
  },
});

export const deleteExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  payload: {
    expenses,
  },
});
