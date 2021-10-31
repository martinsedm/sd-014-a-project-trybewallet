// Coloque aqui suas actions do usuario.
export const INFOR_USUARIO = 'INFOR_USUARIO';

export const inforUsuarioAction = (email) => ({
  type: INFOR_USUARIO,
  email,
});
