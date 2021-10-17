export const SALVAR_EMAIL = 'SALVAR_EMAIL';

const salvarEmail = (emailValue) => ({
  type: SALVAR_EMAIL,
  emailValue,
});

export default salvarEmail;
