// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const saveStateLogin = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});
