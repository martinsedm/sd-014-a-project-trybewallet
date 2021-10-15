// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

const saveUser = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export default saveUser;
