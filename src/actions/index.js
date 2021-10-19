// Coloque aqui suas actions
export const ACTION_SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => ({
  type: ACTION_SAVE_EMAIL,
  email,
});
