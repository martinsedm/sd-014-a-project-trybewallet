// Coloque aqui suas actions
export const ATT_EMAIL = 'ATT_EMAIL';
export const UPDATE_WALLET = 'UPDATE_WALLET';

export const attEmail = (email) => ({
  type: ATT_EMAIL,
  payload: {
    email,
  },
});
