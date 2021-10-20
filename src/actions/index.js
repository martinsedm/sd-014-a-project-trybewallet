export const LOGIN = 'LOGIN';

export const emailSenha = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});
