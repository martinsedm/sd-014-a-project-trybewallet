// // Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';

const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: email,
});

export default loginEmail;
