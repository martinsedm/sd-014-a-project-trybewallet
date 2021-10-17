// // Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const TOTAL_EXPENSIVE = 'TOTAL_EXPENSIVE';

const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: email,
});

export default loginEmail;
