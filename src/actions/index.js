// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: {
    email: userEmail,
  },
});
