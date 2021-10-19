// Coloque aqui suas actions.
export const USER_LOGGED = 'USER_LOGGED';
export const userLogged = (email) => ({
  type: USER_LOGGED,
  payload: email,
});
