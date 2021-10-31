// Coloque aqui suas actions do usuario.
export const INFOR_USUARIO = 'INFOR_USUARIO';

export const inforUsuario = (email) => ({
  type: INFOR_USUARIO,
  email,
});
