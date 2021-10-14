// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (currentEmail) => ({
  type: SAVE_EMAIL,
  payload: currentEmail,
});
