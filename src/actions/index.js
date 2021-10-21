export const SALVAR_LOGIN = 'SALVAR_LOGIN';

export const salvarLogin = (email) => ({
  type: SALVAR_LOGIN,
  payload: {
    email,
  },
});
