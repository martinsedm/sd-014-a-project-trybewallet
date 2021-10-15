// Coloque aqui suas actions
export const USER_INPUT = 'USER_INPUT';

export const loginAction = (email) => ({
  type: USER_INPUT,
  email,
});
